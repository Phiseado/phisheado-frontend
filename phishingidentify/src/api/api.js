import axios from "axios";

const backendUrl = 'http://127.0.0.1:8000/'

async function apiPost(endpoint, body) {
    return await axios.post(`${backendUrl}${endpoint}`, body)
}

export async function analyseMessage(message) {
    let response = await apiPost('check/', message)
    return response.data
}