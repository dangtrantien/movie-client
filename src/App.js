import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import IsLoading from './components/UI/IsLoading';

const Browse = lazy(() => import('./pages/Browse'));
const Search = lazy(() => import('./pages/Search'));

// ==================================================

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<IsLoading />}>
            <Browse />
          </Suspense>
        ),
      },
      {
        path: '/search',
        element: (
          <Suspense fallback={<IsLoading />}>
            <Search />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
