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
      title: "Senior Engineering & Security Consultants",
      description:
        "Qasten is a two-person consulting team: Farouk Faiz (ex-AWS, ex-Uber) and Achraf El Masdouri (ex-OpenAI),available for remote contracts in backend engineering, cloud infrastructure, and cybersecurity.",
    },
    nav: {
      farouk: "Farouk",
      achraf: "Achraf",
    },
    meetTheTeam: "Meet the team",
    hero: {
      headline:
        "A senior engineering and security team, available for contract.",
      subline:
        "Qasten is a two-person consulting team combining deep <strong>engineering expertise (ex-AWS, ex-Uber)</strong> and <strong>offensive security (ex-OpenAI)</strong>. We work remotely with technical teams on problems that require genuine seniority. We take on missions <strong>independently or together</strong>, depending on what the problem requires.",
    },
    profiles: {
      servicesLabel: "What I work on",
      pillarEngineering: "Engineering",
      pillarSecurity: "Security",
      linkLinkedin: "LinkedIn",
      linkEmail: "Email",
      linkResume: "Resume",
      farouk: {
        name: "Farouk Faiz",
        title: "Senior Software Engineer · ex-AWS · ex-Uber · Backend & cloud",
        contactCta: "Available for remote contracts, reach out directly.",
        bio: [
          "I spent 3+ years at Amazon (AWS) building internal developer tooling with hard performance constraints, cutting graph loading times by 25x, pipeline execution times by 60x. During that time I also worked on AI-powered agents for large-scale mainframe modernization, automating code transformation and testing across COBOL-to-Java migrations.",
          "Before that, I worked on reliability infrastructure at Uber, where I led failover monitoring and reduced failover time from 15 minutes to 2 minutes.",
          "I work best on hard, ambiguous problems, slow systems, infrastructure that hasn't kept up with growth, codebases with years of technical debt. I'm autonomous, I communicate directly with stakeholders, and I don't need oversight on the engineering or infrastructure side.",
        ],
        credentials: [
          "Amazon (AWS) - Software Engineer - 2022-2026",
          "Uber - Software Engineer - 2021",
          "Rank 2 - Raise Your Hack 2025",
        ],
        services: [
          {
            name: "Backend Engineering & Performance",
            description:
              "Distributed services, high-throughput APIs, latency investigations, profiling. I've optimized systems processing millions of nodes and built reliability infrastructure at Uber's scale.",
          },
          {
            name: "AWS & Cloud Infrastructure",
            description:
              "Architecture reviews, infrastructure as code, security, observability and monitoring. I'm comfortable owning the full infrastructure layer, from design to production.",
          },
          {
            name: "Agentic AI",
            description:
              "Design and implementation of AI agents and multi-agent systems, task automation, LLM orchestration, tool use, and human-in-the-loop workflows. Built AI agents in production at AWS scale for large modernization programs.",
          },
          {
            name: "Developer Tooling & Platform",
            description:
              "Internal tooling, build systems, CI/CD pipelines at scale, developer experience. At AWS, the CI/CD system I built was used 10,000+ times by 50+ developers across teams.",
          },
          {
            name: "End-to-End Ownership",
            description:
              "I can own features end-to-end when the mission calls for it, from infrastructure to UI, without creating handoff bottlenecks.",
          },
        ],
        skillTags: [],
      },
      achraf: {
        name: "Achraf El Masdouri",
        title: "Cybersecurity Expert · Red Teamer · ex-OpenAI",
        contactCta: "Available for remote contracts, reach out directly.",
        bio: [
          "I'm a security engineer with a focus on offensive security, red teaming, penetration testing, and adversarial evaluation. I've conducted 140+ pentests across banking systems, government infrastructure (including 911 emergency services), and enterprise networks.",
          "As a contractor for OpenAI, I contributed to the safety evaluation of 20+ pre-release frontier models and was acknowledged in their Operator System Card (2025). I currently also serve as Security Engineer at Accor, managing their bug bounty program and securing critical payment and reservation infrastructure.",
        ],
        credentials: [
          "OpenAI - Red Teamer (contractor) - 2024-2026",
          "Accor SA - Security Engineer - 2022-2026",
          "Rank 2 - Raise Your Hack 2025",
          "Top 600 worldwide - Hack The Box",
        ],
        services: [
          {
            name: "Red Teaming & Adversarial Testing",
            description:
              "Adversarial simulation, prompt injection, policy bypass, including AI system red teaming. Acknowledged in OpenAI's Operator System Card (2025).",
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
    footer: {
      copyright: "© 2026 Qasten",
      companyLinkedin: "Qasten on LinkedIn",
    },
  },
  fr: {
    meta: {
      title: "Consultants Senior en Ingénierie & Sécurité",
      description:
        "Qasten est une équipe de deux consultants : Farouk Faiz (ex-AWS, ex-Uber) et Achraf El Masdouri (ex-OpenAI), disponibles pour des missions en ingénierie backend, infrastructure cloud et cybersécurité.",
    },
    nav: {
      farouk: "Farouk",
      achraf: "Achraf",
    },
    meetTheTeam: "Rencontrez l'équipe",
    hero: {
      headline:
        "Une équipe senior en ingénierie et sécurité, disponible en mission.",
      subline:
        "Qasten est une équipe de deux consultants alliant expertise en <strong>ingénierie (ex-AWS, ex-Uber)</strong> et <strong>sécurité offensive (ex-OpenAI)</strong>. Nous travaillons à distance avec des équipes techniques sur des problèmes qui requièrent une vraie séniorité. Nous intervenons <strong>indépendamment ou ensemble</strong>, selon ce que le problème requiert.",
    },
    profiles: {
      servicesLabel: "Mes domaines d'intervention",
      pillarEngineering: "Ingénierie",
      pillarSecurity: "Sécurité",
      linkLinkedin: "LinkedIn",
      linkEmail: "E-mail",
      linkResume: "CV",
      farouk: {
        name: "Farouk Faiz",
        title: "Ingénieur logiciel senior · ex-AWS · ex-Uber · Backend & cloud",
        contactCta: "Disponible pour des missions. Contactez directement.",
        bio: [
          "J'ai passé plus de 3 ans chez Amazon (AWS) à concevoir des outils internes pour les développeurs, dont une infrastructure CI/CD utilisée plus de 10 000 fois par plus de 50 développeurs. J'ai également travaillé sur des optimisations de performance critiques, réduisant le temps de chargement de graphes de 25x et les temps d'exécution de 60x, ainsi que sur des agents IA pour des programmes de modernisation mainframe, en automatisant la transformation de code et les tests sur des migrations COBOL vers Java.",
          "Avant ça, j'ai travaillé sur l'infrastructure de fiabilité chez Uber, où j'ai piloté la supervision des bascules et réduit le temps de failover de 15 minutes à 2 minutes.",
          "Je suis à l'aise sur les problèmes complexes et mal définis : systèmes lents, infrastructure qui n'a pas suivi la croissance, bases de code avec des années de dette technique. Je travaille de manière autonome, je communique directement avec les parties prenantes, et je n'ai pas besoin d'encadrement côté ingénierie ou infrastructure.",
        ],
        credentials: [
          "Amazon (AWS) - Ingénieur Logiciel - 2022-2026",
          "Uber - Ingénieur Logiciel - 2021",
          "Rang 2 - Raise Your Hack 2025",
        ],
        services: [
          {
            name: "Backend & Performance",
            description:
              "Services distribués, APIs à fort débit, investigations de latence, profilage. J'ai optimisé des systèmes traitant des millions de nœuds et construit des services gérant les bascules à l'échelle d'Uber.",
          },
          {
            name: "AWS & Infrastructure Cloud",
            description:
              "Revues d'architecture, infrastructure as code, sécurité, observabilité et monitoring. Je peux prendre en charge l'intégralité de la couche infrastructure, de la conception à la mise en production.",
          },
          {
            name: "Agents IA",
            description:
              "Conception et implémentation d'agents IA et de systèmes multi-agents, orchestration de LLMs, workflows IA avec supervision humaine. Agents déployés en production à l'échelle AWS sur des programmes de modernisation d'envergure.",
          },
          {
            name: "Outils Développeur & Platformes",
            description:
              "Outils internes, systèmes de build, pipelines CI/CD à grande échelle, expérience développeur. Chez AWS, le système CI/CD que j'ai mis en place a été utilisé plus de 10 000 fois par plus de 50 développeurs.",
          },
          {
            name: "Autonomie de Bout en Bout",
            description:
              "Je peux porter des fonctionnalités de bout en bout quand la mission le demande, de l'infrastructure à l'interface, sans créer de points de friction entre équipes.",
          },
        ],
        skillTags: [],
      },
      achraf: {
        name: "Achraf El Masdouri",
        title: "Expert Cybersécurité · Red Teamer · ex-OpenAI",
        contactCta: "Disponible pour des missions. Contactez directement.",
        bio: [
          "Je suis ingénieur en sécurité offensive, red teaming, tests d'intrusion et évaluation adversariale. J'ai réalisé plus de 140 pentests sur des systèmes bancaires, des infrastructures gouvernementales (dont des services d'urgence 911) et des réseaux d'entreprise.",
          "En tant que contractor pour OpenAI, j'ai contribué à l'évaluation de sécurité de plus de 20 modèles frontier pré-déploiement et j'ai été mentionné dans leur Operator System Card (2025). J'interviens également comme Security Engineer chez Accor sur la sécurisation des infrastructures critiques de paiement et de réservation.",
        ],
        credentials: [
          "OpenAI - Red Teamer (contractor) - 2024-2026",
          "Accor SA - Security Engineer - 2022-2026",
          "Rang 2 - Raise Your Hack 2025",
          "Top 600 mondial - Hack The Box",
        ],
        services: [
          {
            name: "Red Teaming & Tests Adversariaux",
            description:
              "Simulation adversariale, injection de prompts, contournement de politiques, y compris le red teaming de systèmes IA. Mentionné dans l'Operator System Card d'OpenAI (2025).",
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
    footer: {
      copyright: "© 2026 Qasten",
      companyLinkedin: "Qasten sur LinkedIn",
    },
  },
} as const;

export type ConsultTranslations = (typeof translations)["en"];
