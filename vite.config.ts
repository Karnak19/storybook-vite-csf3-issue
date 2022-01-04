import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [reactRefresh(), dts()],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "carousel",
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },

    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == "style.css") return "sliders.css";
          return assetInfo.name;
        },
      },
      external: ["react", "react-dom", "swiper"],
    },
  },
});
