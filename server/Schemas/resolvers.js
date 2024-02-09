const { Book } = require("../models");

module.exports = {
  // get a single book by its id
  Query: {
    // Resolver function for getting a single book by its ID
    getSingleBook: async (_, { id }) => {
      try {
        const foundBook = await Book.findById(id);
        if (!foundBook) {
          throw new Error("Book not found");
        }
        return foundBook;
      } catch (error) {
        throw new Error(`Error fetching book: ${error.message}`);
      }
    },
 Mutation: {
    // Resolver function for creating a new book
    createBook: async (_, { input }) => {
      try {
        const newBook = await Book.create(input);
        return newBook;
      } catch (error) {
        throw new Error(`Error creating book: ${error.message}`);
      }
    },
  // update a book by its id
  updateBook: async (_, { id, input }) => {
      try {
        const updatedBook = await Book.findByIdAndUpdate(id, input, {
          new: true,
          runValidators: true,
        });
        if (!updatedBook) {
          throw new Error("Book not found");
        }
        return updatedBook;
      } catch (error) {
        throw new Error(`Error updating book: ${error.message}`);
      }
    },
  // delete a book by its id
   deleteBook: async (_, { id }) => {
      try {
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
          throw new Error("Book not found");
        }
        return deletedBook;
      } catch (error) {
        throw new Error(`Error deleting book: ${error.message}`);
      }
    }
  }
}
}
