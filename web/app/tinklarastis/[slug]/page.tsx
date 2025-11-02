import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBlogPostBySlug, BLOG_POSTS } from '@/lib/blogData'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Straipsnis nerastas | Renata Ladies'
    }
  }

  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    keywords: post.seo.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.thumbnail],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author]
    }
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Get 3 related posts (same category, excluding current)
  const relatedPosts = BLOG_POSTS
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <article className="pt-24 md:pt-32 pb-12">
        {/* Header - Full Width */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 mb-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-[#F28ACD]">Pagrindinis</Link>
            <span>→</span>
            <Link href="/tinklarastis" className="hover:text-[#F28ACD]">Tinklaraštis</Link>
            <span>→</span>
            <span className="text-gray-700">{post.category}</span>
          </nav>

          {/* Category Badge */}
          <div className="mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] text-white text-sm font-semibold rounded-full">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#28262C] mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] flex items-center justify-center text-white font-bold">
                R
              </div>
              <div>
                <div className="font-semibold text-[#28262C]">{post.author}</div>
                <div className="text-sm">Fitness ir Mitybos Ekspertė</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span>{post.publishedAt}</span>
              <span>•</span>
              <span>{post.readTime} skaitymo</span>
            </div>
          </div>
        </div>

        {/* Content - Full Width */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          {/* Featured Image */}
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Excerpt */}
          <div className="text-xl text-gray-700 mb-12 pb-8 border-b border-gray-200 italic">
            {post.excerpt}
          </div>

          {/* Content - AIDA Structure */}
          <div className="prose prose-lg max-w-none">
            {/* ATTENTION */}
            <div className="mb-12 md:columns-2 md:gap-8">
              <div className="bg-gradient-to-r from-[#F28ACD]/10 to-[#AB57F4]/10 border-l-4 border-[#F28ACD] p-6 rounded-r-lg mb-6 break-inside-avoid">
                <h2 className="text-2xl font-bold text-[#28262C] mb-0">💡 Ar Tai Pažįstama?</h2>
              </div>
              {post.content.attention.map((paragraph, idx) => (
                <p key={idx} className="text-gray-700 leading-relaxed mb-4 text-lg break-inside-avoid">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* INTEREST */}
            <div className="mb-12 md:columns-2 md:gap-8">
              <div className="bg-gradient-to-r from-[#AB57F4]/10 to-[#F28ACD]/10 border-l-4 border-[#AB57F4] p-6 rounded-r-lg mb-6 break-inside-avoid">
                <h2 className="text-2xl font-bold text-[#28262C] mb-0">📚 Kas Tau Reikia Žinoti</h2>
              </div>
              <div className="space-y-4">
                {post.content.interest.map((paragraph, idx) => {
                  // Check if it's a heading (starts with **)
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={idx} className="text-2xl font-bold text-[#28262C] mt-8 mb-4 break-inside-avoid">
                        {paragraph.replace(/\*\*/g, '')}
                      </h3>
                    )
                  }
                  // Check if empty (spacing)
                  if (paragraph === '') {
                    return <div key={idx} className="h-4"></div>
                  }
                  // Regular paragraph
                  return (
                    <p 
                      key={idx} 
                      className="text-gray-700 leading-relaxed text-lg break-inside-avoid"
                      dangerouslySetInnerHTML={{ 
                        __html: paragraph
                          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                          .replace(/✅/g, '<span class="text-green-600">✅</span>')
                          .replace(/❌/g, '<span class="text-red-600">❌</span>')
                          .replace(/•/g, '<span class="text-[#F28ACD]">•</span>')
                      }}
                    />
                  )
                })}
              </div>
            </div>

            {/* DESIRE */}
            <div className="mb-12 md:columns-2 md:gap-8">
              <div className="bg-gradient-to-r from-[#F28ACD]/10 to-[#AB57F4]/10 border-l-4 border-[#F28ACD] p-6 rounded-r-lg mb-6 break-inside-avoid">
                <h2 className="text-2xl font-bold text-[#28262C] mb-0">✨ Įsivaizduok Rezultatus</h2>
              </div>
              <div className="space-y-4">
                {post.content.desire.map((paragraph, idx) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={idx} className="text-2xl font-bold text-[#28262C] mt-8 mb-4 break-inside-avoid">
                        {paragraph.replace(/\*\*/g, '')}
                      </h3>
                    )
                  }
                  if (paragraph === '') {
                    return <div key={idx} className="h-4"></div>
                  }
                  return (
                    <p 
                      key={idx} 
                      className="text-gray-700 leading-relaxed text-lg break-inside-avoid"
                      dangerouslySetInnerHTML={{ 
                        __html: paragraph
                          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                          .replace(/✅/g, '<span class="text-green-600">✅</span>')
                          .replace(/❌/g, '<span class="text-red-600">❌</span>')
                          .replace(/•/g, '<span class="text-[#F28ACD]">•</span>')
                          .replace(/☑/g, '<span class="text-green-600">☑</span>')
                      }}
                    />
                  )
                })}
              </div>
            </div>

            {/* ACTION */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-[#AB57F4] to-[#F28ACD] p-8 rounded-2xl text-white mb-6">
                <h2 className="text-3xl font-bold mb-2 text-white">🚀 Tavo Veiksmų Planas</h2>
                <p className="text-white/90">Pradėk savo transformaciją šiandien</p>
              </div>
              <div className="space-y-4">
                {post.content.action.map((paragraph, idx) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**') && !paragraph.includes('[')) {
                    return (
                      <h3 key={idx} className="text-2xl font-bold text-[#28262C] mt-8 mb-4">
                        {paragraph.replace(/\*\*/g, '')}
                      </h3>
                    )
                  }
                  if (paragraph === '') {
                    return <div key={idx} className="h-4"></div>
                  }
                  // Check for CTA links
                  if (paragraph.includes('[') && paragraph.includes('→')) {
                    const match = paragraph.match(/\*\*\[(.+?)\s*→\]\((.+?)\)\*\*/)
                    if (match) {
                      return (
                        <Link 
                          key={idx} 
                          href={match[2]}
                          className="inline-block px-6 py-2.5 bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] text-white font-semibold rounded-full hover:opacity-90 transition-opacity text-base my-3"
                        >
                          {match[1]} →
                        </Link>
                      )
                    }
                  }
                  return (
                    <p 
                      key={idx} 
                      className="text-gray-700 leading-relaxed text-lg"
                      dangerouslySetInnerHTML={{ 
                        __html: paragraph
                          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                          .replace(/✅/g, '<span class="text-green-600">✅</span>')
                          .replace(/❌/g, '<span class="text-red-600">❌</span>')
                          .replace(/•/g, '<span class="text-[#F28ACD]">•</span>')
                          .replace(/☑/g, '<span class="text-green-600">☑</span>')
                      }}
                    />
                  )
                })}
              </div>
            </div>
          </div>

          {/* Share & Tags */}
          <div className="pt-8 border-t border-gray-200 mt-12">
            <div className="flex flex-wrap gap-2 mb-6">
              {post.seo.keywords.map((keyword) => (
                <span key={keyword} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                  #{keyword.replace(/ /g, '')}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <span className="font-semibold text-gray-700">Pasidalink:</span>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-[#F28ACD] text-white flex items-center justify-center hover:opacity-80">
                  FB
                </button>
                <button className="w-10 h-10 rounded-full bg-[#AB57F4] text-white flex items-center justify-center hover:opacity-80">
                  IG
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center hover:opacity-80">
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1440px] mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-[#28262C] mb-8">Panašūs Straipsniai</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/tinklarastis/${relatedPost.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedPost.thumbnail}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#28262C] mb-2 group-hover:text-[#F28ACD] transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#F28ACD] to-[#AB57F4]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pasiruošusi Pradėti Savo Transformaciją?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Prisijunk prie šimtų moterų, kurios jau pasiekė savo tikslus su Renata Ladies programomis
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/programos"
              className="px-8 py-4 bg-white text-[#F28ACD] rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Peržiūrėti Programas
            </Link>
            <Link 
              href="/konsultacijos"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-[#F28ACD] transition-all"
            >
              Rezervuoti Konsultaciją
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
