import {Router} from "express";
import {Home} from "../controllers/index.controller.js";

const routerIndex = Router();

routerIndex.get("/", Home);

export default routerIndex;