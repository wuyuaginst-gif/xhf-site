import { z } from "zod";
import { protectedProcedure, router } from "../_core/trpc";
import { createFile, deleteFile, getUserFiles } from "../db";
import { storagePut } from "../storage";
import { TRPCError } from "@trpc/server";

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

export const filesRouter = router({
  list: protectedProcedure.query(async ({ ctx }) => {
    return await getUserFiles(ctx.user.id);
  }),

  upload: protectedProcedure
    .input(
      z.object({
        fileName: z.string().min(1).max(255),
        fileContent: z.string(), // base64 encoded file content
        mimeType: z.string().optional(),
        description: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        // Decode base64 content
        const buffer = Buffer.from(input.fileContent, "base64");

        // Check file size
        if (buffer.length > MAX_FILE_SIZE) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: `File size exceeds ${MAX_FILE_SIZE / 1024 / 1024}MB limit`,
          });
        }

        // Generate unique file key
        const timestamp = Date.now();
        const randomSuffix = Math.random().toString(36).substring(2, 8);
        const fileKey = `files/${ctx.user.id}/${timestamp}-${randomSuffix}-${input.fileName}`;

        // Upload to S3
        const { url } = await storagePut(fileKey, buffer, input.mimeType || "application/octet-stream");

        // Save file metadata to database
        const file = await createFile({
          userId: ctx.user.id,
          fileName: input.fileName,
          fileKey,
          fileUrl: url,
          fileSize: buffer.length,
          mimeType: input.mimeType,
          description: input.description,
        });

        return file;
      } catch (error) {
        console.error("[Files] Upload failed:", error);
        if (error instanceof TRPCError) throw error;
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to upload file",
        });
      }
    }),

  delete: protectedProcedure
    .input(z.object({ fileId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      try {
        const success = await deleteFile(input.fileId, ctx.user.id);
        if (!success) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "File not found or you do not have permission to delete it",
          });
        }
        return { success: true };
      } catch (error) {
        console.error("[Files] Delete failed:", error);
        if (error instanceof TRPCError) throw error;
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to delete file",
        });
      }
    }),
});
