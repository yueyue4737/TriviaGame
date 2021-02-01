const { ApolloServer, gql } = require("apollo-server");
const ResultAPI = require("./datasources/results");

const typeDefs = require("./schema.js");
const resolvers = require("./resolvers.js");

const dataSources = () => ({
  resultAPI: new ResultAPI()
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources
});

server.listen(8080, "127.0.0.1").then(({ url }) => {
  console.log(`graphQL running at ${url}`);
});
