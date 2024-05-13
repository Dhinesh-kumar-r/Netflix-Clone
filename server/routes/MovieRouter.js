import express from "express";
import { DeleteMovie, UpdateMovie, UploadMovie, getMovie, singleMovie } from "../controller/MovieController.js";
const movieRoute = express.Router();

movieRoute.route("/search").get(getMovie)
movieRoute.route("/upload").post(UploadMovie);
movieRoute.route("/movie/:id").get(singleMovie)
movieRoute.route("/update/:id").put(UpdateMovie)
movieRoute.route("/delete/:id").delete(DeleteMovie)

export default movieRoute