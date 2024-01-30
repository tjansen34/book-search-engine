import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
        _id
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        _id
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation SaveBook($bookInput: BookInput!) {
    saveBook(bookInput: $bookInput) {
      // Define the fields you want to retrieve after saving a book
      // For example: id, title, author, etc.
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation RemoveBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      // Define the fields you want to retrieve after removing a book
      // For example: id, title, author, etc.
    }
  }
`;
