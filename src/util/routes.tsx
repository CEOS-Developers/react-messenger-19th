import { createBrowserRouter } from 'react-router-dom';
import Layout from '@layout/Layout';
import ChattingRoomPage from '@pages/ChattingRoomPage/ChattingRoomPage';
import ChattingListPage from '@pages/ChattingListPage/ChattingListPage';
import FriendListPage from '@pages/FriendListPage/FriendListPage';
import MyProfilePage from '@pages/MyProfilePage/MyProfilePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'chattingroom/:id',
        element: <ChattingRoomPage />,
      },
      {
        path: 'chattinglist',
        element: <ChattingListPage />,
      },
      {
        path: 'friendlist',
        element: <FriendListPage />,
      },
      {
        path: 'myprofile',
        element: <MyProfilePage />,
      },
    ],
  },
]);
