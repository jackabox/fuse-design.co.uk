import ViteRestart from "vite-plugin-restart";
import tailwindcss from "@tailwindcss/vite";

export default ({ command }) => ({
  base: command === "serve" ? "" : "/dist/",
  build: {
    outDir: "web/dist/",
    emptyOutDir: true,
    sourcemap: true,
    manifest: true,
    minify: "esbuild",
    rollupOptions: {
      input: {
        index: "./src/index.js",
      },
      output: {
        dir: "web/dist/",
      },
    },
  },
  plugins: [
    tailwindcss(),

    ViteRestart({
      reload: ["templates/**/*"],
    }),
  ],
  server: {
    fs: {
      strict: false,
    },
    origin: "http://haddletons.test",
    port: 3000,
    strictPort: true,
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    allowedHosts: true,
  },
});
