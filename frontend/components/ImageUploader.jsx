"use client";

import { Camera, ImageIcon, Upload, X } from "lucide-react";
import React, { useCallback, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "./ui/button";
import Image from "next/image";
import { RingLoader } from "react-spinners";

function ImageUploader({ onImageSelect, loading }) {
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (!file) return;

      const reader = new FileReader();

      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
      onImageSelect(file);
    },
    [onImageSelect],
  );
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp"],
    },
    maxFiles: 1,
    maxSize: 10485760, // 10MB
    noClick: true,
    noKeyboard: true,
  });

  const clearImage = () => {
    setPreview(null);
    onImageSelect(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Preview Mode
  if (preview) {
    return (
      <div className="relative w-full aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-xl">
        <Image
          src={preview}
          alt="Pantry preview"
          fill
          className="object-cover"
        />

        {!loading && (
          <button
            onClick={clearImage}
            className="absolute top-4 right-4 bg-zinc-950/80 hover:bg-zinc-900 p-2 rounded-full border border-zinc-700 shadow-lg text-white transition-all hover:scale-110"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        )}
        {loading && (
          <div className="absolute inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center">
            <RingLoader color="#c084fc" />
          </div>
        )}
      </div>
    );
  }

  const handleFileInputChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      onDrop([file]);
    }
  };

  return (
    <>
      <div
        {...getRootProps()}
        className={`relative w-full aspect-square border-2 border-dashed rounded-2xl transition-all cursor-pointer ${
          isDragActive
            ? "border-purple-500 bg-purple-950/40 scale-[1.02] shadow-[0_0_25px_rgba(168,85,247,0.3)]"
            : "border-zinc-800 bg-zinc-900/60 hover:border-purple-500/60 hover:bg-purple-950/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
        }`}
      >
        <input {...getInputProps()} />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
          {/* Icon */}
          <div
            className={`p-4 rounded-full transition-all ${
              isDragActive
                ? "bg-purple-600 scale-110 shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                : "bg-purple-950/60 border border-purple-800/50 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
            }`}
          >
            {isDragActive ? (
              <ImageIcon className="w-8 h-8 text-white" />
            ) : (
              <Camera className="w-8 h-8 text-purple-400" />
            )}
          </div>

          {/* Text */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              {isDragActive ? "Drop your image here" : "Scan Your Pantry"}
            </h3>
            <p className="text-zinc-400 text-sm max-w-sm">
              {isDragActive
                ? "Release to upload"
                : "Take a photo or drag & drop an image of your fridge/pantry"}
            </p>
          </div>
          {!isDragActive && (
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
                variant="primary"
                className="gap-2"
              >
                <Camera className="w-4 h-4" />
                Take Photo
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation();
                  open();
                }}
                className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white gap-2"
              >
                <Upload className="w-4 h-4" />
                Browse Files
              </Button>
            </div>
          )}

          {/* Helper text */}
          <p className="text-xs text-zinc-500">
            Supports JPG, PNG, WebP • Max 10MB
          </p>
        </div>
      </div>

      {/* Hidden file input with capture attribute for mobile */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image"
        capture="environment"
        onChange={handleFileInputChange}
        className="hidden"
      />
    </>
  );
}

export default ImageUploader;
