const contactModel = require('../models/contactModel');
const emailService = require('../services/emailService');
const createContacto = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        console.log("Datos recibidos:", req.body);
        if (!name || !email  || !message) {
            return res.status(400).json({ error: `Nombre, email y mensage son obligatorios.` });
        }

         await contactModel.createContacto(name, email, message);
        await emailService.enviarCorreo(name, email, message);

        res.status(201).json({
            success: true,
            message: `Contacto creado y notificacion enviada`,
            data: { name: name }
        });
    } catch (error) {
        console.error(`Error en createContact`, error);
        res.status(500).json({
            success: false,
            message: `Error del servidor`,
            data: error.message
        });

    }
};
module.exports = {createContacto};