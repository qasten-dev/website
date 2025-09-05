export function getTranslations(locale: string | undefined) {
  const safeLocale = getSafeCurrentLocale(locale);
  return translations[safeLocale];
}

export function getSafeCurrentLocale(locale: string | undefined) {
  return locale === "fr" ? locale : "en";
}

const translations = {
  en: {
    metaDescription: {
      home: "Qasten is the AI workspace for teams that replaces shadow AI. Collaborate with models, workflows, and data in one secure platform built for productivity.",
      aboutUs:
        "At Qasten, we believe the future of work is collective intelligence. Learn our mission, beliefs, and vision for secure, team-first AI.",
      security:
        "Qasten puts security first: EU hosting, zero retention, admin controls, and built-in safeguards to replace risky Shadow AI.",
      blog: "Insights on AI adoption, team productivity, and security. Explore Qasten's blog for practical strategies and expert perspectives.",
    },
    aboutUs: "About us",
    contactUs: "Contact us",
    security: "Security",
    hero: {
      title: {
        preUnderline: "The",
        underline: "Team-First",
        postUnderline: "<br/> AI Workspace",
      },
      subtitle:
        "Qasten is a collaborative AI workspace that replaces scattered chat tools. <br/> <b>Start solo today, invite your team when you're ready.</b>",
    },
    bridge: {
      title: "Your AI Tools Were Built for Individuals",
      subtitle1:
        "<b>Shadow AI</b> is everywhere in your teams today. <br/> Different tools, personal accounts, private prompts.",
      subtitle2:
        "Knowledge never compounds, collaboration never happens, and value gets lost.",
    },
    features: {
      team: {
        title: "Your Collaborative Workspace",
        body: "Work privately or in shared spaces with persistent context scoped by project or team. Role-based access keeps sensitive work secure, new teammates onboard instantly with full context, and Qasten can join you directly in Slack or Microsoft Teams.",
      },
      kb: {
        title: "A Living Knowledge Base",
        body: "With your approval, Qasten turns everyday insights into a <b>collective memory</b>. Instead of knowledge disappearing in private chats, your team builds a knowledge base that gets smarter with every use.",
      },
      brainstorm: {
        title: "Brainstorm with Competing Models",
        body: "Our <b>Consensus Canvas</b> lets top AI models challenge each other's ideas while your team debates, annotates, and refines in one shared space. Collective intelligence, in action.",
      },
      workflows: {
        title: "Scale Your Expertise with Workflows",
        body: "Turn your best prompts into reusable templates, deployable as lightweight internal apps. Version control and usage stats are built in, so one person's work benefits the whole team.",
      },
      models: {
        title: "Always Get the Best Answer",
        body: "Access OpenAI, Anthropic, Google, open-source models, and more in one place. Automatically route to the right model for the task, from creative writing to complex analysis.",
      },
      source: {
        title: "Grounded in Your Company Data",
        body: "Connect Slack, Notion, Jira, Google Drive, and more so Qasten works with your team's actual knowledge. No more copy-pasting, Qasten brings intelligence to where your data already lives.",
      },
      visibility: {
        title: "From Shadow AI to Insights",
        body: "Dashboards reveal how AI is used across your scope, from personal usage and spend to team-wide adoption. Spot what's working, what's not, and where to optimize.",
      },
      security: {
        title: "Security First, Always",
        body: "Your data sovereignty is non-negotiable. Qasten offers EU hosting, no third-party storage, and zero data retention for model training. The admin panel gives full control: model and region allowlists, audit logs, PII redaction, guardrails, and more. Learn more on our <a href='/security'>Security Page</a>.",
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

    sec: {
      title: "Security First, Always",
      subtitle:
        "<b>Shadow AI</b> is already creating risks inside your company. Security cannot be an afterthought.",
      stats: {
        sensitiveData:
          "of corporate data pasted into AI tools is considered <b>sensitive</b>",
        dataLeakage:
          "of organizations have experienced <b>data leakage</b> due to employees using AI tools",
        hiddenUsage:
          "of employees admitted to <b>hiding</b> their AI usage from their employer",
      },
      principles: {
        title: "Our Security Principles",
        euFirst: {
          title: "EU-first",
          description:
            "Built in Europe, with sovereignty and European regulatory needs in mind.",
        },
        transparency: {
          title: "Transparency",
          description:
            "No hidden training, no black boxes. You know where your data goes.",
        },
        control: {
          title: "Control",
          description:
            "You decide which models, regions, and providers are allowed.",
        },
        securityThroughUx: {
          title: "Security through UX",
          description:
            "Employees adopt Qasten because it's easier than <b>Shadow AI</b>.",
        },
      },
      measures: {
        title: "Security Measures",
        euHosting: {
          title: "EU Hosting",
          description:
            "All data is processed in the EU by default, with the option to restrict providers outside.",
        },
        noThirdPartyStorage: {
          title: "No Third-Party Storage",
          description: "Content is never stored on model providers' servers.",
        },
        zeroTrainingRetention: {
          title: "Zero Training Retention",
          description: "Your data is never used to train external models.",
        },
        encryption: {
          title: "Encryption",
          description:
            "All data encrypted in transit (TLS 1.2+) and at rest (AES-256).",
        },
        adminControls: {
          title: "Admin Controls",
          description:
            "Model/region allowlists, audit logs, and retention settings give you full control.",
        },
        piiRedaction: {
          title: "PII Redaction",
          description:
            "Sensitive personal data is automatically detected and removed before being sent to models.",
        },
        contentFiltering: {
          title: "Content Filtering",
          description:
            "Admins can define rules to block or reroute prompts containing sensitive data, with clear feedback to users.",
        },
        auditAlerts: {
          title: "Audit & Alerts",
          description:
            "Every action is logged. Get alerts for potential leaks or policy violations.",
        },
      },
      faq: {
        title: "Security FAQ",
        content: [
          {
            question: "What data does Qasten store?",
            answer:
              "We store the data required to provide the service: user and account information, conversations, saved workflows, and knowledge base entries. All content is encrypted at rest (AES-256) and in transit (TLS 1.2+). Retention policies let you control how long data is kept.",
          },
          {
            question: "Can I delete my data?",
            answer:
              "<b>Yes</b>. Every user can delete their own conversations and workflows. Admins can configure retention policies and delete data at the account level, but they cannot read private conversations.",
          },
          {
            question: "Does Qasten use my data to train models?",
            answer:
              "<b>No. Never.</b> Your data is never used to train any models. We enforce a Zero Data Retention (ZDR) policy with our AI providers, contractually ensuring they do not store or train on your data.",
          },
          {
            question: "Where is my data processed?",
            answer:
              "Qasten is hosted in the EU. As an administrator, you have full control. You can configure your workspace to only use AI providers that are also hosted within the EU, ensuring complete data sovereignty.",
          },
        ],
      },
      conclusion: {
        title: "Security isn't an add-on. It's the foundation of Qasten.",
        subtitle: "Want to learn more? Contact us for a security briefing.",
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about Qasten.",
      content: [
        {
          question: "How is Qasten different from ChatGPT?",
          answer:
            "ChatGPT is built for individuals. Qasten is <b>built for teams</b>. You get shared spaces with memory, reusable workflows, access to all top models, and enterprise-grade security, and much more, all in one place.",
        },
        {
          question: "Can I use Qasten inside Slack or Microsoft Teams?",
          answer:
            "<b>Yes</b>. You use Qasten as an app, but you can also bring it into Slack and Microsoft Teams when you need AI in the middle of a conversation, so <b>no context switching required</b>.",
        },
        {
          question: "Which AI models are supported?",
          answer:
            "You can access all leading commercial models like GPT-5, Claude 4, Gemini, Mistral, open-source models, and more. We believe in model neutrality, so you always have the right model for the right task. Learn more in our <a href='/blog/stop-treating-ai-like-a-commodity'>blog post</a>.",
        },
        {
          question: "How does Qasten guarantee data security and sovereignty?",
          answer:
            "Security is built in from day one. Qasten offers EU hosting, no third-party data storage, and zero data retention for model training. Admins also get full control: audit logs, model/region allowlists, PII redaction, and guardrails. Learn more on our <a href='/security'>Security Page</a>.",
        },
        {
          question: "How does Qasten help us move away from Shadow AI?",
          answer:
            "Shadow AI happens when internal tools are inexistent or restrictive. Qasten solves it by offering a platform that's more powerful than the tools employees use in secret. It wins them over by providing a superior experience. Read more about our approach in our <a href='/blog/your-employees-are-smarter-than-your-ai-policy'>blog post</a>.",
        },

        {
          question: "Can Qasten connect to my company data sources?",
          answer:
            "<b>Yes</b>. Qasten integrates with tools like Slack, Notion, Jira, Google Drive, and more. This makes answers context-aware and grounded in your company's knowledge.",
        },
        {
          question: "Do I need my whole team to use Qasten?",
          answer:
            "<b>Not at all</b>. Many users start individually to organize their own AI workflows and invite teammates later. It becomes even more powerful once teammates join and start collaborating.",
        },
      ],
    },
    footer: {
      stayUpdated: "Stay Updated",
      subscribeCta: "Subscribe to receive product updates and announcements.",
      emailPlaceholder: "Enter your email",
      subscribe: "Subscribe",
      copyright: "© 2025 Qasten. All rights reserved.",
      eu: "Made and hosted in the EU",
    },
    privacyPolicy: "Privacy policy",
    deepDives: "Deep Dives",
    seeMore: "See more posts",
    timeToRead: "min read",
    about: {
      title: "About Qasten",
      tagline:
        "On a mission to unlock collective intelligence. Qasten makes AI collaborative and easy to adopt, while giving companies the trust and control they need.",
      ourStory: "Our Story",
      ourBeliefs: "Our Beliefs",
      meetTheFounders: "Meet the Founders",
      readPost: "Read the blog post.",
      story: [
        "When ChatGPT launched, it gave individuals superpowers, but left teams behind. The interface was built for solo use: one person, one chat, no memory across the organization. We noticed the real opportunity for AI isn't just faster individuals, it's smarter teams.",
        "We founded Qasten to build the missing interface: the AI workspace designed for collaboration. A place where knowledge compounds, workflows are shared, and collective intelligence becomes a daily reality. That's how AI truly transforms work.",
      ],
      models: {
        title: "Model Neutrality",
        body: "AI models aren't commodities. Each excels at different tasks, and the frontier keeps shifting. Neutrality is the only way to stay effective and future-proof.",
      },
      adoption: {
        title: "Adoption over Restriction",
        body: "Shadow AI cannot be solved by bans. The only sustainable path is to give them something safer and better than what they use in secret.",
      },
      teams: {
        title: "Teams, Not Individuals",
        body: "AI's true potential isn't in isolated chats. It's in amplifying collective intelligence where knowledge compounds, ideas build on each other, and teams work smarter together.",
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
    metaDescription: {
      home: "Qasten est la plateforme IA conçue pour les équipes qui remplace le Shadow AI : un espace unique pour collaborer, partager des connaissances et travailler en toute sécurité.",
      aboutUs:
        "At Qasten, we believe the future of work is collective intelligence. Learn our mission, beliefs, and vision for secure, team-first AI.",
      security:
        "Avec Qasten, la sécurité est garantie : hébergement européen, aucune rétention de données et un contrôle total pour remplacer le Shadow AI.",
      blog: "Analyses et conseils sur l'adoption de l'IA, la productivité d'équipe et la sécurité. Le blog Qasten vous aide à transformer vos pratiques IA.",
    },
    aboutUs: "À propos",
    contactUs: "Nous contacter",
    security: "Sécurité",
    hero: {
      title: {
        preUnderline: "L'espace de travail IA <br/> pensé pour",
        underline: "les équipes",
        postUnderline: "",
      },
      subtitle:
        "Qasten est un espace collaboratif qui remplace les outils de chat dispersés. <br/> <b>Commencez seul dès aujourd'hui, invitez votre équipe quand vous le souhaitez.</b>",
    },
    bridge: {
      title: "Vos outils d'IA ont été pensés pour les individus",
      subtitle1:
        "Le <b>Shadow AI</b> est déjà partout dans vos équipes. <br/> Outils différents, comptes personnels, prompts isolés.",
      subtitle2:
        "La connaissance ne s'accumule pas, la collaboration n'existe pas, et la valeur se perd.",
    },
    features: {
      team: {
        title: "Votre espace collaboratif",
        body: "Travaillez en privé ou dans des espaces partagés où le contexte est conservé et lié à chaque projet ou équipe. Les accès par rôle protègent vos données sensibles, les nouveaux arrivants retrouvent tout l'historique en un clin d'œil, et vous pouvez utiliser Qasten directement dans Slack ou Microsoft Teams.",
      },
      kb: {
        title: "Une base de connaissances vivante",
        body: "Avec votre accord, Qasten transforme vos échanges du quotidien en <b>mémoire collective</b>. Fini les infos qui se perdent dans des chats privés : votre équipe construit une base qui s'enrichit à chaque utilisation.",
      },
      brainstorm: {
        title: "Brainstorming avec plusieurs IA",
        body: "Notre <b>Canvas de Consensus</b> fait débattre les meilleurs modèles entre eux pendant que votre équipe commente, annote et affine les idées dans un espace partagé. C'est l'intelligence collective en action.",
      },
      workflows: {
        title: "Transformez vos prompts en applications internes",
        body: "Convertissez vos meilleurs prompts réutilisables en applis internes. Versioning et statistiques intégrés : <b>le travail d'un seul profite à toute l'équipe.</b>",
      },
      models: {
        title: "Toujours la meilleure réponse",
        body: "Accédez à OpenAI, Anthropic, Google, aux modèles open source, et plus encore depuis un seul endroit. Qasten peut automatiquement choisir le modèle le plus adapté, de la rédaction créative à l'analyse complexe.",
      },
      source: {
        title: "Connecté à vos données d'entreprise",
        body: "Branchez Slack, Notion, Jira, Google Drive et plus encore : Qasten travaille directement avec vos sources réelles. Plus besoin de copier-coller, l'intelligence arrive là où vos données vivent déjà.",
      },
      visibility: {
        title: "Du Shadow AI à la clarté",
        body: "Les tableaux de bord montrent comment l'IA est utilisée : usages personnels, coûts, adoption par équipe. Repérez ce qui fonctionne, ce qui bloque et où optimiser.",
      },
      security: {
        title: "La sécurité avant tout",
        body: "Votre souveraineté des données est non négociable. Hébergement dans l'UE, pas de stockage tiers, aucune réutilisation pour l'entraînement des modèles. Le panneau d'administration donne un contrôle total : listes d'autorisation de modèles et régions, journaux d'audit, masquage de données sensibles, garde-fous, et plus encore. Plus de détails sur notre <a href='/fr/security'>page Sécurité</a>.",
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
    sec: {
      title: "La sécurité avant tout",
      subtitle:
        "Le <b>Shadow AI</b> crée déjà des risques dans votre entreprise. La sécurité ne peut pas être une option secondaire.",
      stats: {
        sensitiveData:
          "des données d'entreprise collées dans des outils d'IA sont considérées comme <b>sensibles</b>",
        dataLeakage:
          "des organisations ont déjà subi une <b>fuite de données</b> à cause de l'usage d'IA par leurs employés",
        hiddenUsage:
          "des employés reconnaissent avoir <b>dissimulé</b> leur utilisation de l'IA à leur employeur",
      },
      principles: {
        title: "Nos principes de sécurité",
        euFirst: {
          title: "Priorité à l'Europe",
          description:
            "Conçu en Europe, avec la souveraineté et les exigences réglementaires européennes au cœur.",
        },
        transparency: {
          title: "Transparence",
          description:
            "Pas d'entraînement caché, pas de boîte noire. Vous savez toujours où vont vos données.",
        },
        control: {
          title: "Contrôle",
          description:
            "Vous choisissez quels modèles, régions et fournisseurs sont autorisés.",
        },
        securityThroughUx: {
          title: "La sécurité par l'adoption",
          description:
            "Les équipes adoptent Qasten parce qu'il est plus simple et plus sûr que le <b>Shadow AI</b>.",
        },
      },
      measures: {
        title: "Nos mesures de protection",
        euHosting: {
          title: "Hébergement en Europe",
          description:
            "Toutes les données sont traitées par défaut dans l'UE, avec la possibilité de bloquer les fournisseurs externes.",
        },
        noThirdPartyStorage: {
          title: "Aucun stockage externe",
          description:
            "Les contenus ne sont jamais conservés sur les serveurs des fournisseurs de modèles.",
        },
        zeroTrainingRetention: {
          title: "Aucune réutilisation pour l'entraînement",
          description:
            "Vos données ne servent jamais à entraîner des modèles externes.",
        },
        encryption: {
          title: "Chiffrement",
          description:
            "Toutes les données sont chiffrées en transit (TLS 1.2+) et au repos (AES-256).",
        },
        adminControls: {
          title: "Contrôles administrateur",
          description:
            "Listes d'autorisations par modèle/région, journaux d'audit et politiques de rétention pour un contrôle total.",
        },
        piiRedaction: {
          title: "Suppression des données personnelles",
          description:
            "Les informations sensibles sont automatiquement détectées et masquées avant d'être envoyées aux modèles.",
        },
        contentFiltering: {
          title: "Filtrage de contenu",
          description:
            "Les administrateurs définissent des règles pour bloquer ou rediriger les prompts contenant des données sensibles, avec un retour clair pour les utilisateurs.",
        },
        auditAlerts: {
          title: "Audit & alertes",
          description:
            "Chaque action est journalisée. Recevez des alertes en cas de fuite potentielle ou de non-conformité.",
        },
      },
      faq: {
        title: "FAQ Sécurité",
        content: [
          {
            question: "Quelles données sont conservées ?",
            answer:
              "Nous stockons uniquement les données nécessaires au service : informations utilisateur et compte, conversations, workflows enregistrés et entrées de base de connaissances. Tout est chiffré au repos (AES-256) et en transit (TLS 1.2+). Les politiques de rétention vous permettent de décider combien de temps ces données sont conservées.",
          },
          {
            question: "Puis-je supprimer mes données ?",
            answer:
              "<b>Oui</b>. Chaque utilisateur peut supprimer ses conversations et workflows. Les administrateurs peuvent définir des politiques de rétention et supprimer des données au niveau du compte, mais ils n'ont pas accès aux conversations privées.",
          },
          {
            question:
              "Est-ce que Qasten utilise mes données pour entraîner des modèles ?",
            answer:
              "<b>Non. Jamais.</b> Vos données ne servent jamais à l'entraînement de modèles. Nous appliquons une politique stricte de Zero Data Retention (ZDR) avec nos fournisseurs d'IA, qui garantit contractuellement l'absence de stockage ou d'entraînement sur vos données.",
          },
          {
            question: "Où mes données sont-elles traitées ?",
            answer:
              "Qasten est hébergé dans l'UE. En tant qu'administrateur, vous gardez le contrôle total : vous pouvez configurer votre espace pour n'utiliser que des fournisseurs d'IA également hébergés en Europe, assurant ainsi une souveraineté complète.",
          },
        ],
      },
      conclusion: {
        title: "La sécurité n'est pas une option. C'est le socle de Qasten.",
        subtitle:
          "Envie d'en savoir plus ? Contactez-nous pour un briefing sécurité.",
      },
    },

    faq: {
      title: "Foire aux Questions",
      subtitle: "Tout ce que vous devez savoir sur Qasten.",
      content: [
        {
          question: "Quelle est la différence entre Qasten et ChatGPT ?",
          answer:
            "ChatGPT a été conçu pour un usage individuel. Qasten est <b>pensé pour les équipes</b>. Vous disposez d'espaces avec mémoire partagée, de workflows réutilisables, d'un accès à tous les grands modèles, d'une sécurité de niveau entreprise, et bien plus encore, réunis au même endroit.",
        },
        {
          question: "Puis-je utiliser Qasten dans Slack ou Microsoft Teams ?",
          answer:
            "<b>Oui</b>. Qasten s'utilise comme une application dédiée, mais vous pouvez aussi l'invoquer directement dans Slack ou Teams quand vous avez besoin d'IA au cœur d'une conversation sans changer d'outil.",
        },
        {
          question: "Quels modèles d'IA sont disponibles ?",
          answer:
            "Vous accédez aux principaux modèles du marché comme GPT-5, Claude 4, Gemini, Mistral, ainsi qu'aux modèles open-source. Nous croyons à la neutralité des modèles : vous avez toujours le bon modèle pour la bonne tâche. Plus d'infos dans notre <a href='/fr/blog/stop-treating-ai-like-a-commodity'>article de blog</a>.",
        },
        {
          question:
            "Comment Qasten garantit la sécurité et la souveraineté des données ?",
          answer:
            "La sécurité est intégrée dès le départ. Qasten propose un hébergement en Europe, sans stockage chez des tiers, et aucune rétention de données pour l'entraînement des modèles. Les administrateurs disposent d'un contrôle total : journaux d'audit, listes d'autorisations de modèles/régions, anonymisation des données sensibles, garde-fous, etc. Plus de détails sur notre <a href='/fr/security'>page Sécurité</a>.",
        },
        {
          question: "Comment Qasten aide à sortir du Shadow AI ?",
          answer:
            "Le Shadow AI apparaît quand les outils internes sont absents ou trop restrictifs. Qasten résout ce problème en offrant une plateforme plus puissante que les outils utilisés en secret par les employés. L'adoption se fait naturellement grâce à une meilleure expérience. Découvrez notre approche dans <a href='/fr/blog/your-employees-are-smarter-than-your-ai-policy'>cet article</a>.",
        },
        {
          question: "Puis-je connecter Qasten aux données de mon entreprise ?",
          answer:
            "<b>Oui</b>. Qasten s'intègre avec Slack, Notion, Jira, Google Drive et bien d'autres. Les réponses de l'IA sont ainsi contextualisées et ancrées dans la connaissance de votre organisation.",
        },
        {
          question: "Ai-je besoin de toute mon équipe pour utiliser Qasten ?",
          answer:
            "<b>Pas du tout</b>. Beaucoup d'utilisateurs commencent seuls pour organiser leurs propres workflows, puis invitent leurs collègues ensuite. La valeur de Qasten grandit à mesure que l'équipe collabore.",
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
      eu: "Conçu et hébergé dans l'UE",
    },
    privacyPolicy: "Politique de confidentialité",
    deepDives: "Pour approfondir",
    seeMore: "Voir plus",
    timeToRead: "min de lecture",
    about: {
      title: "À propos de Qasten",
      tagline:
        "En mission pour libérer l'intelligence collective. Qasten rend l'IA collaborative tout en offrant aux entreprises la confiance et le contrôle dont elles ont besoin.",
      ourStory: "Notre histoire",
      ourBeliefs: "Nos convictions",
      meetTheFounders: "Rencontrez les fondateurs",
      readPost: "Lire l'article.",
      story: [
        "Quand ChatGPT est apparu, il a donné des super-pouvoirs aux individus, mais a laissé les équipes de côté. L'interface était pensée pour un usage solitaire : une personne, une conversation, aucune mémoire partagée dans l'organisation. Nous avons remarqué que le vrai potentiel de l'IA n'est pas d'accélérer les individus, mais de rendre les équipes plus intelligentes.",
        "Nous avons créé Qasten pour bâtir l'interface manquante : l'espace de travail IA conçu pour la collaboration. Un lieu où la connaissance s'accumule, où les workflows se partagent, et où l'intelligence collective devient une réalité quotidienne. C'est ainsi que l'IA transforme réellement le travail.",
      ],
      models: {
        title: "Neutralité des modèles",
        body: "Les modèles d'IA ne sont pas des commodités interchangeables. Chacun excelle dans des tâches différentes, et le paysage évolue sans cesse. La neutralité est la seule façon de rester efficace et durable.",
      },
      adoption: {
        title: "Adoption plutôt qu'interdiction",
        body: "Le Shadow AI ne disparaît pas avec des blocages. La seule voie durable est d'offrir aux équipes une alternative plus sûre et plus performante que les outils qu'elles utilisent en secret.",
      },
      teams: {
        title: "Pensé pour les équipes",
        body: "Le vrai potentiel de l'IA ne réside pas dans des conversations isolées. Il est dans l'intelligence collective : là où la connaissance s'accumule, où les idées se nourrissent entre elles, et où les équipes travaillent plus intelligemment ensemble.",
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
