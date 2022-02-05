import app from './app';
import { sequelize, Open, Close } from "./database";

app.listen(app.get('port'), async () => {
    
    try {
        // Open database connection
        await Open();

        // Sync all tables
        await sequelize.sync({ alter: true });

    } catch (error) {
        console.error(error);
    }
    
    console.log(`Server on port ${ app.get('port') }`);    
});
