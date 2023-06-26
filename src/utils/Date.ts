export const convertToReadabelDate = (date: String) => {
  const monthList: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Nov',
    'Dec',
  ];
  const dateParts: string[] = date.split('/');
  return `${dateParts[0]} ${monthList[Number(dateParts[1])]} ${dateParts[2]}`;
};
