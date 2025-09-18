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
    videoId: "M4b61_aifrs",
    icon: "heart"
  },
  {
    id: "blood-pressure",
    title: "Measuring Blood Pressure",
    description: "Proper techniques for accurate blood pressure measurement using manual and digital devices.",
    videoId: "U9w_dvhA__I",
    icon: "activity"
  },
  {
    id: "wound-care",
    title: "Basic Wound Care & Bandaging",
    description: "Essential wound cleaning, dressing, and bandaging techniques for injury management.",
    videoId: "sYyM-pmc_II",
    icon: "bandage"
  },
  {
    id: "blood-sugar",
    title: "Measuring Blood Sugar",
    description: "Step-by-step guide to glucose testing and interpreting blood sugar readings.",
    videoId: "rMMpeL8A-M4",
    icon: "droplet"
  },
  {
    id: "newborn-care",
    title: "Newborn Care Basics",
    description: "Essential care practices for newborns including feeding, bathing, and health monitoring.",
    videoId: "j4Y-L2EC_Qk",
    icon: "baby"
  },
  {
    id: "malnutrition",
    title: "Recognizing Malnutrition",
    description: "Identify signs and symptoms of malnutrition in children and adults for early intervention.",
    videoId: "e_i-4d9P93w",
    icon: "scale"
  },
  {
    id: "hand-washing",
    title: "Hand Washing Technique",
    description: "Proper hand hygiene practices to prevent infection and disease transmission.",
    videoId: "3PmVJQUCm4E",
    icon: "hand"
  },
  {
    id: "maternal-health",
    title: "Maternal Health Checkup",
    description: "Comprehensive health assessments for pregnant women and postpartum care guidelines.",
    videoId: "xIuQfr8o9bQ",
    icon: "user-check"
  }
];