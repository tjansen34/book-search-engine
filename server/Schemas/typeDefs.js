// typeDefs.js

const { gql } = require("apollo-server");

// Define the User type
const typeDefs = gql`
  type User {
    userId: ID!
    username: String!
    email: String!
    # Add other User fields as needed
  }

  # Define the Auth type
  type Auth {
    token: String!
    user: User!
  }

  # Define the input type for saveBook mutation
  input BookInput {
    authors: [String!]!
    description: String!
    title: String!
    bookId: ID!
    image: String!
    link: String!
  }

  # Define the Query type
  type Query {
    me: User!
    # Add other queries as needed
  }

  # Define the Mutation type
  type Mutation {
    login(email: String!, password: String!): Auth!
    addUser(username: String!, email: String!, password: String!): Auth!
    saveBook(bookInput: BookInput!): User!
    removeBook(bookId: ID!): User!
    # Add other mutations as needed
  }
`;

module.exports = typeDefs;
