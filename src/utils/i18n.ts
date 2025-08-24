export function getTranslations(locale: string | undefined) {
  const safeLocale = getSafeCurrentLocale(locale);
  return translations[safeLocale];
}

export function getSafeCurrentLocale(locale: string | undefined) {
  return locale === "fr" ? locale : "en";
}

const translations = {
  en: {
    aboutUs: "About us",
    contactUs: "Contact us",
    hero: {
      title: "Enterprise AI <br /> under your control",
      subtitle:
        "Empower your employees with ready-to-use AI apps,<br /> while keeping <b>security</b>, <b>compliance</b>, and <b>costs</b> under control.",
    },
    bridge: {
      title: "Be the company that embraces AI safely",
      subtitle:
        "Your employees are already using AI. Give them the tools to be productive, with <b>security</b>,<b>visibility</b>, and <b>control</b>",
    },
    features: {
      visibility: {
        title: "Full Visibility & Governance",
        body: "Know who uses AI, for what, and with which data. Every interaction is logged, attributed, and auditable. Track usage by team, monitor costs, and ensure compliance from day one.",
      },
      pii: {
        title: "Built-in PII Redaction",
        body: "Sensitive data stays in your hands, not in the model. Our adaptive redaction engine automatically detects and masks PII before it leaves your infrastructure, with continuous learning from user feedback.",
      },
      guardrails: {
        title: "Guardrails & Policy Enforcement",
        body: "Define what's acceptable, and enforce it. Set custom rules to prevent prompt injection, data exfiltration, or non-compliant use. Quotas and access controls keep AI aligned with corporate policy.",
      },
      apps: {
        title: "Pre-Integrated Employee Apps",
        body: "AI your workforce can actually use safely. Kickstart adoption with ready-to-use apps like an enterprise chatbot and template-based assistants. Employees get productivity; you keep oversight.",
      },
    },
    send: "Send",
    contactSuccess: {
      title: "Thank you for contacting us!",
      subtitle: "Our team will get back to you shortly.",
    },
    subscriptionSuccess: {
      title: "Thank you for your interest!",
      subtitle: "We'll keep you updated with the latest from Qasten.",
    },
    back: "Go back",
    stats: {
      sensitiveData:
        "of corporate data pasted into AI tools is considered <b>sensitive</b>",
      dataLeakage:
        "of organizations have experienced data leakage due to employees using AI tools",
      hiddenUsage:
        "of employees admitted to hiding their AI usage from their employer",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about Qasten.",
      content: [
        {
          question: "How is Qasten different from ChatGPT Enterprise?",
          answer:
            "ChatGPT Enterprise is SaaS in OpenAI's cloud and tied to their models. Qasten runs on your infra (on-prem or private cloud) or as SaaS, is model-agnostic, and adds governance: audit logs, PII redaction, policy enforcement, and cost controls.",
        },
        {
          question: "How is Qasten different from other AI gateways?",
          answer:
            "AI gateways target developers with APIs and observability. Qasten is for employees and security teams: ready-to-use apps like a secure chatbot plus built-in PII redaction, guardrails, and governance for safe company-wide adoption.",
        },
        {
          question: "How does Qasten protect our sensitive data?",
          answer:
            "Qasten's PII redactor masks sensitive data before it reaches any model. You can enforce custom policies, access controls, and guardrails to block risky queries and prevent leaks, whether on-prem, private cloud, or SaaS.",
        },
        {
          question: "Can our existing AI tools integrate with Qasten?",
          answer:
            "Yes. Qasten acts as a central governance layer. Through its OpenAI-compatible API and connectors, you can integrate existing tools and get unified logging, cost tracking, and policy enforcement across vendors and models.",
        },
        {
          question: "How do we start using Qasten?",
          answer:
            "Contact us. We deploy inside your infra for strict compliance needs or offer Qasten as managed SaaS for speed. Both give the same governance, redaction, and observability features.",
        },
      ],
    },
    footer: {
      stayUpdated: "Stay Updated",
      subscribeCta: "Subscribe to receive product updates and announcements.",
      emailPlaceholder: "Enter your email",
      subscribe: "Subscribe",
      copyright: "© 2025 Qasten. All rights reserved.",
    },
    privacyPolicy: "Privacy policy",
    deepDives: "Deep Dives",
    learnMore: "Learn more",
    about: {
      title: "About Qasten",
      tagline:
        "Empowering every company to adopt AI with confidence. We build private AI platforms that put security, governance, and control back in your hands.",
      ourStory: "Our Story",
      ourValues: "Our Values",
      meetTheFounders: "Meet the Founders",
      story: [
        "We've seen first-hand how large enterprises struggled to integrate AI into their workflows. Each of us came from companies where teams rolled out internal tools: powerful, but often fragmented, complex, or limited to those with the biggest budgets.",

        "We founded Qasten with a simple idea: <b>every company, from fast-growing startups to global enterprises, should have access to AI platforms with the same level of control and reliability once reserved for large tech organizations.</b>",
      ],
      securityFirst: {
        title: "Security First",
        body: "Your data never leaves your infrastructure.",
      },
      empowerment: {
        title: "Empowerment",
        body: "AI should accelerate employees, not restrict them.",
      },
      clarity: {
        title: "Clarity",
        body: "Transparent governance, observability, and cost visibility.",
      },
      farouk:
        "Former Software Engineer at <b>AWS</b> and <b>Uber</b>, expert in cloud platforms.",
      youssef:
        "Former Software Engineer at <b>Datadog</b>, expert in data engineering and large-scale systems.",
      achraf:
        "Former Red Teamer at <b>OpenAI</b> and CyberSecurity expert at <b>Accor</b>",
    },
  },

  fr: {
    aboutUs: "À propos",
    contactUs: "Nous contacter",
    hero: {
      title: "IA d'entreprise <br /> sous votre contrôle",
      subtitle:
        "Donnez à vos employés des applications IA prêtes à l'emploi,<br /> tout en gardant la <b>sécurité</b>, la <b>conformité</b> et les <b>coûts</b> sous contrôle.",
    },
    bridge: {
      title: "Soyez l'entreprise qui adopte l'IA en toute sécurité",
      subtitle:
        "Vos employés utilisent déjà l'IA. Donnez-leur les outils pour être productifs, avec <b>sûreté</b>, <b>visibilité</b> et <b>contrôle</b>",
    },
    features: {
      visibility: {
        title: "Visibilité & Gouvernance Totale",
        body: "Sachez qui utilise l'IA, pour quoi et avec quelles données. Chaque interaction est journalisée, attribuée et vérifiable. Suivez l'utilisation par équipe, contrôlez les coûts et assurez la conformité dès le premier jour.",
      },
      pii: {
        title: "Masquage de PII Intégré",
        body: "Les données sensibles restent entre vos mains, pas dans le modèle. Notre moteur de masquage adaptatif détecte et masque automatiquement les PII avant qu'elles ne quittent votre infrastructure, avec un apprentissage continu basé sur les retours utilisateurs.",
      },
      guardrails: {
        title: "Garde-fous & Application des Politiques",
        body: "Définissez ce qui est acceptable et appliquez-le. Créez des règles personnalisées pour empêcher l'injection de prompts, l'exfiltration de données ou un usage non conforme. Les quotas et contrôles d'accès gardent l'IA alignée avec la politique d'entreprise.",
      },
      apps: {
        title: "Applications Employés Pré-Intégrées",
        body: "Une IA que vos équipes peuvent utiliser en toute sécurité. Accélérez l'adoption avec des applications prêtes à l'emploi comme un chatbot d'entreprise et des assistants basés sur des modèles. Vos employés gagnent en productivité ; vous gardez la supervision.",
      },
    },
    send: "Envoyer",
    contactSuccess: {
      title: "Merci de nous avoir contactés !",
      subtitle: "Notre équipe vous répondra sous peu.",
    },
    subscriptionSuccess: {
      title: "Merci pour votre intérêt !",
      subtitle:
        "Nous vous tiendrons informé des dernières nouvelles de Qasten.",
    },
    back: "Retour",

    stats: {
      sensitiveData:
        "des données d'entreprise collées dans des outils d'IA sont considérées comme <b>sensible</b>",
      dataLeakage:
        "des organisations ont connu des fuites de données dues à l'utilisation d'outils d'IA par leurs employés",
      hiddenUsage:
        "des employés ont admis cacher leur utilisation de l'IA à leur employeur",
    },
    faq: {
      title: "Foire aux Questions",
      subtitle: "Tout ce que vous devez savoir sur Qasten.",
      content: [
        {
          question: "En quoi Qasten est-il différent de ChatGPT Enterprise ?",
          answer:
            "ChatGPT Enterprise est un SaaS hébergé chez OpenAI et limité à leurs modèles. Qasten s'exécute dans votre infra (on-prem ou cloud privé) ou en SaaS, est agnostique aux modèles et ajoute gouvernance : journaux d'audit, redaction PII, politiques et suivi des coûts.",
        },
        {
          question: "En quoi Qasten est-il différent d'une AI gateway ?",
          answer:
            "Les AI gateways visent les développeurs avec API et observabilité. Qasten est conçu pour les employés et la sécurité : apps prêtes à l'emploi comme un chatbot sécurisé, avec redaction PII, garde-fous et gouvernance pour une adoption unifiée.",
        },
        {
          question: "Comment Qasten protège-t-il nos données sensibles ?",
          answer:
            "Le redactor PII de Qasten masque automatiquement les données sensibles avant tout modèle. Vous appliquez politiques, contrôles d'accès et garde-fous pour bloquer les requêtes à risque, en on-prem, cloud privé ou SaaS.",
        },
        {
          question:
            "Nos outils d'IA existants peuvent-ils s'intégrer à Qasten ?",
          answer:
            "Oui. Qasten sert de couche centrale de gouvernance. Via son API compatible OpenAI et ses connecteurs, vous intégrez vos outils existants et obtenez une vue unifiée avec logs, coûts et politiques centralisés.",
        },
        {
          question: "Comment commencer à utiliser Qasten ?",
          answer:
            "Contactez-nous. Nous déployons dans votre infra pour les besoins de conformité stricte ou en SaaS managé pour plus de rapidité. Les deux offrent les mêmes fonctions de gouvernance, redaction et observabilité.",
        },
      ],
    },
    footer: {
      stayUpdated: "Restez informé",
      subscribeCta:
        "Abonnez-vous pour recevoir les mises à jour produit et les annonces.",
      emailPlaceholder: "Entrez votre adresse e-mail",
      subscribe: "S'abonner",
      copyright: "© 2025 Qasten. Tous droits réservés.",
    },
    privacyPolicy: "Politique de confidentialité",
    deepDives: "Pour approfondir",
    learnMore: "Voir plus",
    about: {
      title: "À propos de Qasten",
      tagline:
        "Permettre à chaque entreprise d'adopter l'IA en toute confiance. Nous construisons des plateformes d'IA privées qui redonnent sécurité, gouvernance et contrôle à vos équipes.",
      ourStory: "Notre histoire",
      ourValues: "Nos valeurs",
      meetTheFounders: "Rencontrez les fondateurs",
      story: [
        "Nous avons constaté de première main comment de grandes entreprises peinaient à intégrer l'IA dans leurs processus. Chacun de nous vient d'organisations où des outils internes étaient déployés : puissants, mais souvent fragmentés, complexes, ou réservés à ceux disposant des budgets les plus élevés.",

        "Nous avons fondé Qasten avec une idée simple : <b>toute entreprise, des startups en forte croissance aux grands groupes internationaux, devrait pouvoir accéder à des plateformes d'IA offrant le même niveau de contrôle et de fiabilité autrefois réservé aux géants de la tech.</b>",
      ],
      securityFirst: {
        title: "La sécurité avant tout",
        body: "Vos données ne quittent jamais votre infrastructure.",
      },
      empowerment: {
        title: "Autonomisation",
        body: "L'IA doit accélérer vos collaborateurs, pas les contraindre.",
      },
      clarity: {
        title: "Clarté",
        body: "Gouvernance transparente, observabilité et visibilité des coûts.",
      },
      farouk:
        "Ancien ingénieur logiciel chez <b>AWS</b> et <b>Uber</b>, expert en plateformes cloud.",
      youssef:
        "Ancien ingénieur logiciel chez <b>Datadog</b>, expert en ingénierie des données et systèmes à grande échelle.",
      achraf:
        "Ancien Red Teamer chez <b>OpenAI</b> et expert en cybersécurité chez <b>Accor</b>",
    },
  },
};
