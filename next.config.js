/** @type {import('next').NextConfig} */
import path from "path";
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'dist',
  turbopack: {
    root: path.join(import.meta.dirname)
  }
};
export default nextConfig;