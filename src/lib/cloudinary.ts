export const CLOUDINARY_CLOUD_NAME = 'pc0stas'

export function cloudinaryUrl(publicId: string, transforms = '') {
  if (!publicId) return ''
  const transformPath = transforms ? `${transforms}/` : ''
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformPath}${publicId}.jpg`
}
