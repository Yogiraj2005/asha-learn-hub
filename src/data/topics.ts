export interface Topic {
  id: string;
  title: string;
  description: string;
  videoId: string;
  icon: string;
}

export const topics: Topic[] = [
  {
    id: "cpr",
    title: "CPR Technique",
    description: "Learn life-saving cardiopulmonary resuscitation techniques for emergency situations.",
    videoId: "YEsQ36KeETo",
    icon: "heart"
  },
  {
    id: "blood-pressure",
    title: "Measuring Blood Pressure",
    description: "Proper techniques for accurate blood pressure measurement using manual and digital devices.",
    videoId: "IfeSKm1HiYo",
    icon: "activity"
  },
  {
    id: "wound-care",
    title: "Basic Wound Care & Bandaging",
    description: "Essential wound cleaning, dressing, and bandaging techniques for injury management.",
    videoId: "FlYNgZCXawI",
    icon: "bandage"
  },
  {
    id: "blood-sugar",
    title: "Measuring Blood Sugar",
    description: "Step-by-step guide to glucose testing and interpreting blood sugar readings.",
    videoId: "_z5fdtbUPb4",
    icon: "droplet"
  },
  {
    id: "newborn-care",
    title: "Newborn Care Basics",
    description: "Essential care practices for newborns including feeding, bathing, and health monitoring.",
    videoId: "iMcbnLt4Op4",
    icon: "baby"
  },
  {
    id: "malnutrition",
    title: "Recognizing Malnutrition",
    description: "Identify signs and symptoms of malnutrition in children and adults for early intervention.",
    videoId: "dsijcu5ERXc",
    icon: "scale"
  },
  {
    id: "hand-washing",
    title: "Hand Washing Technique",
    description: "Proper hand hygiene practices to prevent infection and disease transmission.",
    videoId: "rNWpfDMagmg",
    icon: "hand"
  },
  {
    id: "mental-health",
    title: "Mental Health Support",
    description: "Essential mental health awareness and basic support techniques for community wellbeing.",
    videoId: "i8kpcSreJ4g",
    icon: "user-check"
  },
  {
    id: "maternal-health",
    title: "Maternal Health Checkup",
    description: "Comprehensive health assessments for pregnant women and postpartum care guidelines.",
    videoId: "xIuQfr8o9bQ",
    icon: "user-check"
  }
];