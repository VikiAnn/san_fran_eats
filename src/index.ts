import express, { Request, Response } from "express";
import favicon from "serve-favicon";
import path from "path";
import foodTruckRoutes from "./routes/food_trucks";

const app = express();
const port = process.env.PORT || 3000;

app.use(favicon(path.join(__dirname, "images", "favicon.ico")));

app.get("/", (req: Request, res: Response) => {
  res.send(
    "This will be SanFranEats, serving up data sourced from the DataSF Open Data collection"
  );
});

app.use(express.json());
app.use("/food_trucks", foodTruckRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
