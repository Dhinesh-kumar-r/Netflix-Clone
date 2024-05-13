import MovieList from "../Data/MovieList.json" assert { type: "json" };
import movieModel from "../model/MovieModel.js";
import dbConnectivity from "../config/db.js";

dbConnectivity();

const seedMovie = async () => {
    try {
        // Increase timeout for deleteMany operation to 30 seconds (30000 milliseconds)
        
        await movieModel.insertMany(MovieList);
        console.log("Movie List Added");
    } catch (err) {
        console.log("seedError", err);
    }
};

seedMovie();
