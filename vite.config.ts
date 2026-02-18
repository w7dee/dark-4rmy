import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

const fallbackRepoName = "dark-4rmy"
const repoFromEnv = process.env.GITHUB_REPOSITORY?.split("/")[1]
const pagesBase = `/${repoFromEnv || fallbackRepoName}/`

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? pagesBase : "/",
}))
