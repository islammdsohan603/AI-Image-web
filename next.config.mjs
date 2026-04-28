/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    domains: ["i.pinimg.com"], // ✅ allow this domain
  },
};

export default nextConfig;