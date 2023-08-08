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
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const dateParts: string[] = date.split('/');
  return `${dateParts[0]} ${monthList[parseInt(dateParts[1]) - 1]} ${
    dateParts[2]
  }`;
};
