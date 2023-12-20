/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    test: /\\.(png|jp(e*)g|svg|gif)$/, use: ['file-loader'], //ev ta bort
}
  
module.exports = nextConfig
