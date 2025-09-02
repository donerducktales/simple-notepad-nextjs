import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  selected: string | null;
}

const initialState: State = {
  selected: null,
};

const filterNotesSlice = createSlice({
  name: "filterNotes",
  initialState,
  reducers: {
    selectType: (state, action: PayloadAction<string | null>) => {
      state.selected = action.payload;
    },
  },
});

export default filterNotesSlice.reducer;
export const { selectType } = filterNotesSlice.actions;
