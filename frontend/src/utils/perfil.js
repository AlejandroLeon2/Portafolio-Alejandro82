import { object } from "astro:schema";

export const perfilPedro = {
    nombre: {
        primerNombre: "Pedro",
        segundoNombre: "Daniel",
        apellidoPaterno: "Alejandro", // Reemplázalo con tu apellido real
        apellidoMaterno: "Leon",  // Reemplázalo con tu apellido materno real
    },
    edad: 23, // Ajusta según tu edad
    profesion: "Desarrollador web Jr",
    cv: "https://tucv.com/pedroalejandro", // Reemplázalo con el enlace de tu CV
    correo: "alejandroleonpedro7@gmail.com", // Ajusta según tu correo
    certificados: [
        { nombre: "Certificado Backend Avanzado", link: "https://certificados.com/backend-avanzado" },
        { nombre: "Curso de PostgreSQL", link: "https://certificados.com/postgresql" },
        { nombre: "Clean Architecture en Backend", link: "https://certificados.com/clean-architecture" },
    ],
    redes: {
        github: "https://github.com/AlejandroLeon2",
        linkedin: "https://linkedin.com/in/pedroalejandro",
    },

    nombreCompleto () { 
        const nombreCompleto = Object.values(this.nombre).reduce((acum, items) =>  acum +" "+ items , " ");
        return nombreCompleto;
    }

};
  