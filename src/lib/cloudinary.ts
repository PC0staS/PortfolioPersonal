export const CLOUDINARY_CLOUD_NAME = 'pc0stas'

export function cloudinaryUrl(publicId: string, transforms = '') {
  if (!publicId) return ''
  const transformPath = transforms ? `${transforms}/` : ''
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformPath}${publicId}.jpg`
}

export const PROFILE_IMAGE_ID = 'portfolio-me'

// Imagen principal del portfolio: WebP optimizado y recorte cuadrado centrado en el rostro.
export function profileImageUrl(size: number) {
  return cloudinaryUrl(
    PROFILE_IMAGE_ID,
    `f_webp,q_auto,c_fill,g_face,w_${size},h_${size}`,
  )
}
