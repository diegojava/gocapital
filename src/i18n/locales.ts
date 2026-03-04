export const LOCALE_COOKIE_KEY = "gocapital-locale";
export const LOCALE_STORAGE_KEY = "gocapital-locale";
export const SUPPORTED_LOCALES = ["es", "en"] as const;
export const DEFAULT_LOCALE: Locale = "es";

export type Locale = (typeof SUPPORTED_LOCALES)[number];

type HeaderMessages = {
  home: string;
  services: string;
  resources: string;
  architecture: string;
  modernization: string;
  operations: string;
  blog: string;
  guides: string;
  caseStudies: string;
  contact: string;
  menuOpen: string;
  menuLabel: string;
  themeToDark: string;
  themeToLight: string;
  languageLabel: string;
};

type FooterMessages = {
  logoHomeLabel: string;
  navLabel: string;
  links: {
    careers: string;
    about: string;
    alumni: string;
    contact: string;
    locations: string;
  };
  subscribeTitle: string;
  subscribeCopy: string;
  emailLabel: string;
  emailPlaceholder: string;
  submit: string;
  socialLabel: string;
  legalLinks: {
    scam: string;
    faq: string;
    privacy: string;
    choices: string;
    cookie: string;
    terms: string;
    language: string;
    accessibility: string;
  };
  insightsCopy: string;
  copyright: string;
};

type ServicesMessages = {
  kicker: string;
  title: string;
  items: Array<{
    title: string;
    description: string;
  }>;
};

type VideosMessages = {
  kicker: string;
  title: string;
  copy: string;
  cta: string;
  featured: {
    date: string;
    title: string;
    description: string;
  };
  items: Array<{
    title: string;
  }>;
};

type ServiciosPageMessages = {
  title: string;
  hero: {
    ariaLabel: string;
    imageAlt: string;
    kicker: string;
    headline: string;
  };
  intro: string;
  pillarsAriaLabel: string;
  pillars: Array<{
    id: string;
    title: string;
    description: string;
    cta: string;
  }>;
  work: {
    eyebrow: string;
    title: string;
    body: string;
    bullets: string[];
    imageAlt: string;
  };
  impact: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    imageAlt: string;
  };
};

type ContactoPageMessages = {
  title: string;
  hero: {
    kicker: string;
    headline: string;
    intro: string;
  };
  form: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    success: string;
    honeypotLabel: string;
  };
};

type SharedMessages = {
  siteTitle: string;
  homeTitle: string;
  videoHeroAriaLabel: string;
  videoHeroTitle: string;
};

export type LocaleMessages = {
  shared: SharedMessages;
  header: HeaderMessages;
  footer: FooterMessages;
  services: ServicesMessages;
  videos: VideosMessages;
  serviciosPage: ServiciosPageMessages;
  contactoPage: ContactoPageMessages;
};

