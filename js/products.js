const products = [
  {
    id: "fmx-cadence",
    name: "FMX Cadence Standard",
    description:
      "Enforce full-mouth series timing across every practice with priced opportunities.",
    category: "care-modules",
    image: "./assets/images/catalog/fmx-cadence.svg",
    unit: "seat",
    price: 89,
    plans: {
      starter: { label: "Starter", addPrice: 0 },
      pro: { label: "Pro", addPrice: 30 },
      enterprise: { label: "Enterprise", addPrice: 70 },
    },
    billing: {
      monthly: { label: "Monthly", addPrice: 0 },
      yearly: { label: "Yearly", addPrice: -10 },
    },
  },
  {
    id: "fluoride-prophy",
    name: "Fluoride at Prophy",
    description:
      "Surface qualifying hygiene visits and draft chairside recommendations in one pass.",
    category: "care-modules",
    image: "./assets/images/catalog/fluoride-prophy.svg",
    unit: "seat",
    price: 59,
    plans: {
      starter: { label: "Starter", addPrice: 0 },
      pro: { label: "Pro", addPrice: 20 },
      enterprise: { label: "Enterprise", addPrice: 45 },
    },
    billing: {
      monthly: { label: "Monthly", addPrice: 0 },
      yearly: { label: "Yearly", addPrice: -8 },
    },
  },
  {
    id: "perio-reeval",
    name: "Perio Re-eval Tracker",
    description:
      "Keep re-evaluation windows visible so perio cases do not quietly fall off schedule.",
    category: "care-modules",
    image: "./assets/images/catalog/perio-reeval.svg",
    unit: "seat",
    price: 79,
    plans: {
      starter: { label: "Starter", addPrice: 0 },
      pro: { label: "Pro", addPrice: 25 },
      enterprise: { label: "Enterprise", addPrice: 55 },
    },
    billing: {
      monthly: { label: "Monthly", addPrice: 0 },
      yearly: { label: "Yearly", addPrice: -10 },
    },
  },
  {
    id: "unscheduled",
    name: "Unscheduled Treatment",
    description:
      "Find diagnosed but unbooked treatment and route it to the right front-office owner.",
    category: "care-modules",
    image: "./assets/images/catalog/unscheduled.svg",
    unit: "seat",
    price: 99,
    plans: {
      starter: { label: "Starter", addPrice: 0 },
      pro: { label: "Pro", addPrice: 35 },
      enterprise: { label: "Enterprise", addPrice: 75 },
    },
    billing: {
      monthly: { label: "Monthly", addPrice: 0 },
      yearly: { label: "Yearly", addPrice: -12 },
    },
  },
  {
    id: "same-day",
    name: "Same-day Capture",
    description:
      "Flag same-day opportunities on today’s schedule before the patient leaves the chair.",
    category: "care-modules",
    image: "./assets/images/catalog/same-day.svg",
    unit: "seat",
    price: 69,
    plans: {
      starter: { label: "Starter", addPrice: 0 },
      pro: { label: "Pro", addPrice: 22 },
      enterprise: { label: "Enterprise", addPrice: 50 },
    },
    billing: {
      monthly: { label: "Monthly", addPrice: 0 },
      yearly: { label: "Yearly", addPrice: -8 },
    },
  },
  {
    id: "recare",
    name: "Hygiene Recare Engine",
    description:
      "Rebuild overdue recare lists with dollar value and preferred outreach channel.",
    category: "care-modules",
    image: "./assets/images/catalog/recare.svg",
    unit: "seat",
    price: 75,
    plans: {
      starter: { label: "Starter", addPrice: 0 },
      pro: { label: "Pro", addPrice: 25 },
      enterprise: { label: "Enterprise", addPrice: 55 },
    },
    billing: {
      monthly: { label: "Monthly", addPrice: 0 },
      yearly: { label: "Yearly", addPrice: -9 },
    },
  },
  {
    id: "case-accept",
    name: "Case Acceptance Coach",
    description:
      "Give providers patient-ready talking points tied to your network’s own standards.",
    category: "care-modules",
    image: "./assets/images/catalog/case-accept.svg",
    unit: "seat",
    price: 85,
    plans: {
      starter: { label: "Starter", addPrice: 0 },
      pro: { label: "Pro", addPrice: 30 },
      enterprise: { label: "Enterprise", addPrice: 65 },
    },
    billing: {
      monthly: { label: "Monthly", addPrice: 0 },
      yearly: { label: "Yearly", addPrice: -10 },
    },
  },
  {
    id: "radio-gap",
    name: "Radiograph Gap Finder",
    description:
      "Spot missing films against your cadence before production and quality drift.",
    category: "care-modules",
    image: "./assets/images/catalog/radio-gap.svg",
    unit: "seat",
    price: 65,
    plans: {
      starter: { label: "Starter", addPrice: 0 },
      pro: { label: "Pro", addPrice: 20 },
      enterprise: { label: "Enterprise", addPrice: 45 },
    },
    billing: {
      monthly: { label: "Monthly", addPrice: 0 },
      yearly: { label: "Yearly", addPrice: -8 },
    },
  },
  {
    id: "leadership",
    name: "Leadership Copilot",
    description:
      "Network health, goal tracking, and practice outliers in one executive view.",
    category: "role-copilots",
    image: "./assets/images/catalog/leadership.svg",
    unit: "seat",
    price: 149,
    plans: {
      starter: { label: "Starter", addPrice: 0 },
      pro: { label: "Pro", addPrice: 40 },
      enterprise: { label: "Enterprise", addPrice: 90 },
    },
    billing: {
      monthly: { label: "Monthly", addPrice: 0 },
      yearly: { label: "Yearly", addPrice: -15 },
    },
  },
  {
    id: "hygiene-copilot",
    name: "Hygiene Leader Copilot",
    description:
      "Daily hygiene priorities with clinical why and earnings context for each provider.",
    category: "role-copilots",
    image: "./assets/images/catalog/hygiene-copilot.svg",
    unit: "seat",
    price: 119,
    plans: {
      starter: { label: "Starter", addPrice: 0 },
      pro: { label: "Pro", addPrice: 35 },
      enterprise: { label: "Enterprise", addPrice: 75 },
    },
    billing: {
      monthly: { label: "Monthly", addPrice: 0 },
      yearly: { label: "Yearly", addPrice: -12 },
    },
  },
  {
    id: "front-office",
    name: "Front Office Copilot",
    description:
      "Ready-to-run outreach and scheduling queues for the front desk every morning.",
    category: "role-copilots",
    image: "./assets/images/catalog/front-office.svg",
    unit: "seat",
    price: 99,
    plans: {
      starter: { label: "Starter", addPrice: 0 },
      pro: { label: "Pro", addPrice: 30 },
      enterprise: { label: "Enterprise", addPrice: 65 },
    },
    billing: {
      monthly: { label: "Monthly", addPrice: 0 },
      yearly: { label: "Yearly", addPrice: -10 },
    },
  },
  {
    id: "provider",
    name: "Provider Copilot",
    description:
      "Chairside guidance that shows qualifying patients and the reasoning behind each ask.",
    category: "role-copilots",
    image: "./assets/images/catalog/provider.svg",
    unit: "seat",
    price: 109,
    plans: {
      starter: { label: "Starter", addPrice: 0 },
      pro: { label: "Pro", addPrice: 32 },
      enterprise: { label: "Enterprise", addPrice: 70 },
    },
    billing: {
      monthly: { label: "Monthly", addPrice: 0 },
      yearly: { label: "Yearly", addPrice: -11 },
    },
  },
  {
    id: "dentrix",
    name: "Dentrix Connector",
    description:
      "Read schedules, patients, and production from Dentrix without rip-and-replace.",
    category: "integrations",
    image: "./assets/images/catalog/dentrix.svg",
    unit: "practice",
    price: 49,
    plans: {
      starter: { label: "Starter", addPrice: 0 },
      pro: { label: "Pro", addPrice: 15 },
      enterprise: { label: "Enterprise", addPrice: 35 },
    },
    billing: {
      monthly: { label: "Monthly", addPrice: 0 },
      yearly: { label: "Yearly", addPrice: -6 },
    },
  },
  {
    id: "open-dental",
    name: "Open Dental Connector",
    description: "Sync Open Dental data into CarePulse worklists within days of go-live.",
    category: "integrations",
    image: "./assets/images/catalog/open-dental.svg",
    unit: "practice",
    price: 49,
    plans: {
      starter: { label: "Starter", addPrice: 0 },
      pro: { label: "Pro", addPrice: 15 },
      enterprise: { label: "Enterprise", addPrice: 35 },
    },
    billing: {
      monthly: { label: "Monthly", addPrice: 0 },
      yearly: { label: "Yearly", addPrice: -6 },
    },
  },
  {
    id: "eaglesoft",
    name: "Eaglesoft Connector",
    description:
      "Bring Eaglesoft practices onto the same standards canvas as the rest of the group.",
    category: "integrations",
    image: "./assets/images/catalog/eaglesoft.svg",
    unit: "practice",
    price: 49,
    plans: {
      starter: { label: "Starter", addPrice: 0 },
      pro: { label: "Pro", addPrice: 15 },
      enterprise: { label: "Enterprise", addPrice: 35 },
    },
    billing: {
      monthly: { label: "Monthly", addPrice: 0 },
      yearly: { label: "Yearly", addPrice: -6 },
    },
  },
  {
    id: "curve",
    name: "Curve Connector",
    description:
      "Cloud PMS hookup for Curve locations joining an existing CarePulse network.",
    category: "integrations",
    image: "./assets/images/catalog/curve.svg",
    unit: "practice",
    price: 49,
    plans: {
      starter: { label: "Starter", addPrice: 0 },
      pro: { label: "Pro", addPrice: 15 },
      enterprise: { label: "Enterprise", addPrice: 35 },
    },
    billing: {
      monthly: { label: "Monthly", addPrice: 0 },
      yearly: { label: "Yearly", addPrice: -6 },
    },
  },
];
