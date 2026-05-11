import express, { type NextFunction, type Request, type Response } from "express";
const app = express();
// parse application/json
app.use(express.json());

const port = 3000;

//parse json request body
app.use(express.json());
app.use(express.text()); // parse text/plain request body
app.use(express.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded request body

//MIDDLEWARE
const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url);
  next();
}

// app.get("/:id", (req: Request, res: Response) => {
// console.log(req.params.id); //output: 123
app.get("/", loggerMiddleware, (req: Request, res: Response) => {
  // console.log(req.query); //output: { name: 'John' } 
  // http://localhost:3000?email=shuvo@gmail.com&name=shuvo
  res.send("Hello World!");
});

app.post("/", (req: Request, res: Response) => {
  res.json({
    message: "POST request received!",
  });
});

export default app;
