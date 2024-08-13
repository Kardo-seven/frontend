import { createSlice } from '@reduxjs/toolkit';

interface DirectionState {
  currentDirection: string;
}

const initialState: DirectionState = {
  currentDirection: '',
};

export const currentDirectionSlice = createSlice({
  name: 'currentDirection',
  initialState,
  reducers: {
    setCurrentDirection: (state, action) => {
      state.currentDirection = action.payload;
    },
  },
});

export const currentDirectionActions = currentDirectionSlice.actions;
export const currentDirectionReducer = currentDirectionSlice.reducer;
