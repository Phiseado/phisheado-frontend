import axios from "axios";

const backendUrl = 'https://phishing-alert-backend.herokuapp.com/'

async function apiPost(endpoint, body) {
    return await axios.post(`${backendUrl}${endpoint}`, body)
}

export async function analyseMessage(message) {
    let response = await apiPost('check/', message)
    return response.data
}
