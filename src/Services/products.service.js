import { Product } from "../models";

const getProducts = async () => {
    try {
        return await Product.findAll();
    } catch (error) {
        throw error;
    }
};

const getProduct = async (id) => {
    try {
        return await Product.findAll({
            where: {
                id
            }
        });
    } catch (error) {
        throw error;
    }
};

const createProduct = async ({ name, description, quantity, status }) => {
    try {
        if (!name || !description || !quantity) {
            throw new Error('Please fill all fields');
        }

        if (!status) {
            status = 0;
        }

        return await Product.create({
            name,
            description,
            quantity,
            status
        });


    } catch (error) {
        throw error;
    }
};

const updateProduct = async (id, { name, description, quantity, status }) => {
    try {
        if (!name || !description || !quantity) {
            throw new Error('Please fill all fields');
        }

        if (!status) {
            status = 0;
        }

        return await Product.update({
            name,
            description,
            quantity,
            status
        }, {
            where: {
                id
            }
        });
    } catch (error) {
        throw error;
    }
};

export const ProductServices = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct
}