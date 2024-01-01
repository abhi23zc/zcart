import express  from "express";
import { fetchorder, fetchsingle, intialise_order } from "../../controllers/order_contoller.js";
import { isAuthenticated } from "../../controllers/isAuthenticated.js";

const router = express.Router();

// router.post('/', intialise_order);
router.post('/', isAuthenticated,intialise_order)
router.get('/', isAuthenticated , fetchorder)
router.get('/:id', isAuthenticated , fetchsingle)


export default router;