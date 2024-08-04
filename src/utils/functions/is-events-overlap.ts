import moment from "moment";

export const isEventsOverlap = (event1Start: string, event1End: string, event2Start: string, event2End: string) => {
  const start1 = moment(event1Start);
  const end1 = moment(event1End);
  const start2 = moment(event2Start);
  const end2 = moment(event2End);

  const isOverlap = start1.isBefore(end2) && end1.isAfter(start2);

  return isOverlap;
}
