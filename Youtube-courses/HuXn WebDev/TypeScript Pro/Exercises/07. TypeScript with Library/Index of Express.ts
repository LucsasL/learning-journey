import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/", (request: Request, response: Response) => {
  response.send("Hello, TypeScript with Express JS!");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
