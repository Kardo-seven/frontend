import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLOnboardingOpen: true,
};

const onboardingSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsOnboardingOpen(state, action) {
      state.isLOnboardingOpen = action.payload;
    },
  },
});

export const onboardingActions = onboardingSlice.actions;
export const onboardingReducer = onboardingSlice.reducer;
