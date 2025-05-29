const db = require('../config/db');

const createContacto = async (name, email, message) => { 
try {
    const result = await db.query(`INSERT INTO formulario (name, email, asunto, message) 
       VALUES ($1, $2, $3, $4)`, [name, email, asunto = "Formulario de portafolio", message]);
    return result.rows[0];
} catch (error) {
    throw new error(`Error : ${error.message}`)
}
};

module.exports = { createContacto };