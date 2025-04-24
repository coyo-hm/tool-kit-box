export const calcDateDiff = (_to: Date, _from: Date) => {
  const to = new Date(_to.getFullYear(), _to.getMonth(), _to.getDate());
  const from = new Date(_from.getFullYear(), _from.getMonth(), _from.getDate());

  const timeDiff = to.getTime() - from.getTime();
  const diffInDate = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const diffInYears = to.getFullYear() - from.getFullYear();
  const monthDiff = to.getMonth() - from.getMonth();

  let diffInMonths = diffInYears * 12 + monthDiff;

  // console.log(yearDiff, diffInMonths, diffInDate);
  // if (dateDiff < 0) diffInMonths -= 1;

  // if (monthDiff < 0 || (monthDiff === 0 && dateDiff < 0)) {
  //   diffInYears -= 1;
  // }
  return {
    date: diffInDate,
    month: Math.abs(diffInMonths),
    year: Math.abs(diffInYears),
  };
};
