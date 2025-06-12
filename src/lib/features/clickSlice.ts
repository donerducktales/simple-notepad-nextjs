import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ObjectId } from "mongodb";

interface ClickState {
   _id: ObjectId | null,
   title: string,
   description: string,
}

const initialState: ClickState = {
   _id: null,
   title: 'Hello!',
   description: 'Here will be your notes',
}

const clickNoteSlice = createSlice({
   name: 'clickNote',
   initialState,
   reducers: {
      setId: (state, action: PayloadAction<ObjectId | null>) => {
         state._id = action.payload
      },
      setTitle: (state, action: PayloadAction<string>) => {
         state.title = action.payload
      },
      setDescription: (state, action: PayloadAction<string>) => {
         state.description = action.payload
      },
      resetClickNoteState: () => ({ ...initialState }),
   },
});

export default clickNoteSlice.reducer;
export const { setId, setTitle, setDescription, resetClickNoteState } = clickNoteSlice.actions;