// src/utils/axiosInstance.ts
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://sua-api.com',  // Substitua pela URL da sua API
    headers: {
        'Content-Type': 'application/json',
    },
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')  // Recupera o token do localStorage
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`  // Adiciona o token ao cabeçalho da requisição
        }
        return config
    },
    (error) => Promise.reject(error)
)

export default api
