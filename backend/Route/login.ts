import route from "express";
import {Login,Signup} from "../Controller/Login";
const router = route.Router();

router.post("/sign-up",Signup);

router.post("/login",Login)


export default router;
// module.exports={router}
