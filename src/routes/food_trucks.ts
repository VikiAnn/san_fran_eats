import { Router, Request, Response } from "express";
import { FoodTrucks } from "../data/food_trucks";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const foodTrucksData = await FoodTrucks(__dirname, "food_trucks.csv");
  res.json(foodTrucksData);
});

export default router;
