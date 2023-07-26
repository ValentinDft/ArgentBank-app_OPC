import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { store } from './store/store';
import { Provider } from 'react-redux';

// Components
import Home from './pages/Home/Home';
import Topbar from './components/Topbar/Topbar';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';

const router = createBrowserRouter([
  {
    element: (
      <>
        <Topbar />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '*',
        element: <div>Pas bon</div>,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
  {
    element: (
      <>
        <Topbar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
