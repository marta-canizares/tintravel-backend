import connect from '../../db.js'

class postDao {
    constructor() {
        //conexión a la bbdd
    }

    list() {
        return new Promise(async (resolve, reject) => {
            let connection = await connect();
            connection.query(
                `SELECT post.id,post.titulo,post.parrafo,post.imagenes,post.continente,post.fecha,post.me_gusta,post.usuario_id, usuario.username, usuario.foto_perfil, usuario.email, usuario.paises_visitados, usuario.proximos_viajes, usuario.idiomas, usuario.deportes_practico, usuario.deportes_interes
                FROM post INNER JOIN usuario ON (post.usuario_id =usuario.id) ORDER BY FECHA DESC`,
                function (err, rows, fields) {
                    if (err)
                        throw err;
                    console.log(rows);

                    connection.end();

                    resolve(rows);
                });
        });
    }
    //usuario.username=? 

    create(post) {
        //console.log(post.fecha)
        return new Promise(async (resolve, reject) => {
            let connection = await connect();
            connection.query('INSERT INTO post (titulo,parrafo,imagenes,usuario_id, continente,fecha) VALUES (?,?,?,?,?,?)', [post.titulo, post.parrafo, post.imagenes, post.usuario_id, post.continente, post.fecha],
                function (err, result) {

                    if (err)
                        throw err;
                    console.log(err);


                    connection.end();

                    resolve(result.insertId);

                });
        });
    }



    removeOne(id) {
        return new Promise(async (resolve, reject) => {
            let connection = await connect();
            connection.query('DELETE FROM post WHERE id = ?', id,
                function (err, result) {

                    if (err)
                        throw err;
                    console.log(err);


                    connection.end();

                    resolve(1);

                });
        });
    }

    /*
        updateOne(id, post) {
            return new Promise((resolve, reject) => {
                connection.query('UPDATE tintravel.post SET titulo=?,parrafo=? WHERE id = ?', [post.titulo, post.parrafo, id],
                    function (err, result) {
    
                        if (err)
                            throw err;
                        console.log(err);
    
                        resolve(result.affectedRows);
    
                    });
            });
        }*/


    listByContinente(continente) {
        return new Promise(async (resolve, reject) => {
            let connection = await connect();
            connection.query(`SELECT post.id,post.titulo,post.parrafo,post.imagenes,post.continente,post.fecha,post.me_gusta,post.usuario_id, usuario.username, usuario.foto_perfil, usuario.email, usuario.paises_visitados, usuario.proximos_viajes, usuario.idiomas, usuario.deportes_practico, usuario.deportes_interes
                FROM post INNER JOIN usuario ON (post.usuario_id =usuario.id) WHERE continente =? ORDER BY FECHA DESC`, continente,
                function (err, rows, fields) {
                    if (err)
                        throw err;
                    console.log(err);

                    console.log(rows);

                    connection.end();

                    resolve(rows);
                });
        });
    }

    updateImg(postid, img) {
        return new Promise(async (resolve, reject) => {
            let connection = await connect();
            connection.query('UPDATE post SET imagenes=? WHERE id=?', [img, postid],
                function (err, rows) {
                    if (err)
                        reject(err);
                    console.log(err);

                    console.log(rows);

                    connection.end();

                    resolve(rows);
                });
        });
    }

    updateMeGusta(postid, meGusta) {
        //  console.log(postid, meGusta.me_gusta)
        return new Promise(async (resolve, reject) => {
            let connection = await connect();
            connection.query(`UPDATE post SET me_gusta=${meGusta.me_gusta} WHERE id = ${postid} `,
                function (err, result) {

                    if (err)
                        throw err;
                    console.log(err);


                    connection.end();

                    resolve(result.affectedRows);

                });
        });
    }


}



export default new postDao();

