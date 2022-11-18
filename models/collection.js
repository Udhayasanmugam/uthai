import  Joi from 'joi';
import mongoose from "mongoose";

// const env=require('dotenv').config()
//const encrypt=require('mongoose-encryption');

//const secret= "mysecret";


const Collection = mongoose.model('Collection',new  mongoose.Schema({

 
  planId:{
    type:String,
   
   },
   
   
    price:{
      type:String,
     
   },
    
    validity: {
      type: String,
  
      },
   discription: {
      type: String,
    
    },
  
   
   
  }));





export default Collection