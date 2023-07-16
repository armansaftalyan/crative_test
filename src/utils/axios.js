import axios from 'axios'

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
})

instance.interceptors.request.use((config) => {
        const token =  localStorage.token;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response.data.message === 'Unauthenticated.') {
            localStorage.removeItem('token')
            window.location.reload()
        }
        return Promise.reject(error)
    }
)

export default instance
