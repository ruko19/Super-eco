import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventosList: [],
};

export const eventosSlice = createSlice({
  name: "eventos",
  initialState,
  reducers: {
    getEventos: (state, action) => {
      state.eventosList = action.payload;
    },
  },
});

export const { getEventos } = eventosSlice.actions;
export default eventosSlice.reducer;
