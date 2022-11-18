import {Admin, validateAdmin} from '../models/admin.js'; 
import bodyParser from 'body-parser';

import bcrypt from 'bcrypt';
import express from "express";
const app=express();
import multer from 'multer';
import {Video} from '../models/video.js'
const upload = multer({dest:'uploads/'}).single("video");


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.text())


// const env=require('dotenv').config()
// const auth = require('../middleware/auth');

// const hod = require('../middleware/hod');
// const faculty = require('../middleware/faculty');


import  jwt from 'jsonwebtoken';

const saltRounds=10;



const newAdmin=(req,res)=>{  
    const {error}=validateAdmin(req.body)
    if (error){
        return res.status(400).send(error.details[0].message);
    }


    const saltRoute=10;
    bcrypt.hash(req.body.password,saltRoute,function(err,hash){
        var newUser={            
            name:req.body.name ,
            email:req.body.email,
            password:hash,
            mobileno:req.body.mobileno,
            isadmin:req.body.isadmin,
        
        }
    
async function createAdmin(){
       
         try {
            var existingUser=await Admin.findOne({email: newUser.email })
            // console.log(existingUser);                   

             if(!existingUser){
             var user=await Admin.insertMany([newUser])
             return  res.status(200).send(user);
            }
             
            else{
              return  res.status(400).send("User can already exist!")}
            }
        catch (error) {
         return   res.status(400).send(error.message)
         }
}createAdmin();})

}  



const UploadVideo= (req,res)=>{ 
    upload (req, res, async(err) => {
     if(err) {
       return   res.status(400).send("Something went wrong!");
     }
    //  console.log(res);
    //  res.send(req.file);
     const data=await Video.insertMany({
        video:req.file
     })
     if(data) res.send(data) 
   });
 };




  
//   router.post('/login', async (req, res) => {
//     // const { error } = validate(req.body); 
//     // if (error) return res.status(400).send(error.details[0].message);
  
//   const email=req.body.email
//     const staff= await Faculty.findOne({email:email})
//     if(staff){
//       bcrypt.compare(req.body.password,staff.password,function(err,result){
      
//         if(result){
//           const token = jwt.sign({_id:staff._id},process.env.SECRET)
//           //res.send(token)
//          res.header('x-auth-token', token).send()
//         }else{
//           res.send('invaild email')
//        }
//      })
//       //res.send(student)
//     }
//     else{
//       res.send('cannot find staff');
//     }
//     });


export {newAdmin,UploadVideo}