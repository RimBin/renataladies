"use client"
import { signIn, useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { GradientButton } from '@/components/ui/GradientButton'

export default function SignInPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/'
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Redirect if already logged in
  useEffect(() => {
    if (status === 'authenticated') {
      router.push(callbackUrl)
    }
  }, [status, router, callbackUrl])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError('Neteisingas el. paštas arba slaptažodis')
      } else {
        // Successful login - redirect to callbackUrl
        router.push(callbackUrl)
      }
    } catch (err) {
      setError('Įvyko klaida. Bandykite dar kartą.')
    } finally {
      setIsLoading(false)
    }
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50">
        <div className="animate-pulse text-center">
          <div className="text-2xl font-bold text-neutral-700">Kraunama...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 px-4 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#28262C] mb-2">
            Prisijunk prie <span className="gradient-text">RenataLadies</span>
          </h1>
          <p className="text-neutral-600">
            Įvesk savo prisijungimo duomenis
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Demo credentials info */}
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800 font-semibold mb-1">Demo prisijungimas:</p>
            <p className="text-xs text-blue-700">El. paštas: member@example.com</p>
            <p className="text-xs text-blue-700">Slaptažodis: demo123</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                El. paštas
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#F28ACD] focus:border-transparent"
                placeholder="tavo@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1">
                Slaptažodis
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#F28ACD] focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-[linear-gradient(90deg,#F28ACD,#AB57F4)] text-white hover:opacity-90 font-semibold transition disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Prisijungiama...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Prisijungti
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-neutral-600">
              Neturi paskyros?{' '}
              <a href="/mitybos-planai" className="text-[#F28ACD] hover:text-[#AB57F4] font-semibold">
                Pasirink planą
              </a>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a 
            href={callbackUrl} 
            className="text-sm text-neutral-600 hover:text-neutral-900"
          >
            ← Grįžti atgal
          </a>
        </div>
      </div>
    </div>
  )
}
