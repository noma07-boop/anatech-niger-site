export const company = {
  name: "ANATECH NIGER",
  slogan: "Votre partenaire technologique au Niger",
  motto: "Innover • Créer • Sécuriser",
  director: "Abdourahamane Noma Abdoulaye",
  directorTitle: "Directeur Général",
  phones: ["+227 75 29 57 99", "+227 98 34 71 27"],
  whatsappDisplay: "98 34 71 27",
  whatsappNumber: "22798347127",
  email: "anatechniger@gmail.com",
  website: "www.anatechniger.com",
  address: "Lazaret, Niamey - Niger",
  poBox: "BP 12 345, Niamey - NIGER",
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  bullets: string[];
  description: string;
  icon: IconName;
};

export type IconName =
  | "code"
  | "server"
  | "palette"
  | "cloud"
  | "shield"
  | "printer"
  | "sun";

export const services: Service[] = [
  {
    slug: "developpement-web-mobile",
    title: "Développement Web & Mobile",
    short: "Applications sur mesure, sites web, solutions mobiles",
    bullets: ["Applications sur mesure", "Sites web", "Solutions mobiles"],
    description:
      "Nous concevons des sites web et applications mobiles adaptés aux besoins réels des entreprises et institutions nigériennes : sites vitrines, plateformes de gestion, applications métier sur mesure, du cahier des charges à la mise en production.",
    icon: "code",
  },
  {
    slug: "solutions-informatiques",
    title: "Solutions Informatiques",
    short: "Installation, maintenance",
    bullets: ["Installation", "Maintenance"],
    description:
      "Installation et maintenance de votre parc informatique : postes de travail, serveurs, logiciels métier. Nous assurons un suivi régulier pour garantir la continuité de votre activité et réduire les temps d'arrêt.",
    icon: "server",
  },
  {
    slug: "infographie-design",
    title: "Infographie & Design",
    short: "Identité visuelle, logos, supports de communication",
    bullets: ["Identité visuelle", "Logos", "Supports de communication"],
    description:
      "Création de logos, chartes graphiques et supports de communication qui donnent à votre structure une image professionnelle et cohérente, à l'écrit comme à l'écran.",
    icon: "palette",
  },
  {
    slug: "reseaux-cloud",
    title: "Réseaux & Cloud",
    short: "Infrastructure, cloud, hébergement, télécom",
    bullets: ["Infrastructure", "Cloud", "Hébergement", "Télécom"],
    description:
      "Mise en place et gestion de vos infrastructures réseau, solutions cloud, hébergement et services télécom, pour une connectivité fiable adaptée à la taille de votre structure.",
    icon: "cloud",
  },
  {
    slug: "securite-videosurveillance",
    title: "Sécurité & Vidéosurveillance",
    short: "Caméras, contrôle d'accès, cybersécurité",
    bullets: ["Caméras", "Contrôle d'accès", "Cybersécurité"],
    description:
      "Installation de systèmes de vidéosurveillance et de contrôle d'accès, complétés par des mesures de cybersécurité pour protéger vos locaux, vos équipements et vos données.",
    icon: "shield",
  },
  {
    slug: "impression-supports",
    title: "Impression & Supports",
    short: "Cartes, flyers, bâches, objets personnalisés",
    bullets: ["Cartes de visite", "Flyers", "Bâches", "Objets personnalisés"],
    description:
      "Impression de cartes de visite, flyers, bâches publicitaires et objets personnalisés pour accompagner votre communication sur le terrain, du concept à l'objet fini.",
    icon: "printer",
  },
  {
    slug: "energie-solaire",
    title: "Énergie & Solaire",
    short: "Électricité, panneaux solaires, forages solaires",
    bullets: [
      "Installation électrique",
      "Panneaux solaires",
      "Forages solaires",
      "Maintenance",
    ],
    description:
      "Installation électrique et systèmes photovoltaïques pour alimenter vos locaux et vos équipements de façon fiable et économique. Nous intervenons également sur les forages fonctionnant à l'énergie solaire (pompage solaire), pour un accès à l'eau autonome, sans dépendre du réseau électrique.",
    icon: "sun",
  },
];

export const values = [
  {
    title: "Innover",
    description:
      "Nous restons à l'écoute des nouvelles technologies pour proposer des solutions adaptées au contexte nigérien.",
  },
  {
    title: "Créer",
    description:
      "Chaque projet est pensé sur mesure, du concept graphique à la solution technique livrée.",
  },
  {
    title: "Sécuriser",
    description:
      "Nous intégrons la sécurité — physique et numérique — dans chaque solution que nous mettons en place.",
  },
];

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/blog", label: "Actualités" },
  { href: "/contact", label: "Contact" },
];
