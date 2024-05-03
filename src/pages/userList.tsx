// src/pages/UserList.tsx

import React from 'react';
import { useRecoilValue } from 'recoil';
import { userListState } from '../state/userState';

interface User {
	id: string;
	name: string;
}

const UserList = () => {
	const users = useRecoilValue<User[]>(userListState);

	return (
		<ul>
			{users.map((user) => (
				<li key={user.id}>{user.name}</li>
			))}
		</ul>
	);
};

export default UserList;
