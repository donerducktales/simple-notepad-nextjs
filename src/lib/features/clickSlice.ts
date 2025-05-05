import { createSlice } from "@reduxjs/toolkit";

interface ClickState {
   value: number
}

const initialState: ClickState = {
   value: 0
}

const clickSlice = createSlice({
   name: 'click',
   initialState,
   reducers: {
      setValue: (state) => {
         state.value += 1
      },
   },
});

export default clickSlice.reducer;
export const { setValue } = clickSlice.actions;