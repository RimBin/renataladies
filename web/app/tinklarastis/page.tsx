import Link from 'next/link'
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/lib/blogData'

export const metadata = {
  title: 'Tinklaraštis | Renata Ladies - Fitness, Mityba ir Gyvenimo Būdas',
  description: 'Straipsniai apie treniruotes, mitybą, motyvaciją ir sveiką gyvenimo būdą moterims. Ekspertės patarimai, receptai ir tikros transformacijos istorijos.',
  keywords: ['fitness tinklaraštis', 'sveika mityba', 'treniruotės moterims', 'svorio metimas', 'gyvenimo būdas']
}

export default function TinklarastisPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-[3fr_2fr] items-end mb-12">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText mb-0 leading-tight">
                Renata Ladies <br/><span className="gradient-text">Tinklaraštis</span>
              </h1>
            </div>
            <div>
              <p className="text-lg text-neutral-600">
                Ekspertės patarimai apie treniruotes, mitybą, motyvaciją ir sveiką gyvenimo būdą. 
                Tikros istorijos ir praktiniai patarimai moterims.
              </p>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {BLOG_CATEGORIES.map((category) => (
              <button
                key={category}
                className="px-6 py-2.5 rounded-full border-2 border-[#F28ACD] text-[#28262C] 
                         hover:bg-[#F28ACD] hover:text-white transition-all duration-300
                         font-medium text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post (First Post) */}
      <section className="py-12 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          <div className="mb-8">
            <span className="text-sm font-semibold text-[#F28ACD] uppercase tracking-wider">
              Naujausia
            </span>
          </div>
          
          {BLOG_POSTS.length > 0 && (
            <Link 
              href={`/tinklarastis/${BLOG_POSTS[0].slug}`}
              className="group block"
            >
              <div className="grid md:grid-cols-2 gap-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 md:h-full">
                  <img
                    src={BLOG_POSTS[0].thumbnail}
                    alt={BLOG_POSTS[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-[#F28ACD] text-white text-xs font-semibold rounded-full">
                      {BLOG_POSTS[0].category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>{BLOG_POSTS[0].publishedAt}</span>
                    <span>•</span>
                    <span>{BLOG_POSTS[0].readTime} skaitymo</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-[#28262C] mb-4 group-hover:text-[#F28ACD] transition-colors">
                    {BLOG_POSTS[0].title}
                  </h2>
                  
                  <p className="text-gray-600 text-lg mb-6 line-clamp-3">
                    {BLOG_POSTS[0].excerpt}
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] flex items-center justify-center text-white font-bold">
                      R
                    </div>
                    <div>
                      <div className="font-semibold text-[#28262C]">{BLOG_POSTS[0].author}</div>
                      <div className="text-sm text-gray-500">Fitness ir Mitybos Ekspertė</div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 text-[#F28ACD] font-semibold group-hover:gap-3 transition-all">
                      Skaityti straipsnį
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* All Blog Posts Grid */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#28262C] mb-2">
              Visi Straipsniai
            </h2>
            <p className="text-gray-600">
              {BLOG_POSTS.length} straipsnių apie fitness, mitybą ir gyvenimo būdą
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(1).map((post) => (
              <Link
                key={post.id}
                href={`/tinklarastis/${post.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#F28ACD] text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span>{post.publishedAt}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#28262C] mb-3 group-hover:text-[#F28ACD] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] flex items-center justify-center text-white text-xs font-bold">
                        R
                      </div>
                      <span className="text-sm font-medium text-gray-700">{post.author}</span>
                    </div>

                    <span className="text-[#F28ACD] text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">
                      Skaityti →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-[#F28ACD] to-[#AB57F4]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Gauk Naujausius Straipsnius Į El. Paštą
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Kas savaitę - nauji straipsniai, receptai, treniruočių patarimai ir ekskluzyvus turinys tik prenumeratoriams.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tavo el. paštas"
              className="px-6 py-3 rounded-full flex-1 text-[#28262C] focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-3 bg-white text-[#F28ACD] rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
              Prenumeruoti
            </button>
          </div>
          
          <p className="text-white/75 text-sm mt-4">
            Jokio spam. Atsisakyti gali bet kada. ❤️
          </p>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#28262C] mb-8 text-center">
            Populiariausios Temos
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Svorio Metimas', 'Sėdmenų Formavimas', 'Sveika Mityba', 'Treniruotės Namuose', 'Motyvacija', 'Po Gimdymo'].map((topic) => (
              <div
                key={topic}
                className="p-6 border-2 border-gray-200 rounded-xl hover:border-[#F28ACD] hover:bg-pink-50 transition-all duration-300 cursor-pointer group"
              >
                <h3 className="text-lg font-bold text-[#28262C] group-hover:text-[#F28ACD] transition-colors">
                  {topic}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Ekspertės patarimai →
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
