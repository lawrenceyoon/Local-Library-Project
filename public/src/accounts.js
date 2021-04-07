function findAccountById(accounts, id) {
  const found = accounts.find((account) => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((lastNameA, lastNameB) =>
    lastNameA.name.last > lastNameB.name.last ? 1 : -1
  );
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const totalBorrows = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);
    return acc + totalBorrows;
  }, 0);
}

// getTotalNumberOfBorrows(account, books); // 22

function getBooksPossessedByAccount(account, books, authors) {
  //   It returns an array of books and authors that represents all books _currently checked out_ by the given account. _Look carefully at the object below,_ as it's not just the book object; the author object is embedded inside of it.

  // returned === false
  //   const arr = [];
  const arr = [];
  books.map((book) => {
    book.borrows.map((borrow) => {
      if (borrow.returned === false && account.id === borrow.id) {
        arr.push(book);
      }
    });
  });
  arr.map((item) => {
    item.author = authors.find((author) => author.id === item.authorId);
  });
  return arr;
}

/*
  [
    {
      id: "5f447132320b4bc16f950076",
      title: "est voluptate nisi",
      genre: "Classics",
      authorId: 12,
      author: {
        id: 12,
        name: {
          first: "Chrystal",
          last: "Lester",
        },
      },
      borrows: [
        {
          id: "5f446f2e6059326d9feb9a68",
          returned: false,
        },
        ...
      ],
    },
  ]
*/

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
