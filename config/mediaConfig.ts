/**
 * Central media configuration for Aurevia Skin & Hair Clinic.
 *
 * IMPORTANT — DEMONSTRATION DATA
 * All images in this file are demonstration assets generated for client-presentation
 * purposes only. Every record is marked:
 *   isDemo: true
 *   contentStatus: "demo"
 *   requiresClientApproval: true
 *
 * No image in this file depicts a real patient, real doctor, or real clinical outcome.
 * Replace every asset with verified, consent-approved imagery before production launch.
 */

export interface MediaRecord {
  id: string;
  src: string;
  mobileSrc?: string;
  alt: string;
  width: number;
  height: number;
  aspectRatio: string;
  focalPoint?: { x: number; y: number };
  mobileFocalPoint?: { x: number; y: number };
  priority?: boolean;
  isDemo: boolean;
  contentStatus: "demo" | "approved" | "pending";
  requiresClientApproval: boolean;
  replacementNotes?: string;
}

const demo: Pick<MediaRecord, "isDemo" | "contentStatus" | "requiresClientApproval"> = {
  isDemo: true,
  contentStatus: "demo",
  requiresClientApproval: true,
};

// ─── HERO ────────────────────────────────────────────────────────────────────

export const heroMedia: MediaRecord = {
  id: "hero-main",
  src: "/images/hero/aurevia-clinic-hero.png",
  alt: "A calm, private clinical consultation room at Aurevia with soft ivory tones and natural light",
  width: 1600,
  height: 1067,
  aspectRatio: "3/2",
  focalPoint: { x: 0.5, y: 0.4 },
  priority: true,
  replacementNotes: "Replace with verified clinic photography approved by client.",
  ...demo,
};

// ─── DOCTOR PORTRAITS ────────────────────────────────────────────────────────

export const doctorMedia: Record<string, MediaRecord> = {
  "dr-ananya-rao": {
    id: "doctor-ananya-demo",
    src: "/images/doctors/doctor-ananya-demo.png",
    alt: "Demonstration portrait for a fictional clinic specialist profile. Not a real doctor.",
    width: 800,
    height: 1067,
    aspectRatio: "3/4",
    focalPoint: { x: 0.5, y: 0.25 },
    replacementNotes:
      "Replace with a verified, consent-approved portrait of the actual doctor before launch.",
    ...demo,
  },
  "dr-meera-iyer": {
    id: "doctor-meera-demo",
    src: "/images/doctors/doctor-meera-demo.png",
    alt: "Demonstration portrait for a fictional clinic specialist profile. Not a real doctor.",
    width: 800,
    height: 1067,
    aspectRatio: "3/4",
    focalPoint: { x: 0.5, y: 0.25 },
    replacementNotes:
      "Replace with a verified, consent-approved portrait of the actual doctor before launch.",
    ...demo,
  },
};

// ─── TREATMENT CATEGORY CARDS ────────────────────────────────────────────────

export const treatmentCategoryMedia: Record<string, MediaRecord> = {
  skin: {
    id: "treatment-cat-skin",
    src: "/images/aurevia_skin_dermatology_1784122198580.jpg",
    alt: "Aurevia skin and dermatology assessment environment",
    width: 1200,
    height: 900,
    aspectRatio: "4/3",
    replacementNotes: "Replace with client-approved skin treatment category image.",
    ...demo,
  },
  hair: {
    id: "treatment-cat-hair",
    src: "/images/aurevia_hair_trichology_1784122213035.jpg",
    alt: "Aurevia hair and trichology clinical setting",
    width: 1200,
    height: 900,
    aspectRatio: "4/3",
    replacementNotes: "Replace with client-approved hair treatment category image.",
    ...demo,
  },
  laser: {
    id: "treatment-cat-laser",
    src: "/images/aurevia_laser_platform_1784122229157.jpg",
    alt: "Precision clinical laser platform at Aurevia",
    width: 1200,
    height: 900,
    aspectRatio: "4/3",
    replacementNotes: "Replace with client-approved laser treatment category image.",
    ...demo,
  },
  aesthetics: {
    id: "treatment-cat-aesthetics",
    src: "/images/aurevia_aesthetic_art_1784122245484.jpg",
    alt: "Refined aesthetic care consultation at Aurevia",
    width: 1200,
    height: 900,
    aspectRatio: "4/3",
    replacementNotes: "Replace with client-approved aesthetics treatment category image.",
    ...demo,
  },
};

// ─── TREATMENT DETAIL HEROES ─────────────────────────────────────────────────

export const treatmentDetailMedia: Record<string, MediaRecord> = {
  "acne-scar-treatment": {
    id: "treatment-detail-acne-scar",
    src: "/images/treatments/acne-scar-consultation.png",
    alt: "Dermatology consultation setting with clinical assessment instruments",
    width: 1200,
    height: 1500,
    aspectRatio: "4/5",
    focalPoint: { x: 0.5, y: 0.4 },
    replacementNotes: "Replace with a client-approved treatment environment image.",
    ...demo,
  },
  "pigmentation-consultation": {
    id: "treatment-detail-pigmentation",
    src: "/images/treatments/pigmentation-care.png",
    alt: "Clinical skin care preparations in a premium consultation environment",
    width: 1200,
    height: 900,
    aspectRatio: "4/3",
    replacementNotes: "Replace with a client-approved pigmentation treatment image.",
    ...demo,
  },
  "hair-loss-consultation": {
    id: "treatment-detail-hair-loss",
    src: "/images/treatments/hair-loss-consultation.png",
    alt: "Trichology clinical consultation environment with diagnostic instruments",
    width: 1200,
    height: 900,
    aspectRatio: "4/3",
    replacementNotes: "Replace with a client-approved hair consultation image.",
    ...demo,
  },
  "laser-hair-reduction": {
    id: "treatment-detail-laser-hair",
    src: "/images/treatments/laser-treatment-room.png",
    alt: "Premium clinical laser treatment room at Aurevia",
    width: 1200,
    height: 900,
    aspectRatio: "4/3",
    replacementNotes: "Replace with a client-approved laser treatment room image.",
    ...demo,
  },
};

