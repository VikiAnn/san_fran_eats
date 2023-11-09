import { Router, Request, Response } from "express";
import { FoodTrucks } from "../data/food_trucks";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json(FoodTrucks);
});

export default router;
