import express, { Request, Response } from "express";
import favicon from "serve-favicon";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send(
    "This will be SanFranEats, serving up data sourced from the DataSF Open Data collection"
  );
});

app.use(favicon(path.join(__dirname, "images", "favicon.ico")));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
