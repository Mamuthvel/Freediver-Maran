export type Faq = { q: string; a: string };

export type Course = {
  slug: string;
  name: string;
  shortName: string;
  level: 1 | 2 | 3 | 4;
  maxDepth: string; // dive-gauge display, e.g. "−10 M"
  duration: string;
  durationIso: string; // ISO 8601 for structured data
  priceInr: number;
  tagline: string;
  overview: string;
  whoFor: string[];
  prerequisites: string[];
  structure: { phase: string; detail: string }[];
  skills: string[];
  safety: string;
  equipment: string[];
  certification: string;
  faqs: Faq[];
};

export const courses: Course[] = [
  {
    slug: "basic-freediver",
    name: "PADI Basic Freediver",
    shortName: "Basic Freediver",
    level: 1,
    maxDepth: "−5 M",
    duration: "1 day",
    durationIso: "P1D",
    priceInr: 8500,
    tagline: "Your first introduction to the underwater world.",
    overview:
      "The PADI Basic Freediver program is designed for complete beginners who want to experience the feeling of breath-hold diving in a safe and relaxed environment. This experience introduces you to the foundations of freediving, including breathing awareness, relaxation techniques, and basic underwater movement skills — with the chance to experience diving to depths of up to 5 metres under instructor supervision. It is the first half of the full PADI Freediver certification — everything you learn counts toward the next level.",
    whoFor: [
      "First-time freedivers",
      "Curious beginners",
      "Travellers and adventurers",
      "Anyone wanting to experience the underwater world on a single breath",
    ],
    prerequisites: [
      "Minimum age 15 years",
      "Able to swim comfortably",
      "Completed medical questionnaire",
    ],
    structure: [
      { phase: "Knowledge development", detail: "PADI Freediver eLearning: physiology of breath-hold, safety, and relaxation techniques." },
      { phase: "Breathwork session", detail: "Guided dry breathing, relaxation, and your first supervised static breath-hold." },
      { phase: "Confined water", detail: "Static apnea and dynamic apnea in the pool with an instructor at arm's reach." },
    ],
    skills: [
      "Breathing and relaxation techniques",
      "Water confidence development",
      "Static breath-hold practice",
      "Introduction to underwater movement",
      "Basic safety and buddy awareness",
      "Introduction to equalisation",
    ],
    safety:
      "All sessions run at a maximum ratio of one instructor to four students, with one-on-one supervision during every breath-hold. You never hold your breath in water without a trained buddy watching you — that rule starts on day one and never goes away.",
    equipment: ["Low-volume freediving mask", "Snorkel", "Wetsuit (seasonal)", "All equipment included in course fee"],
    certification:
      "You earn the PADI Basic Freediver rating, recognised worldwide. It credits directly toward the full PADI Freediver course — complete the open-water sessions later and you upgrade without repeating anything.",
    faqs: [
      { q: "Do I need to know how to dive already?", a: "No. Basic Freediver assumes zero experience. If you can swim, you can start." },
      { q: "How long can I expect to hold my breath after one day?", a: "Most students reach 90 seconds to 2 minutes of static breath-hold by the end of the day — the techniques matter far more than lung size." },
      { q: "Is one day really enough?", a: "For pool skills, yes. Basic Freediver is deliberately scoped to confined water; depth comes in the full Freediver course." },
    ],
  },
  {
    slug: "padi-freediver",
    name: "PADI Freediver",
    shortName: "Freediver",
    level: 2,
    maxDepth: "−16 M",
    duration: "2–3 days",
    durationIso: "P3D",
    priceInr: 18500,
    tagline: "Become a certified freediver.",
    overview:
      "The PADI Freediver course is an internationally recognised certification program designed to teach you the skills, knowledge, and safety procedures required to freedive safely and confidently. Over 2–3 days, students develop breath-hold ability, underwater confidence, equalisation techniques, and open-water diving skills while learning how to dive safely with a buddy. This is the course most Sea Critter students start with, and the one that changes how you feel in the ocean permanently.",
    whoFor: [
      "Adventure seekers",
      "Ocean lovers",
      "Scuba divers looking for a new challenge",
      "Anyone wanting to explore the underwater world naturally and silently",
    ],
    prerequisites: [
      "Minimum age 15 years",
      "Comfortable swimming 200 metres non-stop",
      "Completed medical questionnaire",
    ],
    structure: [
      { phase: "Knowledge development", detail: "Freediving theory and physiology, covering equalization, safety, and the mammalian dive response." },
      { phase: "Confined water", detail: "Static apnea training and dynamic apnea sessions in the pool, plus safety and rescue procedures." },
      { phase: "Open water", detail: "Open water depth sessions to course standards, plus buddy system training and recovery breathing techniques." },
    ],
    skills: [
      "Freediving theory and physiology",
      "Breathing and relaxation techniques",
      "Static apnea training",
      "Dynamic apnea sessions in the pool",
      "Equalisation coaching",
      "Buddy system training and recovery breathing techniques",
    ],
    safety:
      "Every open-water session runs on a dive line with an instructor in the water and a dedicated safety lanyard system. Depth progression is individual — you go deeper only when your equalization and comfort say so, never because the schedule does.",
    equipment: ["Long-blade freediving fins", "Low-volume mask and snorkel", "Open-cell wetsuit and weight belt", "Buoy and dive line", "All equipment included"],
    certification:
      "Upon successful completion, students receive an internationally recognised PADI Freediver certification valid worldwide. It is the prerequisite for the Advanced Freediver course.",
    faqs: [
      { q: "How deep will I actually go?", a: "The course maximum is 16 metres, but most first-time students certify comfortably between 10 and 14 metres. Depth is a byproduct of relaxation, not a target." },
      { q: "What if I can't equalize?", a: "Equalization is the most common sticking point and the thing we coach hardest. Sessions are structured so you can repeat shallow dives until Frenzel clicks — nobody is pushed past their ears." },
      { q: "Freediving vs scuba — which should I learn first?", a: "Either works. Freediving first tends to make you a calmer scuba diver; scuba first gives you underwater familiarity. They are independent certifications." },
      { q: "How much does the PADI Freediver course cost in India?", a: "At Sea Critter the full course is ₹18,500 including eLearning, equipment, and certification fees." },
    ],
  },
  {
    slug: "advanced-freediver",
    name: "PADI Advanced Freediver",
    shortName: "Advanced Freediver",
    level: 3,
    maxDepth: "−24 M",
    duration: "3–4 days",
    durationIso: "P4D",
    priceInr: 24500,
    tagline: "Deeper, longer, calmer. Free-fall and Frenzel mastery to 24 metres.",
    overview:
      "The PADI Advanced Freediver course is where freediving starts to feel like flying. You refine Frenzel equalization, learn free-fall — letting negative buoyancy carry you down without a single kick — and train static breath-holds beyond two and a half minutes. Open-water sessions take you to a maximum of 24 metres.",
    whoFor: [
      "Certified PADI Freedivers (or equivalent) ready for depth",
      "Divers whose equalization stalls past 15 metres",
      "Spearfishers and photographers who need longer bottom time",
      "Anyone chasing the stillness of free-fall",
    ],
    prerequisites: [
      "Minimum age 15 years",
      "PADI Freediver certification or qualifying equivalent",
      "Completed medical questionnaire",
    ],
    structure: [
      { phase: "Knowledge development", detail: "Advanced physiology: oxygen and CO₂ tables, lung mechanics at depth, and dive-response training." },
      { phase: "Confined water", detail: "Static apnea beyond 2:30, dynamic apnea to 50 m, and no-fins technique introduction." },
      { phase: "Open water", detail: "Free-fall technique, mouthfill introduction, and constant weight dives to a maximum of 24 metres across multiple sessions." },
    ],
    skills: [
      "Static apnea of 2:30+ and dynamic apnea of 50 m",
      "Refined Frenzel and introduction to mouthfill",
      "Free-fall body position and alarm-free descents",
      "Rescue of an unresponsive freediver from 15 m",
      "Training-table design for continued progress",
    ],
    safety:
      "Advanced depths demand advanced protocols: every deep dive uses a lanyard on a counter-weighted line, instructors meet you in the water column on ascent, and surface protocols are drilled until they are reflex. Lung-squeeze prevention and conservative progression are core curriculum, not afterthoughts.",
    equipment: ["Carbon or fiberglass long-blade fins", "Freediving computer", "Lanyard and counter-weight line system", "All equipment included"],
    certification:
      "You earn the PADI Advanced Freediver certification — the prerequisite for Master Freediver and for assisting at freediving events.",
    faqs: [
      { q: "Is 24 metres dangerous?", a: "With trained technique, honest progression, and strict buddy protocols, no. Every incident-prevention layer taught in this course exists precisely so 24 m stays routine." },
      { q: "What is free-fall?", a: "Past roughly 12–15 metres you become negatively buoyant. Free-fall is the skill of relaxing into that sink — zero movement, dropping like a leaf. Most students call it the best part of the sport." },
      { q: "How long between Freediver and Advanced?", a: "There is no mandated gap, but 15–20 logged dives between courses makes the depth jump feel easy rather than rushed." },
    ],
  },
  {
    slug: "master-freediver",
    name: "PADI Master Freediver",
    shortName: "Master Freediver",
    level: 4,
    maxDepth: "−40 M",
    duration: "4–5 days",
    durationIso: "P5D",
    priceInr: 34500,
    tagline: "The summit of recreational freediving. Mouthfill, FRC, and 40 metres.",
    overview:
      "The PADI Master Freediver course is the highest non-professional rating in PADI freediving. You train mouthfill equalization for depths where Frenzel alone runs out, learn functional-residual-capacity (FRC) training dives, and extend static apnea past three and a half minutes. Open-water sessions progress to a maximum of 40 metres — genuine deep freediving.",
    whoFor: [
      "PADI Advanced Freedivers ready for the deep",
      "Divers preparing for competitive freediving or instructor pathways",
      "Athletes who want structured, physiology-driven training plans",
    ],
    prerequisites: [
      "Minimum age 18 years",
      "PADI Advanced Freediver certification or qualifying equivalent",
      "Completed medical questionnaire",
      "EFR / equivalent CPR & first aid within 24 months (can be completed with us)",
    ],
    structure: [
      { phase: "Knowledge development", detail: "Deep physiology: thoracic flexibility, blood shift, mouthfill mechanics, training periodization, and shallow-water blackout science." },
      { phase: "Confined water", detail: "Static apnea beyond 3:30, dynamic apnea to 70 m, FRC technique work." },
      { phase: "Open water", detail: "Progressive deep sessions: mouthfill charging drills, variable weight familiarisation, and constant weight dives to a maximum of 40 metres." },
    ],
    skills: [
      "Static apnea of 3:30+ and dynamic apnea of 70 m",
      "Working mouthfill to depth",
      "FRC dives and thoracic flexibility training",
      "Deep rescue scenarios and surface management of blackout",
      "Designing your own annual training plan",
    ],
    safety:
      "At 40 metres, safety is a system, not a person: counter-ballast line rigged for instant recovery, staggered safety divers meeting you at depth, oxygen on the boat, and hard conservative limits on daily deep attempts. Sea Critter has run deep programs for eight years with a zero-incident record — because the system never gets skipped.",
    equipment: ["Competition-spec fins and lanyard", "Freediving computer with alarms", "Counter-ballast deep line system", "Oxygen kit on platform", "All equipment included"],
    certification:
      "You earn the PADI Master Freediver certification — the final recreational rating and the gateway to the PADI Freediver Instructor pathway.",
    faqs: [
      { q: "What does 40 metres feel like?", a: "Dark blue, silent, and profoundly still. Your heart rate is often below 40 bpm, your lungs compressed to a fraction of surface volume, and — with proper training — it feels calm rather than extreme." },
      { q: "Do I need to be an athlete?", a: "You need consistent training and honest self-assessment more than raw athleticism. Flexibility, relaxation, and technique carry more weight than fitness at this level." },
      { q: "Can I become an instructor after this?", a: "Yes — Master Freediver plus prerequisites qualifies you to enter the PADI Freediver Instructor course. Talk to us about the pathway." },
    ],
  },
];

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);
