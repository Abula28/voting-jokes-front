import { enqueueSnackbar } from "notistack";

export const NotifySuccess = (message: string) => {
  return enqueueSnackbar(message, {
    variant: "success",
    anchorOrigin: {
      vertical: "top",
      horizontal: "center",
    },
    autoHideDuration: 2000,
  });
};

export const NotifyError = (message: string) => {
  return enqueueSnackbar(message, {
    variant: "error",
    anchorOrigin: {
      vertical: "top",
      horizontal: "center",
    },
    autoHideDuration: 2000,
  });
};
