import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000',  // Substitua com a URL correta da sua API
    headers: {
        'Content-Type': 'application/json',
    },
})

// Interceptor para adicionar o token de autenticação nas requisições
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
