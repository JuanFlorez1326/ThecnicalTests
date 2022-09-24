import { Router } from "express";
import { getPqr, listAllPqr, createPqr, updatePqr, deletePqr, deleteGroupPrq, getPqrById} from '../controllers/pqr.controller.js';

const router = Router();

router.get("/GetPqr/:id", getPqr);

router.get("/ListAllPqr/", listAllPqr);

router.post("/CreatePqr", createPqr);

router.put("/UpdatePqr/:id", updatePqr);

router.delete("/DeletePqr/:id", deletePqr);

router.delete("/DeleteGroup/:ticket_type");

router.delete("/DeleteGroupPrq/:ticket_type", deleteGroupPrq);

router.get("/GetPqrById/:id", getPqrById);

export default router;