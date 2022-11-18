
import Collection from '../models/collection.js';


import bodyParser from 'body-parser';

import express from "express"
import  bcrypt from 'bcrypt';


const app=express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.text())



const newCollection=(req,res)=>{  
    // if (error){
    //     return res.status(400).send(error.details[0].message);
    // }


    const saltRoute=10;
    bcrypt.hash(req.body.password,saltRoute,function(err,hash){
        var plan={            
            planId:req.body.planId ,
            price:req.body.price,
            validity:req.body.validity,
            discription:req.body.discription
            
        
        }
    
async function createCollection(){
       
         try {
            var existingPlan=await Collection.findOne({planId: plan.planId })
            // console.log(existingUser);                   

             if(!existingPlan){
             var nPlan=await Collection.insertMany([plan])
             console.log(nPlan);     
             res.status(200).send(nPlan);}
             
            else{
                res.status(400).send("User can already exist!")}
            }
        catch (error) {
            res.status(400).send(error.message)
         }
}createCollection();})

}  

export default newCollection;