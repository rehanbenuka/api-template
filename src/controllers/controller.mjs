import mongoose from "mongoose";
import { MovieSchema } from "../models/movieModel.mjs";

const Movie = mongoose.model('Movie',MovieSchema);

export const addNewMovie = async (req, res) => {

    let newMovie = new Movie(req.body);

    try {
        await newMovie.save()
        console.log(newMovie)
        res.status(200).json(newMovie)
        
    } catch (error) {
        console.error(error)
        res.status(400).json(`message: ${error.message}`)
    }

};

export const getMovies = async ( req, res) => {
    try {
        let movieRatings = await Movie.find()
        res.send(movieRatings);
    } catch (error) {
        res.send(error)
        
    }

};

export const getMovieById = async (req, res) => {

    try {
        
        let movieById = await Movie.findById(req.params.movieId)
        res.json(movieById)
        
    } catch (error) {
        res.send(error)
    }
};

export const updateMovie = async (req, res) => {
    try {

        let updatedMovie = await Movie.findOneAndUpdate({ _id: req.params.movieId}, req.body, { new: true })
        res.json(updatedMovie);
        
    } catch (error) {
        res.send(error)
    }
        
};

export const deleteMovie = async (req, res) => {
    try {
        let deleteMovie = await Movie.deleteOne({ _id: req.params.movieId })
        res.json(`message: Successfully deleted movie with _id: ${req.params.movieId }`)
    } catch (error) {
        res.send(error)
    }
};
