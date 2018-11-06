"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_yoga_1 = require("graphql-yoga");
const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`;
const resolvers = {
    Query: {
        hello: (_, { name }) => `Hello ${name || "World"}!`
    }
};
const server = new graphql_yoga_1.GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("server is running"));
//# sourceMappingURL=index.js.map