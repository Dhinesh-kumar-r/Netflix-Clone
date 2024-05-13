import movieModel from "../model/MovieModel.js";
import { ApiFeatures } from "../utils/apiFeatures.js";

//Post
//api/v1/upload
const UploadMovie = async (req,res)=>{
    const {id,title,year,runtime,genres,director,actors,plot,posterUrl} = req.body;

    try{
        await movieModel.create({id,title,year,runtime,genres,director,actors,plot,posterUrl});

        res.status(201).json({msg:"movie_Uploaded"})
    }
    catch(err){
        res.json({msg:"upload_error"})
    }
}


//Get All Movie Data
//api/v1/search
const getMovie = async (req,res)=>{
   const apiFeatures=  new ApiFeatures(movieModel.find(),req.query).Search().Filter()
    try{
        const userInput = await apiFeatures.query;
       
        res.status(201).json({
            count : userInput.length,
            userInput
        });
    } 
    catch(err){
        res.json({msg:"get_movie_data_error"});
    }
}

// get Single
//api/v1/movie/:id
const singleMovie = async (req, res) => {
    const { id } = req.params;
  
    try {
      const movieData = await movieModel.findById(id);
     
      if(!movieData){
        res.status(404).json({
            status:false,
            msg : "Product Not Found"
        })
      
      }
      else{
        res.status(201).json({
            status:true,
            movieData
        })
       
       
      }
  
    } catch (err) {
      res.status(401).json({ msg: "single_error" });
    }
}
  

//update Movie
//api/movie/
const UpdateMovie = async(req,res)=>{
   
    const {id} = req.params
    try{
        const movieData = await movieModel.findByIdAndUpdate({_id:id},{...req.body})
        if(!movieData){
            res.status(401).json({
                status:false,
                msg:"Invalid Input"
            })
        }
        else{
            res.status(201).json({
                status:true,
                msg:"updated",
                movieData
            })
        }
       
    }
    catch(err){
        res.json({msg:"update error"})
    }
   
    }


    //Delete Movie
    //api/v1/movie/delete

    const DeleteMovie = async (req,res)=>{
        const {id} = req.params;
        try{
            const deleteMovie = await movieModel.findByIdAndDelete(id)
            if(!deleteMovie){
                res.status(401).json({
                    status:false,
                    msg:"invalid Input"
                })
            }
            else{
                res.status(201).json({
                    status:true,
                    msg:"movie Deleted"
                })
            }
        }
        catch(err){
            res.json({
                msg:"Delete Error"
            })
        }

    }

export {getMovie,UploadMovie,singleMovie,UpdateMovie,DeleteMovie}
