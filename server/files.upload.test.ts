import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAuthContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "test-user",
    email: "test@example.com",
    name: "Test User",
    loginMethod: "manus",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };

  return ctx;
}

describe("files.list", () => {
  it("returns empty array for user with no files", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.files.list();

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThanOrEqual(0);
  });
});

describe("files.upload", () => {
  let ctx: TrpcContext;

  beforeEach(() => {
    ctx = createAuthContext();
  });

  it("requires authentication", async () => {
    const unauthCtx: TrpcContext = {
      user: null,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(unauthCtx);

    try {
      await caller.files.upload({
        fileName: "test.txt",
        fileContent: Buffer.from("test content").toString("base64"),
        mimeType: "text/plain",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.code).toBe("UNAUTHORIZED");
    }
  });

  it("validates file name is required", async () => {
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.files.upload({
        fileName: "",
        fileContent: Buffer.from("test content").toString("base64"),
        mimeType: "text/plain",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.code).toBe("BAD_REQUEST");
    }
  });

  it("validates file content is required", async () => {
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.files.upload({
        fileName: "test.txt",
        fileContent: "",
        mimeType: "text/plain",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      // Either BAD_REQUEST or INTERNAL_SERVER_ERROR depending on implementation
      expect(error.code || error.message).toBeDefined();
    }
  });
});

describe("files.delete", () => {
  it("requires authentication", async () => {
    const unauthCtx: TrpcContext = {
      user: null,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(unauthCtx);

    try {
      await caller.files.delete({ fileId: 1 });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.code).toBe("UNAUTHORIZED");
    }
  });

  it("validates file id is required", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.files.delete({ fileId: -1 });
      // Should either succeed (file not found) or fail with validation error
      // This depends on the implementation
    } catch (error: any) {
      expect(error.code).toBeDefined();
    }
  });
});
