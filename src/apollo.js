import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache({
    typePolicies: {
      Movie: {
        fields: {
          isLiked: false,
        },
      },
    },
  }),
});

export default client;
