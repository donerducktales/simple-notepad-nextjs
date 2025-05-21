import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface State {
   click: boolean
}

const initialState: State = {
   click: false
}

const createPostSlice = createSlice({
   name: 'clickPost',
   initialState,
   reducers: {
      setClickPost: (state, action: PayloadAction<boolean>) => {
         state.click = action.payload;
      }
   }
});

export default createPostSlice.reducer;
export const { setClickPost } = createPostSlice.actions;