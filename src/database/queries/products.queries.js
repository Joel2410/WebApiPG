import pool from '../connection';

const getProducts = async () => {
    try {
        const result = await pool.query({
            text: `select * from products`
        });

        return result.rows;

    } catch (error) {
        console.log(error);
        throw error;
    }
};

const getProduct = async ({ id }) => {
    try {
        const result = await pool.query({
            text: `select * from products where id = $1`,
            values: [id]
        });

        return result.rows;

    } catch (error) {
        console.log(error);
        throw error;
    }
};

const addProduct = async ({ name, description, quantity }) => {
    try {
        const result = await pool.query({
            text: `insert into products (name, description, quantity, status) values ($1, $2, $3, $4) returning *;`,
            values: [name, description, quantity, 0]
        });

        return result.rows;

    } catch (error) {
        console.log(error);
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

        const result = await pool.query({
            text: `update products set name = $2, description = $3, quantity = $4, status = $5 where id = $1;`,
            values: [id, name, description, quantity, status]
        });
        
        return {id, name, description, quantity};

    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const productsQueries = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct
}