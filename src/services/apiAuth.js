import axios from "axios";

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
};

function login(body) {
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/signin`, body);
    return promise;
};

function register(body) {
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/signup`, body);
    return promise;
};

function logout(token) {
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/logout`, {}, createConfig(token));
    return promise;
};

const apiAuth = { login, register, logout };
export default apiAuth;