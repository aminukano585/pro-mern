import fs from 'fs';
import express from 'express';
import apollo from 'apollo-server-express';
const { ApolloServer } = apollo;

const app = express();
const port = 3000 || process.env.PORT;

let aboutMessage = "Issue Tracker API v1.0";

function setAboutMessage(_, { message }) {
  return aboutMessage = message;
}

const resolvers = {
  Query: {
    about: () => aboutMessage,
  },
  Mutation: {
    setAboutMessage,
  },
}

const server = new ApolloServer({
  typeDefs: fs.readFileSync('./server/schema.graphql', 'utf-8'),
  resolvers,
});

app.use(express.static('public'));

server.applyMiddleware({ app, path: '/graphql' });

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});