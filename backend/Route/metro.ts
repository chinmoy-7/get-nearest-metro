import express from 'express'
import { getMetro } from '../Controller/Signup'


const router = express.Router()

router.post("/get-station",getMetro)

export default router