const { gql } = require('apollo-server');

const typeDefs = gql`

type Query {
  "Get tracks array for homepage grid"
  tracksForHome: [Track!]!
  track(id: ID!): Track
}

type Mutation {
  incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
}

type IncrementTrackViewsResponse {
  "like HTTP status code, shows the status of the mutation"
  code: Int!
  "indicates whether the mutation was successful"
  success: Boolean!
  "human readable message for the ui
  message: String!
  "newly updated track"
  track: Track
}

"A track is a group of mudules teaching about a specific topic"

type Track {
  id: ID!
  title: String!
  author: Author!
  thumbnail: String
  length: Int
  "The number of modules this track has"
  modulesCount: Int
  description: String
  numberOfViews: Int
  modules: [Module!]!
}

"A module is a single unit of teaching. Multiple modules compose a track."

type Module {
  id: ID!
  title: String!
  length: Int
}


"Author of a track or a module"
type Author {
  id: ID!
  name: String!
  photo: String
}
`;

module.exports = typeDefs;
