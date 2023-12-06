import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: "gzip", // Use gzip compression
      deleteOriginFile: true, // Delete the original uncompressed file after compressing
    }),
  ],
});
