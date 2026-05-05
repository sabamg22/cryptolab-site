/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, 
  },
  trailingSlash: true, // optional but recommended for GitHub Pages
};

module.exports = nextConfig;