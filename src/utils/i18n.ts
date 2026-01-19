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
              description: "GPT-5.2, Claude 4.5, Gemini 3, etc.",
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
              description: "~3,000 messages per month",
              faqAsterisk: true,
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
      faq: {
        title: "Pricing FAQ",
        content: [
          {
            question: "How is usage calculated?",
            answer:
              "Usage is based on total compute cost. Factors like the model choice, context length, and advanced tools (like Search or Consensus) all contribute. You can track your consumption in real-time via the Usage Bar in your profile page.",
          },
          {
            question: 'Is the Pro plan "Unlimited"?',
            answer:
              "For 99% of human users, yes. The limit exists primarily to prevent abuse from bots. Normal chats consume very little usage, while heavy tasks (like large file analysis) consume more. If you use the workspace personally or with your team, you will likely never hit the ceiling.",
          },
          {
            question: "What happens if I hit my limit?",
            answer:
              "It's very rare for a user to hit the Pro limit. However, if you have an exceptionally heavy month, just reach out to our support team. We can arrange a paid top-up or discuss a custom plan. In all cases, you'll never lose access to your data, and your quota will reset at the next billing cycle.",
          },
          {
            question: "How much usage do I get on the Free plan?",
            answer:
              "The Free plan is designed for exploring Qasten. It gives you enough usage to try the workspace. You can track your remaining free quota in real-time inside the app.",
          },
          {
            question: "Can I cancel my subscription at any time?",
            answer:
              "Absolutely. You can cancel anytime from your profile page and retain your Pro plan benefits until the end of your billing cycle.",
          },
        ],
      },
    },
    startUsingNow: "Start now for free",
    security: "Security",
    securityTitle: "Qasten - Secure AI Adoption to replace Shadow AI",
    hero: {
      title: {
        html: "A better way for<br/>Teams to use AI",
        text: "A better way for teams to use AI",
      },
      subtitle: {
        firstLine: "An AI workspace for solving complex problems",
        secondLine: "Start solo today, invite your team when you're ready.",
      },
      caption:
        "Explore multiple approaches in parallel with branching conversations",
    },
    bridge: {
      title: "Current chat interfaces are linear",
      subtitle1: "But problem-solving rarely follows a single straight line",
      subtitle2:
        "You explore an approach, backtrack, try alternatives,<br/>then continue from what works.",
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
            "ChatGPT is centered around a <b>linear</b> conversation history. Qasten makes it easier to work with <b>multiple lines of thought</b> over time by keeping different directions visible and easy to continue. This becomes especially useful when work involves several attempts or <b>multiple people</b>.",
        },
        {
          question: "Which AI models are supported?",
          answer:
            "You can access all leading models like GPT-5.2, Claude 4.5, Gemini 3, Mistral, open-source models, and more. We believe in model neutrality, so you always have the right model for the right task. Learn more in our <a href='/blog/stop-treating-ai-like-a-commodity'>blog post</a>.",
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
    homePage: {
      meta: {
        title: "Qasten - Scale Your Business with Custom AI Infrastructure",
        description: "Custom AI infrastructure that works 24/7 and slashes operational costs. Deploy custom AI agents within 30 days.",
      },
      hero: {
        titleStart: "Scale Your Business with ",
        highlight: "Custom AI Employees",
        titleEnd: " that Work 24/7 and Cut Operational Costs in Half",
        subtitle: "Our custom AI infrastructure learns your workflows, automates your operations, and unlocks new revenue streams… helping you save time, cut costs, and scale within 30 days.",
        cta: "Book Your Free Consultation",
        ctaSubtext: "Free 30-minute call",
      },
      cards: {
        custom: { title: "Custom-Built for Your Business", description: "Every system is designed from the ground up" },
        deployed: { title: "Deployed within 30 Days", description: "Fast deployment, quick results" },
        trusted: { title: "Trusted By Industry Leaders", description: "Proven results across industries" },
      },
      stories: {
        title: "Proven Results Across Multiple Industries",
        subtitle: "Our clients have automated thousands of hours, cut operational costs in half, and unlocked new growth — powered by custom AI infrastructure.",
        impactTitle: "Measurable Impact Across Every Deployment",
        currency: "$1.2M+",
        stats: { costs: "Annual Costs Eliminated", hours: "Hours Saved Per Month", roi: "Average ROI in First 60 Days", days: "Days to Deployment" },
      },
      solutions: {
        title: "Popular Agentic Services",
        subtitle: "We build AI systems that automate outreach, operations, and communication – from outbound sales to full workflow automation.",
        voice: { title: "Voice Agents", description: "Qualify leads, schedule meetings, and handle inbound calls – fully automated, no human needed." },
        sales: { title: "Sales Agents", description: "Research prospects, write messages, and run personalised outreach — all on autopilot." },
        chat: { title: "Chat Agents", description: "Engage visitors, answer questions, and capture leads instantly – across web, CRM, or support." },
        footer: "600+ businesses engaged, 10,000+ people trained, with best-in-class platforms",
      },
      benefits: {
        title: "What you get with Qasten",
        subtitle: "We don't sell templates – we build AI systems that deliver real, measurable results.",
        custom: { title: "Custom-Built for You", description: "Every system is designed from the ground up to match your workflows and goals." },
        ownership: { title: "Complete Ownership", description: "You own the agents, data, and infrastructure - no hidden subscriptions and lock-ins." },
        integrated: { title: "Fully Integrated", description: "We connect directly with your CRM, data, and communication stack." },
        results: { title: "Proven Results", description: "Our builds generate qualified leads, save hours, and scale operations fast." },
      },
      integrations: {
        title: "Work Seamlessly with Your Existing Tools",
        subtitle: "Our AI agents integrate directly with your CRM, inbox, and workflows – syncing perfectly with the systems you already use, from Salesforce to HubSpot.",
      },
      howItWorks: {
        title: "Getting started is easy",
        subtitle: "Every AI agent we build follows a proven process – designed to plug into your workflows and start filling pipeline fast.",
        discovery: { title: "Discovery", description: "We uncover where AI can create the biggest wins across your operations and workflows." },
        design: { title: "Design", description: "We map your systems, data flow, and integrations to design your custom AI agent." },
        build: { title: "Build & Test", description: "We develop, integrate, and test your AI agent for accuracy and reliability." },
        launch: { title: "Launch", description: "We deploy, monitor, and optimise performance to deliver measurable results fast." },
      },
      whyChoose: {
        title: "Why top companies choose Qasten",
        subtitle: "Built by engineers and domain experts who understand growth – not just prompts.",
        qasten: ["You Own the Agents, Data, and Infrastructure", "Experienced AI Engineers & Builders", "Proven Growth-Focused Systems", "Complete Custom Development", "Deep CRM & Workflow Integrations", "End-to-End Delivery: Idea to Scale"],
        othersTitle: "Other Development Agencies",
        others: ["Limited ownership, vendor lock-in", "Generic solutions", "Template-based approaches"],
      },
      booking: {
        title: "Book a Free Strategy Call",
        subtitle: "See exactly how AI can cut up to 70% of your operational workload and boost revenue — we'll walk you through real systems already live in other businesses.",
        fullName: "Full Name",
        email: "Email",
        company: "Company",
        message: "Message (Optional)",
        submit: "Book Your Free Consultation",
        fallback: "Can't see the booking form? ",
        fallbackLink: "Click here",
      },
      faq: {
        title: "Your Questions, Answered",
        questions: [
          { question: "What exactly is a \"Custom AI Agent\"?", answer: "A Custom AI Agent is an intelligent system built specifically for your business that automates workflows, handles tasks, and integrates seamlessly with your existing tools. Unlike generic chatbots, these agents are custom-built to understand your processes and deliver measurable results." },
          { question: "How fast can I have one running in my business?", answer: "On average, we deploy custom AI agents within 30 days. The process includes discovery, design, build & test, and launch phases - all designed to get you up and running quickly." },
          { question: "How much time or money can this realistically save me?", answer: "Our clients typically save 60+ hours per month and eliminate $1.2M+ in annual costs. The average ROI in the first 60 days is 3.5X, making it a highly cost-effective investment." },
          { question: "Can an AI agent actually generate new revenue?", answer: "Yes. Our AI agents automate lead research, qualification, and outreach - helping sales teams focus on high-value activities. Many clients see significant pipeline growth and new revenue streams from automated processes." },
          { question: "What industries does this work for?", answer: "Our custom AI infrastructure works across multiple industries. We've successfully deployed solutions for businesses in sales, operations, customer service, and more - regardless of industry vertical." },
          { question: "Do I need to be \"tech-savvy\" to use this?", answer: "No. Our systems are designed to integrate seamlessly with your existing workflows. Once deployed, they run automatically in the background - no technical expertise required." },
          { question: "How is this different from a chatbot or virtual assistant?", answer: "Unlike generic chatbots, our custom AI agents are built specifically for your business processes. They integrate directly with your CRM, data, and communication stack, automate complex workflows, and deliver measurable business results." },
          { question: "What tools or platforms does it connect with?", answer: "Our AI agents integrate with popular CRMs like Salesforce and HubSpot, email platforms, and other business tools. We work with your existing tech stack to ensure seamless integration." },
          { question: "Is my data safe?", answer: "Yes. You own the agents, data, and infrastructure. We follow strict security protocols and ensure your data remains secure and private throughout the process." },
          { question: "How do I get started?", answer: "Book a free 30-minute strategy call to see exactly how AI can cut up to 70% of your operational workload and boost revenue. We'll walk you through real systems already live in other businesses." },
        ],
      },
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
        html: "Une meilleure façon<br/>d'utiliser l'IA",
        text: "Une meilleure façon d'utiliser l'IA",
      },
      subtitle: {
        firstLine:
          "Un espace de travail IA pour résoudre des problèmes complexes",
        secondLine:
          "Commencez seul aujourd'hui, invitez votre équipe quand vous êtes prêt.",
      },
      caption:
        "Explorez plusieurs pistes en parallèle avec des conversations arborescentes",
    },
    bridge: {
      title: "Les interfaces de chat actuelles sont linéaires",
      subtitle1:
        "Mais la résolution de problèmes suit rarement une ligne droite",
      subtitle2:
        "On explore une approche, on revient en arrière, on essaie des alternatives, puis on continue à partir de ce qui fonctionne.",
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
            "ChatGPT repose sur un fil de conversation <b>linéaire</b>. Qasten permet de travailler plus facilement avec <b>plusieurs pistes de réflexion</b> dans le temps, en rendant les différentes directions visibles et simples à reprendre. C'est particulièrement utile lorsque le travail nécessite plusieurs essais ou implique <b>plusieurs personnes</b>.",
        },
        {
          question: "Quels modèles d'IA sont disponibles ?",
          answer:
            "Vous accédez aux principaux modèles du marché comme GPT-5.2, Claude 4.5, Gemini 3, Mistral, ainsi qu'aux modèles open-source. Nous croyons à la neutralité des modèles : vous avez toujours le bon modèle pour la bonne tâche. Plus d'infos dans notre <a href='/fr/blog/stop-treating-ai-like-a-commodity'>article de blog</a>.",
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
              description: "GPT-5.2, Claude 4.5, Gemini 3, etc.",
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
              description: "~3,000 messages par mois",
              faqAsterisk: true,
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

      faq: {
        title: "FAQ Tarifs",
        content: [
          {
            question: "Comment l'utilisation est-elle calculée ?",
            answer:
              "L'utilisation est basée sur le coût total d'inférence. Des facteurs comme le choix du modèle, la taille du contexte et les outils avancés (comme Search ou Consensus) peuvent augmenter la consommation. Vous pouvez suivre votre utilisation en temps réel via la barre d'usage dans votre page de profil.",
          },
          {
            question: 'Le plan Pro est-il "illimité" ?',
            answer:
              "Pour 99 % des utilisateurs humains, oui. La limite existe principalement pour prévenir les abus des bots. Les conversations normales consomment très peu, tandis que les tâches plus lourdes (comme l'analyse de gros fichiers) consomment davantage. Si vous utilisez l'espace de travail pour vous ou votre équipe, vous ne devriez jamais atteindre cette limite.",
          },
          {
            question: "Que se passe-t-il si j'atteins la limite ?",
            answer:
              "Il est très rare qu'un utilisateur atteigne la limite du plan Pro. Si cela vous arrive lors d'un mois exceptionnellement chargé, contactez simplement notre équipe support. Nous pouvons proposer une recharge payante ou discuter d'un plan personnalisé. Dans tous les cas, vous ne perdrez jamais l'accès à vos données, et votre quota sera réinitialisée au prochain cycle de facturation.",
          },
          {
            question:
              "Quel volume d'utilisation est inclus dans le plan Gratuit ?",
            answer:
              "Le plan Gratuit est conçu pour découvrir Qasten. Il vous donne suffisamment d'utilisation pour tester l'espace de travail. Vous pouvez suivre votre quota restant en temps réel directement dans l'application.",
          },
          {
            question: "Puis-je annuler mon abonnement à tout moment ?",
            answer:
              "Absolument. Vous pouvez annuler à tout moment depuis votre page de profil et conserver les avantages du plan Pro jusqu'à la fin de votre cycle de facturation.",
          },
        ],
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
    homePage: {
      meta: {
        title: "Qasten - Développez votre entreprise avec une infrastructure IA personnalisée",
        description: "Infrastructure IA personnalisée qui fonctionne 24h/24, 7j/7 et réduit vos coûts opérationnels. Déployez des agents IA personnalisés en 30 jours.",
      },
      hero: {
        titleStart: "Développez votre entreprise avec des ",
        highlight: "Agents IA personnalisés",
        titleEnd: " qui travaillent 24h/24 et réduisent vos coûts opérationnels de moitié",
        subtitle: "Notre infrastructure IA personnalisée apprend vos workflows, automatise vos opérations et génère de nouvelles sources de revenus… vous aidant à gagner du temps, réduire les coûts et vous développer en 30 jours.",
        cta: "Réservez votre consultation gratuite",
        ctaSubtext: "Appel gratuit de 30 minutes",
      },
      cards: {
        custom: { title: "Sur-mesure pour votre entreprise", description: "Chaque système est conçu de zéro" },
        deployed: { title: "Déployé en 30 jours", description: "Déploiement rapide, résultats rapides" },
        trusted: { title: "Adopté par les leaders du marché", description: "Résultats prouvés dans tous les secteurs" },
      },
      stories: {
        title: "Résultats prouvés dans de nombreux secteurs",
        subtitle: "Nos clients ont automatisé des milliers d'heures, réduit leurs coûts opérationnels de moitié et débloqué une nouvelle croissance — grâce à une infrastructure IA personnalisée.",
        impactTitle: "Impact mesurable sur chaque déploiement",
        currency: "1,2M€+",
        stats: { costs: "Coûts annuels éliminés", hours: "Heures économisées par mois", roi: "ROI moyen en 60 jours", days: "Jours avant déploiement" },
      },
      solutions: {
        title: "Services d'agents populaires",
        subtitle: "Nous construisons des systèmes IA qui automatisent la prospection, les opérations et la communication – de la vente sortante à l'automatisation complète des workflows.",
        voice: { title: "Agents vocaux", description: "Qualifiez les leads, planifiez les réunions et gérez les appels entrants – entièrement automatisés, sans intervention humaine." },
        sales: { title: "Agents commerciaux", description: "Recherchez les prospects, rédigez des messages et lancez des campagnes personnalisées — le tout en pilote automatique." },
        chat: { title: "Agents de chat", description: "Engagez les visiteurs, répondez aux questions et capturez des leads instantanément – sur le web, CRM ou support." },
        footer: "Plus de 600 entreprises engagées, plus de 10 000 personnes formées, avec les meilleures plateformes",
      },
      benefits: {
        title: "Ce que vous obtenez avec Qasten",
        subtitle: "Nous ne vendons pas de modèles – nous construisons des systèmes IA qui délivrent des résultats réels et mesurables.",
        custom: { title: "Sur-mesure pour vous", description: "Chaque système est conçu de zéro pour correspondre à vos workflows et objectifs." },
        ownership: { title: "Propriété complète", description: "Vous possédez les agents, les données et l'infrastructure - pas d'abonnements cachés ni de dépendance." },
        integrated: { title: "Entièrement intégré", description: "Nous nous connectons directement à votre CRM, vos données et votre stack de communication." },
        results: { title: "Résultats prouvés", description: "Nos solutions génèrent des leads qualifiés, économisent des heures et font évoluer les opérations rapidement." },
      },
      integrations: {
        title: "Travaillez en toute transparence avec vos outils existants",
        subtitle: "Nos agents IA s'intègrent directement à votre CRM, votre boîte mail et vos workflows – se synchronisant parfaitement avec les systèmes que vous utilisez déjà, de Salesforce à HubSpot.",
      },
      howItWorks: {
        title: "Démarrer est simple",
        subtitle: "Chaque agent IA que nous construisons suit un processus éprouvé – conçu pour s'intégrer à vos workflows et commencer à remplir votre pipeline rapidement.",
        discovery: { title: "Découverte", description: "Nous identifions où l'IA peut créer les plus grandes victoires dans vos opérations et workflows." },
        design: { title: "Conception", description: "Nous cartographions vos systèmes, flux de données et intégrations pour concevoir votre agent IA personnalisé." },
        build: { title: "Construction & Test", description: "Nous développons, intégrons et testons votre agent IA pour garantir précision et fiabilité." },
        launch: { title: "Lancement", description: "Nous déployons, surveillons et optimisons les performances pour livrer des résultats mesurables rapidement." },
      },
      whyChoose: {
        title: "Pourquoi les meilleures entreprises choisissent Qasten",
        subtitle: "Construit par des ingénieurs et experts métier qui comprennent la croissance – pas seulement les prompts.",
        qasten: ["Vous possédez les agents, les données et l'infrastructure", "Ingénieurs IA & constructeurs expérimentés", "Systèmes éprouvés axés sur la croissance", "Développement entièrement personnalisé", "Intégrations profondes CRM & Workflow", "Livraison de bout en bout : de l'idée au passage à l'échelle"],
        othersTitle: "Autres agences de développement",
        others: ["Propriété limitée, dépendance fournisseur", "Solutions génériques", "Approches basées sur des templates"],
      },
      booking: {
        title: "Réservez un appel stratégique gratuit",
        subtitle: "Découvrez exactement comment l'IA peut réduire jusqu'à 70% de votre charge de travail opérationnelle et augmenter vos revenus — nous vous présenterons des systèmes réels déjà en production dans d'autres entreprises.",
        fullName: "Nom complet",
        email: "Email",
        company: "Entreprise",
        message: "Message (Optionnel)",
        submit: "Réservez votre consultation gratuite",
        fallback: "Vous ne voyez pas le formulaire ? ",
        fallbackLink: "Cliquez ici",
      },
      faq: {
        title: "Vos questions, nos réponses",
        questions: [
          { question: "Qu'est-ce qu'un « Agent IA personnalisé » exactement ?", answer: "Un Agent IA personnalisé est un système intelligent construit spécifiquement pour votre entreprise qui automatise les workflows, gère les tâches et s'intègre parfaitement à vos outils existants. Contrairement aux chatbots génériques, ces agents sont conçus sur-mesure pour comprendre vos processus et livrer des résultats mesurables." },
          { question: "En combien de temps puis-je avoir un agent opérationnel ?", answer: "En moyenne, nous déployons des agents IA personnalisés en 30 jours. Le processus comprend les phases de découverte, conception, construction & test, et lancement – toutes conçues pour vous rendre opérationnel rapidement." },
          { question: "Combien de temps ou d'argent cela peut-il réellement me faire économiser ?", answer: "Nos clients économisent généralement plus de 60 heures par mois et éliminent plus de 1,2M€ de coûts annuels. Le ROI moyen dans les 60 premiers jours est de 3,5X, ce qui en fait un investissement très rentable." },
          { question: "Un agent IA peut-il réellement générer de nouveaux revenus ?", answer: "Oui. Nos agents IA automatisent la recherche de leads, la qualification et la prospection – aidant les équipes commerciales à se concentrer sur les activités à forte valeur. De nombreux clients voient une croissance significative de leur pipeline et de nouvelles sources de revenus grâce aux processus automatisés." },
          { question: "Pour quels secteurs cela fonctionne-t-il ?", answer: "Notre infrastructure IA personnalisée fonctionne dans de nombreux secteurs. Nous avons déployé avec succès des solutions pour des entreprises dans la vente, les opérations, le service client et plus encore – quel que soit le secteur d'activité." },
          { question: "Dois-je être « technophile » pour utiliser cela ?", answer: "Non. Nos systèmes sont conçus pour s'intégrer parfaitement à vos workflows existants. Une fois déployés, ils fonctionnent automatiquement en arrière-plan – aucune expertise technique requise." },
          { question: "En quoi est-ce différent d'un chatbot ou d'un assistant virtuel ?", answer: "Contrairement aux chatbots génériques, nos agents IA personnalisés sont construits spécifiquement pour vos processus métier. Ils s'intègrent directement à votre CRM, vos données et votre stack de communication, automatisent des workflows complexes et livrent des résultats métier mesurables." },
          { question: "Avec quels outils ou plateformes cela se connecte-t-il ?", answer: "Nos agents IA s'intègrent aux CRM populaires comme Salesforce et HubSpot, aux plateformes email et autres outils métier. Nous travaillons avec votre stack technologique existant pour assurer une intégration transparente." },
          { question: "Mes données sont-elles en sécurité ?", answer: "Oui. Vous possédez les agents, les données et l'infrastructure. Nous suivons des protocoles de sécurité stricts et garantissons que vos données restent sécurisées et privées tout au long du processus." },
          { question: "Comment puis-je commencer ?", answer: "Réservez un appel stratégique gratuit de 30 minutes pour voir exactement comment l'IA peut réduire jusqu'à 70% de votre charge de travail opérationnelle et augmenter vos revenus. Nous vous présenterons des systèmes réels déjà en production dans d'autres entreprises." },
        ],
      },
    },
  },
};
