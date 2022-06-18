const resolvers = {
  Query: {
    // returns an array of tracks which will be used to populate
    // the home page grid of our web client
    tracksForHome: (_, __, {dataSources}) => {
      return dataSources.trackAPI.getTracksFromHome();
    },
  },

  Track: {
    author: ({authorId}, _, {dataSources}) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
}


module.exports = resolvers;
