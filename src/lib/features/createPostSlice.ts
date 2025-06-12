import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface State {
   click: 'inactive' | 'createPost' | 'updatePost'
}

const initialState: State = {
   click: 'inactive'
}

const createPostSlice = createSlice({
   name: 'clickPost',
   initialState,
   reducers: {
      setClickPost: (state, action: PayloadAction<'inactive' | 'createPost' | 'updatePost'>) => {
         state.click = action.payload;
      }
   }
});

export default createPostSlice.reducer;
export const { setClickPost } = createPostSlice.actions;