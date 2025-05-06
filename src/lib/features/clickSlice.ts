import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ClickState {
   title: string,
   description: string,
}

const initialState: ClickState = {
   title: 'Hello!',
   description: 'Here will be your notes',
}

const clickNoteSlice = createSlice({
   name: 'clickNote',
   initialState,
   reducers: {
      setTitle: (state, action: PayloadAction<string>) => {
         state.title = action.payload
      },
      setDescription: (state, action: PayloadAction<string>) => {
         state.description = action.payload
      },
   },
});

export default clickNoteSlice.reducer;
export const { setTitle, setDescription } = clickNoteSlice.actions;