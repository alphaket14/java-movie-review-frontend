import axios from 'axios';

export default axios.create({
    baseURL:'https://java-movie-review-backend.onrender.com',
    headers: {"ngrok-skip-browser-warning": "true"}
});