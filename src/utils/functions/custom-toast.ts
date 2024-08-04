import { toast } from "react-toastify";

export const myToast = (err: any) => {
  if (err && err.response) {
    const { response } = err;

    const message = response.data?.message || response.data?.error;
    toast(message || "Something went wrong", {
      hideProgressBar: true,
      autoClose: 3000,
      type: "error",
    });
  } else {
    toast("Something went wrong", {
      hideProgressBar: true,
      autoClose: 3000,
      type: "error",
    });
  }
};
