import Locations from "./model";

export async function findAllLocations() {
  return await Locations.find({});
}

export async function findLocationsById(location_ids: string[]) {
  return await Locations.find({ location_id: { $in: location_ids } });
}

export async function onUserWishlist(user_id: string) {
  return await Locations.find({ on_wishlist: { $in: [user_id] } });
}

export async function updateWishlist(location_id: string, user_id: string, action: "add" | "remove") {
  const operator = action === "add" ? "$addToSet" : "$pull";
  return await Locations.updateOne(
    { location_id },
    { [operator]: { on_wishlist: user_id } }
  );
}
