import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Problems from './routes/Problems';
import Root from './routes/Root';
import Home from './routes/Home';
import ProblemDetail from './routes/ProblemDetail';
import { loader as problemsLoader } from './routes/Problems';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import "@fontsource/roboto";

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/problems",
        element: <Problems />,
        loader: problemsLoader(queryClient)
      }
    ]
  },
  {
    path: "/problems/:problemId",
    element: <ProblemDetail />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

      <Auth0Provider
        domain="leetcode.eu.auth0.com"
        clientId="fVG2PueJzxenWCjQB2fr3UquWmVbc76q"
        authorizationParams={{
          redirect_uri: "http://localhost:5173"
        }}
      >
        <RouterProvider router={router} />
      </Auth0Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
