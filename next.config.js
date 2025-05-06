/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,  // Detta är rätt konfiguration för att inte optimera bilder.
    },
  }
  
  module.exports = nextConfig