import axios from "axios";

const backendUrl = 'https://phishing-alert-backend.herokuapp.com/'

async function apiPost(endpoint, body) {
    return await axios.post(`${backendUrl}${endpoint}`, body)
}

async function apiGet(endpoint) {
    return await axios.get(`${backendUrl}${endpoint}`)
}

export async function analyseMessage(message) {
    let response = await apiPost('check/', message)
    return response.data
}

export async function reportMessage(body) {
    let response = await apiPost('report-message/', body)
    return response.data
}

export async function getDomains() {
    let response = await apiGet('domains/')
    return response.data
}

export async function getPieChart() {
    let response = await apiGet('pie-chart/')
    return response.data
}

export async function getBarChart() {
    let response = await apiGet('bar-chart/')
    return response.data
}

export async function reTrainUrlModel() {
    let response = await apiPost('retrain-url-model/', {})
    return response.data
}