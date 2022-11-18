import {Admin, validateAdmin} from '../models/admin.js';
import {User, validateUser} from '../models/customer.js';
import bodyParser from 'body-parser';

import bcrypt from 'bcrypt';
import express from "express";
const app=express();

import jwt from "jsonwebtoken"
import * as dotenv from 'dotenv'
dotenv.config()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.text())
  
const login= async (req,res)=>{
    // const { error } = validateUser(req.body); 
    // if (error) return res.status(400).send(error.details[0].message);
  
  const email=req.body.email
    const customer= await User.findOne({email:email})
    const admin=await Admin.findOne({email:email})
    if(customer){
      bcrypt.compare(req.body.password,customer.password,function(err,result){
      
        if(result){
          // console.log(result.isAdmin)
          const token = jwt.sign( {_id:customer._id,isAdmin:customer.isAdmin},process.env.SECRET)
         return  res.send(token)
         //res.header('x-auth-token', token).send()
        }else{

        return   res.send('invaild password')   
       }
     })
      //res.send(student)
    }
    else if(admin){
        bcrypt.compare(req.body.password,admin.password,function(err,result){
        
          if(result){
            // console.log(admin.isAdmin)
            const token = jwt.sign({_id:admin._id,isAdmin:admin.isAdmin},process.env.SECRET)
            //res.send(token)
          return  res.header('x-auth-token', token).send(token)
          }else{
             return res.send('invaild password')
         }
       })
        //res.send(student)
      }
    else{
     return  res.send('cannot find User');
    }
    };
    export {login}