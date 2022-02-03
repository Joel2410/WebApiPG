import { Router } from 'express';
import { getProducts, getProduct, addProduct, updateProduct } from '../controllers/products.controller';

const router = Router();

router.get('/products', getProducts);
router.get('/products/:id', getProduct);

router.post('/products', addProduct);

router.put('/products/:id', updateProduct);

export default router;