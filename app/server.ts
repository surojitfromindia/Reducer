//configure env variables
import { MongoClient } from './config/DbClient';
import './config/Enviroment';

//import express app
import { express_app } from './express';

express_app.listen({ port: process.env.LOCAL_PORT_EXPRESS}, async() => {
    console.log(`Express server is listening on port ${process.env.LOCAL_PORT_EXPRESS}`)
});
