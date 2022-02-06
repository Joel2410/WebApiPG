import { Router } from 'express';
import { getProducts, getProduct, createProduct, updateProduct } from '../controllers/products.controller';

const router = Router();

router.get('/products', getProducts);
router.get('/products/:id', getProduct);

router.post('/products', createProduct);

router.put('/products/:id', updateProduct);

export default router;