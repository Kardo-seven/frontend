import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import {
  NotFoundPage,
  LoginPage,
  MainPage,
  EventsPage,
  DirectionsPage,
  ProfilePage,
  ContentPage,
  EditProfilePage,
  SettingsAccountPage,
  DocumentsPage,
  ContestsPage,
  PrizePage,
  ApplyPage,
  ResourсesPage
} from './components';

import Layout from '../components/Layout';
import ProtectedRoute from '../components/ProtectedRoute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<NotFoundPage />}>
        <Route element={<ProtectedRoute />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route
            path="profile/edit-profile-info"
            element={<EditProfilePage />}
          />
          <Route path="profile/settings" element={<SettingsAccountPage />} />
          <Route path="/resources" element={<ResourсesPage />}></Route>
        </Route>
        <Route path="content" element={<ContentPage />} />
        <Route path="documents" element={<DocumentsPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="directions" element={<DirectionsPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="events/apply/:id" element={<ApplyPage />} />
        <Route path="events/contests" element={<ContestsPage />} />
        <Route path="events/prize" element={<PrizePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </>
  ),
  {
    basename: '/',
  }
);

export default router;
