import express from "express";

import mongoose from "mongoose";
import multer from "multer";

 import customer from './routes/customer.js';
 import admin from './routes/admin.js';
 import login from './routes/login.js';
 import cors from 'cors'
import collection from "./routes/collection.js";


// const encrypt=require('mongoose-encryption')


const app = express();

mongoose.connect('mongodb://localhost/cstreamapp')
  .then(() => console.log(' Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB'));

app.use(express.json());
app.use(cors());

 app.use('/api/customer',customer );
 app.use('/api/admin',admin);
 app.use('/api',login);
 app.use('/api/collection',collection)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));