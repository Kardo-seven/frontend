import { configureStore } from '@reduxjs/toolkit';
import { api } from './kardo/kardo.api';
import { authReducer } from './kardo/auth.slice';
import { onboardingReducer } from './kardo/onboarding.slice';
import { modalReducer } from './kardo/modal.slice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    onboarding: onboardingReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
