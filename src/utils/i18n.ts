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
    contactUs: "Book a Free Call",
    pricing: "Pricing",
    nav: {
      offers: "Offers",
      howItWorks: "How it Works",
      integrations: "Integrations",
      whyQasten: "Why Qasten",
      faq: "FAQ",
    },
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
      copyright: "© 2026 Qasten. All rights reserved.",
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
        title: "Qasten - Revenue Agents That Turn Leads Into Meetings",
        description: "We build two production-grade revenue agents inside your CRM and inbox. Live in 30 days. Full ownership with no vendor lock-in.",
      },
      hero: {
        title: "Deploy Revenue Agents That Turn Leads Into Meetings - Live in 30 Days",
        subhead:
          "We build custom AI revenue agents that qualify leads and book meetings inside your CRM, so your team can focus on closing deals. Live in 30 days.",
        trustChips: [
          "Free 30-minute call",
          "Built for Your Business",
          "Live in 30 Days",
          "Full ownership (no recurring platform fees)",
        ],
        ctas: {
          primary: "Book Your Free Strategy Call",
          secondary: "See the 2 Revenue Agents",
        },
        media: {
          title: "Inbound + Outbound, one revenue system",
          bullets: [
            "Inbound: Form → reply → qualify → route → book → CRM updated",
            "Outbound: Signal → research → drafts → safe send → replies triaged",
          ],
        },
      },
      offers: {
        title: "Start with a Revenue Agent",
        subtitle: "Start with inbound or outbound. Both go live in your existing stack.",
        recommended: "Most teams start here",
        labels: {
          bestFor: "Why teams deploy this",
          whatItDoes: "What it does",
        },
        cards: [
          {
            key: "inbound_autopilot",
            recommended: true,
            title: "Inbound Qualification Agent",
            tagline: "Qualifies inbound leads and books meetings automatically.",
            idealFor: [
              "Recover deals lost to slow lead response",
              "Turn inbound demand into booked meetings automatically",
            ],
            actions: [
              "Prevents double-touch and awkward overlaps",
              "Qualifies leads automatically before a rep ever responds",
              "Books the right meeting with the right owner",
              "Keeps your CRM perfectly in sync, automatically",
            ],
            ctas: {
              primary: "Explore this agent with us",
              secondary: "",
            },
          },
          {
            key: "outbound_copilot",
            title: "Outbound Signal Agent",
            tagline: "Launches outbound only when real buying signals appear.",
            idealFor: [
              "Create pipeline without burning deliverability",
              "Reach out only when real buying signals appear",
            ],
            actions: [
              "Targets only prospects with real buying signals",
              "Personalizes outreach with verified evidence",
              "Protects deliverability with strict sending guardrails",
              "Routes replies and next steps into your CRM",
            ],
            ctas: {
              primary: "Explore this agent with us",
              secondary: "",
            },
          },
        ],
      },
      offerDetails: {
        inbound: {
          title: "Full Spec: Inbound Qualification Agent",
          sections: [
            {
              heading: "State Machine",
              bullets: [
                "New → Validated → Contacted → Engaged → Qualified → Booked → Assigned",
                "Nurture, Disqualified, and Suppressed paths with reason codes",
              ],
            },
            {
              heading: "Implementation Requirements",
              bullets: [
                "HubSpot or Salesforce access (lead creation, fields, routing rules)",
                "Gmail or Outlook sending mailbox",
                "Calendar access for booking",
                "Slack channel for alerts (optional)",
              ],
            },
            {
              heading: "Acceptance Tests",
              bullets: [
                "Dedupe prevents double emails on duplicate leads",
                "DNC and unsubscribe always enforced",
                "Owner routing matches territory and segment rules",
                "Stop rules work on reply, booking, and unsubscribe",
                "CRM fields populated correctly plus summary generated",
              ],
            },
          ],
        },
        outbound: {
          title: "Full Spec: Outbound Signal Agent",
          sections: [
            {
              heading: "Evidence Pack Format",
              bullets: [
                "Two to three verified facts plus one pain hypothesis and CTA recommendation",
                "Confidence score with do-not-send flags if evidence is weak",
              ],
            },
            {
              heading: "Draft-First Workflow",
              bullets: [
                "Drafts created → rep approves → send → CRM logs → replies triaged",
              ],
            },
            {
              heading: "Deliverability Guardrails",
              bullets: [
                "Throttling and quiet hours",
                "Bounce and complaint monitoring",
                "Suppression lists and stop rules",
              ],
            },
            {
              heading: "Acceptance Tests",
              bullets: [
                "Suppression prevents sending to open opps, DNC, recently contacted",
                "Drafts match approved tone and claims",
                "CRM logging creates consistent activity history",
                "Reply classification routes to correct next actions",
              ],
            },
          ],
        },
      },
      whyQasten: {
        title: "Why Choose Qasten",
        subtitle: "Custom-built. Stack-native. Production-grade.",
        reasons: [
          "100% custom development tailored to your workflows and goals",
          "Full ownership with no vendor lock-in or recurring platform fees",
          "Built by engineers who shipped systems at OpenAI, AWS, Uber, and Accor",
          "Production-ready with governance, audit logs, and enterprise integrations",
        ],
        builtByLabel: "Built by engineers from",
        companies: [
          { name: "OpenAI", logo: "/logos/openai.svg" },
          { name: "AWS", logo: "/logos/aws.svg" },
          { name: "Uber", logo: "/logos/uber.png" },
          { name: "Accor", logo: "/logos/accor.png" },
        ],
      },
      integrations: {
        title: "Connects to Your Existing Stack",
        subtitle:
          "Native integrations with Salesforce, HubSpot, Gmail, Slack, and 50+ tools, so your AI agents work where your team works.",
        logos: [
          "Salesforce",
          "HubSpot",
          "Gmail",
          "Outlook",
          "Slack",
          "Zapier",
          "Zendesk",
          "Asana",
          "Linear",
          "Dovetail",
          "FigJam",
        ],
      },
      howItWorks: {
        title: "Live in 30 Days - Without Disrupting Your CRM",
        subtitle:
          "A production-safe rollout: build in isolation, launch with guardrails, and improve weekly-so you get meetings, not mess.",
        phases: [
          {
            week: "Week 1",
            title: "Define & Align",
            bullets: [
              "Map your funnel + routing rules",
              "Choose the first agent (inbound or outbound)",
              "Lock success metrics and acceptance criteria",
            ],
          },
          {
            week: "Weeks 2–3",
            title: "Build & Prove (Sandbox First)",
            bullets: [
              "Integrate CRM + inbox + enrichment",
              "Validate suppression, dedupe, and stop rules",
              "Run test leads end-to-end until it matches your standards",
            ],
          },
          {
            week: "Week 4",
            title: "Launch & Tune",
            bullets: [
              "Deploy with monitoring + dashboards",
              "Start in Draft → Assist → Autopilot (your choice)",
              "Weekly tuning loop: copy, scoring, routing, deliverability",
            ],
          },
        ],
        cta: "Book a 30-min rollout call",
        ctaSubtext: "",
      },
      midpageCta: {
        title: "Want to see which agent fits your funnel?",
        text:
          "Book a free 30-minute call. We will map your inbound and outbound workflows and recommend the fastest path to booked meetings.",
        cta: "Book Your Free Strategy Call",
      },
      booking: {
        title: "Book a Free Call",
        subtitle:
          "Choose a time that works for you. We will review your funnel and map the fastest path to booked meetings.",
      },
      faq: {
        title: "Your Questions, Answered",
        items: [
          {
            question: "What exactly is a Custom AI Agent?",
            answer:
              "A business-specific system that automates workflows and integrates with your existing tools.",
          },
          {
            question: "How fast can I have one running?",
            answer:
              "Typically within about 30 days (discovery, design, build/test, launch/optimize).",
          },
          {
            question: "How do you prevent double-contact with reps?",
            answer:
              "Collision prevention checks CRM activity and ownership rules. The agent stands down when a human takes over.",
          },
          {
            question: "Can outbound run draft-first?",
            answer:
              "Yes. Draft-first is the default. You can increase autonomy after validation.",
          },
          {
            question: "What happens when the agent is not confident?",
            answer:
              "It escalates, asks a clarifying question, or routes to a human, never guessing.",
          },
          {
            question: "Do you keep audit logs and allow rollback?",
            answer:
              "Yes. Governance, logs, and versioning are built into both offers.",
          },
          {
            question: "What production guarantees do you provide?",
            answer:
              "We ship with guardrails: no double-touch (collision + stand-down rules), clean CRM (field mapping + audit trail), full control (approval modes + rate limits + quiet hours), and rollback ready (versioning + revert in minutes). By Day 7 you also get a one-page rollout blueprint (triggers, routing, scoring, guardrails, KPIs).",
          },
          {
            question: "Is my data safe?",
            answer:
              "You own the agents and data. Hosted in the EU with strict security protocols.",
          },
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
    contactUs: "Réserver un appel gratuit",
    pricing: "Tarifs",
    nav: {
      offers: "Offres",
      howItWorks: "Comment ça marche",
      integrations: "Intégrations",
      whyQasten: "Pourquoi Qasten",
      faq: "FAQ",
    },
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
      copyright: "© 2026 Qasten. Tous droits réservés.",
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
        title:
          "Qasten - Agents de revenu qui transforment vos leads en rendez-vous",
        description:
          "Nous construisons deux agents de revenu de niveau production dans votre CRM et votre inbox. Opérationnel en 30 jours. Propriété totale sans dépendance fournisseur.",
      },
      hero: {
        title:
          "Déployez des agents de revenu qui transforment vos leads en rendez-vous - en 30 jours",
        subhead:
          "Nous déployons des agents de revenus sur mesure qui transforment vos leads en rendez-vous, directement dans votre CRM. Votre équipe se concentre sur la vente. En ligne en 30 jours.",
        trustChips: [
          "Appel gratuit de 30 minutes",
          "Conçu pour votre entreprise",
          "Opérationnel en 30 jours",
          "Propriété totale (pas de frais de plateforme récurrents)",
        ],
        ctas: {
          primary: "Réservez votre appel stratégique",
          secondary: "Voir les 2 agents de revenu",
        },
        media: {
          title: "Inbound + Outbound, un seul système de revenu",
          bullets: [
            "Inbound : Formulaire → réponse → qualification → routage → rendez-vous → CRM mis à jour",
            "Outbound : Signal → recherche → brouillons → envoi sécurisé → réponses triées",
          ],
        },
      },
      offers: {
        title: "Votre premier agent de revenu",
        subtitle:
          "Commencez par l'inbound ou l'outbound. Les deux se déploient dans votre stack existante.",
        recommended: "La plupart des équipes commencent ici",
        labels: {
          bestFor: "Pourquoi on déploie cet agent",
          whatItDoes: "Ce que ça fait",
        },
        cards: [
          {
            key: "inbound_autopilot",
            recommended: true,
            title: "Agent de Qualification Inbound",
            tagline:
              "Qualifie les leads entrants et réserve des rendez-vous automatiquement.",
            idealFor: [
              "Récupérer les deals perdus à cause de la lenteur de réponse",
              "Transformer la demande inbound en rendez-vous automatiquement",
            ],
            actions: [
              "Évite les doubles contacts et les chevauchements gênants",
              "Qualifie automatiquement les leads avant qu'un commercial ne réponde",
              "Réserve le bon rendez-vous avec le bon owner",
              "Garde votre CRM parfaitement à jour, automatiquement",
            ],
            ctas: {
              primary: "Explorer cet agent avec nous",
              secondary: "Voir la fiche technique complète",
            },
          },
          {
            key: "outbound_copilot",
            title: "Agent de Signal Outbound",
            tagline:
              "Lance l'outbound uniquement quand de vrais signaux d'achat apparaissent.",
            idealFor: [
              "Générer du pipeline sans brûler la délivrabilité",
              "Contacter uniquement quand de vrais signaux d'achat apparaissent",
            ],
            actions: [
              "Cible uniquement les prospects avec de vrais signaux d'achat",
              "Personnalise l'outreach grâce à des preuves vérifiées",
              "Protège la délivrabilité avec des garde-fous stricts",
              "Route les réponses et les prochaines étapes dans le CRM",
            ],
            ctas: {
              primary: "Explorer cet agent avec nous",
              secondary: "Voir la fiche technique complète",
            },
          },
        ],
      },
      offerDetails: {
        inbound: {
          title: "Spécifications complètes : Agent de Qualification Inbound",
          sections: [
            {
              heading: "Machine d'états",
              bullets: [
                "Nouveau → Validé → Contacté → Engagé → Qualifié → Réservé → Assigné",
                "Parcours Nurture, Disqualifié et Supprimé avec codes de raison",
              ],
            },
            {
              heading: "Pré-requis d'implémentation",
              bullets: [
                "Accès HubSpot ou Salesforce (création de leads, champs, règles de routage)",
                "Boîte Gmail ou Outlook pour l'envoi",
                "Accès calendrier pour la réservation",
                "Canal Slack pour alertes (optionnel)",
              ],
            },
            {
              heading: "Tests d'acceptation",
              bullets: [
                "La déduplication empêche les doubles emails sur leads dupliqués",
                "DNC et désinscription toujours respectés",
                "Le routage suit les règles de territoire et de segment",
                "Les règles d'arrêt fonctionnent sur réponse, réservation, désinscription",
                "Les champs CRM sont remplis et un résumé est généré",
              ],
            },
          ],
        },
        outbound: {
          title: "Spécifications complètes : Agent de Signal Outbound",
          sections: [
            {
              heading: "Format du dossier de preuves",
              bullets: [
                "Deux à trois faits vérifiés plus une hypothèse de douleur et une recommandation de CTA",
                "Score de confiance et drapeaux do-not-send si les preuves sont faibles",
              ],
            },
            {
              heading: "Workflow Draft-First",
              bullets: [
                "Brouillons créés → validation commerciale → envoi → logs CRM → réponses triées",
              ],
            },
            {
              heading: "Garde-fous de délivrabilité",
              bullets: [
                "Throttling et plages silencieuses",
                "Monitoring des rebonds et plaintes",
                "Listes de suppression et règles d'arrêt",
              ],
            },
            {
              heading: "Tests d'acceptation",
              bullets: [
                "La suppression empêche l'envoi aux opps ouvertes, DNC, contacts récents",
                "Les brouillons respectent le ton et les claims validés",
                "Les logs CRM créent un historique d'activité cohérent",
                "La classification des réponses route vers les bonnes actions",
              ],
            },
          ],
        },
      },
      whyQasten: {
        title: "Pourquoi choisir Qasten",
        subtitle: "Sur-mesure. Natif à votre stack. Prêt pour la production.",
        reasons: [
          "Développement 100% sur-mesure adapté à vos workflows et objectifs",
          "Propriété totale sans dépendance fournisseur ni frais de plateforme récurrents",
          "Construit par des ingénieurs ayant livré des systèmes chez OpenAI, AWS, Uber et Accor",
          "Prêt pour la production avec gouvernance, audits et intégrations enterprise",
        ],
        builtByLabel: "Construit par des ingénieurs de",
        companies: [
          { name: "OpenAI", logo: "/logos/openai.svg" },
          { name: "AWS", logo: "/logos/aws.svg" },
          { name: "Uber", logo: "/logos/uber.png" },
          { name: "Accor", logo: "/logos/accor.png" },
        ],
      },
      integrations: {
        title: "Se connecte à votre stack existante",
        subtitle:
          "Intégrations natives avec Salesforce, HubSpot, Gmail, Slack et plus de 50 outils, pour que vos agents IA travaillent là où votre équipe travaille.",
        logos: [
          "Salesforce",
          "HubSpot",
          "Gmail",
          "Outlook",
          "Slack",
          "Zapier",
          "Zendesk",
          "Asana",
          "Linear",
          "Dovetail",
          "FigJam",
        ],
      },
      howItWorks: {
        title: "Live en 30 jours - sans perturber votre CRM",
        subtitle:
          "Un déploiement sécurisé en production : construction en isolation, lancement avec garde-fous, amélioration hebdomadaire - pour des rendez-vous, pas du désordre.",
        phases: [
          {
            week: "Semaine 1",
            title: "Définir & aligner",
            bullets: [
              "Cartographier votre funnel + règles de routage",
              "Choisir le premier agent (inbound ou outbound)",
              "Verrouiller les métriques de succès et critères d'acceptation",
            ],
          },
          {
            week: "Semaines 2–3",
            title: "Construire & prouver (sandbox d'abord)",
            bullets: [
              "Intégrer CRM + inbox + enrichissement",
              "Valider suppression, déduplication et règles d'arrêt",
              "Tester des leads de bout en bout jusqu'à vos standards",
            ],
          },
          {
            week: "Semaine 4",
            title: "Lancer & ajuster",
            bullets: [
              "Déployer avec monitoring + dashboards",
              "Démarrer en Brouillon → Assisté → Autopilote (au choix)",
              "Boucle d'amélioration hebdo : copy, scoring, routage, délivrabilité",
            ],
          },
        ],
        cta: "Réserver un appel de déploiement (30 min)",
        ctaSubtext: "",
      },
      midpageCta: {
        title: "Vous voulez savoir quel agent correspond à votre funnel ?",
        text:
          "Réservez un appel gratuit de 30 minutes. Nous cartographions vos workflows inbound et outbound et recommandons la voie la plus rapide vers des rendez-vous.",
        cta: "Réservez votre appel stratégique",
      },
      booking: {
        title: "Réserver un appel gratuit",
        subtitle:
          "Choisissez un créneau. Nous analysons votre funnel et recommandons la voie la plus rapide vers des rendez-vous.",
      },
      faq: {
        title: "Vos questions, nos réponses",
        items: [
          {
            question: "Qu'est-ce qu'un agent IA sur-mesure ?",
            answer:
              "Un système métier qui automatise vos workflows et s'intègre à vos outils existants.",
          },
          {
            question: "En combien de temps peut-il être opérationnel ?",
            answer:
              "En général sous 30 jours (découverte, design, build/test, lancement/optimisation).",
          },
          {
            question: "Comment évitez-vous les doubles contacts avec les commerciaux ?",
            answer:
              "Prévention des collisions : vérification des activités CRM et des règles d'ownership. L'agent s'arrête dès qu'un humain prend la main.",
          },
          {
            question: "Quelles garanties de production fournissez-vous ?",
            answer:
              "Nous livrons avec des garde-fous : pas de double-contact (collision + stand-down), CRM propre (mapping des champs + piste d'audit), contrôle total (modes d'approbation + limites + plages silencieuses) et rollback prêt (versioning + retour arrière en minutes). D'ici J+7, vous recevez aussi une page de blueprint (triggers, routage, scoring, garde-fous, KPIs).",
          },
          {
            question: "L'outbound peut-il fonctionner en mode draft-first ?",
            answer:
              "Oui. Le draft-first est le mode par défaut. Vous pouvez augmenter l'autonomie après validation.",
          },
          {
            question: "Que se passe-t-il si l'agent manque de confiance ?",
            answer:
              "Il escalade, pose une question de clarification ou route vers un humain, sans jamais deviner.",
          },
          {
            question: "Avez-vous des logs d'audit et un rollback ?",
            answer:
              "Oui. La gouvernance, les logs et le versioning sont intégrés aux deux offres.",
          },
          {
            question: "Mes données sont-elles en sécurité ?",
            answer:
              "Vous possédez les agents et les données. Hébergement UE avec des protocoles de sécurité stricts.",
          },
        ],
      },
    },
  },
};
