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
  // Type-check e lint já rodam localmente (npm run build) antes do commit —
  // repetir no build de produção só consome tempo/memória extra no servidor.
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
