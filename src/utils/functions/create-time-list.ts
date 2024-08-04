import moment from 'moment';

export const createTimeList = (selecteDate: Date, durationInMinutes: number) => {
  const minutesInDay = 24 * 60;
  const step = 30;
  const from = 0 * 60;
  
  const selectedMoment = moment(selecteDate);
  const utcOffset = selectedMoment.utcOffset();
  selectedMoment.add(utcOffset, 'm');

  let list = []
  for (let minutes = from; minutes < minutesInDay; minutes += step) {
    const h =  Math.floor(minutes / 60);
    const m = minutes % 60;
    const start = selectedMoment.utc().hour(+h).minute(+m).seconds(0).millisecond(0);
    const end = start.clone().add(+durationInMinutes * 60 * 1000);
    list.push({
      label: start.format("hh:mm A") + ' - ' + end.format("hh:mm A"),
      value: start.toISOString(),
    });
  }
  return list;
}
