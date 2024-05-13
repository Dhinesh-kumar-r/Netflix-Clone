import mongoose from "mongoose";

// Define schema
const movieSchema = mongoose.Schema({
  id: {
    type:Number,
  },
  title: {
    type: String,
  
  },
  year: {
    type: String,
  
  },
  runtime: {
    type: String,
  
  },
  genres: {
    type: [String],
  
  },
  director: {
    type: String,
  
  },
  actors: {
    type: String,
  
  },
  plot: {
    type: String,
  
  },
  posterUrl: {
    type: String,
  
  }
});

// Create model
const movieModel = mongoose.model('movie', movieSchema);

export default movieModel;
