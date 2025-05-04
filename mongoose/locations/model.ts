import mongoose, { model } from "mongoose";
import { LocationSchema, LocationType } from "mongoose/locations/schema";

export default mongoose.models.Locations ||
  model<LocationType>("Locations", LocationSchema);
