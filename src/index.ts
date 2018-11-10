import "reflect-metadata";
import * as path from "path";
import * as fs from "fs";
import { GraphQLServer } from "graphql-yoga";
import { createConnection } from "typeorm";

const typeDefs = fs.readFileSync(path.join(__dirname, "user.graphql"), "utf8");
import resolvers from "./resolvers";
const server = new GraphQLServer({ typeDefs, resolvers });

(async () => {
  await createConnection();
  await server.start();
  console.log("server is running");
})();
