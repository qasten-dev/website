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
    contactUs: "Apply for a free audit",
    pricing: "Pricing",
    nav: {
      problem: "The Problem",
      solution: "Our Solution",
      whyUs: "Why Us",
      faq: "FAQ",
    },
    price: {
      metaTitle: "Pricing",
      metaDescription: "Pricing for Qasten",
      heading: "Choose Your Qasten Plan",
      badgeRecommended: "Recommended",
      choosePlan: "Apply for a free audit",
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
          ctaLabel: "Apply for a free audit",
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
      eu: "Privacy-first infrastructure",
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
        title: "Stop losing inbound leads to slow follow-up.",
        subhead:
          "Qasten builds a custom Lead Response Agent inside your CRM and inbox. It qualifies and categorizes every form submission, then books a meeting with the right rep’. Live in 30 days.",
        trustChips: [
          "Built in your stack (HubSpot, Salesforce, Gmail)",
          "Goes live in 30 days",
          "Full ownership, no vendor lock-in",
        ],
        ctas: {
          primary: "Apply for a free audit",
          secondary: "Apply for a free audit",
        },
        media: {
          title: "Inbound + Outbound, one revenue system",
          bullets: [
            "Inbound: Form → reply → qualify → route → book → CRM updated",
            "Outbound: Signal → research → drafts → safe send → replies triaged",
          ],
        },
      },
      stats: {
        title: "Speed-to-Lead by the Numbers",
        items: [
          {
            value: "80%",
            caption: "Teams respond after 5 minutes and 30% never respond at all.",
          },
          {
            value: "4h 50m",
            caption: "Average first response time.",
          },
          {
            value: "7x",
            caption: "More likely to qualify leads when contacted within 1 hour.",
          },
        ],
        banner: {
          text: "78% of B2B buyers purchase from the first responder.",
        },
      },
      offers: {
        title: "You're losing money to missed conversations",
        subtitle: "You are paying for leads you never get to speak to. When response time slips, routing breaks and follow up turns generic. Buyers move on to whoever replies first.",
        recommended: "",
        labels: {
          bestFor: "Why teams deploy this",
          whatItDoes: "What it does",
        },
        cards: [
          {
            key: "outbound_copilot",
            title: "Outbound Prospecting Agent",
            tagline: "Runs highly personalized, qualitative outbound without templates, spam, or guesswork.",
            idealFor: [
              "Scale personalized outbound without sacrificing relevance",
              "Protect deliverability while increasing reply quality",
            ],
            actions: [
              "Builds research-based prospect briefs from CRM and enrichment data",
              "Drafts personalized outreach grounded in real company context",
              "Enforces strict sending and deliverability guardrails",
              "Routes replies and next steps directly into your CRM",
            ],
            ctas: {
              primary: "Apply for a free audit",
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
          title: "Full Spec: Outbound Prospecting Agent",
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
      whyAgentBetter: {
        title: "Why use AI Agents?",
        subtitle: "Speed matters. Our AI agents respond instantly, qualify leads accurately, and never miss an opportunity, 24/7.",
        highlight: {
          text: "78% of B2B buyers purchase from the first responder.",
        },
      },
      whyQasten: {
        title: "Why Choose Qasten",
        subtitle: "Custom-built. Stack-native. Production-grade.",
        reasons: [
          "100% custom development tailored to your workflows and goals",
          "Full ownership with no vendor lock-in",
          "Built by engineers who shipped systems at OpenAI, AWS, Uber, and Accor",
          "Production-ready with audit logs and enterprise integrations",
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
              "Lock success metrics and acceptance criteria",
            ],
          },
          {
            week: "Weeks 2–3",
            title: "Build & Prove",
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
        cta: "Apply for a free audit",
        ctaSubtext: "",
      },
      midpageCta: {
        title: "See Our Inbound Agent in Action",
        text:
          "Book a free 30-minute consultation. We'll show you how our AI agent can transform your response time, qualify leads instantly, and book more meetings while you focus on closing deals.",
        cta: "Apply for a free audit",
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
            question: "What exactly is the Inbound AI Agent?",
            answer:
              "Our Inbound AI Agent is a purpose-built system that instantly responds to new leads, qualifies them based on your criteria, and books meetings directly into your calendar, all while integrating seamlessly with your CRM and email.",
          },
          {
            question: "How fast can I get started?",
            answer:
              "Setup typically takes 2-3 weeks. We integrate with your CRM, configure qualification criteria, and train the agent on your business. You can start with a 7-day pilot to see results before committing.",
          },
          {
            question: "What's included in the 7-day risk-free pilot?",
            answer:
              "During the pilot, our agent handles your inbound leads in real-time. If you're not satisfied with the results within 7 days, you can opt out without paying anything. No contracts, no commitments, just results.",
          },
          {
            question: "How does the agent qualify leads?",
            answer:
              "The agent asks intelligent questions based on your ideal customer profile, validates budget and timeline, assesses fit, and scores leads automatically. It only escalates qualified opportunities to your team.",
          },
          {
            question: "What happens to unqualified leads?",
            answer:
              "Unqualified leads are automatically added to nurture sequences with appropriate follow-up cadences. Nothing falls through the cracks; every lead gets a proper response and path forward.",
          },
          {
            question: "Can the agent book meetings directly?",
            answer:
              "Yes! Once a lead is qualified, the agent can access your team's calendars and book meetings instantly, eliminating back-and-forth scheduling delays.",
          },
          {
            question: "What if the agent isn't confident about something?",
            answer:
              "The agent is designed to know its limits. When it encounters uncertainty, it escalates to your team with full context rather than guessing or providing incorrect information.",
          },
          {
            question: "How do you prevent conflicts with my sales team?",
            answer:
              "Smart collision detection checks CRM ownership and recent activity. The agent automatically defers to human reps when they're actively working a lead, ensuring seamless collaboration.",
        },
        {
          question: "Is my data secure?",
          answer:
              "Absolutely. Your data is protected with enterprise-grade security. You maintain full ownership and control. We maintain comprehensive audit logs and never use your data for training.",
        },
          {
            question: "What guarantees do you offer?",
            answer:
              "<strong>7-Day Risk-Free Pilot:</strong> Try the agent for 7 days. If you're not satisfied, opt out without paying anything.<br><br><strong>Response Time Guarantee:</strong> First response within 2 minutes, 24/7.<br><br><strong>Integration Support:</strong> We handle all technical setup and CRM integration; you don't lift a finger.",
          },
        ],
      },
    },
  },

};
