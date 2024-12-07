import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import colors from 'colors';
import morgan from 'morgan';


dotenv.config();

const app: Express = express();


app.use(morgan('dev'));
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript + Nodemon + Mongoose Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
