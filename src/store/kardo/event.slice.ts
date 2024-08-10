import { createSlice } from '@reduxjs/toolkit';

interface EventState {
  currentEvent: Event;
}

const initialState: EventState = {
  currentEvent: {
    id: 0,
    eventDate: '',
    startTime: '',
    endTime: '',
    description: '',
    eventType: '',
    location: '',
    title: '',
    isGrandFinalEvent: false,
    eventImageDtoResponse: {
      id: 0,
      title: '',
      type: '',
      link: ''
    },
    directionSet: [
      {
        direction: ''
      }
    ]
  },
};

export const currentEventSlice = createSlice({
  name: 'currentEvent',
  initialState,
  reducers: {
    setCurrentEvent: (state, action) => {
      state.currentEvent = action.payload;
    },
  },
});

export const currentEventActions = currentEventSlice.actions;
export const currentEventReducer = currentEventSlice.reducer;
