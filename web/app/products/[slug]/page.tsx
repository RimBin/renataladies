import { getProductBySlug, products } from '@/lib/products'
import { notFound } from 'next/navigation'
import ProductClient from './ProductClient'

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  if (!product) return notFound()

  // Demo: Multiple images (in real app, product would have gallery array)
  const images = [
    product.image,
    'https://placehold.co/800x800/F28ACD/FFFFFF?text=Nuotrauka+2',
    'https://placehold.co/800x800/AB57F4/FFFFFF?text=Nuotrauka+3',
    'https://placehold.co/800x800/F28ACD/FFFFFF?text=Nuotrauka+4',
  ]

  // Demo reviews
  const reviews = [
    { id: 1, author: 'Kristina M.', rating: 5, date: '2024-10-01', text: 'Puikus produktas! Pastebėjau rezultatus jau po 2 savaičių.' },
    { id: 2, author: 'Rūta P.', rating: 5, date: '2024-09-28', text: 'Labai patiko, tikrai rekomenduoju!' },
    { id: 3, author: 'Laura K.', rating: 4, date: '2024-09-15', text: 'Geras produktas, nors kaina šiek tiek aukšta.' },
  ]

  const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length

  // Related products
  const relatedProducts = products.filter(p => p.slug !== product.slug).slice(0, 3)

  return <ProductClient product={product} images={images} reviews={reviews} avgRating={avgRating} relatedProducts={relatedProducts} />
}
 
