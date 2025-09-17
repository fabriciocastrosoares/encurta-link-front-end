import axios from "axios";

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
};

function getRanking(token) {
    const promise = axios.get(`${process.env.REACT_APP_API_URL}/ranking`, createConfig(token));
    return promise;
};

const apiRankings = { getRanking };
export default apiRankings;