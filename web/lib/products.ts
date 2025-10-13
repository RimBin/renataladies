export type Product = {
  id: string
  title: string
  slug: string
  price: number
  image: string
  description: string
}

export const products: Product[] = [
  {
    id: 'p1',
    title: 'Suknelė „Agnė“',
    slug: 'suknele-agne',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1542060748-10c28b62716a?q=80&w=1600&auto=format&fit=crop',
    description: 'Lengva vasarinė suknelė iš natūralaus audinio.',
  },
  {
    id: 'p2',
    title: 'Paltas „Rasa“',
    slug: 'paltas-rasa',
    price: 129.0,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop',
    description: 'Šiltas vilnonis paltas rudeniui ir žiemai.',
  },
  {
    id: 'p3',
    title: 'Megztinis „Eglė“',
    slug: 'megztinis-egle',
    price: 69.0,
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1600&auto=format&fit=crop',
    description: 'Minkštas megztinis kasdienai.',
  },
]

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}
