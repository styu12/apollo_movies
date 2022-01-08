import { ApolloClient, InMemoryCache } from "@apollo/client";

// export const cache = new InMemoryCache({
//   typePolicies: {
//     Movie: {
//       fields: {
//         isLiked: false,
//       },
//     },
//   },
// });

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
    Mutation: {
      likeMovie: (_, { id }, { cache }) => {
        cache.modify({
          id: `Movie:${id}`,
          fields: {
            isLiked: (isLiked) => !isLiked,
          },
        });
      },
    },
  },
});

export default client;
