import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ObjectId, WithId } from "mongodb";

interface Note {
   _id: ObjectId,
   title: string,
   description: string,
}

interface SearchState {
   value: string;
   result: WithId<Note>[];
}

const initialState: SearchState = {
   value: '',
   result: []
}

export const fetchResults = createAsyncThunk(
   'search/fetchResults',
   async (searchValue: string) => {
      const response = await fetch(`/api/search?searchValue=${searchValue}`);
      const data = await response.json();
      return data;
   }
)

const searchNoteSlice = createSlice({
   name: 'searchNotes',
   initialState,
   reducers: {
      setSearchValue: (state, action: PayloadAction<string>) => {
         state.value = action.payload;
      },
      setInitialSearchValue: (state, action) => {
         state.result = action.payload;
      }
   },
   extraReducers(builder) {
      builder
         .addCase(fetchResults.fulfilled, (state, action) => {
            state.result = JSON.parse(JSON.stringify(action.payload));
         })
   },
})

export default searchNoteSlice.reducer;
export const {setSearchValue, setInitialSearchValue} = searchNoteSlice.actions;