/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static HTML export
  images: {
    unoptimized: true, // important if you use <Image> components
  },
};

export default nextConfig;
