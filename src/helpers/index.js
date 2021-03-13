import moment from 'moment';

export const humanizeDate = (date) => {
  if (!date) return;
  const _date = new Date(date);
  return moment(_date).format('MMMM DD, YYYY');
}