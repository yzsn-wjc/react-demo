export const overCode = 10001;
export const urlPrefix = "/api";

export const axiosDefault = {
  timeout: 30000, // 默认30秒
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json; charset=UTF-8",
    "x-http-channel": "react-demo",
    "x-http-devicetype": "h5",
    "x-http-timestamp": Date.now(),
    "x-http-deviceuid": Date.now(),
    "client-name": "react-demo",
  },
};
