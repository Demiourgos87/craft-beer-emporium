import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// components
import Homepage from './pages/homepage.tsx';
import ProductPage from './pages/product.tsx';
import ManagePage from './pages/manage.tsx';

// styles
import './styles/main.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/product/:id',
    element: <ProductPage />,
  },
  {
    path: '/manage',
    element: <ManagePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
