const db = require('../database/dbConfig.js');

module.exports = {
    add,
    findUserById,
    find,
    findBy,
}


function add(user) {
    return db('users').insert(user, "id")
        .then(ids => {
            const [id] = ids;
            return findUserById(id);
        });
}

function findUserById(id){
    return db("users").where({id}).select('id','username','department').first();
}

function find(){
    return db("users").select('id','username','department')
}
function findBy(username){
    return db("users").where({username})
}