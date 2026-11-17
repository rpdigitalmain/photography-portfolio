import { readdir, mkdir, rm, stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const projectRoot = process.cwd()
const sourceDirectory = path.join(projectRoot, 'src', 'assets', 'images', 'originals')
const outputDirectory = path.join(projectRoot, 'public', 'images')
const supportedExtensions = new Set(['.png', '.jpg', '.jpeg', '.webp', '.tif', '.tiff'])

async function findImages(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name)
    if (entry.isDirectory()) files.push(...await findImages(entryPath))
    else if (entry.isFile() && supportedExtensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(entryPath)
    }
  }

  return files
}

await mkdir(outputDirectory, { recursive: true })
const files = await findImages(sourceDirectory)

if (files.length === 0) {
  console.log(`No source images found in ${path.relative(projectRoot, sourceDirectory)}.`)
  process.exit(0)
}

let originalTotal = 0
let optimizedTotal = 0

for (const inputPath of files) {
  const relativePath = path.relative(sourceDirectory, inputPath)
  const relativeDirectory = path.dirname(relativePath)
  const baseName = path.basename(relativePath, path.extname(relativePath))
  const outputSubdirectory = path.join(outputDirectory, relativeDirectory)
  const outputPath = path.join(outputSubdirectory, `${baseName}.webp`)
  const responsivePath = path.join(outputSubdirectory, `${baseName}-768.webp`)
  const metadata = await sharp(inputPath).metadata()
  const originalSize = (await stat(inputPath)).size

  await mkdir(outputSubdirectory, { recursive: true })
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
  console.log(`${relativePath}: ${formatBytes(originalSize)} → ${formatBytes(optimizedSize)} total (${reduction}% smaller)`)
}

console.log(`Total: ${formatBytes(originalTotal)} → ${formatBytes(optimizedTotal)} (${Math.max(0, Math.round((1 - optimizedTotal / originalTotal) * 100))}% smaller)`)

function formatBytes(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`
}
