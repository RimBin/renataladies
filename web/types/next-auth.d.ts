// TypeScript type extensions for NextAuth
import 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string
    subscription?: string
    subscriptionExpiry?: string
    avatar?: string | null
  }

  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      subscription?: string
      subscriptionExpiry?: string
      avatar?: string | null
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    subscription?: string
    subscriptionExpiry?: string
    avatar?: string | null
  }
}
