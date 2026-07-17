import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Export estático: otimização de imagem em runtime não disponível
    unoptimized: true,
  },
};

export default nextConfig;
