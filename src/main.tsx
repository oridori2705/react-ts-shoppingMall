import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Mainpage from './pages/index.tsx';
import ProductDetail from './pages/products/[id].tsx';
import { getClient } from './queryClient.ts';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './scss/index.scss'
import { worker } from './mocks/browser'; //공식사이트는 변수선언인데 일단 import로 바꿔줌
import { Productlist } from './pages/products/index.tsx';
import {
  RecoilRoot
} from 'recoil';

const queryClient = getClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children :[
      {
        path: "/pages",
        element: <Mainpage/>,
        
      },
      {
        path: "/products",
        element: <Productlist />,
        
        
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
        
      },
      {
        path: "/cart",
        element: <ProductDetail />,
        
      },
    ]
  }
      
  
]);
//원래 process.env.NODE_ENV === 'development' 로 써져있었는데 
//vite에서는 좀 달라서 바꿔줌
if (import.meta.env.DEV) {
  worker.start()
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
              <RouterProvider router={router} />
              <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
)
