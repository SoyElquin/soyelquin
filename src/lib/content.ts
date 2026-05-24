import {
  BarChart3,
  Clapperboard,
  FileText,
  Megaphone,
  PenTool,
  Repeat2,
  ShoppingBag,
  Target,
  Video
} from "lucide-react";
import { assets } from "@/lib/assets";

export const profile = {
  name: "Elquin Hernández Buelvas",
  shortName: "Elquin Hernández",
  role: "Productor audiovisual y estratega de marketing",
  city: "Montería, Colombia",
  phone: "3002610252",
  email: "Elquin.hernandez@hotmail.com",
  linkedin: "@soyelquin",
  instagram: "@elquin.hernndez8",
  marketplaceInstagram: "@ropa.elmejorprecio",
  currentPortfolio: "soyelquin.vercel.app",
  heroLine: "Bienvenido, mi nombre es",
  heroTitle: "Elquin Hernández",
  manifesto:
    "Productor audiovisual y estratega de marketing en Montería. Creo contenido vertical, piezas comerciales, campañas y publicaciones para negocios que necesitan comunicar mejor, mostrar sus productos con claridad y convertir redes sociales en oportunidades de venta.",
  ctaPrimary: "Hablemos por WhatsApp",
  ctaSecondary: "Ver videos"
};

export const nav = ["Inicio", "Perfil", "Servicios", "Proceso", "Videos", "Contacto"];

export const profileCards = [
  {
    title: "Video y edición",
    text: "Guiones, grabación, edición vertical, subtítulos, ritmo visual y adaptación para Reels, TikTok e historias."
  },
  {
    title: "Marketing comercial",
    text: "Campañas en Meta Ads y TikTok Ads, lectura de métricas, gestión de comunidad y optimización continua."
  },
  {
    title: "Venta digital",
    text: "Marketplace, catálogos, mensajes, piezas promocionales y seguimiento de interesados por redes o WhatsApp."
  }
];

export const specialties = [
  {
    icon: Clapperboard,
    title: "Producción audiovisual",
    desc: "Ideas, guion, grabación, presentación en cámara, edición y entrega de contenido vertical."
  },
  {
    icon: Video,
    title: "Edición de video",
    desc: "Cortes dinámicos, subtítulos, ritmo, música, adaptación a formato vertical y versiones para redes."
  },
  {
    icon: Megaphone,
    title: "Campañas digitales",
    desc: "Configuración y seguimiento de campañas en Meta Ads y TikTok Ads con enfoque comercial."
  },
  {
    icon: ShoppingBag,
    title: "Marketplace y catálogo",
    desc: "Publicaciones, fichas de producto, organización visual, atención de interesados y seguimiento."
  },
  {
    icon: PenTool,
    title: "Diseño comercial",
    desc: "Flyers, piezas promocionales, fotografías, contenido interactivo y material para venta."
  },
  {
    icon: BarChart3,
    title: "Análisis y mejora",
    desc: "Revisión de alcance, clics, mensajes, desempeño de piezas y aprendizajes para la siguiente campaña."
  }
];

export const method = [
  {
    kicker: "01",
    title: "Entiendo la oferta",
    text: "Producto, público, ubicación, precio, objeciones y acción esperada.",
    icon: Target
  },
  {
    kicker: "02",
    title: "Construyo el mensaje",
    text: "Gancho, beneficio, demostración, confianza y llamado a la acción.",
    icon: FileText
  },
  {
    kicker: "03",
    title: "Produzco la pieza",
    text: "Grabación, edición, subtítulos, ritmo y claridad visual.",
    icon: Video
  },
  {
    kicker: "04",
    title: "Publico y optimizo",
    text: "Redes, pauta, Marketplace, mensajes y revisión de resultados.",
    icon: Repeat2
  }
];

export const tools = [
  "Meta Ads",
  "TikTok Ads",
  "Meta Business Suite",
  "HubSpot CRM",
  "Canva",
  "Figma",
  "Make",
  "ManyChat",
  "Notion",
  "Excel",
  "PowerPoint",
  "VS Code"
];

export const timeline = [
  {
    period: "2026 — Actualidad",
    role: "Independiente en marketing digital y diseño comercial",
    detail: "Estrategia digital, contenido, pauta, diseño comercial, Marketplace, automatizaciones, mensajes y presencia digital."
  },
  {
    period: "2025 — 2026",
    role: "Diseñador y creador de contenido digital",
    detail: "Catálogos mayoristas, campañas, publicaciones en Marketplace, videos verticales y piezas orientadas a retención y conversión."
  }
];

export const education = [
  "Técnico en Programación de Software — SENA",
  "Diplomado en Programación Web — Universidad de Caldas",
  "Técnico en Sistemas — SENA",
  "Formación en inteligencia artificial, negocios en línea y herramientas digitales"
];

export const workVideos = [
  {
    id: "7642471377127132423",
    handle: "@elquin.hernndez8",
    title: "Productos importados",
    category: "Mayorista / detal",
    focus: "Catálogo, variedad y contacto directo.",
    image: assets.work[0]
  },
  {
    id: "7638003864297360647",
    handle: "@elquin.hernndez8",
    title: "Anchetas para mamá",
    category: "Temporada / retail",
    focus: "Oferta emocional con producto visible.",
    image: assets.work[1]
  },
  {
    id: "7637986771346869511",
    handle: "@elquin.hernndez8",
    title: "Regalos en Montería",
    category: "Contenido local",
    focus: "Ubicación, variedad y respuesta por mensaje.",
    image: assets.work[2]
  },
  {
    id: "7587029579097738514",
    handle: "@ropa.elmejorprecio",
    title: "Aviones a control remoto",
    category: "Producto viral",
    focus: "Deseo, demostración y activación en tienda.",
    image: assets.work[3]
  },
  {
    id: "7585982842467896584",
    handle: "@ropa.elmejorprecio",
    title: "Promoción navideña",
    category: "Oferta retail",
    focus: "Beneficio claro, temporada y sedes.",
    image: assets.work[4]
  },
  {
    id: "7522900752163998981",
    handle: "@ropa.elmejorprecio",
    title: "Capibaras peluche",
    category: "Humor + venta",
    focus: "Formato memorable para producto comercial.",
    image: assets.work[8]
  }
];

export const companyReferences = [
  {
    avatar: assets.avatars.clients[0],
    company: "Cyber La 22",
    contact: "Estevan Martínez · CEO",
    note: "Apoya la comunicación visual y ordena mensajes comerciales para que sean más fáciles de presentar."
  },
  {
    avatar: assets.avatars.clients[1],
    company: "Mundo de Todo Sport",
    contact: "Gregorio Aldana · CEO",
    note: "Trabaja con disposición, entiende la necesidad del negocio y convierte ideas en piezas listas para publicar."
  },
  {
    avatar: assets.avatars.clients[2],
    company: "Importadora Asia Nuevo Mundo",
    contact: "José Aldana · CEO",
    note: "Aporta criterio para organizar productos, promociones y contenido comercial en canales digitales."
  }
];

export const personalReferences = [
  {
    initials: "EB",
    name: "Emaizar Buelvas",
    role: "Referencia personal",
    phone: "3044383568"
  },
  {
    initials: "AH",
    name: "Alexis Herrera",
    role: "Referencia personal",
    phone: "3015877498"
  }
];
