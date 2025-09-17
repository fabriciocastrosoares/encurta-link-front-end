import axios from "axios";

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
};

function createShortUrl(token, body) {
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/urls/shorten`, body, createConfig(token));
    return promise;
};

function loadUrlById(id) {
    const promise = axios.get(`${process.env.REACT_APP_API_URL}/urls/${id}`);
    return promise;
};

function redirectUrl(shortUrl) {
    const promise = axios.get(`${process.env.REACT_APP_API_URL}/urls/open/${shortUrl}`);
    return promise;
};

function deleteUrlById(token, id) {
    const promise = axios.delete(`${process.env.REACT_APP_API_URL}/urls/${id}`, createConfig(token));
    return promise;
};

const apiUrls = { createShortUrl, loadUrlById, redirectUrl, deleteUrlById };
export default apiUrls;