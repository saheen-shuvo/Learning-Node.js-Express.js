import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
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
};

// app.get("/:id", (req: Request, res: Response) => {
// console.log(req.params.id); //output: 123
// app.get("/", loggerMiddleware, (req: Request, res: Response) => {
  // http://localhost:3000?email=shuvo@gmail.com&name=shuvo
  // console.log(req.query); //output: { name: 'John' }
  // res.send("Hello World!");
// });

//EXPRESS ERROR HANDLING
app.get("/", loggerMiddleware, async(req: Request, res: Response, next: NextFunction) => {
  try{
    // res.send(somethingDoesNotExist); // This will throw a ReferenceError
  } catch (error){
    next(error); // Pass the error to the global error-handling middleware
  }
});

//ROUTES
const userRouter = express.Router();
const productRouter = express.Router();

app.use("/api", userRouter);
app.use("/api", productRouter);

userRouter.post("/users/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  res.json({
    success: true,
    message: "User data received successfully",
    data: user,
  });
});

productRouter.post("/products/create-product", (req: Request, res: Response) => {
  const product = req.body;
  console.log(product);
  res.json({
    success: true,
    message: "Product data received successfully",
    data: product,
  });
});

app.post("/", (req: Request, res: Response) => {
  res.json({
    message: "POST request received!",
  });
});

//Route ERROR HANDLING
app.use((req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: "Route not found",
  });
});

//GLOBAL ERROR HANDLING MIDDLEWARE
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // console.log("Global error handler:", err);
  res.status(500).json({
    success: false,
    message: "An unexpected error occurred",
    error: err.message,
  });
});

export default app;
