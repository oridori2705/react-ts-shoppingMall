import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Mainpage from './pages/index.tsx';
import ProductDetail from './pages/products/[id].tsx';
import Productlist from './pages/products/index.tsx';
import { getClient } from './queryClient.ts';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './scss/index.scss'

const queryClient = getClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    
  },
  {
    path: "/pages",
    element: <Mainpage/>
  },
  {
    path: "/products",
    element: <Productlist />,
    
  },
  {
    path: "/products/:id",
    element: <ProductDetail />
  },
  
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} /> 
            <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
)
