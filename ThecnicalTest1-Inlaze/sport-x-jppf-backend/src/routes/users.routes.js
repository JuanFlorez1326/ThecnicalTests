import { Router } from "express";
import { getUser, listUsers ,createUser} from '../controllers/users.controller.js';

const router = Router();

router.get("/GetUser/:id", getUser);

router.get("/ListUsers/", listUsers);

router.post("/CreateUser", createUser);

export default router;