import { createSlice } from '@reduxjs/toolkit';

interface ChildState {
  currentChild: ChildData;
}

const initialState: ChildState = {
  currentChild: {
    id: 0,
  name: '',
  lastName: '',
  surName: '',
  linkSet: [
      {
        link: '',
      }
    ],
    about: '',
    isChild: true,
    isChildExpert: true,
    avatarLink: ''
  },
};

export const currentChildSlice = createSlice({
  name: 'currentChild',
  initialState,
  reducers: {
    setCurrentChild: (state, action) => {
      state.currentChild = action.payload;
    },
  },
});

export const currentChildActions = currentChildSlice.actions;
export const currentChildReducer = currentChildSlice.reducer;
