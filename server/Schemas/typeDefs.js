const { gql } = require("apollo-server");

// Define the User type
const typeDefs = gql`
  type User {
    userId: ID!
    username: String!
    email: String!
  }

  type Auth {
    token: String!
    user: User!
  }

  input BookInput {
    authors: [String!]!
    description: String!
    title: String!
    bookId: ID!
    image: String!
    link: String!
  }

  type Query {
    me: User!
    # Add other queries as needed
  }

  type Mutation {
    login(email: String!, password: String!): Auth!
    addUser(username: String!, email: String!, password: String!): Auth!
    saveBook(bookInput: BookInput!): User!
    removeBook(bookId: ID!): User!
    # Add other mutations as needed
  }
`;

module.exports = typeDefs;
