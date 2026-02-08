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
      home: "Stop losing HVAC jobs to missed calls. Qasten builds a custom AI receptionist that answers customer questions and books appointments directly on your team's calendar. Live in 48 hours.",
    },
    aboutUs: "About us",
    contactUs: "Start your Free 7-Day Pilot",
    pricing: "Pricing",
    nav: {
      problem: "The Problem",
      solution: "HVAC Voice Agent",
      howItWorks: "How It Works",
      whyUs: "Why Qasten",
      faq: "FAQ",
    },
    price: {
      metaTitle: "Pricing",
      metaDescription: "Pricing for Qasten",
      heading: "Choose Your Qasten Plan",
      badgeRecommended: "Recommended",
      choosePlan: "Start your Free 7-Day Pilot",
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
          ctaLabel: "Start your Free 7-Day Pilot",
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
      eu: "Privacy-first infrastructure • You own your agent and data",
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
        title: "HVAC AI Receptionist | Qasten",
        description:
          "Stop losing $3,900/month to missed leads. Qasten captures HVAC leads 24/7, answers instantly, and books jobs automatically.",
      },
      hero: {
        titlePrefix: "Stop Losing",
        titleHighlight: "$3,900/month",
        titleSuffix: "to Missed Leads",
        subhead:
          "Every unanswered inquiry is a job going to your competitor. Qasten captures leads 24/7 across calls, web forms, and follow-ups, then books jobs automatically.",
        trustChips: [
          "Works with your existing software",
          "24/7 call answering",
          "Knows your business",
        ],
        ctas: {
          primary: "Start your Free 7-Day Pilot",
          secondary: "Start your Free 7-Day Pilot",
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
        title: "Missed Calls by the Numbers",
        items: [
          {
            value: "24/7",
            caption:
              "Answers calls after-hours, weekends, and during peak-season spikes.",
          },
          {
            value: "5 sec",
            caption: "Pickup guarantee.",
          },
          {
            value: "1 call",
            caption:
              "Answers questions and books the appointment in the same call - no phone tag.",
          },
        ],
        banner: {
          text: "The first company that answers usually gets the job.",
        },
      },
      offers: {
        title: "You're losing money to missed calls.",
        subtitle:
          "In HVAC, speed wins. When a call hits voicemail during a heat wave, after hours, or while your team is on another line, customers don't wait. They call the next company until someone answers. Qasten fixes that by making sure every caller gets answers and a booked slot immediately.",
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
              primary: "Start your Free 7-Day Pilot",
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
        title: "Why use an AI voice agent in HVAC?",
        subtitle:
          "Because your best leads don't come in neatly - they call. And if you don't answer fast, you don't get the job.",
        bullets: [
          "Answer common questions (service area, availability, pricing ranges, brands/equipment, warranties, membership plans - based on your rules)",
          "Collect the right details (issue description, urgency, address, access notes, equipment type)",
          "Route to the right person (service vs. maintenance vs. install/estimate - based on how you run your team)",
          "Book directly on the calendar so the customer leaves the call with a confirmed appointment",
        ],
        insightLabel: "HVAC Insight",
        highlight: {
          text: "The first company that answers usually gets the job.",
        },
        insightTagline: "This is why speed matters",
      },
      whyQasten: {
        title: "Why Choose Qasten",
        subtitle: "Custom-built. Calendar-native. Production-grade.",
        reasons: [
          "100% custom voice agent tailored to your call flow, service area, and scheduling rules",
          "Books on the right calendar (any calendar) with routing logic for the right person",
          "Full ownership with no vendor lock-in",
          "Production-ready with call summaries, audit logs, and safe escalation rules",
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
        title: "Connects to your calendar (and the tools you already use)",
        subtitle:
          "No CRM? No problem. Qasten connects your voice agent directly to your team calendars so it can schedule immediately. If you do have tools, we can integrate those too - but the calendar is enough to start. We handle setup end-to-end: call flow, business rules, knowledge base, and calendar integration.",
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
        title: "Live in 48 hours - Without Disrupting Your CRM",
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
        cta: "Start your Free 7-Day Pilot",
        ctaSubtext: "",
      },
      midpageCta: {
        title: "See the HVAC Voice Agent in action",
        text:
          "See it in the video then test it yourself. Call the number below and experience how the agent picks up in seconds, answers HVAC questions, qualifies the request, and books the right slot with the right person.",
        cta: "Start your Free 7-Day Pilot",
        demoTitle: "Try Our Voice Agent",
        demoText:
          "Experience fast call handling, intelligent routing, and instant appointment booking.",
        demoCta: "Try the Voice Agent",
        phoneNumber: "+1 (650) 585-3293",
        phoneLabel: "Call to try the agent",
      },
      bookMeetingCta: {
        title: "Start your Free 7-Day Pilot",
        text:
          "Book a free 30-minute consultation. We'll show you how our AI agent can transform your response time, qualify leads instantly, and book more meetings while you focus on important work.",
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
            question: "What exactly is the HVAC Voice Agent?",
            answer:
              "It's a custom AI phone agent built for HVAC companies. It answers inbound calls, responds to customer questions, gathers the right info, and books an appointment directly on the right calendar.",
          },
          {
            question: "Do I need a CRM?",
            answer:
              "Not necessarily. If you have one we integrate seamlessly with it. If you don't have one, we can run everything from your calendars. If you want more visibility, we'll set up a lightweight call/lead log so you have a simple system without adopting a full CRM.",
          },
          {
            question: "What if I already have a receptionist?",
            answer:
              "You can use it as a supplement to your existing receptionist. When the receptionist is not available, the AI voice agent can answer common questions, book appointments, and log calls/leads. Enabling and disabling the AI voice agent is easy and can be done in seconds based on your business needs.",
          },
          {
            question: "Can it answer customer questions during the call?",
            answer:
              "Yes. We train it on your services, policies, coverage area, and FAQs so it can handle the full conversation - not just \"take a message.\"",
          },{
            question: "What if the agent isn't confident about something?",
            answer:
              "It's designed to know its limits. It escalates to your team with full context instead of guessing.",
          },
          {
            question: "Can it book directly with the right person?",
            answer:
              "Yes. We configure routing rules so the agent schedules with the right calendar/person based on the request type (service vs. maintenance vs. estimate, etc.).",
          },
          {
            question: "How fast can I get started?",
            answer:
              "Setup is typically 48 hours, and fully live in about 30 days depending on complexity. You can start with a 7-day pilot free of charges.",
          },
          {
            question: "What's included in the 7-day risk-free pilot?",
            answer:
              "The agent handles an agreed slice of your inbound calls (for example: after-hours or overflow). If you're not satisfied within 7 days, you can opt out without paying - no contracts, no commitments.",
          },
          
          {
            question: "How do you prevent double-booking or scheduling conflicts?",
            answer:
              "We use calendar checks and collision rules to avoid conflicts and book only valid slots.",
          },
          {
            question: "Is my data secure?",
            answer:
              "Yes. You maintain ownership and control. We implement audit logs and privacy-first practices.",
          },
          {
            question: "What guarantees do you offer?",
            answer:
              "• <strong>7-Day Risk-Free Pilot:</strong> Opt out within 7 days if you're not satisfied.<br><br>• <strong>Response Time Guarantee:</strong> Pickup within 2 minutes, 24/7 (typically seconds).<br><br>• <strong>Integration Support:</strong> We handle setup and calendar integration; you don't lift a finger.",
          },
        ],
      },
    },
  },

};
