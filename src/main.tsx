import './styles/global.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import './styles/global.css';
import "@fontsource/work-sans/variable.css";

const router = createBrowserRouter(routes);
const mountPoint = document.getElementById('root');

if (!mountPoint) {
    throw new Error('Could not find mount point');
}

const root = ReactDOM.createRoot(mountPoint);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