export const messagesByLocale: Record<Locale, LocaleMessages> = {
  es: {
    shared: {
      siteTitle: "GoCapital",
      homeTitle: "GoCapital",
      videoHeroAriaLabel: "Video principal",
      videoHeroTitle: "Video principal de GoCapital",
    },
    header: {
      home: "Inicio",
      services: "Servicios",
      resources: "Recursos",
      architecture: "Arquitectura",
      modernization: "Modernizacion",
      operations: "Operacion",
      blog: "Blog",
      guides: "Guias",
      caseStudies: "Casos de exito",
      contact: "Contacto",
      menuOpen: "Abrir menu",
      menuLabel: "Menu",
      themeToDark: "Cambiar a modo oscuro",
      themeToLight: "Cambiar a modo claro",
      languageLabel: "Idioma",
    },
    footer: {
      logoHomeLabel: "GoCapital inicio",
      navLabel: "Enlaces principales del footer",
      links: {
        careers: "Carreras",
        about: "Nosotros",
        alumni: "Alumni",
        contact: "Contacto",
        locations: "Ubicaciones globales",
      },
      subscribeTitle: "Suscribete",
      subscribeCopy: "Selecciona temas y mantente al dia con nuestros ultimos insights",
      emailLabel: "Correo electronico",
      emailPlaceholder: "Correo electronico",
      submit: "Enviar",
      socialLabel: "Redes sociales",
      legalLinks: {
        scam: "Alerta de fraude",
        faq: "FAQ",
        privacy: "Politica de privacidad",
        choices: "Tus opciones de privacidad",
        cookie: "Preferencias de cookies",
        terms: "Terminos de uso",
        language: "Informacion de idioma local",
        accessibility: "Declaracion de accesibilidad",
      },
      insightsCopy: "GoCapital Insights - Recibe nuestras ideas mas recientes en tu dispositivo favorito.",
      copyright: "© 2026 GoCapital. Todos los derechos reservados.",
    },
    services: {
      kicker: "SERVICIOS",
      title: "Infraestructura que sostiene crecimiento, disponibilidad y rendimiento",
      items: [
        {
          title: "Diseno y planeacion de infraestructura",
          description:
            "Definimos hojas de ruta tecnicas para infraestructura critica, capacidad y continuidad operativa.",
        },
        {
          title: "Modernizacion de plataformas",
          description:
            "Actualizamos entornos legacy hacia arquitecturas mas resilientes, seguras y preparadas para escalar.",
        },
        {
          title: "Operacion y confiabilidad",
          description:
            "Implementamos estandares de observabilidad, automatizacion y gobierno para operaciones estables 24/7.",
        },
      ],
    },
    videos: {
      kicker: "VIDEOS",
      title: "Videos para liderar infraestructura con criterio tecnico",
      copy:
        "En lugar de podcast, aqui mostramos una seleccion de videos con ideas accionables sobre arquitectura, operacion y modernizacion de infraestructura.",
      cta: "Ver canal >",
      featured: {
        date: "Marzo 2, 2026",
        title: "Arquitectura de infraestructura para operaciones criticas",
        description:
          "Una guia practica para elevar disponibilidad, seguridad y capacidad de plataformas empresariales.",
      },
      items: [
        { title: "Roadmap de infraestructura empresarial" },
        { title: "Observabilidad y confiabilidad en produccion" },
        { title: "Automatizacion e infraestructura cloud" },
      ],
    },
    serviciosPage: {
      title: "Servicios | GoCapital",
      hero: {
        ariaLabel: "Consultoria de infraestructura",
        imageAlt: "Ingenieria de infraestructura en centro de datos",
        kicker: "Consultoria de infraestructura",
        headline: "Infraestructura robusta para operaciones de alto desempeno",
      },
      intro:
        "Acompanamos a lideres de tecnologia, operaciones e ingenieria para estructurar infraestructura moderna, segura y preparada para escalar. Desde el diseno estrategico hasta la ejecucion tecnica.",
      pillarsAriaLabel: "Pilares de servicio",
      pillars: [
        {
          id: "arquitectura-y-planeacion",
          title: "Arquitectura y planeacion",
          description:
            "Disenamos infraestructuras cloud, on-premise e hibridas con criterios de capacidad, seguridad y continuidad.",
          cta: "Explorar arquitectura",
        },
        {
          id: "modernizacion-de-plataforma",
          title: "Modernizacion de plataforma",
          description:
            "Transformamos entornos legacy con migraciones por fases para reducir riesgo y mejorar rendimiento operacional.",
          cta: "Ver plan de modernizacion",
        },
        {
          id: "transformacion-operativa",
          title: "Operacion y confiabilidad",
          description:
            "Implementamos observabilidad, automatizacion y respuesta a incidentes para servicios criticos 24/7.",
          cta: "Conocer modelo operativo",
        },
        {
          id: "gobierno-y-seguridad",
          title: "Gobierno y seguridad",
          description:
            "Definimos controles, estandares y politicas para mantener cumplimiento, trazabilidad y resiliencia empresarial.",
          cta: "Revisar framework de gobierno",
        },
      ],
      work: {
        eyebrow: "Como trabajamos",
        title: "Un enfoque integral para infraestructura critica",
        body:
          "Desde el assessment inicial hasta la estabilizacion operativa, trabajamos con equipos internos para acelerar decisiones, reducir deuda tecnica y estandarizar plataformas.",
        bullets: [
          "Assessment tecnico y mapa de riesgos.",
          "Arquitectura objetivo con roadmap por etapas.",
          "Implementacion y transferencia de capacidades.",
        ],
        imageAlt: "Consultores revisando arquitectura y operaciones",
      },
      impact: {
        eyebrow: "Impacto",
        title: "Resultados medibles en disponibilidad, seguridad y eficiencia",
        body:
          "Nuestros proyectos priorizan continuidad de negocio, tiempos de respuesta y gobierno tecnico para sostener el crecimiento sin comprometer estabilidad.",
        cta: "Solicitar consultoria",
        imageAlt: "Infraestructura urbana y centros corporativos",
      },
    },
    contactoPage: {
      title: "Contacto | GoCapital",
      hero: {
        kicker: "Contacto",
        headline: "Hablemos de tu infraestructura",
        intro:
          "Comparte tu reto y te contactamos para revisar el contexto tecnico y los siguientes pasos.",
      },
      form: {
        nameLabel: "Nombre",
        namePlaceholder: "Tu nombre",
        emailLabel: "Correo electronico",
        emailPlaceholder: "tu@empresa.com",
        messageLabel: "Mensaje",
        messagePlaceholder: "Cuentanos brevemente que necesitas.",
        submit: "Enviar mensaje",
        success: "Gracias, recibimos tu mensaje. Te responderemos pronto.",
        honeypotLabel: "No llenar este campo",
      },
    },
  },
  en: {
    shared: {
      siteTitle: "GoCapital",
      homeTitle: "GoCapital",
      videoHeroAriaLabel: "Main video",
      videoHeroTitle: "Main GoCapital video",
    },
    header: {
      home: "Home",
      services: "Services",
      resources: "Resources",
      architecture: "Architecture",
      modernization: "Modernization",
      operations: "Operations",
      blog: "Blog",
      guides: "Guides",
      caseStudies: "Case studies",
      contact: "Contact",
      menuOpen: "Open menu",
      menuLabel: "Menu",
      themeToDark: "Switch to dark mode",
      themeToLight: "Switch to light mode",
      languageLabel: "Language",
    },
    footer: {
      logoHomeLabel: "GoCapital home",
      navLabel: "Main footer links",
      links: {
        careers: "Careers",
        about: "About us",
        alumni: "Alumni",
        contact: "Contact us",
        locations: "Global locations",
      },
      subscribeTitle: "Subscribe",
      subscribeCopy: "Select topics and stay current with our latest insights",
      emailLabel: "Email address",
      emailPlaceholder: "Email address",
      submit: "Submit",
      socialLabel: "Social media",
      legalLinks: {
        scam: "Scam warning",
        faq: "FAQ",
        privacy: "Privacy policy",
        choices: "Your privacy choices",
        cookie: "Cookie preferences",
        terms: "Terms of use",
        language: "Local language information",
        accessibility: "Accessibility statement",
      },
      insightsCopy: "GoCapital Insights - Get our latest thinking on your favorite device.",
      copyright: "© 2026 GoCapital. All rights reserved.",
    },
    services: {
      kicker: "SERVICES",
      title: "Infrastructure that sustains growth, availability, and performance",
      items: [
        {
          title: "Infrastructure design and planning",
          description:
            "We define technical roadmaps for critical infrastructure, capacity, and operational continuity.",
        },
        {
          title: "Platform modernization",
          description:
            "We evolve legacy environments into more resilient, secure architectures built to scale.",
        },
        {
          title: "Operations and reliability",
          description:
            "We implement observability, automation, and governance standards for stable 24/7 operations.",
        },
      ],
    },
    videos: {
      kicker: "VIDEOS",
      title: "Videos to lead infrastructure with technical clarity",
      copy:
        "Instead of a podcast, here we share a curated set of videos with actionable ideas on architecture, operations, and infrastructure modernization.",
      cta: "View channel >",
      featured: {
        date: "March 2, 2026",
        title: "Infrastructure architecture for mission-critical operations",
        description:
          "A practical guide to improving availability, security, and capacity across enterprise platforms.",
      },
      items: [
        { title: "Enterprise infrastructure roadmap" },
        { title: "Observability and production reliability" },
        { title: "Automation and cloud infrastructure" },
      ],
    },
    serviciosPage: {
      title: "Services | GoCapital",
      hero: {
        ariaLabel: "Infrastructure consulting",
        imageAlt: "Infrastructure engineering in a data center",
        kicker: "Infrastructure consulting",
        headline: "Robust infrastructure for high-performance operations",
      },
      intro:
        "We partner with technology, operations, and engineering leaders to shape modern, secure infrastructure ready to scale. From strategic design to technical execution.",
      pillarsAriaLabel: "Service pillars",
      pillars: [
        {
          id: "arquitectura-y-planeacion",
          title: "Architecture and planning",
          description:
            "We design cloud, on-premise, and hybrid infrastructure with capacity, security, and continuity criteria.",
          cta: "Explore architecture",
        },
        {
          id: "modernizacion-de-plataforma",
          title: "Platform modernization",
          description:
            "We transform legacy environments through phased migrations to reduce risk and improve operational performance.",
          cta: "View modernization plan",
        },
        {
          id: "transformacion-operativa",
          title: "Operations and reliability",
          description:
            "We implement observability, automation, and incident response for mission-critical 24/7 services.",
          cta: "See operating model",
        },
        {
          id: "gobierno-y-seguridad",
          title: "Governance and security",
          description:
            "We define controls, standards, and policies to sustain compliance, traceability, and business resilience.",
          cta: "Review governance framework",
        },
      ],
      work: {
        eyebrow: "How we work",
        title: "A comprehensive approach for critical infrastructure",
        body:
          "From the initial assessment to operational stabilization, we work with internal teams to accelerate decisions, reduce technical debt, and standardize platforms.",
        bullets: [
          "Technical assessment and risk map.",
          "Target architecture with a phased roadmap.",
          "Implementation and capability transfer.",
        ],
        imageAlt: "Consultants reviewing architecture and operations",
      },
      impact: {
        eyebrow: "Impact",
        title: "Measurable results in availability, security, and efficiency",
        body:
          "Our projects prioritize business continuity, response times, and technical governance to sustain growth without compromising stability.",
        cta: "Request consulting",
        imageAlt: "Urban infrastructure and corporate centers",
      },
    },
    contactoPage: {
      title: "Contact | GoCapital",
      hero: {
        kicker: "Contact",
        headline: "Let's talk about your infrastructure",
        intro:
          "Share your challenge and we will reach out to review the technical context and next steps.",
      },
      form: {
        nameLabel: "Name",
        namePlaceholder: "Your name",
        emailLabel: "Email",
        emailPlaceholder: "you@company.com",
        messageLabel: "Message",
        messagePlaceholder: "Briefly tell us what you need.",
        submit: "Send message",
        success: "Thanks, we received your message. We will reply soon.",
        honeypotLabel: "Do not fill this field",
      },
    },
  },
};

export const resolveLocale = (value: string | undefined | null): Locale => {
  if (!value) return DEFAULT_LOCALE;
  const normalized = value.toLowerCase().split("-")[0];
  return normalized === "en" ? "en" : DEFAULT_LOCALE;
};
