"use client";
import { CldImage } from "next-cloudinary";

type Props = {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

export default function ProyectoHeroImage({
  src,
  alt,
  width = 800,
  height = 400,
  className,
}: Props) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  // Fallback visual si no hay imagen de Cloudinary
  if (!src || !cloudName) {
    return (
      <div
        className={`rounded-xl mb-6 w-full h-[400px] bg-gradient-to-br from-gray-100 to-gray-200 ${
          className ?? ""
        }`}
        aria-label="Sin imagen"
      />
    );
  }
  return (
    <CldImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`rounded-xl object-cover mb-6 w-full h-[400px] ${
        className ?? ""
      }`}
      style={{ viewTransitionName: `proyecto-hero-${src}` }}
    />
  );
}
