import route from "express";
import {Login,Signup} from "../Controller/Login";
const router = route.Router();

router.post("/sign-up",Login);

router.post("/login",Signup)


export default router;
// module.exports={router}
