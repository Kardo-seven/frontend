import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  currentUser: UserPersonalData;
}

const initialState: UserState = {
  currentUser: {
  name: '',
  surName: '',
  lastName: '',
  birthday: '',
  gender: '',
  country: '',
  region: '',
  city: '',
  citizenship: '',
  socialLink: '',
  },
};

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const currentUserActions = currentUserSlice.actions;
export const currentUserReducer = currentUserSlice.reducer;
