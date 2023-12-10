import { Auth0Provider } from '@auth0/auth0-react';
import { ThemeProvider } from "@emotion/react";
import "@fontsource/roboto";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Dashboard from './routes/Dashboard';
import Home from './routes/Home';
import ProblemDetail from './routes/ProblemDetail';
import Problems, { loader as problemsLoader } from './routes/Problems';
import Root from './routes/Root';
import theme from "./theme";

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
      },
      {
        path: "/dashboard",
        element: <Dashboard />
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
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Auth0Provider
          domain="leetcode.eu.auth0.com"
          clientId="fVG2PueJzxenWCjQB2fr3UquWmVbc76q"
          authorizationParams={{
            audience: "https://api.leetcode.treppmann.dev",
            redirect_uri: "http://localhost:5173/problems"
          }}
        >
          <RouterProvider router={router} />
        </Auth0Provider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
