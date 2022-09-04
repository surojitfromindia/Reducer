import {PrismaClient as msqlClint} from "../generated/mysqlClient";
import {PrismaClient as mongoClint} from "../generated/mongolClient";

const MysqlClient = new msqlClint();
const MongoClient = new mongoClint();

export { MysqlClient, MongoClient }