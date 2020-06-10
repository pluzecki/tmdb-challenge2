const apiKey = `66683917a94e703e14ca150023f4ea7c`;
let stage;
let baseUrl;
let posterSizes;

const get = (url) => {
    const urlWithKey = url + (url.indexOf('?') > -1 ? '&' : '?' ) + `api_key=${apiKey}`;

    return fetch(urlWithKey, {
        'Accept': 'application/json'
    }).then(response => {
        return response.json();
    })
};

export const init = (stageInstance) => {
    stage = stageInstance;
};

export const getMovies = async ()=> {
    return await get('https://api.themoviedb.org/3/movie/popular');
};

export const getConfiguration = async () => {
    const configuration = await get('https://api.themoviedb.org/3/configuration');
    baseUrl = configuration.images.base_url;
    posterSizes = configuration.images.poster_sizes;
};

export const getPosterUrl = (path) => {
    return baseUrl + posterSizes[1] + path;
};