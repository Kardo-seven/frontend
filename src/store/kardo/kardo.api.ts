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
      const avatar = localStorage.getItem('avatar');
      if (authToken) {
        headers.set('Authorization', `Bearer ${authToken}`);
      }
      if (avatar) {
        headers.set('Content-Type', 'multipart/form-data');
        headers.append('Content-Type', 'boundary=myBoundary');
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
    getUserEvents: build.query<any, void>({
      query: () => ({
        url: 'user/request',
      }),
    }),
    postAvatar: build.mutation<FormData, any>({
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
    getEvents: build.query<EventData[], void>({
      query: () => ({
        url: 'event',
      }),
      providesTags: ['Event'],
    }),
    getSizeKinds: build.query<number, void>({
      query: () => ({
        url: 'profile/kids-and-staff-size',
      }),
    }),
    getChildren: build.query<ChildData[], ChildPersonalData>({
      query: (formData) => ({
        url: `profile/kids_and_experts?${new URLSearchParams(formData).toString()}`,
      }),
    }),
    getDocuments: build.query<DocumentData[], void>({
      query: () => ({
        url: 'about/documents',
      }),
    }),
    postApplyEvent: build.mutation<any, { data: ApplyEvent, eventId: string }>({
      query: ({ data, eventId }) => ({
        url: `user/request/${eventId}`,
        method: 'POST',
        body: data,
      }),
    }),
    getResources: build.query<ResourceData[], void>({
      query: () => ({
        url: 'about/branding',
      }),
    })
  }),
});

export const {
  useLoginMutation,
  useRegistrationMutation,
  useLazyGetMyProfileQuery,
  usePostAvatarMutation,
  usePatchPersonalDataMutation,
  useLazyGetDocumentsQuery,
  useLazyGetEventsQuery,
  useLazyGetUserEventsQuery, 
  usePostApplyEventMutation,
  useLazyGetResourcesQuery,
  useLazyGetChildrenQuery,
  useLazyGetSizeKindsQuery
} = api;
