import express from 'express';
import bodyparser from 'body-parser'
import cors from 'cors'
import connectDB from './DB/connect';
import dotenv from 'dotenv'
import router from './Route/login'

const app:express.Application = express()

dotenv.config()
app.use(cors())
app.use(bodyparser.json())

app.use("",router)

app.listen(4000,async()=>{
    await connectDB()
    console.log("Server is up at 4000")
})