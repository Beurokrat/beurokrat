/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.exprContextCritical = false;
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
      },
      {
        protocol: 'https',
        hostname: 'mnahtyizypiirhtzlqva.supabase.co',
      },
    ],
  },
};

module.exports = nextConfig;
