import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      // Con la siguiente opción activada, se verá el botón de instalación de la PWA
      devOptions: {
        enabled: true,
      },
      includeAssets: ["favicon.ico"],
      manifest: {
        name: "My App",
        short_name: "My App",
        description: "My App description",
        icons: [
          {
            src: "/vite.svg",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/vite.svg",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
