import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface SearchState {
 searchState: string;
}

// Initial state
const initialState: SearchState = {
    searchState: "",
};

// Actual Slice
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    // Action to set the authentication status
    setSearchState: (state, action) => {
      state.searchState = action.payload;
    },
  },

});

export const { setSearchState } = searchSlice.actions;

export const selectSearchState = (state: AppState) => state.search.searchState;

export default searchSlice.reducer;
