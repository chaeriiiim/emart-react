import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import babel from "vite-plugin-babel";

export default defineConfig({
  plugins: [
    react(),
    babel({
      babelConfig: {
        plugins: [["babel-plugin-styled-components", { displayName: true }]],
      },
    }),
  ],
});
