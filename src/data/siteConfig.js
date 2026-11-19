import { imageUrl } from '@/data/imageUrls'

export const siteConfig = {
  name: 'Helena Duarte',
  tagline: 'Photography',
  location: 'São Paulo · Available for travel',
  heroTitle: 'Images that hold what time takes away.',
  heroSubtitle:
    'Fine art photography of portraits, weddings, editorials, and travel, made slowly with natural light and an eye for detail.',
  heroImage: {
    src: imageUrl('/images/site/hero.webp'),
    srcSet: `${imageUrl('/images/site/hero-768.webp')} 768w, ${imageUrl('/images/site/hero.webp')} 1376w`,
    alt: 'Woman in a light dress walking alone across misty dunes at dawn',
  },
  about: {
    image: {
      src: imageUrl('/images/site/photographer-about.webp'),
      alt: 'Portrait of Helena Duarte holding an analog camera beside a window',
    },
    bio: [
      'I am Helena Duarte, a photographer with more than ten years of experience. I started by photographing my family with an analog camera inherited from my grandfather, and I have been looking for beauty in fleeting moments ever since.',
      'Today I work between São Paulo and wherever a story takes me, photographing people, celebrations, brands, and places.',
    ],
    approach:
      'My approach is quiet and attentive. I prefer natural light, unposed gestures, and time spent without rush. I direct only when needed, so people can feel at ease and the images look like memories rather than poses.',
  },
  email: 'contato@helenaduarte.com.br',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'Pinterest', href: 'https://pinterest.com/' },
    { label: 'Vimeo', href: 'https://vimeo.com/' },
  ],
}

export const navLinks = [
  { label: 'Gallery', href: '/#gallery' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact', href: '/#contact' },
]

export const services = [
  {
    title: 'Portraits',
    description:
      'Individual, family, and couple sessions in the studio, at home, or outdoors. A relaxed meeting to show who you are.',
  },
  {
    title: 'Weddings',
    description:
      'Documentary wedding and elopement coverage, from getting ready to the celebration, with a quiet eye for small gestures.',
  },
  {
    title: 'Editorial and brands',
    description:
      'Photography for magazines and fashion, design, and food brands, with art direction shaped around each project.',
  },
  {
    title: 'Travel and places',
    description:
      'Personal and commissioned travel projects about hotels, destinations, landscapes, and the people who live there.',
  },
]

export const projectTypes = ['Portrait', 'Wedding', 'Editorial / brand', 'Travel', 'Other']
