import moment from "moment-timezone";

export const getTimezones = () => {
  return moment.tz.names().map((timezone) => ({
    value: timezone,
    label: timezone,
  }));
};
