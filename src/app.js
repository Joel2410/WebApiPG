import express from "express";
import config from "./config";
import morgan from "morgan";
import productsRoutes from "./routes/products.routes";

const app = express();

// Settings
app.set('port', config.port);


// Middlewares
app.use(morgan('dev'));
app.use(express.json());


// Routing
app.use(productsRoutes);


app.get('/', (req, res) => {
    res.send('WebApi with postgres');
});


export default app;