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
	//users.slice(0);

	return (
		<ul>
			{users.slice(1).map((user) => (
				<li key={user.id}>{user.name}</li>
			))}
		</ul>
	);
};

export default UserList;
