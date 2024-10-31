import { MainPage } from '@/pages/main';
import { HistoryPage } from '@/pages/history';
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
