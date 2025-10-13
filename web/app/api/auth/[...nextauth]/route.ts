import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

const authOptions = {
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
        // Demo: accept one test user. Replace with real lookup later.
        if (email === 'member@example.com' && password === 'demo123') {
          return { id: 'u1', name: 'Demo Member', email }
        }
        return null
      },
    }),
  ],
  session: { strategy: 'jwt' as const },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
