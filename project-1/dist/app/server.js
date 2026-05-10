import app from "./app.js";
const port = Number(process.env.PORT || 3000);
let server;
async function startServer() {
    server = app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
}
startServer();
//# sourceMappingURL=server.js.map