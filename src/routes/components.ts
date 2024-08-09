import { lazy } from 'react';
import SettingsAccountPage from '../pages/SettingsAccountPage/index';
import DocumentsPage from '../pages/DocumentsPage/index';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const MainPage = lazy(() => import('../pages/MainPage'));
const EventsPage = lazy(() => import('../pages/EventsPage'));
const DirectionsPage = lazy(() => import('../pages/DirectionsPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));
const ContentPage = lazy(() => import('../pages/ContentPage'));
const EditProfilePage = lazy(() => import('../pages/EditProfilePage'));
const SettingsAccountPage = lazy(() => import('../pages/SettingsAccountPage'));
const DocumentsPage = lazy(() => import('../pages/DocumentsPage'));

export { LoginPage, NotFoundPage, MainPage, EventsPage, DirectionsPage, ProfilePage, ContentPage, EditProfilePage, SettingsAccountPage, DocumentsPage };
