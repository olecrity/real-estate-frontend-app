import { createContext, useContext, useReducer, useState } from "react";

const FiltersContext = createContext();

const initialState = {
  page: 1,
  limit: 5,
  sort: "newest",
  floor_min: null,
  floor_max: null,
  square_min: null,
  square_max: null,
  rooms_min: null,
  rooms_max: null,
  price_min: null,
  price_max: null,
  category: null,
  type: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "filters/set":
      return {
        ...state,
        floor_min: action.payload.floor_min,
        floor_max: action.payload.floor_max,
        square_min: action.payload.square_min,
        square_max: action.payload.square_max,
        rooms_min: action.payload.rooms_min,
        rooms_max: action.payload.rooms_max,
        price_min: action.payload.price_min,
        price_max: action.payload.price_max,
        category: action.payload.category,
        type: action.payload.type,
        page: 1,
      };
    case "filters/reset":
      return {
        ...state,
        floor_min: null,
        floor_max: null,
        square_min: null,
        square_max: null,
        rooms_min: null,
        rooms_max: null,
        price_min: null,
        price_max: null,
        category: null,
        type: null,
        page: 1,
      };
    case "pagination/set":
      return {
        ...state,
        page: action.payload.page,
        limit: action.payload.limit,
      };

    case "sort/set":
      return {
        ...state,
        sort: action.payload,
      };
    case "nRoomFlat/set":
      return {
        ...state,
        rooms_min: action.payload.rooms_min,
        rooms_max: action.payload.rooms_max,
        type: "квартира",
        page: 1,
      };
    case "category/set":
      return {
        ...state,
        category: action.payload,
        page: 1,
      };
    case "type/set":
      return {
        ...state,
        type: action.payload,
        page: 1,
      };
    default:
      throw new Error("Unknown action");
  }
}

function FiltersProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FiltersContext.Provider value={{ filters: state, dispatch }}>
      {children}
    </FiltersContext.Provider>
  );
}

function useFilters() {
  const context = useContext(FiltersContext);
  if (context === undefined)
    throw new Error("FiltersContext was used outside FiltersProvider");
  return context;
}

export { FiltersProvider, useFilters };
