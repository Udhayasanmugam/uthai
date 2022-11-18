import  Joi from 'joi';
import mongoose from "mongoose";
import express from "express"

// const env=require('dotenv').config()
//const encrypt=require('mongoose-encryption');

//const secret= "mysecret";

const User = mongoose.model('User', new mongoose.Schema({

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
    default:false,
  },
  subscribed:{
    type:Boolean,
    default:false,
  },
  plan:{
    type:Object
  },
  group:{
    type:String
  }  
  
   
  }));




function validateUser(user) {
  const schema =Joi.object({
    name: Joi.string().required(),
    mobileno: Joi.string().length(10).pattern(/[6-9]{1}[0-9]{9}/).required(),
    email: Joi.string().min(8).max(25).required(),
    password: Joi.string().min(8).max(25).required(),
    isAdmin:Joi.boolean(),
    subscribed:Joi.boolean(),
    plan:Joi.string(),
    group:Joi.string()
   
  })

  return schema.validate(user);
}

export {User,validateUser}