import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const MovieSchema = new Schema({
    movieName: { type: String, required: true },
    Rating:String

});