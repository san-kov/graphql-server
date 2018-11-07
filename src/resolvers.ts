import { ResolverMap } from "./types/ResolverType";
import { User } from "./entity/User";

const resolvers: ResolverMap = {
  Query: {
    hello: () => `Hello ${name || "World"}!`,
    user: (_, { id }) => User.findOne(id),
    users: _ => User.find()
  },
  Mutation: {
    createUser: (_, args) => User.create(args).save(),
    updateUser: async (_, { id, ...args }) => {
      try {
        await User.update(id, { ...args });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
    deleteUser: async (_, { id }) => {
      try {
        await User.delete(id);
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    }
  }
};

export default resolvers;