// ─── CLINIC GALLERY ──────────────────────────────────────────────────────────

export const galleryMedia: MediaRecord[] = [
  {
    id: "gallery-reception",
    src: "/images/clinic/clinic-reception.png",
    alt: "Aurevia clinic reception and arrival area with warm ivory tones and natural materials",
    width: 1200,
    height: 900,
    aspectRatio: "4/3",
    replacementNotes: "Replace with verified clinic photography.",
    ...demo,
  },
  {
    id: "gallery-waiting-lounge",
    src: "/images/clinic/clinic-waiting-lounge.png",
    alt: "Tranquil waiting lounge at Aurevia with natural linen seating and soft daylight",
    width: 1200,
    height: 900,
    aspectRatio: "4/3",
    replacementNotes: "Replace with verified clinic photography.",
    ...demo,
  },
  {
    id: "gallery-consultation-room",
    src: "/images/clinic/clinic-consultation-room.png",
    alt: "Private consultation suite at Aurevia for unhurried dermatological assessment",
    width: 1200,
    height: 1600,
    aspectRatio: "3/4",
    replacementNotes: "Replace with verified clinic photography.",
    ...demo,
  },
  {
    id: "gallery-treatment-suite",
    src: "/images/clinic/clinic-treatment-suite.png",
    alt: "Premium clinical treatment suite at Aurevia",
    width: 1200,
    height: 1600,
    aspectRatio: "3/4",
    replacementNotes: "Replace with verified clinic photography.",
    ...demo,
  },
  {
    id: "gallery-technology",
    src: "/images/technology/skin-assessment-technology.png",
    alt: "Clinical skin assessment technology at Aurevia",
    width: 1200,
    height: 900,
    aspectRatio: "4/3",
    replacementNotes: "Replace with verified clinic technology photography.",
    ...demo,
  },
  {
    id: "gallery-corridor",
    src: "/images/clinic/clinic-corridor.png",
    alt: "Aurevia clinic corridor with warm oak panelling and soft ambient lighting",
    width: 1200,
    height: 900,
    aspectRatio: "4/3",
    replacementNotes: "Replace with verified clinic photography.",
    ...demo,
  },
];

// ─── INSIGHTS THUMBNAILS ─────────────────────────────────────────────────────

export const insightMedia: Record<string, MediaRecord> = {
  "understanding-acne-scars": {
    id: "insight-acne-scars",
    src: "/images/insights/article-acne-scars.png",
    alt: "Clinical dermatology still-life for a skin science article on acne scars",
    width: 1200,
    height: 750,
    aspectRatio: "16/10",
    replacementNotes: "Replace with a client-approved article thumbnail.",
    ...demo,
  },
  "building-considered-hair-care-plan": {
    id: "insight-hair-care",
    src: "/images/insights/article-hair-care.png",
    alt: "Trichology clinical still-life for a hair-care science article",
    width: 1200,
    height: 750,
    aspectRatio: "16/10",
    replacementNotes: "Replace with a client-approved article thumbnail.",
    ...demo,
  },
  "what-to-expect-during-skin-consultation": {
    id: "insight-consultation-guide",
    src: "/images/insights/article-consultation-guide.png",
    alt: "Calm consultation desk setting for a patient guide article",
    width: 1200,
    height: 750,
    aspectRatio: "16/10",
    replacementNotes: "Replace with a client-approved article thumbnail.",
    ...demo,
  },
};

// ─── ABOUT PAGE ──────────────────────────────────────────────────────────────

export const aboutMedia: MediaRecord = {
  id: "about-clinical-environment",
  src: "/images/about/about-clinical-environment.png",
  alt: "Private clinical consultation room at Aurevia with warm natural light",
  width: 1200,
  height: 900,
  aspectRatio: "4/3",
  replacementNotes: "Replace with verified clinic photography approved by client.",
  ...demo,
};

// ─── TECHNOLOGY ──────────────────────────────────────────────────────────────

export const technologyMedia: Record<string, MediaRecord> = {
  "skin-imaging": {
    id: "tech-skin-imaging",
    src: "/images/technology/skin-assessment-technology.png",
    alt: "Clinical skin assessment and imaging technology",
    width: 1200,
    height: 900,
    aspectRatio: "4/3",
    replacementNotes: "Replace with verified technology photography.",
    ...demo,
  },
  "laser-platforms": {
    id: "tech-laser-platforms",
    src: "/images/treatments/laser-treatment-room.png",
    alt: "Precision clinical laser treatment environment",
    width: 1200,
    height: 900,
    aspectRatio: "4/3",
    replacementNotes: "Replace with verified laser technology photography.",
    ...demo,
  },
  "sterile-protocols": {
    id: "tech-sterile-protocols",
    src: "/images/clinic/clinic-treatment-suite.png",
    alt: "Clean controlled procedural environment at Aurevia",
    width: 1200,
    height: 900,
    aspectRatio: "4/3",
    replacementNotes: "Replace with verified clinic photography.",
    ...demo,
  },
  "private-suites": {
    id: "tech-private-suites",
    src: "/images/clinic/clinic-consultation-room.png",
    alt: "Private consultation suite at Aurevia",
    width: 1200,
    height: 900,
    aspectRatio: "4/3",
    replacementNotes: "Replace with verified clinic photography.",
    ...demo,
  },
};
