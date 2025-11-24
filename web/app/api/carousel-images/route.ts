import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const revalidate = 0

const allowedExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp'])

function readImagesFromDir(dir: string, basePath: string) {
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((file) => allowedExtensions.has(path.extname(file).toLowerCase()))
    .map((file) => `${basePath}/${file}`)
}

export async function GET() {
  try {
    const carouselDir = path.join(process.cwd(), 'public', 'images', 'carousel')
    const storiesDir = path.join(process.cwd(), 'public', 'images', 'stories')

    const carouselImages = readImagesFromDir(carouselDir, '/images/carousel')
    const storyImages = readImagesFromDir(storiesDir, '/images/stories')

    const images = [...carouselImages, ...storyImages].sort()

    return NextResponse.json({ images })
  } catch (error) {
    console.error('Failed to load carousel images', error)
    return NextResponse.json({ images: [] }, { status: 500 })
  }
}
