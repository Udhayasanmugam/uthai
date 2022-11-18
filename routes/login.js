import express from "express";
import bodyParser from 'body-parser';
import { login} from "../controller/login.js";


const app=express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.text())

const router=express.Router();

//register route
router.post('/login',login);

export default router;
    