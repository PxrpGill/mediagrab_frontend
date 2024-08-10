import { MainPage } from '@/pages/MainPage';
import { HistoryPage } from '@/pages/History';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/test',
    element: <HistoryPage />,
  },
]);
