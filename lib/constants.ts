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
  problem: string;
  translation: string;
  outcome: string;
};

export const PROJECTS: Project[] = [
  {
    id: "contexta",
    index: "01",
    name: "Contexta",
    tag: "Threat Intelligence → Business Risk",
    stack: "FastAPI · SQLAlchemy · NetworkX · Isolation Forest · LSTM Autoencoder · XGBoost · Gemini API · Next.js",
    problem:
      "A 5-agent SOC platform hitting 89.99% ROC-AUC — technically strong, but illegible to the C-suite buyers who actually approve security spend.",
    translation:
      "Designed a Business-Weighted Value Scoring layer (BWVS) that converts raw threat telemetry into a single business risk score, with a dual-persona interface so analysts and executives read the same event differently.",
    outcome: "1st Place — Cybershield'26 (MeitY), judged on product narrative and legibility, not just detection accuracy.",
  },
  {
    id: "vigil",
    index: "02",
    name: "VIGIL",
    tag: "Clinical Triage → Trusted Decisions",
    stack: "XGBoost · Scikit-learn · SHAP · FastAPI · Next.js · PostgreSQL",
    problem:
      "An AI triage model reaching 87.4% risk-classification accuracy on 27,500+ patient samples — but a hospital won't act on a number it can't interrogate.",
    translation:
      "Co-designed the system with hospital stakeholders and added SHAP explainability throughout, so non-technical medical staff can see *why* the model flagged a patient, not just that it did.",
    outcome: "Adopted as a decision-support layer clinicians could actually question and trust.",
  },
  {
    id: "brandscope",
    index: "03",
    name: "BrandScope",
    tag: "Market Research → Ready-to-Send Outreach",
    stack: "FastAPI · GPT-4o · Hunter.io · Apify · Vanilla.js · three.js · Railway",
    problem:
      "Verified brand intelligence and personalised outreach normally takes a researcher hours per prospect — too slow for a scaling team to act on.",
    translation:
      "Engineered 12 parallel and sequential intelligence pipelines inside a zero-hallucination framework, so the output is something a founder can send, not just something a model generated.",
    outcome: "2nd Place — StepOneXP National Industry-Level AI Buildathon, built directly against founder and client expectations.",
  },
  {
    id: "fdx",
    index: "04",
    name: "FDX",
    tag: "Deep Technical Depth, No Translation Needed",
    stack: "ONNX Runtime · CUDA/cuDNN · MTCNN · RetinaFace · AdaFace IR101 · Computer Vision",
    problem:
      "Prove the engineering underneath the translation is real — a GPU-accelerated face recognition system with no cloud, database, or Docker dependency.",
    translation:
      "A custom pose-bridging engine expands a single reference photo into a full identity profile across angle, lighting, and image quality, matched at a 0.9 similarity threshold.",
    outcome: "The one project built for engineers, by design — proof the simplicity elsewhere is a choice, not a ceiling.",
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
      "1st Place. Formulated six AI governance policies and translated complex technical research into executive-ready recommendations on responsible AI, presented live to the Chief Justice on the governance initiatives a nation should take.",
  },
  {
    eyebrow: "Ministry of Electronics & IT (MeitY) · Cybershield'26",
    title: "Won a national hackathon judged on product narrative, not just accuracy",
    description:
      "1st Place. Built and positioned Contexta using dual-persona design and a business risk scoring engine — recognised specifically for making technical threat data legible to non-technical buyers.",
  },
  {
    eyebrow: "StepOneXP · Product Management & AI Automation",
    title: "Leading a decision-intelligence system modelling a founder's judgment",
    description:
      "Team Lead for Project 'Brain' — architecting a retrieval + reasoning pipeline that surfaces precedent from past company decisions, working directly with the founder and prospective clients to validate outputs.",
  },
  {
    eyebrow: "IEEE Conference",
    title: "Published research on hybrid ML fraud detection",
    description:
      "Authored TRAP (Transaction Risk Assessment Prevention), a hybrid ML-based fraud detection model for bank servers, for a global academic audience.",
  },
];

export const ABOUT_STATEMENT = [
  "I don't build AI for other engineers.",
  "I build the layer that lets humans trust it.",
];

export const ABOUT_PARAGRAPH =
  "I'm a Computer Science & Business Systems student who operates in both rooms at once — comfortable discussing isolation forests and ROC-AUC with an ML team, and just as comfortable translating that same system into a decision a founder, clinician, or judge can act on. That's not a compromise between technical and business — it's the actual skill: making powerful, opaque systems legible enough to be trusted. I've led a 58-member organisation, spoken publicly on AI governance before the Chief Justice of the Madras High Court, published IEEE research, and worked directly with founders scoping what their AI should decide. The throughline is always the same — translation, not just construction.";

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
