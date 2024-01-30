const { Book } = require("../models");

module.exports = {
  // get a single book by its id
  async getSingleBook({ params }, res) {
    const foundBook = await Book.findById(params.id);

    if (!foundBook) {
      return res
        .status(400)
        .json({ message: "Cannot find a book with this id!" });
    }

    res.json(foundBook);
  },
  // create a book
  async createBook({ body }, res) {
    const book = await Book.create(body);

    if (!book) {
      return res.status(400).json({ message: "Something is wrong!" });
    }

    res.json(book);
  },
  // update a book by its id
  async updateBook({ params, body }, res) {
    const updatedBook = await Book.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedBook) {
      return res
        .status(404)
        .json({ message: "Couldn't find book with this id!" });
    }

    res.json(updatedBook);
  },
  // delete a book by its id
  async deleteBook({ params }, res) {
    const deletedBook = await Book.findByIdAndDelete(params.id);

    if (!deletedBook) {
      return res
        .status(404)
        .json({ message: "Couldn't find book with this id!" });
    }

    res.json(deletedBook);
  },
};
