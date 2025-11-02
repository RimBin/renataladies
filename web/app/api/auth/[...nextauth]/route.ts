import NextAuth, { AuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: 'Demo Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const email = credentials?.email?.toLowerCase()
        const password = credentials?.password
        
        // Demo: accept one test user. Replace with real DB lookup later.
        if (email === 'member@example.com' && password === 'demo123') {
          return { 
            id: 'u1', 
            name: 'Renata Marmienė', 
            email,
            // Demo subscription data - will come from DB
            subscription: 'premium',
            subscriptionExpiry: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // +30 days
            avatar: null,
          }
        }
        return null
      },
    }),
  ],
  session: { strategy: 'jwt' as const },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.subscription = user.subscription
        token.subscriptionExpiry = user.subscriptionExpiry
        token.avatar = user.avatar
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string
        session.user.subscription = token.subscription as string
        session.user.subscriptionExpiry = token.subscriptionExpiry as string
        session.user.avatar = token.avatar as string | null
      }
      return session
    },
    async redirect({ url, baseUrl }) {
      // If url is a relative path, return it as-is
      if (url.startsWith('/')) return `${baseUrl}${url}`
      // If url is from the same origin, return it
      if (new URL(url).origin === baseUrl) return url
      // Otherwise return to home
      return baseUrl
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
