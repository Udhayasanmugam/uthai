import express from "express";
import bodyParser from 'body-parser';
import newCollection from "../controller/collection.js";



const app=express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.text())

const router=express.Router();

//register route
router.post('/register',newCollection);



export default router;
    