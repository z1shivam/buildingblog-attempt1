/** @type {import('next').NextConfig} */
const nextConfig ={
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
    ],
  },
}
export default nextConfig;
