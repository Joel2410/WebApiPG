import { Product } from "../models";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        console.log(products);
        res.send(products);

    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
    
};

export const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findAll({
            where: {
                id
            }
        });
        console.log(product);
        res.send(product);

    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};

export const addProduct = async (req, res) => {
    try {
        const { name, description, quantity } = req.body;
        let { status } = req.body;

        if (!name || !description || !quantity) {
            throw new Error('Please fill all fields');
        }

        if (!status) {
            status = 0;
        }

        const product = await Product.create({
            name,
            description,
            quantity,
            status
        });

        
        res.send(product);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};

export const updateProduct = async (req, res) => {
    
    try {
        const { id } = req.params;
        const { name, description, quantity } = req.body;
        let { status } = req.body;

        if (!name || !description || !quantity) {
            throw new Error('Please fill all fields');
        }

        if (!status) {
            status = 0;
        }
        
        const result = await Product.update({
            name,
            description,
            quantity,
            status
        }, {
            where: {
                id
            }
        });

        res.send(result);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }



    // try {
    //     const { id } = req.params;
    //     const result = await productsQueries.updateProduct(id, req.body);
    //     res.send(result);
    // } catch (error) {
    //     console.error(error);
    //     res.sendStatus(500);
    // }
    
};

