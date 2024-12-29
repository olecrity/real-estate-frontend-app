import { createContext, useCallback, useContext, useReducer } from "react";

const BookmarksContext = createContext();

const initialState = {
  bookmarks: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "bookmarks/add":
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
      };
    case "bookmarks/remove":
      return {
        ...state,
        bookmarks: state.bookmarks.filter((b) => b !== action.payload),
      };
    case "bookmarks/set":
      return {
        ...state,
        bookmarks: action.payload,
      };
    case "bookmarks/reset":
      return {
        ...initialState,
      };
    default:
      throw new Error("Unknown action");
  }
}

function BookmarksProvider({ children }) {
  const [{ bookmarks }, dispatch] = useReducer(reducer, initialState);

  function addBookmark(id) {
    const newBookmarks = [...bookmarks, id];
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
    dispatch({ type: "bookmarks/add", payload: id });
  }
  function removeBookmark(id) {
    const newBookmarks = bookmarks.filter((b) => b !== id);
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));

    dispatch({ type: "bookmarks/remove", payload: id });
  }
  const setBookmarks = useCallback(function setBookmarks() {
    const storageBookmarks = localStorage.getItem("bookmarks");
    if (storageBookmarks) {
      dispatch({
        type: "bookmarks/set",
        payload: JSON.parse(storageBookmarks),
      });
    }
  }, []);
  function resetBookmarks() {
    dispatch({ type: "bookmarks/reset" });
    localStorage.removeItem("bookmarks");
  }
  return (
    <BookmarksContext.Provider
      value={{
        bookmarks,
        addBookmark,
        removeBookmark,
        setBookmarks,
        resetBookmarks,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}

function useBookmarks() {
  const context = useContext(BookmarksContext);
  if (context === undefined)
    throw new Error("BookmarksContext was used outside BookmarksProvider");
  return context;
}

export { BookmarksProvider, useBookmarks };
