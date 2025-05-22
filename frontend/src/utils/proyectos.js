export const projects = [
    {
        title: "Tetris",
        description: "Implementación del clásico juego de puzzle con sistema de puntuación, niveles progresivos y mecánicas modernas",
        image: "src/assets/background.svg",
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
        image: "src/assets/astro.svg",
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
        image: "src/assets/background.svg",
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
        image: "src/assets/nice.png",
        links: {
            enlaceGit: "#",
            enlacePage: "#",
            estado: { texto: "En diseño puedes mirar el prototipo", habilitado: false }
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
        image: "src/assets/nice.png",
        links: {
            enlaceGit: "https://github.com/tu-usuario/ecommerce-hg",
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
        title: "Juego Farming Simulator",
        description: "Simulador agrícola multijugador con economía dinámica y sistema de cultivos estacionales",
        image: "src/assets/nice.png",
        links: {
            enlaceGit: "#",
            enlacePage: "#",
            estado: { texto: "Aun en Diseño", habilitado: false }
        },
        clas: "md:col-span-1 md:row-span-1",
        items: [
            { iconClass: "fab fa-js", name: "JavaScript" },
            { iconClass: "fas fa-tractor", name: "Phaser 3" },
            { iconClass: "fas fa-palette", name: "Tailwind" },

        ],
    },
    {
        title: "Componentes UI Interactivos",
        description: "Librería de componentes reutilizables con documentación interactiva y ejemplos en vivo",
        image: "src/assets/nice.png",
        links: {
            enlaceGit: "https://github.com/tu-usuario/ui-components",
            enlacePage: "https://ui.tu-dominio.com",
            estado: { texto: "En diseño", habilitado: false }
        },
        clas: "md:col-span-3 md:row-span-1",
        items: [
            { iconClass: "fas fa-rocket", name: "Astro" },
            { iconClass: "fab fa-js", name: "JavaScript" },
            { iconClass: "fas fa-palette", name: "Tailwind" },
            { iconClass: "fas fa-magic", name: "Animaciones" },
            { iconClass: "fas fa-book", name: "Storybook" }
        ],
    }
];