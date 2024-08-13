import { configureStore } from '@reduxjs/toolkit';
import { api } from './kardo/kardo.api';
import { authReducer } from './kardo/auth.slice';
import { onboardingReducer } from './kardo/onboarding.slice';
import { modalReducer } from './kardo/modal.slice';
import { popupReducer } from './kardo/popup.slice';
import { currentUserReducer } from './kardo/profile.slice';
import {currentEventReducer} from './kardo/event.slice'
import { currentChildReducer } from './kardo/child.slice';
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    onboarding: onboardingReducer,
    modal: modalReducer,
    popup: popupReducer,
    user: currentUserReducer,
    event: currentEventReducer,
    child: currentChildReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;