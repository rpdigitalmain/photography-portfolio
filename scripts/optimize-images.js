import { readdir, mkdir, rm, stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const projectRoot = process.cwd()
const sourceDirectory = path.join(projectRoot, 'src', 'assets', 'images', 'originals')
const outputDirectory = path.join(projectRoot, 'public', 'images')
const supportedExtensions = new Set(['.png', '.jpg', '.jpeg', '.webp', '.tif', '.tiff'])

await mkdir(outputDirectory, { recursive: true })
const files = (await readdir(sourceDirectory, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && supportedExtensions.has(path.extname(entry.name).toLowerCase()))

if (files.length === 0) {
  console.log(`No source images found in ${path.relative(projectRoot, sourceDirectory)}.`)
  process.exit(0)
}

let originalTotal = 0
let optimizedTotal = 0

for (const file of files) {
  const inputPath = path.join(sourceDirectory, file.name)
  const baseName = path.basename(file.name, path.extname(file.name))
  const outputPath = path.join(outputDirectory, `${baseName}.webp`)
  const responsivePath = path.join(outputDirectory, `${baseName}-768.webp`)
  const metadata = await sharp(inputPath).metadata()
  const originalSize = (await stat(inputPath)).size

  await sharp(inputPath)
    .rotate()
    .webp({ quality: 82, effort: 5 })
    .toFile(outputPath)

  let responsiveSize = 0
  if (metadata.width > 960) {
    await sharp(inputPath)
      .rotate()
      .resize({ width: 768, withoutEnlargement: true })
      .webp({ quality: 80, effort: 5 })
      .toFile(responsivePath)
    responsiveSize = (await stat(responsivePath)).size
  } else {
    await rm(responsivePath, { force: true })
  }

  const optimizedSize = (await stat(outputPath)).size + responsiveSize
  originalTotal += originalSize
  optimizedTotal += optimizedSize
  const reduction = Math.max(0, Math.round((1 - optimizedSize / originalSize) * 100))
  console.log(`${file.name}: ${formatBytes(originalSize)} → ${formatBytes(optimizedSize)} total (${reduction}% smaller)`)
}

console.log(`Total: ${formatBytes(originalTotal)} → ${formatBytes(optimizedTotal)} (${Math.max(0, Math.round((1 - optimizedTotal / originalTotal) * 100))}% smaller)`)

function formatBytes(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`
}
