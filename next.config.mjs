/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com','avatars.githubusercontent.com'], // Allow images from Unsplash
      },
      experimental: {
        runtime: 'nodejs',
      },
};

export default nextConfig;
