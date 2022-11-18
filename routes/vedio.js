import express from "express";
import bodyParser from 'body-parser';
import { newAdmin,UploadVideo} from "../controller/admin.js";
import auth from "../middleware/auth.js";
import Admin from "../middleware/admin.js";


const app=express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.text())

const router=express.Router();

//register route
router.post('/register',newAdmin);
router.post('/Uploadvedio',auth,Admin,UploadVideo);


export default router;
    


