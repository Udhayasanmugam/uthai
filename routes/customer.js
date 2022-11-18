import express from "express";
import bodyParser from 'body-parser';
import { Customer,watchVideos,updatesubscribe} from "../controller/customer.js";
import auth from "../middleware/auth.js";
import customer from "../middleware/customer.js"
// import auth from "./auth.js";
// import Bank from "./bank.js";

const app=express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.text())

const router=express.Router();

//register route
router.post('/register',Customer);
router.get('/viewdetails',auth,customer,watchVideos);
router.put('/updateVideo',auth,customer,updatesubscribe);



export default router;
    


