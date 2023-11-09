export interface FoodTruck {
  id: number;
  name: string;
  address: string;
  facility_type: string;
  location_description: string;
  food_items: string;
  latitude: number;
  longitude: number;
  prior_permit: boolean;
  expiration: Date;
}
