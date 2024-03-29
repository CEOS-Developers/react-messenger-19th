export const formatDateToTime = (isoString: string) => {
  const date = new Date(isoString);
  console.log(date);
  return date.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};
