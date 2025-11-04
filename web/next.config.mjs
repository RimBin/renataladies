/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: ['react', 'react-dom']
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      // Redirect English URLs to Lithuanian
      {
        source: '/programs',
        destination: '/programos',
        permanent: true,
      },
      {
        source: '/programs/:slug',
        destination: '/programos/:slug',
        permanent: true,
      },
      {
        source: '/videos',
        destination: '/treniruociu-video',
        permanent: true,
      },
      {
        source: '/plans',
        destination: '/mitybos-planai',
        permanent: true,
      },
      {
        source: '/products',
        destination: '/papildai',
        permanent: true,
      },
      {
        source: '/products/:slug',
        destination: '/papildai/:slug',
        permanent: true,
      },
      {
        source: '/cart',
        destination: '/krepselis',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/tinklarastis',
        permanent: true,
      },
      {
        source: '/faq',
        destination: '/duk',
        permanent: true,
      },
      {
        source: '/auth/signin',
        destination: '/auth/prisijungti',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
