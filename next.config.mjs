/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [{hostname: 'images.unsplash.com'}, {hostname:'avatars.githubusercontent.com'},{hostname: 'vimeo.com'}], // Allow images from Unsplash
  }
};

export default nextConfig;
