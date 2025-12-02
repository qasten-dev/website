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
        "At Qasten, we believe the future of work is collective intelligence. Learn our mission, beliefs, and vision for secure, collaborative AI.",
      security:
        "Qasten puts security first: EU hosting, zero retention, admin controls, and built-in safeguards to replace risky Shadow AI.",
      blog: "Insights on AI adoption, team productivity, and security. Explore Qasten's blog for practical strategies and expert perspectives.",
    },
    aboutUs: "About us",
    contactUs: "Contact us",
    pricing: "Pricing",
    price: {
      metaTitle: "Pricing",
      metaDescription: "Pricing for Qasten",
      heading: "Choose Your Qasten Plan",
      badgeRecommended: "Recommended",
      choosePlan: "Choose Plan",
      plans: {
        free: {
          name: "Free",
          description: "For getting started with Qasten",
          priceSuffix: "/month",
          features: [
            {
              feature: "All Workspace Features",
              description: "Chat, Graph view, Consensus, etc.",
            },
            {
              feature: "Access to All Top Models",
              description: "GPT-5.1, Claude 4.5, Gemini 3, etc.",
            },
            { feature: "Starter Usage Allowance" },
            { feature: "Community Support" },
          ],
        },
        pro: {
          name: "Pro",
          description: "For getting the most out of Qasten",
          priceSuffix: "/month",
          features: [
            {
              feature: "Everything in Free",
            },
            {
              feature: "High Usage Allowance",
              description: "~3,000 messages per month*",
            },
            {
              feature: "Early Access to New Features",
            },
            {
              feature: "Priority Support",
            },
          ],
        },
        enterprise: {
          name: "Enterprise",
          description: "For organizations with custom needs",
          price: "Custom",
          features: [
            "Everything in Pro",
            "SSO integration",
            "Advanced security controls",
            "Custom integrations",
            "Dedicated support",
          ],
          ctaLabel: "Contact Us",
          emailSubject: "Enterprise Plan Inquiry",
        },
      },
      ctas: {
        currentPlan: "Current Plan",
      },
      securityNotice: {
        text: "All plans include secure data handling and controls.",
        linkText: "Learn more about our security practices.",
      },
    },
    startUsingNow: "Start now for free",
    security: "Security",
    securityTitle: "Qasten - Secure AI Adoption to replace Shadow AI",
    hero: {
      title: {
        preUnderline: "Your",
        underline: "Collaborative",
        postUnderline: "<br/> AI Workspace",
        full: "Your Collaborative AI Workspace",
      },
      subtitle: {
        firstLine:
          "Replace your team's scattered chat tools and deliver more, together.",
        secondLine: "Start solo today, invite your team when you're ready.",
      },
    },
    bridge: {
      title: "Your AI Tools Were Built for Individuals",
      subtitle1:
        "Shadow AI is everywhere in your teams today. <br/> Different tools, personal accounts, private prompts.",
      subtitle2:
        "Knowledge never compounds, collaboration never happens, and value gets lost.",
    },
    features: {
      unification: {
        title: "One Platform, All Models",
        body: "Qasten replaces the scattered AI tools everyone currently uses on their own. Your whole team works in the same platform, while still using the models they prefer for each task. One shared workspace, all models, no more switching between apps.",
      },
      consensus: {
        title: "Multi-model Consensus for Smarter Answers",
        body: "Qasten can run multiple models at once, have them challenge each other's outputs, and merge their arguments into a stronger answer. By comparing perspectives, consensus helps reduce hallucinations and delivers more reliable results when accuracy matters.",
      },
      graph: {
        title: "Follow Every Idea with the Graph View",
        body: "Qasten can display your chats as a graph canvas so you can trace every version, branch, and idea. It's easier to navigate and ideal when several people explore different directions at once. No more losing context in endless chat threads.",
      },
      security: {
        title: "Security First, Always",
        body: "Qasten is built with strict security from day one: EU-based hosting, and zero use of your data to train models. Learn more on our <a href='/security'>Security Page</a>.",
      },
    },
    send: "Send",
    checkBlog: "In the meantime, check out our blog.",
    contactSuccess: {
      title: "Thank you for contacting us!",
      subtitle: "Our team will get back to you shortly.",
    },
    subscriptionSuccess: {
      title: "Thank you for your interest!",
      subtitle: "We'll keep you updated with the latest from Qasten.",
    },
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
        securityThroughUx: {
          title: "Security through UX",
          description:
            "Employees adopt Qasten because it's easier than <b>Shadow AI</b>.",
        },
      },
      faq: {
        title: "Security FAQ",
        content: [
          {
            question: "What data does Qasten store?",
            answer:
              "We store the data required to provide the service like account information and conversations.",
          },
          {
            question: "Can I delete my data?",
            answer:
              "<b>Yes</b>. You can request deletion of all your data at any time by contacting us. We'll permanently remove your information from our systems.",
          },
          {
            question: "Does Qasten use my data to train models?",
            answer:
              "<b>No. Never.</b> Your data is never used to train any models.",
          },
          {
            question: "Where is my data stored?",
            answer:
              "All Qasten data is securely hosted in the EU, is encrypted in transit (TLS 1.2+), and at rest (AES-256).",
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
            "Qasten is <b>built for teams</b> with shared projects, a graph view that makes branching and collaboration effortless, access to all top models, a consensus mode where models debate to refine answers, and much more.",
        },
        {
          question: "Which AI models are supported?",
          answer:
            "You can access all leading models like GPT-5, Claude 4.5, Gemini 2.5, Mistral, open-source models, and more. We believe in model neutrality, so you always have the right model for the right task. Learn more in our <a href='/blog/stop-treating-ai-like-a-commodity'>blog post</a>.",
        },
        {
          question: "How does Qasten guarantee data security and sovereignty?",
          answer:
            "Security is built in from day one. Qasten is hosted in the EU and guarantees your data is never used to train third-party models. Learn more on our <a href='/security'>Security Page</a>.",
        },
        {
          question: "How does Qasten help us move away from Shadow AI?",
          answer:
            "Shadow AI happens when internal tools are inexistent or restrictive. Qasten solves it by offering a platform that's more powerful than the tools employees use in secret. It wins them over by providing a superior experience. Read more about our approach in our <a href='/blog/your-employees-are-smarter-than-your-ai-policy'>blog post</a>.",
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
    updated: "Updated",
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
      farouk: "Former Software Engineer at <b>AWS</b> and <b>Uber</b>",
      youssef: "Former Software Engineer at <b>Datadog</b>",
      achraf:
        "Former Red Teamer at <b>OpenAI</b> and CyberSecurity expert at <b>Accor</b>",
    },
  },

  fr: {
    metaDescription: {
      home: "Qasten est la plateforme IA conçue pour les équipes qui remplace le Shadow AI : un espace unique pour collaborer, partager des connaissances et travailler en toute sécurité.",
      aboutUs:
        "Chez Qasten, nous croyons que l'avenir du travail réside dans l'intelligence collective. Découvrez notre mission, nos convictions et notre vision d'une IA collaborative et sécurisée.",
      security:
        "Avec Qasten, la sécurité est garantie : hébergement européen, aucune rétention de données et un contrôle total pour remplacer le Shadow AI.",
      blog: "Analyses et conseils sur l'adoption de l'IA, la productivité d'équipe et la sécurité. Le blog Qasten vous aide à transformer vos pratiques IA.",
    },
    aboutUs: "À propos",
    contactUs: "Nous contacter",
    pricing: "Tarifs",
    startUsingNow: "Commencez maintenant",
    security: "Sécurité",
    securityTitle: "Qasten - La solution sécurisée pour remplacer le Shadow AI",
    hero: {
      title: {
        preUnderline: "L'espace de travail <br/> IA ",
        underline: "collaboratif",
        postUnderline: "",
        full: "L'espace de travail IA collaboratif",
      },
      subtitle: {
        firstLine:
          "Remplacez les outils de chat dispersés de votre équipe et livrez plus, ensemble.",
        secondLine:
          "Commencez seul aujourd'hui, invitez votre équipe quand vous êtes prêt.",
      },
    },
    bridge: {
      title: "Vos outils d'IA ont été pensés pour les individus",
      subtitle1:
        "Le Shadow AI est déjà partout dans vos équipes. <br/> Outils différents, comptes personnels, prompts isolés.",
      subtitle2:
        "La connaissance ne s'accumule pas, la collaboration n'existe pas, et la valeur se perd.",
    },
    features: {
      unification: {
        title: "Une seule plateforme, tous les modèles",
        body: "Qasten remplace la multitude d'outils d'IA que chacun utilise dans son coin. Toute l'équipe travaille enfin au même endroit, tout en choisissant librement le modèle le plus adapté à chaque tâche. Un espace partagé, tous les modèles, plus besoin de jongler entre les appslications.",
      },
      consensus: {
        title: "Consensus multi-modèles pour des réponses plus fiables",
        body: "Qasten peut faire tourner plusieurs modèles en même temps, les confronter entre eux, puis synthétiser leurs conclusions en une réponse plus solide. En croisant plusieurs points de vue, le consensus réduit le risque d'hallucinations et améliore la fiabilité, surtout quand la précision compte.",
      },
      graph: {
        title: "Visualisez vos idées avec la vue Graphe",
        body: "Qasten transforme vos échanges en un graphe clair qui montre chaque version, chaque branche et chaque piste explorée. Idéal quand plusieurs personnes avancent en parallèle. Vous gardez toujours le fil, sans vous perdre dans des fils de discussion sans fin.",
      },
      security: {
        title: "La sécurité avant tout",
        body: "Qasten est pensé avec une exigence de sécurité dès le départ : hébergement dans l'UE et aucune utilisation de vos données pour entraîner des modèles. Plus de détails sur notre <a href='/fr/security'>page Sécurité</a>.",
      },
    },
    send: "Envoyer",
    checkBlog: "En attendant, découvrez notre blog.",
    contactSuccess: {
      title: "Merci de nous avoir contactés !",
      subtitle: "Notre équipe vous répondra sous peu.",
    },
    subscriptionSuccess: {
      title: "Merci pour votre intérêt !",
      subtitle:
        "Nous vous tiendrons informé des dernières nouvelles de Qasten.",
    },
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
        securityThroughUx: {
          title: "La sécurité par l'adoption",
          description:
            "Les équipes adoptent Qasten parce qu'il est plus simple et plus sûr que le <b>Shadow AI</b>.",
        },
      },
      faq: {
        title: "FAQ Sécurité",
        content: [
          {
            question: "Quelles données sont conservées ?",
            answer:
              "Nous stockons uniquement les données nécessaires au service comme les informations du compte et les conversations.",
          },
          {
            question: "Puis-je supprimer mes données ?",
            answer:
              "<b>Oui</b>. Vous pouvez demander la suppression de toutes vos données à tout moment en nous contactant. Nous supprimerons définitivement vos informations de nos systèmes.",
          },
          {
            question:
              "Est-ce que Qasten utilise mes données pour entraîner des modèles ?",
            answer:
              "<b>Non. Jamais.</b> Vos données ne servent jamais à l'entraînement de modèles.",
          },
          {
            question: "Où mes données sont-elles hébergées ?",
            answer:
              "Toutes les données de Qasten sont hébergées en UE, sont chiffrées en transit (TLS 1.2+), et au repos (AES-256).",
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
            "Qasten est <b>conçu pour les équipes</b>, avec des projets partagés, une vue en graphe qui rend les branches et la collaboration fluides, l'accès à tous les meilleurs modèles, un mode de consensus où les modèles débattent pour affiner leurs réponses, et bien plus encore.",
        },
        {
          question: "Quels modèles d'IA sont disponibles ?",
          answer:
            "Vous accédez aux principaux modèles du marché comme GPT-5, Claude 4.5, Gemini 2.5, Mistral, ainsi qu'aux modèles open-source. Nous croyons à la neutralité des modèles : vous avez toujours le bon modèle pour la bonne tâche. Plus d'infos dans notre <a href='/fr/blog/stop-treating-ai-like-a-commodity'>article de blog</a>.",
        },
        {
          question:
            "Comment Qasten garantit la sécurité et la souveraineté des données ?",
          answer:
            "La sécurité est intégrée dès le premier jour. Qasten garantit une souveraineté totale des données grâce à un hébergement dans l'UE et assure que vos données ne sont jamais utilisées pour entraîner des modèles tiers. Plus de détails sur notre <a href='/fr/security'>page Sécurité</a>.",
        },
        {
          question: "Comment Qasten aide à sortir du Shadow AI ?",
          answer:
            "Le Shadow AI apparaît quand les outils internes sont absents ou trop restrictifs. Qasten résout ce problème en offrant une plateforme plus puissante que les outils utilisés en secret par les employés. L'adoption se fait naturellement grâce à une meilleure expérience. Découvrez notre approche dans <a href='/fr/blog/your-employees-are-smarter-than-your-ai-policy'>cet article</a>.",
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
    updated: "Mis à jour en",
    price: {
      metaTitle: "Tarifs",
      metaDescription: "Tarifs de Qasten",
      heading: "Choisissez votre plan Qasten",
      badgeRecommended: "Recommandé",
      choosePlan: "Choisir le plan",
      plans: {
        free: {
          name: "Gratuit",
          description: "Pour découvrir Qasten",
          priceSuffix: "/mois",
          features: [
            {
              feature: "Accès complet à l'espace de travail",
              description: "Chat, Vue Graphe, Consensus, etc.",
            },
            {
              feature: "Accès aux meilleurs modèles",
              description: "GPT-5.1, Claude 4.5, Gemini 3, etc.",
            },
            { feature: "Volume de messages découverte" },
            { feature: "Support Communautaire" },
          ],
        },
        pro: {
          name: "Pro",
          description: "Pour tirer le meilleur parti de Qasten",
          priceSuffix: "/mois",
          features: [
            {
              feature: "Tout ce qu'il y a dans le plan Gratuit",
            },
            {
              feature: "Volume de messages étendu",
              description: "~3,000 messages par mois*",
            },
            {
              feature: "Accès anticipé aux nouvelles fonctionnalités",
            },
            {
              feature: "Support prioritaire",
            },
          ],
        },
        enterprise: {
          name: "Entreprise",
          description: "Pour les besoins sur mesure",
          price: "Sur-mesure",
          features: [
            "Tout ce qu'il y a dans le plan Pro",
            "Intégration SSO",
            "Contrôles de sécurité avancés",
            "Intégrations personnalisées",
            "Support dédié",
          ],
          ctaLabel: "Nous contacter",
          emailSubject: "Demande d'offre Entreprise",
        },
      },
      ctas: {
        currentPlan: "Plan actuel",
      },
      securityNotice: {
        text: "Tous les forfaits incluent une gestion sécurisée des données et des contrôles.",
        linkText: "En savoir plus sur nos pratiques de sécurité.",
      },
    },
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
      farouk: "Ancien ingénieur logiciel chez <b>AWS</b> et <b>Uber</b>",
      youssef: "Ancien ingénieur logiciel chez <b>Datadog</b>",
      achraf:
        "Ancien Red Teamer chez <b>OpenAI</b> et expert en cybersécurité chez <b>Accor</b>",
    },
  },
};
