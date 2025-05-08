export default `
  allLocations: [Location]
  locationsById(location_ids: [String]!): [Location]
  onUserWishList(user_id: String!): [Location]
`;
