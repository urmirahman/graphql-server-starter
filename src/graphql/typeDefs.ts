import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: String!
    createdAt: String
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
  }
`;
