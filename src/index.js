import app from './app';
import { sequelize, Open, Close } from "./database/connection";

app.listen(app.get('port'), async () => {
    console.log(`Server on port ${ app.get('port') }`);

    await Open();
});
