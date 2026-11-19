const imageBaseUrl = 'https://pub-b430e551032b4d8ba5d56487135e45ad.r2.dev'

export function imageUrl(path) {
  return `${imageBaseUrl}${path}`
}

export function imageSrcSet(srcSet) {
  return srcSet
    .split(',')
    .map((entry) => {
      const [path, descriptor] = entry.trim().split(/\s+/)
      return `${imageUrl(path)} ${descriptor}`
    })
    .join(', ')
}
