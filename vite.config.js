import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import reactFontAwesome from "@fortawesome/react-fontawesome";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  optimizeDeps: {
    imports: {
      react: reactFontAwesome,
    },
  },
});
