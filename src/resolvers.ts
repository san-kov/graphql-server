import { ResolverMap } from "./types/ResolverType";
import { User } from "./entity/User";
import Profile from "./entity/Profile";

const resolvers: ResolverMap = {
  User: {
    profile: async ({ id }) => {
      const user = await User.findOne(id, { relations: ["profile"] });
      if (!user) {
        return;
      }
      return user.profile;
    }
  },
  Query: {
    hello: () => `Hello ${name || "World"}!`,
    user: async (_, { id }) => {
      const user = await User.findOne(id, { relations: ["profile"] });
      console.log(user);

      return user;
    },
    users: async _ => {
      const users = await User.find({ relations: ["profile"] });
      console.log(users);

      return users;
    }
  },
  Mutation: {
    createUser: async (_, { profile, ...args }) => {
      const user = User.create(args);

      if (profile) {
        console.log({ ...profile });
        const profileModel = Profile.create({ ...profile });
        await profileModel.save();
        user.profile = profileModel;
      }

      return user.save();
    },
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
