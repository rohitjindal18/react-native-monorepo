const cors = require('cors');
const express = require('express');
const {
  ApolloServer,
  defaultPlaygroundOptions,
} = require('apollo-server-express');
const schema = require('./schems');

const app = express();

app.use(cors());

const graphiqlPlayground = {
  ...defaultPlaygroundOptions,
  endpoint: 'http://localhost:8000/api',
  settings: {
    ...defaultPlaygroundOptions.settings,
    'editor.theme': 'dark',
  },
};

const books = [];


const resolvers = {
  Query: {
    getBooks: (_, data) => books,
},
  Mutation: {
    addBook: (parent, {
      title, author,
    }, {
        req,
    }) => {
        books.push({
            title,
            author: {
                name: author
            }
        });
        console.log(JSON.stringify(books));
        return {
            title,
            author: {
                name: author
            }
        }
    }
  }
}

const server = new ApolloServer({
  typeDefs: schema,
  playground: graphiqlPlayground,
  resolvers,
});

server.applyMiddleware({
  app,
  path: '/api',
});

app.listen(
  {
    port: 8000,
  },
  () => {
    console.log('Apollo Server on http://localhost:8000/api');
  },
);
