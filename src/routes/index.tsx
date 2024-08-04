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
  ContestsPage
} from './components';

import Layout from '../components/Layout';
import ProtectedRoute from '../components/ProtectedRoute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<NotFoundPage />}>
        <Route element={<ProtectedRoute />}>
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route path="content" element={<ContentPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="directions" element={<DirectionsPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="contests" element={<ContestsPage />} />
        
        
      </Route>
    </>
  ),
  {
    basename: '/',
  }
);

export default router;
