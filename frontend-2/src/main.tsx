import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { ThemeProvider } from "@/context/theme-provider"
import Root from './pages/Root'
import ProblemWorkspace from './pages/ProblemWorkspace'
import { loader as problemLoader } from '@/pages/ProblemWorkspace'
import { loader as problemListLoader } from '@/pages/ProblemList'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ProblemList from '@/pages/ProblemList'
import Landing from '@/pages/Landing'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Landing />
      },
      {
        path: "/problems",
        element: <ProblemList />,
        loader: problemListLoader(queryClient)
      }
    ]
  },
  {
    path: "/problems/:problemId",
    element: <ProblemWorkspace />,
    loader: problemLoader(queryClient)
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Auth0Provider
          domain="leetcode.eu.auth0.com"
          clientId="fVG2PueJzxenWCjQB2fr3UquWmVbc76q"
          authorizationParams={{
            audience: "https://api.leetcode.treppmann.dev",
            redirect_uri: "http://localhost:5173/problems"
          }}>
          <RouterProvider router={router} />
        </Auth0Provider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
