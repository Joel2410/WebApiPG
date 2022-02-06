import { ProductServices } from "../Services/products.service";

export const getProducts = async (req, res) => {
    try {
        const products = await ProductServices.getProducts();
        res.send(products);

    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
    
};

export const getProduct = async (req, res) => {
    try {
        const product = await ProductServices.getProduct(req.params.id);        
        res.send(product);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};

export const createProduct = async (req, res) => {
    try {
        const product = await ProductServices.createProduct(req.body);
        res.send(product);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};

export const updateProduct = async (req, res) => {
    
    try {
        const result = await ProductServices.updateProduct(req.params.id, req.body);
        res.send(result);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};