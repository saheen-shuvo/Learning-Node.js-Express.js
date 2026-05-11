import express, {} from "express";
const app = express();
// parse application/json
app.use(express.json());
const port = 3000;
//parse json request body
app.use(express.json());
app.use(express.text()); // parse text/plain request body
app.use(express.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded request body
// app.get("/:id", (req: Request, res: Response) => {
// console.log(req.params.id); //output: 123
app.get("/", (req, res) => {
    // console.log(req.query); //output: { name: 'John' } 
    // http://localhost:3000?email=shuvo@gmail.com&name=shuvo
    res.send("Hello World!");
});
app.post("/", (req, res) => {
    res.json({
        message: "POST request received!",
    });
});
export default app;
//# sourceMappingURL=app.js.map