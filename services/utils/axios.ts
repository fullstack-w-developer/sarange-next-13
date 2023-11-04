import { mainUrl } from "@/helper/constants/env-variables";
import { logRequestedUrl } from "@/helper/utils/services";
import _axios from "axios";

const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin":"*"
};

const axios = _axios.create({
    headers,
    baseURL: mainUrl,
});

axios.interceptors.request.use(
    function (config) {
        logRequestedUrl(config);
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

export default axios;
