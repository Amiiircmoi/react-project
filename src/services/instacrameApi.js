import axios from 'axios';

// Récupération des posts depuis l'API
export const getPosts = async () => {
    const request = await axios.get(
        `${process.env.API_URL}/get`
    );
    return request.data.results;
}

// Envoi d'un nouveau post vers l'API
export const newPost = async (post) => {
    const request = await axios.post(
        `${process.env.API_URL}/post`
    )
}