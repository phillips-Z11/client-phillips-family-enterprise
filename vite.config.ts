import path from "path"
import { Readable } from "node:stream"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig, type Plugin } from "vite"

// Vercel deploys src/api/*.tsx as Edge Functions automatically, but plain
// `vite dev` has no idea /api/og exists. This middleware runs the same
// handler in dev so the OG image can be previewed at /api/og locally.
function vercelOgDevMiddleware(): Plugin {
  return {
    name: "vercel-og-dev-middleware",
    configureServer(server) {
      server.middlewares.use("/api/og", async (req, res) => {
        try {
          const { default: handler } = await server.ssrLoadModule("/api/og.tsx")
          const request = new Request(new URL(req.url ?? "/", `http://${req.headers.host}`))
          const response: Response = await handler(request)

          res.writeHead(response.status, Object.fromEntries(response.headers))
          if (response.body) {
            Readable.fromWeb(response.body as import("node:stream/web").ReadableStream).pipe(res)
          } else {
            res.end()
          }
        } catch (error) {
          console.error("[api/og] failed to render:", error)
          res.writeHead(500, { "Content-Type": "text/plain" })
          res.end(error instanceof Error ? error.stack : String(error))
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), vercelOgDevMiddleware()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
