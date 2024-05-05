import userList from 'data/userData.json';

const findReplyTargetName = (targetId: string | undefined) => {
  if (targetId == 'user0') {
    return '조유담';
  }
  return userList.users.find((user) => targetId === user.id)?.name;
};

export default findReplyTargetName;
