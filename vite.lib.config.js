import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Library build consumed by other Davis apps (MarginIQ, dispatch map).
// React is external so the host app's copy is used. Output lib/ is committed
// so consumers can install via a git dependency with no build-on-install step.
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.js",
      formats: ["es"],
      fileName: () => "quote-generator.js",
    },
    rollupOptions: { external: ["react", "react-dom", "react/jsx-runtime"] },
    outDir: "lib",
    emptyOutDir: true,
  },
});
