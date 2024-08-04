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
  tagTypes: ['Auth', 'Subscription', 'User'],
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
  }),
});

export const { useLoginMutation, useRegistrationMutation } = api;
