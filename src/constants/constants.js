import w1 from "../images/w1.webp"
import w2 from "../images/w2.webp"
import w3 from "../images/w3.webp"

export const SERVICES_CONSTANT = [{
    i: 1,
    type: "ecommerce",
    title: "Tienda online",
    paragraph: "Abre las puertas de tu negocio al mundo. Vende tus productos o servicios las 24hs, los 7 dias de la semana a clientes de cualquier lugar. Aumenta tus ventas, reduce costos y obten información valiosa para impulsar tu negocio.",
},{
    i: 2,
    type: "institucional",
    title: "Institucional",
    paragraph: "Fortalece tu institución, amplia tu alcance, mejora la atención al cliente y potencia tu marca.",
},{
    i: 4,
    type: "app",
    title: "Página web",
    paragraph: "alcanza objetivos y profesionalismo con una página web moderna que eleve tu marca, informando a tu público con el lujo de detalle de una página moderna.",
},{
    i: 5,
    type: "app",
    title: "Aplicaciones",
    paragraph: "Creamos la aplicación que necesites para satisfacer tus necesidades y optimizar tu dia a dia. Desde la gestion de tu negocio hasta el entretenimiento, la productividad y la comunicación.",
},{
    i: 6,
    type: "blog",
    title: "Blogs",
    paragraph: "Un blog atractivo te permite establecerte como un experto en tu nicho, mejorar el posicionamiento seo,fidelizar a tu audiencia, promocionar tus productos o servicios o mostrar tus talentos de escritura.",
},{
    i: 7,
    type: "cmr",
    title: "CMR",
    paragraph: "Un CMR es un sistema de géstion de las relaciones con clientes que te ayuda a organizar y centralizar toda la información sobre tus clientes actuales y potenciales.",
},{
    i: 9,
    type: "mantenimiento",
    title: "Mantenimiento",
    paragraph: "¿Ya tienes una página? ¡Actualizala! Modernizá el diseño, optimizá el funcionamiento, mejora el SEO, agrega nuevas funciones y garantizá la seguridad. Revive tu presencia online.",
}];

export const PLANS = [{
    type: "básico",
    service: "Página web sencilla",
    price: "$ 20.000",
    reserve: "basico",
    options: ["Diseño predefinido con opciones de personalizacion limitadas.",
        "Estructura básica con hasta 3 páginas.",
        "Contenido informativo y estático.",
        "Galeria de imagenes",
        "Formulario de contacto básico.",
        "Optimización SEO"
    ]
},{
    type: "regular",
    service: "Página web profesional",
    price: "$ 50.000",
    reserve: "regular",
    options: ["Diseño personalizado acorde a la identidad de marca del cliente.",
        "Estructura flexible con hasta 10 páginas.",
        "Contenido informativo y dinámico (edición de imagenes y textos).",
        "Galeria de imagenes",
        "Formularios de contacto avanzados",
        "Integración con redes sociales",
        "Optimización SEO"
    ]
},{
    type: "avanzado",
    service: "Página web a medida",
    price: "$ 200.000",
    reserve: "avanzado",
    options: ["Diseño personalizado y exclusivo.",
        "Estructura compleja con más de 10 páginas.",
        "Contenido dinámico e interactivo (blog, tienda online, editar todo el contenido de la página).",
        "Funcionalidades avanzadas (calendario, chat en vivo, pasarelas de pagos)",
        "Mantenimiento web mensual"
    ]
},]

export const WORKS = [{
    type: "diseños",
    img: w1
},
{
    type: "tiendas",
    img: w2
},
{
    type: "web",
    img: w3
}]
