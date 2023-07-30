import express from 'express'
import { getMetro } from '../Controller/Signup'


const router = express.Router()

router.get("/get-station",getMetro)

export default router