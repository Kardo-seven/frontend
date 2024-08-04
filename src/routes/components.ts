import { lazy } from 'react';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const MainPage = lazy(() => import('../pages/MainPage'));
const EventsPage = lazy(() => import('../pages/EventsPage'));
const DirectionsPage = lazy(() => import('../pages/DirectionsPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));
const ContentPage = lazy(() => import('../pages/ContentPage'));
const ContestsPage = lazy(() => import('../pages/ContestsPage'));

export { LoginPage, NotFoundPage, MainPage, EventsPage, DirectionsPage, ProfilePage, ContentPage, ContestsPage };
