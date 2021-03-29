import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://purple-quail-13.loca.lt/graphql",
  cache: new InMemoryCache(),
});

export default client;
