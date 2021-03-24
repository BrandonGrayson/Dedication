import  ApollerServer, { gql, ApolloServer } from "apollo-server-micro";

const typeDefs = gql `
type Book {
  title: String
  author: String
}

type Query {
  books: [Book]
}
`;

const books = [
  {
   title: 'The Awakening',
   author: 'Kate Chopin'
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster'
  }
]

const resolvers = {
  Query: {
    books: () => books
  }
};

const apolloServer = new ApolloServer ({typeDefs, resolvers});

const handler = apolloServer.createHandler({ path: '/api/graphql'});

export const config = {
    api: {
        bodyParser: false
    }
};

export default handler;

