import  Joi from 'joi';
import mongoose from "mongoose";

// const env=require('dotenv').config()
//const encrypt=require('mongoose-encryption');

//const secret= "mysecret";


const Admin = mongoose.model('Admin',new  mongoose.Schema({

 
  name:{
    type:String,
    maxlength:40,
    minlength:2,
   },
   
   
    mobileno:{
      type:String,
      required:true,
   },
    
    email: {
      type: String,
  
      required: true,
      
     
    },
   password: {
      type: String,
     required:true,
    },
  
    isAdmin:{
      type:Boolean,
      default:true,
    }
   
  }));

function validateAdmin(admin) {
  const schema = Joi.object({
    name: Joi.string().required(),
    mobileno: Joi.string().length(10).pattern(/[6-9]{1}[0-9]{9}/).required(),
    email: Joi.string().min(8).max(25).required(),
    password: Joi.string().min(8).max(25).required(),
    isAdmin:Joi.boolean(),
  
    
   
  });

  return schema.validate(admin);
}

export {Admin ,validateAdmin}