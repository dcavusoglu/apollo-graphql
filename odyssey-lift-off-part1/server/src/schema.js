const { gql } = require('apollo-server');

const typeDefs = gql`

type Query {
  "Get tracks array for homepage grid"
  tracksForHome: [Track!]!
  track(id: ID!): Track
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
