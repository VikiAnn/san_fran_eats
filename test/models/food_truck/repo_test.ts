import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { FoodTrucks } from "../../../src/models/food_truck/repo";

describe("Food trucks data", () => {
  it("should be parsed from a given CSV", async () => {
    const foodTrucks = await FoodTrucks("test/data", "food_trucks.csv");
    const firstTruck = foodTrucks[0];

    const expectedFirstTruck = {
      id: 1728067,
      address: "2301 MISSION ST",
      name: "Leo's Hot Dogs",
      expiration: new Date(`2024-11-15T07:00:00.000Z`),
      facility_type: "Push Cart",
      food_items: "Hot dogs and related toppings: non alcoholic beverages",
      latitude: 37.76008693198698,
      longitude: -122.41880648110114,
      location_description: "MISSION ST: 19TH ST to 20TH ST (2300 - 2399)",
      prior_permit: true,
    };
    assert.deepEqual(firstTruck, expectedFirstTruck);
  });
});
