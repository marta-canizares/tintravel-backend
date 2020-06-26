import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();


// Configurar conexión MySQL
let connection = mysql.createConnection({
    host: 'eu-cdbr-west-03.cleardb.net', //'localhost'
    user: 'be4451287cf8c6', //'root',
    password: '1ce15682', // process.env.MYSQLPASS,
    database: 'heroku_4f5fc783adcd7f3' //tintravel
}
);

// Ejecutar conexión
connection.connect();

export default connection;
