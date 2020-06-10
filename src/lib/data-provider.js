import {Router} from "wpe-lightning-sdk";
import {getMovies, getConfiguration} from './api';

export default () => {

    Router.boot(async()=> {
        await getConfiguration();
    });

    Router.before("movies", async ({page})=>{
        const movies = await getMovies();
        page.movies = movies.results;
    }, 500 /* expires */);
}