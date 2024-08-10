import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

interface RegistrationRequest {
  email: string;
  password: string;
}

interface RegistrationResponse {
  id: number;
  email: string;
  authoritySet: [
    {
      authority: string;
    }
  ];
}
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kardo.zapto.org/',
    prepareHeaders: (headers) => {
      const authToken = localStorage.getItem('authToken');
      if (authToken) {
        headers.set('Authorization', `Bearer ${authToken}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Auth', 'Subscription', 'User', 'Event'],
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'authorization',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Auth'],
    }),
    registration: build.mutation<RegistrationResponse, RegistrationRequest>({
      query: (credentials) => ({
        url: 'registration',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Auth'],
    }),
    getMyProfile: build.query<UserProfile, void>({
      query: () => ({
        url: 'user/profile',
      }),
      providesTags: ['User'],
    }),
    getEvents: build.query<Event[], void>({
      query: () => ({
        url: 'event',
      }),
      providesTags: ['Event'],
    }),
    postAvatar: build.mutation<void, FormData>({
      query: (formData) => ({
        url: 'user/avatar/upload',
        method: 'POST',
        body: formData,
      }),
    }),
    patchPersonalData: build.mutation<UserPersonalData, UserPersonalData>({
      query: (formData) => ({
        url: `user/personal-information/update`,
        method: 'PATCH',
        body: formData,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useLoginMutation, useRegistrationMutation, useLazyGetMyProfileQuery, usePostAvatarMutation, usePatchPersonalDataMutation, useLazyGetEventsQuery } = api;