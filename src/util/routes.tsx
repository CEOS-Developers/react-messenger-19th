import { createBrowserRouter } from 'react-router-dom';
import Layout from '@layout/Layout';
import ChattingRoomPage from '@pages/ChattingRoomPage/ChattingRoomPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'chattingroom',
        element: <ChattingRoomPage />,
      },
    ],
  },
]);
