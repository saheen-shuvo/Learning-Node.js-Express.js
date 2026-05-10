import type { Server } from "http";
import app from "./app.js";

const port = Number(process.env.PORT || 3000);

let server: Server;

async function startServer() {
  server = app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

startServer();