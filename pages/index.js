import { Flex } from '@chakra-ui/react';
import { Layout } from '@components/Layout';
// apollo server




export default function Index() {
  const { ApolloServer, gql } = require('apollo-server');
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
  }

  const server = new ApolloServer ({typeDefs, resolvers});

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  })

  return (
    <Layout>
      <Flex direction="column">Space X</Flex>
    </Layout>
  );
}
