import { defineConfig } from "vite";
import { resolve } from "path";
const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");
/*saco la base
root:"src"
outDir:"../dist"
*/
export default defineConfig({
  base: "https://gestiondhs.github.io/actividadesIA/",
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        act1: resolve(root, "pages", "act01", "index.html"),
      },
    },
  },
  assetsDir: "img",
  assetsInclude: [
    "**/*.css?type=text/css",
  ],
});

//agrego comentario holaa