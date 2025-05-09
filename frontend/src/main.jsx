import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'
import { SnackbarProvider } from 'notistack';
import router from "./routers/router.jsx";
import './index.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SnackbarProvider>
      <RouterProvider router={ router } />
    </SnackbarProvider>
  </StrictMode>,
)
