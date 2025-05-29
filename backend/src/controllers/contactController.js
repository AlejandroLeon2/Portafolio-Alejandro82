const contactModel = require('../models/contactModel');
const emailService = require('../services/emailService');
const createContacto = async (req, res) => {
    try {
        const { name, email, asunto, message } = req.body;

        if (!name || !email || !asunto || !message) {
            return res.status(400).json({ error: `Nombre, asunto, email y mensage son obligatorios.` });
        }

        const newContact = await contactModel.createContacto(name, email, asunto, message);
        await emailService.enviarCorreo(name, email, asunto, message);

        res.status(201).json({
            success: true,
            message: `Contacto creado y notificacion enviada`,
            data: { name: newContact.nombre }
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