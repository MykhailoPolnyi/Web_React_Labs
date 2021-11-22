import axios from "axios";

const BASE_URL = "http://localhost:5000/fish"

const http = axios.create({
    baseURL: "http://localhost:5000/fish",
    headers: {
        'Content-type': 'application-json'
    }
});

export const getFish = async (id) => {
    const rawResponse = await http.get(`${BASE_URL}/${id}`);
    return rawResponse.data
}
export const getFishList = async (type = '', name = '') => {
    const rawResponse = await axios.get(`http://localhost:5000/fish?type=${type}&name=${name}`)
    return rawResponse.data
}
