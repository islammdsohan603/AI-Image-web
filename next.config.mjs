/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // ✅ allow all external images (dev purpose)
      },
    ],
  },
};

export default nextConfig;