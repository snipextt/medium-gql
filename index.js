const { ApolloServer, gql } = require("apollo-server");
const moment = require("moment");

const server = new ApolloServer({
  resolvers: {
    Query: {
      getDateTime: () => ({
        date: moment().format("MMM DD YYYY"),
        isoString: new Date().toISOString(),
      }),
    },
  },
  typeDefs: gql`
    type dateTime {
      date: String!
      isoString: String!
    }
    type Query {
      getDateTime: dateTime
    }
  `,
});

server
  .listen(4000)
  .then(() =>
    console.log(
      `Application worker ${process.pid} is running a server at http://localhost:4000`
    )
  );
