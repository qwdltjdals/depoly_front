import axios from "axios";

const liveServerAddress = "https://iulove.store";
const localServerAddress = "http://localhost:8080";

export const instance = axios.create({
    baseURL: localServerAddress
})