import { createBrowserRouter } from 'react-router-dom';
import Layout from '@layout/Layout';
import ChattingRoomPage from '@pages/ChattingRoomPage/ChattingRoomPage';
import ChattingListPage from '@pages/ChattingListPage/ChattingListPage';
import FriendListPage from '@pages/FriendListPage/FriendListPage';
import MyProfilePage from '@pages/MyProfilePage/MyProfilePage';
import NotFoundPage from '@pages/NotFoundPage/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <FriendListPage />,
      },
      {
        path: 'chattingroom/:id',
        element: <ChattingRoomPage />,
      },
      {
        path: 'chattinglist',
        element: <ChattingListPage />,
      },
      {
        path: 'myprofile',
        element: <MyProfilePage />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);
