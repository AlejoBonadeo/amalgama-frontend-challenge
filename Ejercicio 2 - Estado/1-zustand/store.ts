import { create } from "zustand";

const useBookStore = create((set) => ({
  books: {},
  authors: {},
  users: {},
  fetchBooks: async () => {
    try {
      const res = await fetch(`/books`);
      const books = await res.json();
      const booksMap = Object.fromEntries(
        books.map(({ book }) => [
          book.id.toString(),
          { ...book, author: { id: book.author.id } },
        ])
      );
      const authorsMap = Object.fromEntries(
        books.map(({ author, ..._book }) => [
          author.id.toString(),
          { ...author },
        ])
      );
      set({ books: booksMap, authors: authorsMap });
    } catch (error) {
      console.error(error);
      // handle error
    }
  },
  fetchUsers: async () => {
    try {
      const res = await fetch(`/users`);
      const users = await res.json();

      const parsedUsers = users.map((favorite_books, ...user) => ({
        ...user,
        favorite_books: favorite_books.map(({ id, favorited_at }) => ({
          id,
          favorited_at,
        })),
      }));

      set({ users: parsedUsers });
    } catch (error) {
      console.error(error);
      // handle error
    }
  },
}));
