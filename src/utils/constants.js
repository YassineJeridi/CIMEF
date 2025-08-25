// Company Information
export const COMPANY_INFO = {
    name: 'CIMEF Tunisie',
    tagline: 'Solutions Bureautiques depuis 1975',
    founded: 1975,
    marketShare: 65,
    stores: 6,
    employees: '100+',
    experience: '45+',

    // Contact Information
    phone: '+216 71 280 110',
    email: 'commercial@cimef.tn',
    website: 'https://cimef.tn',

    // Address
    address: {
        street: 'Rue 8300',
        area: 'BELVÉDÈRE',
        city: 'Tunis',
        country: 'Tunisie',
        postalCode: '1002'
    },

    // Social Media
    social: {
        facebook: 'https://facebook.com/cimef.tn',
        linkedin: 'https://linkedin.com/company/cimef-tunisie',
        instagram: 'https://instagram.com/cimef_tunisie'
    }
}

// Services Data
export const SERVICES = [
    {
        id: 1,
        title: 'Équipements Bureautiques',
        description: 'Distribution et maintenance d\'équipements de bureau de dernière génération pour optimiser votre productivité.',
        icon: 'FaPrint',
        features: [
            'Imprimantes multifonctions',
            'Copieurs professionnels',
            'Scanners haute résolution',
            'Maintenance préventive'
        ],
        color: '#2C5F41'
    },
    {
        id: 2,
        title: 'Solutions Informatiques',
        description: 'Vente et support de matériel informatique professionnel, incluant les produits Apple et accessoires.',
        icon: 'FaLaptop',
        features: [
            'Ordinateurs Apple',
            'Serveurs et stockage',
            'Réseaux et sécurité',
            'Support technique'
        ],
        color: '#4A90A4'
    },
    {
        id: 3,
        title: 'Location Longue Durée',
        description: 'Solutions de location flexible pour imprimantes et équipements bureautiques avec maintenance incluse.',
        icon: 'FaClock',
        features: [
            'Contrats flexibles',
            'Maintenance incluse',
            'Remplacement garanti',
            'Facturation mensuelle'
        ],
        color: '#85BB65'
    },
    {
        id: 4,
        title: 'Maintenance & Support',
        description: 'Service technique expert disponible pour assurer le bon fonctionnement de tous vos équipements.',
        icon: 'FaTools',
        features: [
            'Intervention rapide',
            'Techniciens certifiés',
            'Pièces d\'origine',
            'Support 24/7'
        ],
        color: '#D4AF37'
    }
]

// Partners/Clients Data
export const PARTNERS = [
    {
        name: 'Apple',
        logo: '/assets/images/logo-apple.png',
        category: 'Technology'
    },
    {
        name: 'Ricoh',
        logo: '/assets/images/01-Ricoh-IM-C2500-IM-6000.webp',
        category: 'Printing Solutions'
    },
    {
        name: 'Attijariwafa Bank',
        logo: '/assets/images/ATTIJARIWAFA_BANK_LOGO.png',
        category: 'Banking'
    },
    {
        name: 'Carrefour',
        logo: '/assets/images/Carrefour_logo.png',
        category: 'Retail'
    },
    {
        name: 'BIAT',
        logo: '/assets/images/logo-BIAT.png',
        category: 'Banking'
    },
    {
        name: 'Orange Tunisie',
        logo: '/assets/images/logo-orange.png',
        category: 'Telecommunications'
    },
    {
        name: 'Tunisie Telecom',
        logo: '/assets/images/Tunisie-Telecom-logo-1024x677.png',
        category: 'Telecommunications'
    },
    {
        name: 'Renault',
        logo: '/assets/images/renault-logo.png',
        category: 'Automotive'
    },
    {
        name: 'UBCI',
        logo: '/assets/images/ubci-logo.png',
        category: 'Banking'
    },
    {
        name: 'Henkel',
        logo: '/assets/images/Henkel-Logo.png',
        category: 'Manufacturing'
    }
]

