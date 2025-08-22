"use client";

import { useEdgeStore } from "@/lib/edgestore";
import { cn } from "@/lib/utils";
import { ImageIcon, Loader2, Upload } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

interface FileUploaderProps {
  value: string;
  onChange: (url: string) => void;
  onUploadStateChange?: (isUploading: boolean) => void;
  id?: string;
}

export function FileUploader({
  value,
  onChange,
  onUploadStateChange,
  id,
}: FileUploaderProps) {
  const [, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileName, setFileName] = useState<string>("");
  const { edgestore } = useEdgeStore();

  useEffect(() => {
    if (onUploadStateChange) {
      onUploadStateChange(uploading);
    }
  }, [uploading, onUploadStateChange]);

  // Extract filename from URL if value exists
  useEffect(() => {
    if (value) {
      try {
        const url = new URL(value);
        const pathSegments = url.pathname.split("/");
        const lastSegment = pathSegments[pathSegments.length - 1];
        const cleanName = lastSegment.split("?")[0];
        setFileName(cleanName || "Existing file");
      } catch {
        setFileName("Existing file");
      }
    } else {
      setFileName("");
    }
  }, [value]);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) return;

      const selectedFile = acceptedFiles[0];
      setFile(selectedFile);
      setFileName(selectedFile.name);
      setUploading(true);
      setUploadProgress(0);

      try {
        const res = await edgestore.publicFiles.upload({
          file: selectedFile,
          options: {
            ...(value && { replaceTargetUrl: value }),
          },
          onProgressChange: (progress) => {
            setUploadProgress(progress);
          },
        });

        onChange(res.url);
        setUploading(false);
      } catch (error) {
        console.error("Error uploading file:", error);
        setUploading(false);
      }
    },
    [edgestore, onChange, value]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "image/*": [],
    },
  });

  return (
    <div className="relative w-full">
      <div
        {...getRootProps()}
        className={cn(
          "flex flex-col items-center justify-center gap-2 rounded-md border border-dashed border-input bg-background px-3 py-6 text-sm ring-offset-background transition-colors cursor-pointer",
          isDragActive ? "border-primary bg-primary/10" : "",
          uploading && "pointer-events-none opacity-50"
        )}
      >
        <input {...getInputProps()} id={id ?? "File-Upload"} />

        {/* Preview if image exists */}
        {value ? (
          <div className="flex flex-col items-center gap-2">
            <div className="relative max-h-40 w-auto">
              <Image
                src={value}
                alt="Uploaded"
                width={160} // set a fixed size to avoid layout shift
                height={160}
                className="rounded-md object-contain shadow max-h-40 w-auto"
              />
            </div>
            <span className="text-xs text-muted-foreground truncate">
              {fileName}
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-center text-muted-foreground gap-1">
            <ImageIcon className="h-8 w-8" />
            <p className="text-xs">
              {isDragActive ? "Drop your image here" : "Drag & drop or click"}
            </p>
          </div>
        )}

        {/* Upload/replace button */}
        <div
          className={cn(
            "mt-2 flex items-center gap-1 rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary hover:bg-primary/20"
          )}
        >
          {uploading ? (
            <div className="flex items-center gap-1">
              <Loader2 className="h-3 w-3 animate-spin" />
              <span>{Math.round(uploadProgress)}%</span>
            </div>
          ) : value ? (
            <>
              <Upload className="h-3 w-3" />
              <span>Replace</span>
            </>
          ) : (
            <>
              <Upload className="h-3 w-3" />
              <span>Choose Image</span>
            </>
          )}
        </div>
      </div>

      {uploading && (
        <div className="absolute left-0 bottom-0 h-[3px] w-full bg-gray-200">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${uploadProgress}%` }}
          />
        </div>
      )}
    </div>
  );
}
