import * as request from '../lib/request';

// const baseUrl = `http://localhost:3030/data/comments`;

// Use environment variable for baseUrl
const baseUrl = `${import.meta.env.VITE_API_URL}/data/comments` || 'http://localhost:3030/data/comments';

export const getAll = async (bookId) => {

    const query = new URLSearchParams({
        where: `bookId="${bookId}"`,
        load: `owner=_ownerId:users`, 
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (bookId, text) => {
    const newComment = await request.post(baseUrl, {
        bookId,
        text
    });
    
    return newComment;
}