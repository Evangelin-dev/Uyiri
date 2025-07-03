export interface BlogPost {
  title: string;
  metaTitle: string;
  location: string;
  excerpt: string;
  sections: BlogSection[];
}

export interface BlogSection {
  heading?: string;
  content?: string;
  list?: string[];
  testimonial?: {
    quote: string;
    author: string;
  };
  callToAction?: {
    title: string;
    description: string;
    contact: string;
  };
}

export const blogData: BlogPost[] = [
  {
    title: "10-Day Uterus Detox: Natural Relief for Period Pain, PCOD & Hormonal Imbalance",
    metaTitle: "Uterus Detox for Women – Natural PCOD & Period Pain Relief | Dr. Uyiriniyan",
    location: "Chennai, Tamil Nadu",
    excerpt: "Struggling with irregular periods, hormonal swings, PCOD, or fibroids? Dr. Uyiriniyan's 10-Day Uterus Detox Program offers natural relief using ancient Siddha wisdom and modern guidance.",
    sections: [
      {
        content: "If you are a woman struggling with irregular periods, hormonal swings, PCOD, or fibroids, you're not alone. These challenges have become increasingly common among women of all ages. While modern medicine focuses on symptom management, Siddha medicine offers a deeper, root-cause approach to healing."
      },
      {
        heading: "What Is the 10-Day Uterus Detox?",
        content: "The 10-Day Uterus Detox is a structured wellness program designed to cleanse the uterus and reproductive system, rebalance hormones, reduce inflammation, and alleviate common menstrual problems. This program integrates dietary changes, breathwork, mild physical movement, emotional healing, and daily coaching through WhatsApp.",
        list: [
          "Cleanse the uterus and reproductive system",
          "Rebalance hormones naturally",
          "Reduce inflammation and bloating",
          "Alleviate menstrual cramps and irregular flow"
        ]
      },
      {
        heading: "Why Siddha-Based Detox Works",
        content: "Siddha medicine views the uterus as an energetic and physical center of feminine health. Toxins, emotional blockages, and poor diet can lead to stagnation and disease. The detox program is based on age-old formulations and detoxifying food practices that gently support the body's natural healing process.",
        list: [
          "Dosha alignment for hormonal balance",
          "Pranic balance for energy flow",
          "Gentle detoxification of ama (toxins)"
        ]
      },
      {
        heading: "What to Expect During the 10 Days",
        list: [
          "Liquid & Fruit-Based Diet: Supports digestion and hormonal reset",
          "Daily Voice Notes & Reminders: Personal guidance from Dr. Uyiriniyan and team",
          "Breathwork & Gentle Movement: Boosts circulation and emotional release",
          "Emotional Detox Tools: Journaling prompts, womb meditation, and affirmations"
        ],
        content: "You will not be alone in this journey. You'll be part of a supportive WhatsApp group of women on the same path."
      },
      {
        heading: "Who Should Join?",
        list: [
          "Women suffering from PCOD/PCOS",
          "Women with painful or irregular periods",
          "Anyone seeking post-pregnancy recovery",
          "Those facing early symptoms of fibroids or endometriosis"
        ]
      },
      {
        testimonial: {
          quote: "I felt lighter within 3 days. My pain reduced drastically and I was emotionally more stable.",
          author: "Revathi, Chennai"
        }
      },
      {
        testimonial: {
          quote: "This was my first detox. I expected it to be tough, but it felt like I was finally listening to my body.",
          author: "Shalini, Bangalore"
        }
      },
      {
        callToAction: {
          title: "Join the Healing Movement",
          description: "Start your womb healing journey today. For just ₹999, you get a full 10-day program, one-on-one post-detox consultation, and daily detox schedule with meal plan.",
          contact: "Call us at 9385818718 to book your slot"
        }
      }
    ]
  },
  {
    title: "Why Every Woman Needs a Seasonal Womb Cleanse",
    metaTitle: "Seasonal Womb Cleanse for Reproductive Wellness | Ayurvedic Guide for Women",
    location: "Coimbatore, Bengaluru, Hyderabad",
    excerpt: "In a fast-paced world where women juggle countless roles, reproductive health often takes a backseat. Discover why a seasonal womb cleanse is essential for maintaining internal balance and preventing long-term reproductive complications.",
    sections: [
      {
        content: "In a fast-paced world where women juggle countless roles, reproductive health often takes a backseat. Monthly cycles, hormonal fluctuations, and stress can take a toll on the uterus and its supporting systems. That's where a seasonal womb cleanse steps in – a proactive way to maintain internal balance and prevent long-term reproductive complications."
      },
      {
        heading: "Why Seasonal Cleansing Is Essential",
        content: "Just like nature has its seasons, our bodies go through cyclical changes. An Ayurvedic womb cleanse aligns your body with nature's rhythms. It helps eliminate built-up toxins, reduce inflammation, and restore reproductive vitality.",
        list: [
          "Regularized periods and hormonal balance",
          "Reduced bloating and mood swings",
          "Prevention of fibroids and PCOS",
          "Improved fertility and reproductive health"
        ]
      },
      {
        heading: "What Is the Womb Cleanse Program?",
        content: "Led by Siddha & Ayurvedic healer Dr. Uyiriniyan, the 10-Day Natural Womb Cleanse is a gentle yet powerful detox plan tailored for women.",
        list: [
          "Herbal teas and fruit-based liquid diet",
          "Daily breathwork and mild exercises",
          "Emotional healing through journaling and affirmations",
          "WhatsApp support group and voice note guidance"
        ]
      },
      {
        heading: "Who Should Consider a Seasonal Womb Cleanse?",
        list: [
          "Women with irregular or painful periods",
          "Women recovering from childbirth or miscarriage",
          "Women facing stress-related hormonal imbalance",
          "Women with a sedentary lifestyle or high screen time"
        ]
      },
      {
        testimonial: {
          quote: "The cleanse helped me emotionally more than I expected. I cried, released, and felt lighter every day.",
          author: "Gayathri, Coimbatore"
        }
      },
      {
        testimonial: {
          quote: "My bloating reduced drastically and I slept better. My cycle came on time after months!",
          author: "Deepa, Bengaluru"
        }
      },
      {
        callToAction: {
          title: "Your Body Deserves a Reset",
          description: "The best time to do a womb cleanse is at the turn of seasons: March, June, September, or December. Regular seasonal cleanses reduce the load on your uterus and improve your overall vitality.",
          contact: "Call 9385818718 or register online for just ₹999"
        }
      }
    ]
  },
  {
    title: "Shuddhi: The Ayurvedic Path to Radiance, Hormonal Balance & Energy",
    metaTitle: "Shuddhi Ayurvedic Detox – 10-Day Women's Cleanse Program | Dr. Uyiri Chennai",
    location: "Puducherry, Chennai, Singapore",
    excerpt: "Discover Shuddhi, a 10-day Ayurvedic detox program that restores hormonal balance, rejuvenates the reproductive system, and enhances overall radiance and energy using traditional Siddha healing wisdom.",
    sections: [
      {
        content: "In today's fast-paced world, women juggle multiple roles — professional, caregiver, leader, nurturer — and often, their health takes a backseat. Hormonal imbalance, fatigue, bloating, and irregular periods have become common complaints. Ayurveda offers a timeless path to reclaiming vitality, and the Shuddhi program is specially designed to make that path accessible."
      },
      {
        heading: "What is Shuddhi?",
        content: "Shuddhi is a 10-day Ayurvedic detox program created by Dr. Uyiri that aims to restore hormonal balance, rejuvenate the reproductive system, and enhance overall radiance and energy. Rooted in Siddha and Ayurvedic healing traditions, the Shuddhi program includes a series of diet plans, lifestyle changes, and mental cleansing rituals tailored for modern women."
      },
      {
        heading: "What Makes Shuddhi Unique?",
        list: [
          "100% Natural Diet: Specially crafted plant-based, anti-inflammatory liquid meals",
          "Mind-Body Alignment: Daily breathwork, journaling, and mild exercise",
          "WhatsApp Group Support: Direct access to guidance team and peer motivation",
          "Safe & Effective: No crash diets, no pills — only time-tested wisdom",
          "Personal Care: Every participant receives personalized feedback"
        ]
      },
      {
        heading: "The Daily Structure",
        list: [
          "Morning: Herbal drink + breathing ritual",
          "Midday: Fruit-based smoothie with detox powder",
          "Afternoon: Coconut water, journaling prompt",
          "Evening: Mild stretching and Siddha-guided meditation",
          "Night: Golden seed infusion or herbal tea"
        ]
      },
      {
        heading: "Who Should Enroll?",
        content: "The Shuddhi program is ideal for women facing various health challenges. Whether you're in Chennai, Puducherry, or living abroad in Singapore — this program is available online and open to women across the globe.",
        list: [
          "PCOD/PCOS symptoms",
          "Hormonal acne or hair fall",
          "Chronic fatigue and burnout",
          "Menstrual irregularities",
          "Emotional stress or anxiety",
          "Weight gain due to hormonal shifts"
        ]
      },
      {
        callToAction: {
          title: "Begin Your Radiant Transformation",
          description: "Your body wants to heal — all it needs is the right environment. Shuddhi is more than a detox, it's a reset for your inner and outer wellness.",
          contact: "Join the next batch and start your transformation"
        }
      }
    ]
  },
  {
    title: "5 Signs Your Body Needs a Womb Reset",
    metaTitle: "Womb Reset for PCOD, PMS, and Fatigue | Dr. Uyirinayan Siddha Healing",
    location: "Mumbai, Trichy, Salem",
    excerpt: "Learn to recognize the warning signs that your womb and hormones are out of balance. Discover what these symptoms mean and what you can do to restore harmony to your reproductive system.",
    sections: [
      {
        content: "Our bodies speak to us all the time — through fatigue, mood swings, skin issues, and even painful periods. But we often overlook these signs as 'normal' or 'part of being a woman.' In Siddha medicine, these are early indicators that your womb and hormones are out of balance and may need a reset."
      },
      {
        heading: "5 Warning Signs You Need a Womb Reset",
        list: [
          "Chronic Fatigue: Despite rest, you feel drained, especially around your menstrual cycle",
          "Bloating & Water Retention: Your lower abdomen often feels heavy or swollen",
          "PMS Mood Swings: Intense emotional changes or anxiety pre-period",
          "Painful or Irregular Periods: Cramping that disrupts your routine",
          "Breakouts & Hair Fall: Hormonal shifts manifesting in skin and hair issues"
        ]
      },
      {
        heading: "What You Can Do",
        content: "The 10-Day Uterus Detox or Womb Cleanse program by Dr. Uyirinayan is designed to clear built-up toxins, improve blood flow to the uterus, and reset hormonal equilibrium using time-tested Siddha healing principles."
      },
      {
        heading: "Simple Lifestyle Additions",
        list: [
          "Begin your day with warm herbal water",
          "Add deep breathing or journaling to your routine",
          "Eat seasonal fruits and hydrating meals",
          "Avoid dairy and gluten during PMS week",
          "Join a guided detox group to stay motivated"
        ]
      },
      {
        callToAction: {
          title: "Listen to Your Body",
          description: "Your womb deserves care. Start listening to it — and let healing begin with our guided detox programs.",
          contact: "Contact us to learn more about womb reset options"
        }
      }
    ]
  },
  {
    title: "How Siddha Medicine Supports Women Through PCOD, Fibroids & Infertility",
    metaTitle: "PCOD, Fibroids & Fertility Solutions with Siddha Medicine | Dr. Uyirinayan",
    location: "Tamil Nadu, Malaysia, Dubai",
    excerpt: "Modern women face increasing rates of reproductive disorders. Discover how Siddha medicine addresses the root causes of PCOD, fibroids, and infertility through personalized, natural healing approaches.",
    sections: [
      {
        content: "Modern women face increasing rates of reproductive disorders — from PCOD and fibroids to unexplained infertility. While allopathy offers short-term relief, Siddha medicine looks at the root causes: lifestyle imbalance, emotional stress, toxin accumulation, and poor blood flow."
      },
      {
        heading: "The Siddha Approach",
        list: [
          "Diagnosis Based on Nadi (Pulse Reading): Every treatment starts with identifying energy blockages",
          "Customized Herbal Formulas: Based on body type, hormonal profile, and mental state",
          "Womb Strengthening Therapies: Internal oils, herbal fumigation, massages, and detox drinks",
          "Fertility Enhancers: Treatments to stimulate ovulation and improve uterine lining naturally"
        ]
      },
      {
        heading: "Real Success, Real Stories",
        content: "Women from Tamil Nadu to Dubai have experienced restored cycles, reduced fibroid sizes, and successful conceptions after struggling for years. Many patients continue with lifestyle support from the Uyiri team through WhatsApp consultations and herbal care kits."
      },
      {
        callToAction: {
          title: "Explore Ancient Healing",
          description: "If you're tired of taking pills with side effects and want to explore ancient, powerful healing methods, Siddha may hold the answers. Book a consultation and begin your transformation with wisdom that has healed generations.",
          contact: "Book a consultation to start your healing journey"
        }
      }
    ]
  }
];