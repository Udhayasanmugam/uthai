import  Joi from 'joi';
import mongoose from "mongoose";

// const env=require('dotenv').config()
//const encrypt=require('mongoose-encryption');

//const secret= "mysecret";


const Video = mongoose.model('Video',new  mongoose.Schema({

 
    createdAt: {
        type: Date,
        default: Date.now,
      },
      video: {
        type: Object
       
      },
    })
    );
   
  




function validateVideo(video) {
  const schema = Joi.object({
    name: Joi.string().required(),
    createdAt:Joi.date()
 
    
   
  });

  return schema.validate(video);
}

export {Video ,validateVideo}