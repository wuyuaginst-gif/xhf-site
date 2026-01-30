import { useState, useRef } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Upload, Trash2, Download, FileIcon } from "lucide-react";

export default function FileManager() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { data: files = [], refetch } = trpc.files.list.useQuery();
  const uploadMutation = trpc.files.upload.useMutation();
  const deleteMutation = trpc.files.delete.useMutation();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 50 * 1024 * 1024) {
        toast.error("File size exceeds 50MB limit");
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error("Please select a file");
      return;
    }

    setIsUploading(true);
    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const content = e.target?.result as string;
        const base64 = content.split(",")[1] || content;

        await uploadMutation.mutateAsync({
          fileName: selectedFile.name,
          fileContent: base64,
          mimeType: selectedFile.type,
          description: description || undefined,
        });

        toast.success("File uploaded successfully");
        setSelectedFile(null);
        setDescription("");
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        refetch();
      };
      reader.readAsDataURL(selectedFile);
    } catch (error) {
      toast.error("Failed to upload file");
      console.error(error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (fileId: number) => {
    try {
      await deleteMutation.mutateAsync({ fileId });
      toast.success("File deleted successfully");
      refetch();
    } catch (error) {
      toast.error("Failed to delete file");
      console.error(error);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-12">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold mb-2">文件管理</h1>
        <p className="text-muted-foreground mb-8">上传、管理和下载您的文件</p>

        {/* Upload Section */}
        <Card className="p-6 mb-8 border-border">
          <h2 className="text-2xl font-semibold mb-6">上传文件</h2>

          <div className="space-y-4">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-cyan-500 transition-colors cursor-pointer"
              onClick={() => fileInputRef.current?.click()}>
              <Upload className="mx-auto mb-3 text-cyan-500" size={32} />
              <p className="font-medium mb-1">
                {selectedFile ? selectedFile.name : "点击选择文件或拖拽上传"}
              </p>
              <p className="text-sm text-muted-foreground">
                最大文件大小: 50MB
              </p>
              <input
                ref={fileInputRef}
                type="file"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>

            <Textarea
              placeholder="文件描述（可选）"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-24"
            />

            <Button
              onClick={handleUpload}
              disabled={!selectedFile || isUploading}
              className="w-full bg-cyan-500 hover:bg-cyan-600"
            >
              {isUploading ? "上传中..." : "上传文件"}
            </Button>
          </div>
        </Card>

        {/* Files List Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">我的文件</h2>

          {files.length === 0 ? (
            <Card className="p-12 text-center border-border">
              <FileIcon className="mx-auto mb-4 text-muted-foreground" size={48} />
              <p className="text-muted-foreground">还没有上传任何文件</p>
            </Card>
          ) : (
            <div className="space-y-3">
              {files.map((file) => (
                <Card
                  key={file.id}
                  className="p-4 border-border hover:bg-slate-900/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <FileIcon size={20} className="text-cyan-500 flex-shrink-0" />
                        <h3 className="font-semibold truncate">{file.fileName}</h3>
                      </div>
                      {file.description && (
                        <p className="text-sm text-muted-foreground mb-2">
                          {file.description}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                        <span>大小: {formatFileSize(file.fileSize)}</span>
                        <span>上传时间: {formatDate(file.createdAt)}</span>
                      </div>
                    </div>

                    <div className="flex gap-2 flex-shrink-0">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-border hover:bg-slate-800"
                      >
                        <a href={file.fileUrl} download={file.fileName}>
                          <Download size={16} className="mr-1" />
                          下载
                        </a>
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(file.id)}
                        disabled={deleteMutation.isPending}
                        className="bg-red-900 hover:bg-red-800"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
