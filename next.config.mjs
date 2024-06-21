/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      //   {
      //     protocol: "https",
      //     hostname: "instagram.fpnq13-1.fna.fbcdn.net",
      //   },
    ],
  },
};

export default nextConfig;