// Statistics Data
export const STATS = [
    {
        id: 1,
        number: 65,
        suffix: '%',
        label: 'Part de marché',
        description: 'Leader sur le marché tunisien'
    },
    {
        id: 2,
        number: 6,
        suffix: '',
        label: 'Magasins Apple',
        description: 'Distributeur officiel Apple'
    },
    {
        id: 3,
        number: 45,
        suffix: '+',
        label: 'Années d\'expérience',
        description: 'Depuis 1975'
    },
    {
        id: 4,
        number: 1000,
        suffix: '+',
        label: 'Clients satisfaits',
        description: 'Entreprises et particuliers'
    }
]

// Testimonials Data
export const TESTIMONIALS = [
    {
        id: 1,
        name: 'Ahmed Ben Salem',
        position: 'Directeur IT',
        company: 'TunisieTech',
        content: 'CIMEF nous accompagne depuis plus de 10 ans. Leur expertise et leur réactivité font d\'eux un partenaire incontournable.',
        rating: 5,
        avatar: '/assets/images/avatar-1.jpg'
    },
    {
        id: 2,
        name: 'Fatma Gharbi',
        position: 'Responsable Achats',
        company: 'MedCorp',
        content: 'La qualité du service client et la rapidité d\'intervention de CIMEF dépassent nos attentes. Très satisfaits!',
        rating: 5,
        avatar: '/assets/images/avatar-2.jpg'
    },
    {
        id: 3,
        name: 'Mohamed Triki',
        position: 'PDG',
        company: 'InnovateTN',
        content: 'Grâce à CIMEF, nous avons pu moderniser tout notre parc informatique. Un accompagnement professionnel du début à la fin.',
        rating: 5,
        avatar: '/assets/images/avatar-3.jpg'
    }
]

// Navigation Menu
export const NAVIGATION = [
    {
        label: 'Accueil',
        path: '/',
        icon: 'FaHome'
    },
    {
        label: 'Contact',
        path: '/contact',
        icon: 'FaEnvelope'
    }
]

// Business Sectors
export const SECTORS = [
    'Agriculture',
    'Santé',
    'Banque & Finance',
    'Édition & Médias',
    'Commerce & Distribution',
    'Télécommunications',
    'Industrie',
    'Gouvernement',
    'Éducation',
    'Transport & Logistique'
]

// Animation Variants for Framer Motion
export const ANIMATION_VARIANTS = {
    fadeInUp: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    },
    fadeInLeft: {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 }
    },
    fadeInRight: {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0 }
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    },
    staggerContainer: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    }
}

// Form Validation Rules
export const VALIDATION_RULES = {
    required: 'Ce champ est obligatoire',
    email: 'Veuillez entrer une adresse email valide',
    phone: 'Veuillez entrer un numéro de téléphone valide',
    minLength: (min) => `Minimum ${min} caractères requis`,
    maxLength: (max) => `Maximum ${max} caractères autorisés`
}

// API Endpoints (if needed)
export const API_ENDPOINTS = {
    contact: '/api/contact',
    newsletter: '/api/newsletter',
    quote: '/api/quote'
}

// SEO Meta Data
export const SEO_DATA = {
    home: {
        title: 'CIMEF Tunisie - Leader en Solutions Bureautiques depuis 1975',
        description: 'CIMEF Tunisie, distributeur leader d\'équipements bureautiques, informatiques et solutions d\'impression. Plus de 45 ans d\'expérience au service des entreprises.',
        keywords: 'CIMEF, bureautique, Tunisie, Apple, Ricoh, imprimantes, équipements bureau, distribution, maintenance'
    },
    contact: {
        title: 'Contactez CIMEF Tunisie - Devis Gratuit',
        description: 'Contactez CIMEF Tunisie pour vos besoins en équipements bureautiques. Devis gratuit, conseil expert et service client de qualité.',
        keywords: 'contact CIMEF, devis bureautique, conseil équipement bureau, service client Tunisie'
    }
}
