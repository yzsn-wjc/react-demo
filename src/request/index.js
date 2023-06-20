import axios from "axios";
import { message } from "antd";

import { axiosDefault, urlPrefix, overCode } from "./config.js";

const Axios = axios.create(axiosDefault);

Axios.interceptors.request.use(
  (request) => {
    const { customerHeaders = {} } = request;
    const _header = {};
    request.headers = { ...request.headers, ..._header, ...customerHeaders };
    return request;
  },
  (err) => Promise.reject(err)
);

Axios.interceptors.response.use(
  async (response) => {
    const { data, config } = response;
    const { needToast = true } = config;
    if (data.code === overCode) {
    } else if (data.code !== 200) {
      needToast && message.error(data.message || "接口请求错误");
      return Promise.reject(data);
    }
    return response;
  },
  (err = {}) => {
    const { config } = err;
    const { needToast = true } = config || {};
    needToast && message.error(err.message || "接口请求错误");
    return Promise.reject(err);
  }
);

const defauleConfig = { needToast: true, customerHeaders: {} };

const request = (url, params = {}, config, method = "post") => {
  const newConfig = { ...defauleConfig, ...config };
  return new Promise((resolve, reject) => {
    Axios[method](`${urlPrefix}${url}`, params, { ...newConfig })
      .then((rs) => resolve(rs.data), reject)
      .catch(reject);
  });
};

const post = (url, params, c) => request(url, params, c || {}, "post");
const get = (url, params, c) => request(url, params, c || {}, "get");
export { axios, request, post, get };

export default request;
