export const projects = [
    {
        title: "Tetris",
        description: "Implementación del clásico juego de puzzle con sistema de puntuación, niveles progresivos y mecánicas modernas",
        image: { 
            portada: {
                link: "src/assets/tetrisC++.png",
                nombre: "Tetris - Portada Principal"
            },
            coleccion: [
                { link: "src/assets/tetrisC++.png", nombre: "Tetris - Captura de Gameplay" },
                { link: "src/assets/tetrisC++1.png", nombre: "Tetris - Menú Principal" },
                { link: "src/assets/tetrisC++2.png", nombre: "Tetris - Menú Principal" },
                { link: "src/assets/tetrisC++3.png", nombre: "Tetris - Menú Principal" }

            ]
        },
        links: {
            enlaceGit: "https://github.com/tu-usuario/tetris",
            enlacePage: "https://tetris.tu-dominio.com",
            estado: { texto: "Completado", habilitado: true }
        },
        clas: "md:col-span-1 md:row-span-1",
        items: [
            { iconClass: "fab fa-cuttlefish", name: "C++" },
            { iconClass: "fas fa-gamepad", name: "SFML" },
            { iconClass: "fab fa-git-alt", name: "Git" },
            { iconClass: "fas fa-palette", name: "Tailwind" },
            { iconClass: "fas fa-chart-line", name: "Optimización" }
        ],
    },
    {
        title: "E-commerce ",
        description: "Plataforma completa con carrito dinámico, autenticación JWT, pasarela de pagos y dashboard administrativo",
        image: {
            portada: {
                link: "src/assets/ecommerce.png",
                nombre: "E-commerce - Vista Principal"
            },
            coleccion: [
                { link: "src/assets/ecommerce1.png", nombre: "E-commerce - Panel de Administración" },
                { link: "src/assets/ecommerce2.png", nombre: "E-commerce - Carrito de Compras" },
                { link: "src/assets/ecommerce3.png", nombre: "E-commerce - Vista de Producto" }
            ]
        },
        links: {
            enlaceGit: "https://github.com/AlejandroLeon2/carrito-compras",
            enlacePage: "https://carrito-compras-lyart.vercel.app/",
            estado: { texto: "Deploy en progreso", habilitado: true }
        },
        clas: "md:col-span-2 md:row-span-1",
        items: [
            { iconClass: "fas fa-rocket", name: "Astro" },
            { iconClass: "fab fa-node-js", name: "Node.js" },
            { iconClass: "fas fa-database", name: "PostgreSQL" },
            { iconClass: "fab fa-js", name: "JavaScript" },
            { iconClass: "fas fa-palette", name: "Tailwind" },
            { iconClass: "fab fa-docker", name: "Docker" },
            { iconClass: "fas fa-shield-alt", name: "JWT" }
        ],
    },
    {
        title: "Blog Personal",
        description: "Sitio estático con sistema de markdown, búsqueda contextual y modo oscuro automático",
        image: {
            portada: {
                link: "src/assets/blog.png",
                nombre: "Blog Personal - Portada"
            },
            coleccion: [
                { link: "src/assets/blog.png", nombre: "Blog - Modo Oscuro" },
                { link: "src/assets/nice.png", nombre: "Blog - Ejemplo de Artículo" }
            ]
        },
        links: {
            enlaceGit: "https://github.com/AlejandroLeon2/ProyectoFinal-BlogPersonal",
            enlacePage: "https://proyecto-final-blog-personal.vercel.app",
            estado: { texto: "Completado", habilitado: true }
        },
        clas: "md:col-span-2 md:row-span-1",
        items: [
            { iconClass: "fas fa-rocket", name: "Astro" },
            { iconClass: "fab fa-js", name: "JavaScript" },
            { iconClass: "fas fa-palette", name: "Tailwind" },
        ],
    },
    {
        title: "Landing Page Jardinería",
        description: "Sitio interactivo con tour virtual 3D, calculadora de presupuestos y portfolio visual",
        image: {
            portada: {
                link: "src/assets/jardineria.png",
                nombre: "Jardinería - Vista Principal"
            },
            coleccion: [
                { link: "src/assets/jardineria.png", nombre: "Jardinería - Tour 3D" },
                { link: "src/assets/jardineria1.png", nombre: "Jardinería - Calculadora" }
            ]
        },
        links: {
            enlaceGit: "https://github.com/AlejandroLeon2/landingJardineria",
            enlacePage: "https://landing-jardineria.vercel.app",
            estado: { texto: "En diseño puedes mirar el prototipo", habilitado: true }
        },
        clas: "md:col-span-1 md:row-span-2 md:h-[580px]",
        items: [
            { iconClass: "fas fa-rocket", name: "Astro" },
            { iconClass: "fab fa-js", name: "JavaScript" },
            { iconClass: "fas fa-palette", name: "Tailwind" },
            { iconClass: "fas fa-leaf", name: "Three.js" },
            { iconClass: "fab fa-figma", name: "Figma" }
        ],
    },
    {
        title: "E-commerce HG",
        description: "Tienda especializada con integración ERP, sistema de inventario en tiempo real y reportes avanzados",
        image: {
            portada: {
                link: "src/assets/tiendaHg.png",
                nombre: "E-commerce HG - Dashboard"
            },
            coleccion: [
                { link: "src/assets/tiendaHg1.png", nombre: "HG - Sistema de Inventario" },
                { link: "src/assets/tiendaHg2.png", nombre: "HG - Reportes Avanzados" },
                { link: "src/assets/tiendaHg3.png", nombre: "HG - Reportes Avanzados" }

            ]
        },
        links: {
            enlaceGit: "https://github.com/AlejandroLeon2/tienda-online",
            enlacePage: "https://hg.tu-dominio.com",
            estado: { texto: "En desarrollo", habilitado: false }
        },
        clas: "md:col-span-1 md:row-span-1",
        items: [
            { iconClass: "fab fa-js", name: "JavaScript" },
            { iconClass: "fab fa-node-js", name: "Node.js" },
            { iconClass: "fas fa-palette", name: "Tailwind" },
            { iconClass: "fas fa-rocket", name: "Astro" },
        ],
    },
   
    {
        title: "Componentes UI Interactivos",
        description: "Librería de componentes reutilizables con documentación interactiva y ejemplos en vivo",
        image: {
            portada: {
                link: "src/assets/jardineria.png",
                nombre: "UI Components - Portada"
            },
            coleccion: [
                { link: "src/assets/jardineria.png", nombre: "UI - Documentación" },
                { link: "src/assets/jardineria.png", nombre: "UI - Ejemplos" },
                { link: "src/assets/jardineria.png", nombre: "UI - Librería" }
            ]
        },
        links: {
            enlaceGit: "https://github.com/tu-usuario/ui-components",
            enlacePage: "https://ui.tu-dominio.com",
            estado: { texto: "En diseño", habilitado: false }
        },
        clas: "md:col-span-1 md:row-span-1",
        items: [
            { iconClass: "fas fa-rocket", name: "Astro" },
            { iconClass: "fab fa-js", name: "JavaScript" },
            { iconClass: "fas fa-palette", name: "Tailwind" },
            { iconClass: "fas fa-magic", name: "Animaciones" },
            { iconClass: "fas fa-book", name: "Storybook" }
        ],
    }
];