import { FoodTruck } from "../models/food_truck";
import * as fs from "fs";
import * as path from "path";
import csv from "csv-parser";
import { finished } from "node:stream/promises";

export const FoodTrucks = async (dirname: string, filename: string) => {
  const filePath = path.resolve(dirname, `../data/${filename}`);
  const headers = {
    address: "Address",
    name: "Applicant",
    expiration: "ExpirationDate",
    facility_type: "FacilityType",
    food_items: "FoodItems",
    latitude: "Latitude",
    longitude: "Longitude",
    location_description: "LocationDescription",
    id: "locationid",
    prior_permit: "PriorPermit",
  };

  const food_trucks: FoodTruck[] = [];
  const foodTruckStream = fs
    .createReadStream(filePath)
    .pipe(csv())
    .on("data", (data) => {
      const row = {
        id: +data[headers.id],
        address: data[headers.address],
        name: data[headers.name],
        expiration: new Date(data[headers.expiration]),
        facility_type: data[headers.facility_type],
        food_items: data[headers.food_items],
        latitude: +data[headers.latitude],
        longitude: +data[headers.longitude],
        location_description: data[headers.location_description],
        prior_permit: !!+data[headers.prior_permit],
      };
      food_trucks.push(row);
    })
    .on("error", (error: Error) => console.error("something blew up!", error))
    .on("end", () => console.log("Food truck parsing complete"));

  await finished(foodTruckStream);

  return food_trucks;
};
