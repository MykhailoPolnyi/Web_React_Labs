import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/fish"

export const getFish = async (id) => {
    const rawResponse = await axios.get(`${axios.defaults.baseURL}/${id}`);
    return rawResponse.data
}
export const getFishList = async () => {
    const rawResponse = await axios.get(axios.defaults.baseURL)
    return rawResponse.data
}