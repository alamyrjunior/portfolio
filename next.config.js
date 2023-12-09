/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true
  },
  experimental: {
    externalDir: true
  },
  // Potential new config flag:
  disableExperimentalFeaturesWarning: true
  

  
}

module.exports = nextConfig
