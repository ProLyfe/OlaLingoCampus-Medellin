import moment from 'moment';

export const isEventAfterNow = (timeString: string) => {
  const utcOffset = moment().utcOffset();
  return (
    moment(timeString).isAfter(moment().add(utcOffset, 'm'))
  )
}
