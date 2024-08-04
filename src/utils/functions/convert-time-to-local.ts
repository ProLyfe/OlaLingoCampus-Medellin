export const converTimeToLocal = (time: string): Date => {
  const year = parseInt(time.substr(0, 4));
  const month = parseInt(time.substr(5, 2)) - 1;
  const day = parseInt(time.substr(8, 2));
  const hours = parseInt(time.substr(11, 2));
  const minutes = parseInt(time.substr(14, 2));

  const date = new Date();
  date.setFullYear(year);
  date.setMonth(month);
  date.setDate(day);
  date.setHours(hours);
  date.setMinutes(minutes);
  return date;
};
