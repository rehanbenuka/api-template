import {
    deleteMovie,
    updateMovie,
    getMovieById,
    getMovies,
    addNewMovie
} from '../controllers/controller.mjs';

const routes = (app) => {
    app.route('/movie')
    // get all contacts
    .get((req,res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();  
    }, getMovies)

    // post a new contact
    .post(addNewMovie);


    app.route('/movie/:movieId')

    .get(getMovieById)

    .put(updateMovie)

    .delete(deleteMovie)
}

export default routes;