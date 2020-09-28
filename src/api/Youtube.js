import axios from 'axios';
const KEY = 'AIzaSyCRd4cB8eNSIWTqUgGnh_ZXbKdIB-FabHI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 16,
        key: KEY
    }
})