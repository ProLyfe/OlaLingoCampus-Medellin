import moment from "moment";

export function formatDate(dateString: string) {
  if (dateString) {
    return moment.utc(dateString).format(`D MMM, h:mm A`);
  } else {
    return "";
  }
}

export const getHoursMinutes = (dateString: string) => {
  if (dateString) {
    return moment.utc(dateString).format(`h:mm A`);
  } else {
    return "";
  }
};
