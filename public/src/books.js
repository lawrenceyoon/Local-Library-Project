function findAuthorById(authors, id) {
  const found = authors.filter((author) => author.id === id);
  return found[0];
}

function findBookById(books, id) {
  // It returns the book object that has the matching ID.
  const found = books.find((book) => book.id === id);
  return found;
}

function partitionBooksByBorrowedStatus(books) {
  const loanedOut = []; // .returned = false
  const returned = []; // .returned = true
  // join these two arrays in an array;
  // result = [loanedOut, returned];

  for (let book of books) {
    if (book.borrows[0].returned === false) {
      loanedOut.push(book);
    } else {
      returned.push(book);
    }
  }
  return [loanedOut, returned];
}

function getBorrowersForBook(book, accounts) {
  // Return array of all transactions from the book's `borrows` key. However, each transaction should include the related account information and the `returned` key.
  const arr = [];
  for (let item of book.borrows) {
    for (let account of accounts) {
      if (item.id === account.id) {
        arr.push(account);
        account.returned = item.returned;
      }
    }
  }
  return arr.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
