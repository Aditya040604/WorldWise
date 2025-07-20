import jsonServer from "json-server";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(join(__dirname, "src/data/cities.json"));
const middleware = jsonServer.defaults();

server.use((req, res, next) => {
  setTimeout(() => next(), 500);
});

server.use(cors());
server.use(middleware);
server.use(router);

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`json server running at http://localhost:${PORT}`);
});
