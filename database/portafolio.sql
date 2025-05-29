-- Crear la base de datos
CREATE DATABASE portafolio;

-- Crear la tabla formulario
CREATE TABLE formulario (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    asunto VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seleccionar todos los registros de la tabla formulario
SELECT * FROM formulario;
