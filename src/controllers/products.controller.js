//import { productsQueries } from '../database';

export const getProducts = async (req, res) => {

    res.send('getProducts');
    // try {
    //     const result = await productsQueries.getProducts();
    //     res.send(result);
    // } catch (error) {
    //     console.error(error);
    //     res.sendStatus(500);
    // }
    
};

export const getProduct = async (req, res) => {
    res.send('getProduct');
    // try {
    //     const result = await productsQueries.getProduct(req.params);
    //     res.send(result);
    // } catch (error) {
    //     console.error(error);
    //     res.sendStatus(500);
    // }
    
};

export const addProduct = async (req, res) => {
    res.send('addProduct');
    // try {
    //     const result = await productsQueries.addProduct(req.body);
    //     res.send(result);
    // } catch (error) {
    //     console.error(error);
    //     res.sendStatus(500);
    // }
    
};

export const updateProduct = async (req, res) => {
    res.send('updateProduct');
    // try {
    //     const { id } = req.params;
    //     const result = await productsQueries.updateProduct(id, req.body);
    //     res.send(result);
    // } catch (error) {
    //     console.error(error);
    //     res.sendStatus(500);
    // }
    
};

