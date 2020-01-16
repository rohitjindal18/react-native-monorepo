const gql = require('graphql-tag');

const schema = gql`
  type Book {
    title: String
  }

  type Author {
    name: String
    books: [Book]
  }

  type Query {
    getBooks: [Book!]
    getAuthors: [Author!]
  }

  type Mutation {
    addBook(title: String!, author: String!): Book
  }
`;

module.exports = schema;
