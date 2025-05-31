
export const perfilPedro = {
    nombre: {
        primerNombre: "Pedro",
        segundoNombre: "Daniel",
        apellidoPaterno: "Alejandro", 
        apellidoMaterno: "Leon",  
    },
    edad: 23, 
    profesion: "Desarrollador web Jr",
    cv: "https://tucv.com/pedroalejandro", 
    correo: "alejandroleonpedro7@gmail.com", 
    certificados: [
        { nombre: "Certificado Fundamentos de arquitectura de software", link: "https://rizdlhdrzrznnewxcdxr.supabase.co/storage/v1/object/public/imagenes//certificado.webp" },
        { nombre: "Curso profesional de Git", link: "https://rizdlhdrzrznnewxcdxr.supabase.co/storage/v1/object/public/imagenes//certificado.webp" },
        { nombre: "Curso de VSC y Guthub Copilot", link: "https://rizdlhdrzrznnewxcdxr.supabase.co/storage/v1/object/public/imagenes//certificado2.webp" },
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
  