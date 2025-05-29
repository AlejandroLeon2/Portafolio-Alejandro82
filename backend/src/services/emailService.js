const transporter = require('../config/emailConfig');

async function enviarCorreo(name, email, asunto, message) {
    try {
        const mailOptions = {
            from: `${name} : ${email}`,
            to: process.env.EMAIL_USER,
            subject: asunto,
            text: message
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Correo enviado:", info.response);
    } catch (error) {
        console.error("Error al enviar:", error);
    }
};

module.exports = enviarCorreo;