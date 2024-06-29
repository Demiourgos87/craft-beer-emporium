import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// components
import Homepage from './pages/homepage.tsx';

// styles
import './styles/main.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
