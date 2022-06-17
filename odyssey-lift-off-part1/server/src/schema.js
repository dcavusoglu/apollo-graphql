const { gql } = require('apollo-server');

const typeDefs = gql`

type Query {
  "Get tracks array for homepage grid"
  tracksForHome: [Track!]!
}

"A track is a group of mudules teaching about a specific topic"

type Track {
  id: ID!
  title: String!
  author: Author!
  thumbnail: String
  length: Int
  modulesCount: Int
}

"Author of a track or a module"
type Author {
  id: ID!
  name: String!
  photo: String
}
`;

module.exports = typeDefs;
