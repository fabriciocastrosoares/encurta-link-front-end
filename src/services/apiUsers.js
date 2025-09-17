import axios from "axios";

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
};

function getUser(token) {
    const promise = axios.get(`${process.env.REACT_APP_API_URL}/users/me`, createConfig(token));
    return promise;
};

const apiUsers = { getUser };
export default apiUsers;