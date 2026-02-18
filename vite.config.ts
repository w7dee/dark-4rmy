import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Relative base keeps assets working for both github.io/repo and custom domains.
  base: command === "build" ? "./" : "/",
}))
