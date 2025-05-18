import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'
import { SnackbarProvider } from 'notistack';
import router from "./routers/router.jsx";
import './index.css';
import { Provider } from 'react-redux'
import { store } from './redux/store.js'



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <SnackbarProvider>
      <RouterProvider router={ router } />
    </SnackbarProvider>
  </Provider>,
)
