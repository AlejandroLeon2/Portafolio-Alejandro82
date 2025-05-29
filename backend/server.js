const app = require('./src/app');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);

    const db = require('./src/config/db');
    db.query('SELECT NOW()')
        .then(res => console.log(`Conexión a DB exitosa: ${res.rows[0].now}`))
        .catch(err => console.error('Error conectando a DB:', err));
});
