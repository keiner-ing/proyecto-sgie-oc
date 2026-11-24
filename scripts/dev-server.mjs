import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const PORT = Number(process.env.PORT || 5173);
const root = process.cwd();
const MIME = { ".html": "text/html", ".css": "text/css", ".mjs": "text/javascript" };
const server = createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    const file = pathname === "/" ? "/index.html" : pathname;
    if (!(file === "/index.html" || /^\/src\/[a-z0-9-]+\.(mjs|css)$/i.test(file))) {
      res.writeHead(404); res.end("No encontrado"); return;
    }
    const ext = file.slice(file.lastIndexOf("."));
    const data = await readFile(resolve(root, "." + file));
    res.writeHead(200, { "Content-Type": `${MIME[ext]} ; charset=utf-8`, "Cache-Control": "no-store" });
    res.end(data);
  } catch { res.writeHead(404); res.end("No encontrado"); }
});
server.listen(PORT, "127.0.0.1", () => console.log(`Disponible en http://127.0.0.1:${PORT}`));
