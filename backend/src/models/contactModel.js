const db = require('../config/db');

const createContacto = async (name, email, asunto, message) => { 
try {
    const result = await db.query(`INSERT INTO formulario (name, email, asunto, message) 
       VALUES ($1, $2, $3, $4)`, [name, email, asunto, message]);
    return result.rows[0];
} catch (error) {
    throw new error(`Error : ${error.message}`)
}
};

module.exports = createContacto;