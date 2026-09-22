"use client";

import React, { useState } from "react";
import Image from "next/image";
import { getCountryMetadata } from "@/lib/data";

export default function CountryLogo({
  country,
  size = "md",
  showCuisineBadge = true,
  className = "",
}) {
  const [imageError, setImageError] = useState(false);
  const meta = getCountryMetadata(country);

  if (!meta) {
    return <span className="text-2xl">🌍</span>;
  }

  const dimensions = {
    sm: { width: 28, height: 20, badgeSize: "text-sm", container: "w-7 h-5" },
    md: { width: 44, height: 32, badgeSize: "text-base", container: "w-11 h-8" },
    lg: { width: 64, height: 46, badgeSize: "text-xl", container: "w-16 h-11" },
  }[size] || { width: 44, height: 32, badgeSize: "text-base", container: "w-11 h-8" };

  return (
    <div className={`relative inline-flex items-center gap-2 shrink-0 ${className}`}>
      {/* Flag Logo with Image or Fallback */}
      <div
        className={`relative ${dimensions.container} overflow-hidden rounded-md border border-zinc-700/80 shadow-xs bg-zinc-900 flex items-center justify-center`}
      >
        {!imageError && meta.flagUrl ? (
          <Image
            src={meta.flagUrl}
            alt={`${meta.name} Flag`}
            fill
            sizes="80px"
            className="object-cover"
            onError={() => setImageError(true)}
            unoptimized
          />
        ) : (
          <span className="text-xl leading-none select-none">{meta.flagEmoji}</span>
        )}
      </div>

      {/* Cuisine Signature Emblem Badge */}
      {showCuisineBadge && meta.cuisineEmoji && (
        <span
          className={`leading-none filter drop-shadow-xs select-none ${dimensions.badgeSize}`}
          title={`${meta.name} Cuisine: ${meta.tag}`}
        >
          {meta.cuisineEmoji}
        </span>
      )}
    </div>
  );
}
