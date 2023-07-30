import express from 'express';
import bodyparser from 'body-parser'
import cors from 'cors'
import connectDB from './DB/connect';
import dotenv from 'dotenv'
import router from './Route/login'
import metro from './Route/metro'

dotenv.config()
const app:express.Application = express()
app.use(cors())
app.use(bodyparser.json())

app.use("",router)
app.use("",metro)

app.listen(4000,async()=>{
    await connectDB()
    console.log("Server is up at 4000")
})