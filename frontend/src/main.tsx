import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Problems from './routes/Problems';
import Root from './routes/Root';
import Home from './routes/Home';
import ProblemDetail from './routes/ProblemDetail';

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
        element: <Problems />
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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
