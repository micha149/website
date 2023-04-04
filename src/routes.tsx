import { RouteObject } from 'react-router-dom';
import Layout from './components/Layout';
import IndexPage from './pages/index';
import ImpressumPage from './pages/impressum';
import DatenschutzPage from './pages/datenschutz';

const routes: RouteObject[] = [
    { path: '/', element: <Layout />, children: [
      { path: '/', element: <IndexPage /> },
      { path: 'impressum', element: <ImpressumPage /> },
      { path: 'datenschutz', element: <DatenschutzPage /> },
    ] },
];

export default routes;
