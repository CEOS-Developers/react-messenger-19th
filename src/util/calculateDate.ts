export const formatDate = (date: Date) => {
  const year = date.getFullYear().toString();
  let month = (date.getMonth() + 1).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const formatTime = (date: Date) => {
  let hour = date.getHours().toString().padStart(2, '0');
  let minute = date.getMinutes().toString().padStart(2, '0');
  return `${hour}:${minute}`;
};