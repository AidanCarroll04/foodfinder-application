import { locationQueries } from './locations/queries'
import { locationMutations } from './locations/mutations'

export const resolvers = {
  Query: {
    ...locationQueries,
  },
  Mutation: {
    ...locationMutations,
  },
};
