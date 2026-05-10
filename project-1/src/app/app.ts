import express, { type Request, type Response } from "express";
const app = express();
// parse application/json
app.use(express.json());

const port = 3000;

//parse json request body
app.use(express.json());
app.use(express.text()); // parse text/plain request body
app.use(express.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded request body

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "POST request received!",
  })
});

export default app;
