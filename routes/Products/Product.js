import express from 'express';
import { addproduct, deleteproduct, edit, fetchallproduct, fetchproduct } from '../../controllers/product.js';
import { isAuthenticated } from '../../controllers/isAuthenticated.js';
import singleUpload from '../../controllers/multer.js'
const router = express.Router();

router.post('/add', isAuthenticated, singleUpload,addproduct);
router.delete('/delete', isAuthenticated, deleteproduct);
router.get('/', fetchallproduct)
router.put('/edit', edit)
router.post('/me', fetchproduct)


export default router