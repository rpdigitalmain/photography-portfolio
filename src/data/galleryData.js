const portrait = { width: 768, height: 1376 }
const landscape = { width: 1376, height: 768 }

export const categories = [
  {
    slug: 'portraits',
    title: 'Portraits',
    description: 'People, quiet moments, and the light that reveals who they are.',
    photos: [
      { src: '/images/portraits/portraits-01.webp', alt: 'Freckled young person looking aside in soft window light', caption: 'Tomás, studio · 2025', ...portrait },
      { src: '/images/portraits/portraits-02.webp', alt: 'Silver-haired woman smiling in black and white', caption: 'Dona Lúcia · Minas Gerais', ...landscape },
      { src: '/images/portraits/portraits-03.webp', alt: 'Short-haired woman partly covering her face in striped window light', caption: 'Light study · 2024', ...portrait },
      { src: '/images/portraits/portraits-04.webp', alt: 'Mother and child embracing in a dry grass field at sunset', caption: 'Marina and Theo · Serra da Cantareira', ...landscape },
    ],
  },
  {
    slug: 'weddings',
    title: 'Weddings',
    description: 'Celebrations told gently, from the first look to the last toast.',
    photos: [
      { src: '/images/weddings/weddings-01.webp', alt: 'Newlyweds walking hand in hand among olive trees, seen from behind', caption: 'Ana and Rafael · The olive grove', ...portrait },
      { src: '/images/weddings/weddings-02.webp', alt: 'Guests tossing petals as a couple leaves a stone chapel', caption: 'Chapel exit · Cunha', ...landscape },
      { src: '/images/weddings/weddings-03.webp', alt: 'Bride’s hands holding a small bouquet of white flowers', caption: 'Details · Wildflower bouquet', ...portrait },
      { src: '/images/weddings/weddings-04.webp', alt: 'Long candlelit dinner table beneath garden lights at dusk', caption: 'Garden dinner · Trancoso', ...landscape },
    ],
  },
  {
    slug: 'editorial',
    title: 'Editorial',
    description: 'Fashion, objects, and brands with clear direction and room to breathe.',
    photos: [
      { src: '/images/editorial/editorial-01.webp', alt: 'Model in an oversized black coat against concrete and a sharp shadow', caption: 'Winter · Forma Magazine', ...portrait },
      { src: '/images/editorial/editorial-02.webp', alt: 'Ceramic vases and linen arranged on a pedestal', caption: 'Barro Studio · Campaign', ...landscape },
      { src: '/images/editorial/editorial-03.webp', alt: 'Model in a white shirt with fabric in motion, in black and white', caption: 'Movement · Studio', ...portrait },
      { src: '/images/editorial/editorial-04.webp', alt: 'Model seated in a modernist chair in a sunlit room', caption: 'Modernist house · Editorial', ...landscape },
    ],
  },
  {
    slug: 'travel',
    title: 'Travel',
    description: 'Places observed slowly: landscapes, streets, and encounters along the way.',
    photos: [
      { src: '/images/travel/travel-01.webp', alt: 'Narrow lane of white houses in a Mediterranean village with a distant figure', caption: 'Morning in Ostuni · Italy', ...portrait },
      { src: '/images/travel/travel-02.webp', alt: 'Layered mountains in morning mist beside a winding road', caption: 'Morning fog · Serra da Estrela', ...landscape },
      { src: '/images/travel/travel-03.webp', alt: 'Fisherman mending nets on a wooden boat, in black and white', caption: 'Fishing harbor · Nazaré', ...portrait },
      { src: '/images/travel/travel-04.webp', alt: 'Desert dunes with a camel caravan on the horizon', caption: 'Horizon · Morocco', ...landscape },
    ],
  },
]

export function getPhotoSrcSet(photo) {
  if (photo.width <= 960) return undefined
  return `${photo.src.replace('.webp', '-768.webp')} 768w, ${photo.src} ${photo.width}w`
}
export function getCategory(slug) {
  return categories.find((category) => category.slug === slug)
}
