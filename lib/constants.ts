export const SITE = {
  name: "Y S Hemashree",
  shortName: "Y·S·H",
  positioning: "AI, translated into decisions.",
  email: "ysbhema@gmail.com",
  location: "Chennai, India",
};

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Proof", href: "#proof" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  eyebrow: "Product · AI Systems · Applied Research",
  headlineLines: [
    "I make advanced AI",
    "legible to the people",
    "who have to decide with it.",
  ],
  sub: "Product management, AI agents, and applied ML — built for the bridge between business and technology, not just the model behind it.",
  role: "AI Automation Intern & Team Lead, StepOneXP",
};

export const GAP = {
  eyebrow: "The Gap",
  noise: [
    "ROC-AUC 0.8999",
    "isolation forest",
    "LSTM autoencoder",
    "SHAP(f, x)",
    "XGBoost γ=0.3",
    "precedent retrieval",
    "0.9 similarity threshold",
    "5-agent ensemble",
    "reasoning pipeline",
    "cosine(embedding)",
  ],
  resolved: "One risk score. One decision an executive can actually make.",
  body: "Every serious AI system eventually reaches a person who isn't technical and still has to act on it — a founder, a clinician, a judge, a buyer. Most AI stays fluent only in the first language. I build the second one.",
};

export type Project = {
  id: string;
  index: string;
  name: string;
  tag: string;
  stack: string;
  summary: string;
  outcome: string;
  image?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "contexta",
    index: "01",
    name: "Contexta",
    tag: "Threat Intelligence → Business Risk",
    stack: "FastAPI · NetworkX · XGBoost · Gemini API · Next.js",
    summary:
      "A 5-agent SOC platform (89.99% ROC-AUC) with a business risk scoring layer that lets C-suite buyers read the same threat event analysts do.",
    outcome: "1st Place — Cybershield'26 (MeitY)",
  },
  {
    id: "vigil",
    index: "02",
    name: "VIGIL",
    tag: "Clinical Triage → Trusted Decisions",
    stack: "XGBoost · SHAP · FastAPI · Next.js",
    summary:
      "AI triage at 87.4% accuracy on 27,500+ patients, co-designed with hospital staff with full SHAP explainability behind every flag.",
    outcome: "Adopted as clinical decision support",
  },
  {
    id: "brandscope",
    index: "03",
    name: "BrandScope",
    tag: "Market Research → Ready-to-Send Outreach",
    stack: "FastAPI · GPT-4o · Apify · three.js",
    summary:
      "12 pipelines in a zero-hallucination framework, turning hours of prospect research into ready-to-send outreach in under 2 minutes.",
    outcome: "2nd Place — StepOneXP AI Buildathon",
  },
  {
    id: "fdx",
    index: "04",
    name: "FDX",
    tag: "Deep Technical Depth, No Translation Needed",
    stack: "ONNX · CUDA · RetinaFace · AdaFace",
    summary:
      "Offline GPU-accelerated face recognition — a custom pose-bridging engine expands one photo into a full identity profile at a 0.9 similarity threshold.",
    outcome: "Proof the simplicity elsewhere is a choice",
  },
];

export type Milestone = {
  eyebrow: string;
  title: string;
  description: string;
};

export const ALTITUDE: Milestone[] = [
  {
    eyebrow: "IIT Madras · AI Smart Digital National Innovation Challenge",
    title: "Presented AI governance policy before the Chief Justice of the Madras High Court",
    description:
      "1st Place. Six AI governance policies, translated into executive-ready recommendations for the nation.",
  },
  {
    eyebrow: "Ministry of Electronics & IT (MeitY) · Cybershield'26",
    title: "Won a national hackathon judged on product narrative, not just accuracy",
    description:
      "1st Place. Contexta, recognised for making technical threat data legible to non-technical buyers.",
  },
  {
    eyebrow: "StepOneXP · Product Management & AI Automation",
    title: "Leading a decision-intelligence system modelling a founder's judgment",
    description:
      "Team Lead, Project 'Brain' — a retrieval + reasoning pipeline built directly with the founder and clients.",
  },
  {
    eyebrow: "IEEE Conference",
    title: "Published research on hybrid ML fraud detection",
    description: "TRAP — a hybrid ML fraud detection model for bank servers.",
  },
];

export const ABOUT_STATEMENT = [
  "I don't build AI for other engineers.",
  "I build the layer that lets humans trust it.",
];

export const ABOUT_PARAGRAPH =
  "Computer Science & Business Systems. Comfortable with an ML team discussing ROC-AUC, and just as comfortable translating the same system into a decision a founder, clinician, or judge can act on. Led a 58-member org, spoke on AI governance before the Chief Justice of the Madras High Court, published IEEE research. Same throughline every time — translation, not just construction.";

export const FOCUS_AREAS = [
  {
    index: "01",
    title: "Product Management",
    description: "Scoping what an AI system should decide, and for whom — from founder judgment to shipped product.",
  },
  {
    index: "02",
    title: "AI Agents & Automation",
    description: "Retrieval + reasoning pipelines, agentic architectures, and systems that act on precedent, not just predict.",
  },
  {
    index: "03",
    title: "Applied Machine Learning",
    description: "Real model work — XGBoost, SHAP, autoencoders, ensembles — built to be interrogated, not just deployed.",
  },
  {
    index: "04",
    title: "Business Translation",
    description: "Business risk scoring, executive narrative, governance policy — the layer that makes AI decision-ready.",
  },
];

export const CONTACT = {
  eyebrow: "Ready to collaborate",
  title: "If your AI system needs a bridge to the people deciding with it, let's talk.",
  cta: "Say hello",
};
