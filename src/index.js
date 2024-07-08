import app from './app.js'
import 'dotenv/config'
import logger from './logs/logger.js'
import { sequelize } from './database/database.js'

async function main(){ 
    //INIcial seque
    await sequelize.sync({ force:true })
    const port = process.env.PORT
    app.listen(port);
    console.log(`listening on port: ${port}` );
    logger.info(`listening on port: ${port}` );
}

main();