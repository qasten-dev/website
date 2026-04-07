export function getTranslations(locale: string | undefined) {
  const safeLocale = getSafeCurrentLocale(locale);
  return translations[safeLocale];
}

export function getSafeCurrentLocale(locale: string | undefined) {
  return locale === "fr" ? locale : "en";
}

const translations = {
  en: {
    meta: {
      title: "Qasten — Senior Engineering & Cybersecurity Consultants",
      description:
        "Farouk Faiz (ex-AWS, ex-Uber) and Achraf El Masdouri (ex-OpenAI) — independently available for remote contracts in backend engineering, cloud infrastructure, and cybersecurity.",
    },
    nav: {
      farouk: "Farouk",
      achraf: "Achraf",
      contact: "Contact",
    },
    hero: {
      headline: "Two senior engineers. Available for contract.",
      subline:
        "Farouk Faiz and Achraf El Masdouri — independently available for remote contracts in software engineering, cloud infrastructure, and cybersecurity.",
      ctaFarouk: "Contact Farouk",
      ctaAchraf: "Contact Achraf",
    },
    profiles: {
      servicesLabel: "What I work on",
      linkLinkedin: "LinkedIn",
      linkGithub: "GitHub",
      linkEmail: "Email",
      farouk: {
        name: "Farouk Faiz",
        title: "Senior Software Engineer · AWS & Backend",
        bio: [
          "I spent 3+ years at Amazon (AWS) building internal developer tooling with hard performance constraints — cutting graph loading times by 25×, pipeline execution times by 60×. Before that, I worked on reliability infrastructure at Uber, where I led failover monitoring and reduced failover time from 15 minutes to 2 minutes.",
          "I work best on complex backend and infrastructure problems where there is no obvious solution — performance bottlenecks, distributed systems, AWS architecture, CI/CD at scale. I can also take full ownership of full-stack features when needed.",
        ],
        credentials: [
          "Amazon (AWS) — Software Engineer — 2022–2025",
          "Uber — Software Engineer — 2021",
          "Eurecom — MSc Data Science & Engineering",
        ],
        services: [
          {
            name: "Backend Engineering",
            description:
              "Complex APIs, distributed services, performance optimization, Java / Python / Go / TypeScript.",
          },
          {
            name: "AWS & Cloud Infrastructure",
            description:
              "Architecture reviews, infrastructure as code (CDK, CloudFormation, Terraform), CI/CD pipelines, observability and monitoring.",
          },
          {
            name: "Developer Tooling & Platform",
            description:
              "Internal tooling, developer experience, build systems, versioning pipelines at scale.",
          },
          {
            name: "Performance Debugging",
            description:
              "Latency investigations, memory/CPU profiling, large-scale data processing optimization.",
          },
        ],
        skillTags: [
          "AWS",
          "CDK",
          "CloudFormation",
          "Terraform",
          "Docker",
          "Kubernetes",
          "CI/CD",
          "Java",
          "Python",
          "Go",
          "TypeScript",
          "React",
          "PostgreSQL",
          "Redis",
          "Distributed Systems",
        ],
      },
      achraf: {
        name: "Achraf El Masdouri",
        title: "Cybersecurity Expert · Red Teamer · ex-OpenAI",
        bio: [
          "I'm a security engineer with a focus on offensive security — red teaming, penetration testing, and adversarial evaluation. I've conducted 140+ pentests across banking systems, government infrastructure (including 911 emergency services), and enterprise networks.",
          "As a contractor for OpenAI, I contributed to the safety evaluation of 20+ pre-release frontier models and was acknowledged in their Operator System Card (2025). I currently also serve as Security Engineer at Accor, managing their bug bounty program and securing critical payment and reservation infrastructure.",
        ],
        credentials: [
          "OpenAI — Red Teamer (contractor) — 2024–present",
          "Accor SA — Security Engineer — 2022–present",
          "IntelliSecSolutions — Penetration Tester — 2024–present",
          "Eurecom — MSc Cybersecurity",
          "Rank 2 — Raise Your Hack 2025",
          "Top 600 worldwide — Hack The Box",
        ],
        services: [
          {
            name: "Red Teaming & Adversarial Testing",
            description:
              "Adversarial simulation, prompt injection, policy bypass — including AI system red teaming. Acknowledged in OpenAI's Operator System Card (2025).",
          },
          {
            name: "Penetration Testing",
            description:
              "Web applications, network infrastructure, Active Directory, banking and government-grade environments. 140+ pentests conducted.",
          },
          {
            name: "Security Architecture",
            description:
              "Secure-by-design architecture reviews, DevSecOps pipeline integration (SAST, dependency scanning), security posture assessment.",
          },
          {
            name: "AI Security Evaluation",
            description:
              "Safety evaluation of LLMs and AI systems pre-release. Identifying vulnerabilities in model APIs, image generation, and operator systems.",
          },
        ],
        skillTags: [
          "Red Teaming",
          "Penetration Testing",
          "Active Directory",
          "OSINT",
          "Prompt Injection",
          "AI Safety",
          "DevSecOps",
          "SAST",
          "Bug Bounty",
          "Network Security",
          "Web App Security",
          "Python",
          "Golang",
          "Reverse Engineering",
        ],
      },
    },
    contact: {
      headline: "Get in touch",
      subline: "We're both available for remote contracts. Reach out directly.",
      emailButton: "Email",
    },
    footer: {
      copyright: "© 2026 Qasten",
      companyLinkedin: "Qasten on LinkedIn",
    },
  },
  fr: {
    meta: {
      title: "Qasten — Consultants Senior en Ingénierie & Cybersécurité",
      description:
        "Farouk Faiz (ex-AWS, ex-Uber) et Achraf El Masdouri (ex-OpenAI) — disponibles pour des missions à distance en ingénierie backend, infrastructure cloud et cybersécurité.",
    },
    nav: {
      farouk: "Farouk",
      achraf: "Achraf",
      contact: "Contact",
    },
    hero: {
      headline: "Deux ingénieurs seniors. Disponibles en mission.",
      subline:
        "Farouk Faiz et Achraf El Masdouri — disponibles indépendamment pour des missions à distance en ingénierie logicielle, infrastructure cloud et cybersécurité.",
      ctaFarouk: "Contacter Farouk",
      ctaAchraf: "Contacter Achraf",
    },
    profiles: {
      servicesLabel: "Mes domaines d'intervention",
      linkLinkedin: "LinkedIn",
      linkGithub: "GitHub",
      linkEmail: "E-mail",
      farouk: {
        name: "Farouk Faiz",
        title: "Ingénieur Logiciel Senior · AWS & Backend",
        bio: [
          "J'ai passé plus de 3 ans chez Amazon (AWS) à construire des outils internes avec des contraintes de performance élevées — réduction du temps de chargement des graphes de 25×, des temps d'exécution de 60×. Avant ça, j'ai travaillé sur l'infrastructure de fiabilité chez Uber, où j'ai réduit le temps de bascule de 15 minutes à 2 minutes.",
          "J'interviens sur des problèmes complexes de backend et d'infrastructure sans solution évidente — goulots d'étranglement de performance, systèmes distribués, architecture AWS, CI/CD à grande échelle. Je peux aussi prendre en charge des fonctionnalités full-stack de bout en bout.",
        ],
        credentials: [
          "Amazon (AWS) — Ingénieur Logiciel — 2022–2025",
          "Uber — Ingénieur Logiciel — 2021",
          "Eurecom — MSc Data Science & Engineering",
        ],
        services: [
          {
            name: "Ingénierie Backend",
            description:
              "APIs complexes, services distribués, optimisation des performances, Java / Python / Go / TypeScript.",
          },
          {
            name: "AWS & Infrastructure Cloud",
            description:
              "Revues d'architecture, infrastructure as code (CDK, CloudFormation, Terraform), pipelines CI/CD, observabilité.",
          },
          {
            name: "Outils Développeur & Platform Engineering",
            description:
              "Outillage interne, expérience développeur, systèmes de build, pipelines de versioning à grande échelle.",
          },
          {
            name: "Debugging de Performance",
            description:
              "Investigations de latence, profilage mémoire/CPU, optimisation de traitement de données massives.",
          },
        ],
        skillTags: [
          "AWS",
          "CDK",
          "CloudFormation",
          "Terraform",
          "Docker",
          "Kubernetes",
          "CI/CD",
          "Java",
          "Python",
          "Go",
          "TypeScript",
          "React",
          "PostgreSQL",
          "Redis",
          "Distributed Systems",
        ],
      },
      achraf: {
        name: "Achraf El Masdouri",
        title: "Expert Cybersécurité · Red Teamer · ex-OpenAI",
        bio: [
          "Je suis ingénieur en sécurité offensive — red teaming, tests d'intrusion et évaluation adversariale. J'ai réalisé plus de 140 pentests sur des systèmes bancaires, des infrastructures gouvernementales (dont des services d'urgence 911) et des réseaux d'entreprise.",
          "En tant que contractor pour OpenAI, j'ai contribué à l'évaluation de sécurité de plus de 20 modèles frontier pré-déploiement et j'ai été mentionné dans leur Operator System Card (2025). J'interviens également comme Security Engineer chez Accor sur la sécurisation des infrastructures critiques de paiement et de réservation.",
        ],
        credentials: [
          "OpenAI — Red Teamer (contractor) — 2024–présent",
          "Accor SA — Security Engineer — 2022–présent",
          "IntelliSecSolutions — Penetration Tester — 2024–présent",
          "Eurecom — MSc Cybersecurity",
          "Rang 2 — Raise Your Hack 2025",
          "Top 600 mondial — Hack The Box",
        ],
        services: [
          {
            name: "Red Teaming & Tests Adversariaux",
            description:
              "Simulation adversariale, injection de prompts, contournement de politiques — y compris le red teaming de systèmes IA. Mentionné dans l'Operator System Card d'OpenAI (2025).",
          },
          {
            name: "Tests d'Intrusion (Pentest)",
            description:
              "Applications web, infrastructure réseau, Active Directory, environnements bancaires et gouvernementaux. 140+ pentests réalisés.",
          },
          {
            name: "Architecture Sécurisée",
            description:
              "Revues d'architecture sécurisée, intégration DevSecOps (SAST, analyse de dépendances), évaluation de la posture de sécurité.",
          },
          {
            name: "Évaluation de la Sécurité IA",
            description:
              "Évaluation de la sécurité de LLMs et systèmes IA avant déploiement. Identification de vulnérabilités dans les APIs de modèles et les systèmes opérateurs.",
          },
        ],
        skillTags: [
          "Red Teaming",
          "Penetration Testing",
          "Active Directory",
          "OSINT",
          "Prompt Injection",
          "AI Safety",
          "DevSecOps",
          "SAST",
          "Bug Bounty",
          "Network Security",
          "Web App Security",
          "Python",
          "Golang",
          "Reverse Engineering",
        ],
      },
    },
    contact: {
      headline: "Nous contacter",
      subline:
        "Nous sommes tous les deux disponibles pour des missions à distance. Contactez-nous directement.",
      emailButton: "E-mail",
    },
    footer: {
      copyright: "© 2026 Qasten",
      companyLinkedin: "Qasten sur LinkedIn",
    },
  },
} as const;

export type ConsultTranslations = (typeof translations)["en"];
