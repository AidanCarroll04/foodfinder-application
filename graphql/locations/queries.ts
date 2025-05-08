import {
    findAllLocations,
    findLocationsById,
    onUserWishList,
  } from 'mongoose/locations/services'
  
  export const locationQueries = {
    allLocations: async () => {
      return await findAllLocations()
    },
    locationsById: async (_: any, param: { location_ids: string[] }) => {
      return await findLocationsById(param.location_ids)
    },
    onUserWishList: async (_: any, param: { user_id: string }) => {
      return await onUserWishList(param.user_id)
    },
  };
  