import * as request from '../lib/request';

// const baseUrl = `http://localhost:3030/users`;

// Use environment variable for baseUrl
const baseUrl = `${import.meta.env.VITE_API_URL}/users` || `http://localhost:3030/users`;



export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, {
        email,
        password
    })
    
    return result;
};

export const register = async (name, email, username, password) => {
    const result = await request.post(`${baseUrl}/register`, {
            name,
            email,
            username,
            password
        })
    return result;    
};

export const logout = () => request.get(`${baseUrl}/logout`);


