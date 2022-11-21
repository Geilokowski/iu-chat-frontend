import axios from "axios";
import {useMemo} from "react";

const useAxios = () => {
    return useMemo(() => {
        axios.defaults.baseURL = "http://localhost:5000";

        axios.interceptors.request.use(function (config) {
            // Do something before request is sent
            config.headers.authorization = "Bearer " + sessionStorage.getItem("access-token");
            return config;
        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        });

        return axios;
    }, []);
}

export default useAxios;