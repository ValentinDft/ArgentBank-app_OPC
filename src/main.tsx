import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Topbar from './components/Topbar/Topbar';
import Footer from './components/Footer/Footer';

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
