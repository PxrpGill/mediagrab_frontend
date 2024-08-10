import { RouterProvider } from 'react-router-dom';
import { router } from './routing/Routing';

export const App = () => {
  return <RouterProvider router={router} />;
};
