'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Container,
  Section,
  Stack,
  Grid,
  Heading,
  Eyebrow,
  BodyText,
  Button,
  Card,
  CardContent,
  ResponsiveMedia,
  SectionHeader,
} from "@/components/primitives";
import {
  Check,
  ShieldCheck,
  ArrowRight,
  Plus,
  Minus,
  Activity,
  User,
  Lock,
  BookOpen,
} from "lucide-react";
import {
  treatmentsData,
  concernsData,
  doctorsData,
  technologiesData,
  insightsData,
  faqsData,
  galleryData,
} from "@/config/demoData";
import { clinicConfig } from "@/config/clinic";
import { motion, AnimatePresence } from "motion/react";

export function HomepageSections() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const filteredTreatments =
    activeCategory === "all"
      ? treatmentsData.filter((t) => t.isFeatured)
      : treatmentsData.filter((t) => t.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* ── CREDENTIALS STRIP ── */}
      <Section spacing="compact" className="border-y border-brand-stone/40 bg-brand-stone/10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-brand-stone/40 py-2">
            {[
              {
                icon: ShieldCheck,
                title: "Dermatologist led",
                body: "Every care path is designed and supervised by qualified specialist doctors.",
              },
              {
                icon: Activity,
                title: "Evidence based",
                body: "Clinically proven technologies and medical-grade protocols.",
              },
              {
                icon: User,
                title: "Completely private",
                body: "All consultations and procedures take place in private, secure clinical suites.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4 items-start px-6 py-6 md:py-4">
                <div className="p-2 bg-brand-sage/10 text-brand-sage-dark shrink-0">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-serif text-base font-medium text-brand-green-deep mb-0.5">{title}</p>
                  <p className="text-xs text-brand-text-muted leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── TREATMENT CATEGORY DISCOVERY ── */}
      <Section spacing="default" surface="ivory">
        <Container>
          <SectionHeader
            eyebrow="Clinical Portfolio"
            title="Our treatment categories"
            description="Specialist care across four core clinical disciplines, focused on natural outcomes and skin barrier health."
            layout="split"
            className="mb-12 md:mb-14"
          />

          <Grid cols={4} gap="lg">
            {[
              {
                title: "Skin",
                href: "/treatments/skin",
                desc: "Medical dermatology and advanced resurfacing for chronic conditions and textural integrity.",
                image: "/images/aurevia_skin_dermatology_1784122198580.jpg",
                fallback: "Aurevia skin assessment",
                badge: "Dermatology",
              },
              {
                title: "Hair",
                href: "/treatments/hair",
                desc: "Clinical trichology, scalp support, and scientifically validated thinning solutions.",
                image: "/images/aurevia_hair_trichology_1784122213035.jpg",
                fallback: "Aurevia hair trichology",
                badge: "Trichology",
              },
              {
                title: "Laser",
                href: "/treatments/laser",
                desc: "Precision energy-based platforms configured for safe, high-efficacy dermal therapy.",
                image: "/images/aurevia_laser_platform_1784122229157.jpg",
                fallback: "Precision laser platform",
                badge: "Precision Energy",
              },
              {
                title: "Aesthetics",
                href: "/treatments/aesthetics",
                desc: "Subtle structural restoration and facial balancing designed around individual anatomy.",
                image: "/images/aurevia_aesthetic_art_1784122245484.jpg",
                fallback: "Refined aesthetic care",
                badge: "Anatomical",
              },
            ].map((cat, idx) => (
              <Card key={idx} surface="white" interaction="hover" className="flex flex-col h-full group overflow-hidden border border-brand-stone/40 hover:border-brand-sand transition-all duration-300">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-stone/20">
                  <Image
                    src={cat.image}
                    alt={cat.fallback}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={idx < 2}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    onError={() => {}}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] tracking-widest uppercase bg-brand-green-deep text-white px-2.5 py-1 font-mono">
                      {cat.badge}
                    </span>
                  </div>
                </div>
                <CardContent className="flex-1 flex flex-col justify-between p-6">
                  <Stack gap="sm">
                    <Heading level={3} size="sm" className="group-hover:text-brand-sage-dark transition-colors">
                      {cat.title}
                    </Heading>
                    <p className="text-sm text-brand-text-muted leading-relaxed">{cat.desc}</p>
                  </Stack>
                  <div className="pt-5 mt-5 border-t border-brand-stone/30">
                    <Link
                      href={cat.href}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-green-deep hover:text-brand-sage-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage rounded-sm group/link"
                    >
                      Explore category
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ── CONCERN-LED DISCOVERY ── */}
      <Section spacing="default" className="bg-brand-ivory-dark">
        <Container>
          <SectionHeader
            eyebrow="Targeted Solutions"
            title="Discover care by concern"
            description="We guide patients based on their current clinical concerns, ensuring a diagnosis-first assessment before any treatment is suggested."
            layout="stacked"
            align="center"
            className="mb-12 text-center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-stone/50">
            {concernsData.map((con) => (
              <div key={con.id} className="bg-brand-ivory p-8 flex flex-col justify-between gap-6">
                <div>
                  <span className="text-[10px] tracking-widest font-mono text-brand-sage-dark uppercase block mb-2">
                    {con.category}
                  </span>
                  <Heading level={3} size="sm" className="mb-3">
                    {con.title}
                  </Heading>
                  <p className="text-sm text-brand-text-muted leading-relaxed">
                    {con.shortDescription}
                  </p>
                </div>
                <Link
                  href={`/concerns/${con.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-green-deep hover:text-brand-sage-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage rounded-sm group"
                >
                  View clinical guidance
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── SIGNATURE TREATMENTS ── */}
      <Section spacing="default" surface="ivory">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeader
              eyebrow="Clinical Highlights"
              title="Signature treatments"
              description="A selected preview of our core specialist-supervised dermatological and aesthetic interventions."
            />
            <div className="flex flex-wrap gap-2 shrink-0">
              {["all", "skin", "hair", "laser", "aesthetics"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 text-[11px] font-mono tracking-wider uppercase border transition-all rounded-sm ${
                    activeCategory === cat
                      ? "bg-brand-green-deep text-white border-brand-green-deep"
                      : "bg-white text-brand-text-muted border-brand-stone hover:border-brand-stone-dark"
                  }`}
                >
                  {cat === "all" ? "Featured" : cat}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <Grid cols={2} gap="lg">
                {filteredTreatments.map((treat) => (
                  <div
                    key={treat.id}
                    className="bg-white border border-brand-stone/40 hover:border-brand-sand transition-all duration-300 p-8 flex flex-col justify-between gap-6"
                  >
                    <div>
                      <span className="text-[10px] tracking-widest font-mono text-brand-sage-dark uppercase block mb-2">
                        {treat.category}
                      </span>
                      <Heading level={3} size="md" className="mb-3">
                        {treat.title}
                      </Heading>
                      <p className="text-sm text-brand-text-muted leading-relaxed mb-5">
                        {treat.shortDescription}
                      </p>
                      <div className="grid grid-cols-2 gap-4 py-4 border-y border-brand-stone/30">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider font-mono text-brand-text-muted block mb-1">Treatment planning</span>
                          <span className="text-xs text-brand-green-deep">Discussed after individual assessment.</span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase tracking-wider font-mono text-brand-text-muted block mb-1">Recovery considerations</span>
                          <span className="text-xs text-brand-green-deep">Vary according to procedure and individual response.</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-brand-text-muted">Specialist supervised</span>
                      <Link
                        href={`/treatments/${treat.category}/${treat.id}`}
                        className="inline-flex items-center justify-center h-8 px-4 text-xs font-medium border border-brand-stone text-brand-green-deep hover:bg-brand-ivory hover:border-brand-stone-dark transition-all rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage"
                      >
                        Clinical details
                      </Link>
                    </div>
                  </div>
                ))}
              </Grid>
            </motion.div>
          </AnimatePresence>
        </Container>
      </Section>

      {/* ── SPECIALISTS ── */}
      <Section spacing="default" className="bg-brand-green-deep">
        <Container>
          <SectionHeader
            eyebrow="Medical Leadership"
            title="Meet our specialists"
            description="Our consulting dermatologists are specialist doctors committed to evidence-led, clinically responsible care."
            layout="split"
            className="mb-12 md:mb-16 [&_h2]:text-white [&_p]:text-white/65 [&_span]:text-brand-sand"
          />

          <Grid cols={2} gap="lg">
            {doctorsData.map((doc) => (
              <div key={doc.id} className="flex flex-col md:flex-row bg-white/5 border border-white/10 overflow-hidden group hover:border-white/20 transition-colors duration-300">
                {/* Portrait placeholder */}
                <div className="w-full md:w-[38%] aspect-[3/2] md:aspect-auto relative bg-brand-stone/20 shrink-0">
                  <ResponsiveMedia
                    src={doc.image}
                    alt={`Portrait placeholder for ${doc.name} — demonstration profile`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 30vw, 20vw"
                    fallbackText={doc.name}
                    className="object-top"
                  />
                </div>
                {/* Content */}
                <div className="flex-1 flex flex-col justify-between p-8 gap-6">
                  <div>
                    <Heading level={3} size="md" className="text-white mb-1">
                      {doc.name}
                    </Heading>
                    <span className="text-[10px] tracking-wider font-mono text-brand-sage uppercase block mb-5">
                      Consultant Dermatology Profile — Demonstration
                    </span>
                    <p className="text-sm italic text-white/60 leading-relaxed mb-5">
                      &ldquo;{doc.carePhilosophy}&rdquo;
                    </p>
                    <div className="mb-4">
                      <span className="text-[10px] uppercase tracking-wider font-mono text-white/40 block mb-2">Areas of interest</span>
                      <div className="flex flex-wrap gap-1.5">
                        {doc.areasOfInterest.map((interest, i) => (
                          <span key={i} className="text-xs bg-white/10 text-white/70 px-2.5 py-0.5 font-sans">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-mono text-white/40 block mb-0.5">Languages</span>
                      <span className="text-xs text-white/60">{doc.languages.join(", ")}</span>
                    </div>
                  </div>
                  <div className="pt-5 border-t border-white/10">
                    <Link
                      href={`/doctors/${doc.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-sage hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage rounded-sm group/link"
                    >
                      View full profile
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ── CONSULTATION JOURNEY ── */}
      <Section spacing="default" surface="ivory">
        <Container>
          <SectionHeader
            eyebrow="Clinical Framework"
            title="The consultation journey"
            description="A structured care pathway that begins with listening and ends with considered follow-up."
            layout="stacked"
            align="center"
            className="mb-16 text-center"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-[1.6rem] left-[12%] right-[12%] h-px bg-brand-stone/60" aria-hidden="true" />

            {[
              {
                step: "01",
                title: "Share your concern",
                desc: "Schedule a private consultation and describe your skin or hair concern. We begin without pre-packaged assumptions.",
              },
              {
                step: "02",
                title: "Receive a considered assessment",
                desc: "Our dermatologists conduct a thorough diagnostic evaluation and review your skin barrier before outlining any direction.",
              },
              {
                step: "03",
                title: "Review suitable care options",
                desc: "We present a conservative care plan with clinical options, approximate costs, and honest recovery considerations.",
              },
              {
                step: "04",
                title: "Continue with thoughtful follow-up",
                desc: "Milestone check-ins allow us to adapt your plan, support healing, and ensure lasting results that feel natural.",
              },
            ].map((journey, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white border border-brand-stone flex items-center justify-center font-serif text-lg font-medium text-brand-green-deep shadow-sm mb-6 z-10">
                  {journey.step}
                </div>
                <Heading level={4} size="sm" className="mb-2">
                  {journey.title}
                </Heading>
                <p className="text-sm text-brand-text-muted leading-relaxed max-w-[200px] mx-auto">
                  {journey.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center h-12 px-7 bg-brand-green-deep text-white text-sm font-medium hover:bg-brand-sage-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-2 rounded-sm"
            >
              Start with a consultation
            </Link>
          </div>
        </Container>
      </Section>

      {/* ── TECHNOLOGY & SAFETY ── */}
      <Section spacing="default" className="bg-brand-ivory-dark border-y border-brand-stone/40">
        <Container>
          <SectionHeader
            eyebrow="Safety First"
            title="Technology & clinical safety"
            description="Our focus is medical accountability. We maintain controlled procedural environments and carefully calibrated clinical platforms."
            layout="split"
            className="mb-12 md:mb-16"
          />

          <Grid cols={4} gap="md">
            {technologiesData.map((tech, idx) => (
              <div key={tech.id} className="p-6 bg-white border border-brand-stone/40">
                <div className="w-7 h-7 bg-brand-sage/10 text-brand-sage-dark flex items-center justify-center mb-4">
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
                <Heading level={4} size="sm" className="mb-2">{tech.name}</Heading>
                <p className="text-xs text-brand-text-muted leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </Grid>

          <p className="mt-8 text-xs text-brand-text-muted italic text-center max-w-2xl mx-auto">
            Technology and protocol information requires clinic verification before production use. Treatment suitability is assessed according to individual characteristics.
          </p>
        </Container>
      </Section>

      {/* ── RESPONSIBLE RESULTS ── */}
      <Section spacing="default" surface="ivory">
        <Container>
          <SectionHeader
            eyebrow="Evidence of Care"
            title="Responsible results"
            description="Biological responses vary. We do not use misleading before-and-after imagery. Client-approved case studies will be shared privately."
            layout="stacked"
            align="center"
            className="mb-12 text-center"
          />

          <div className="max-w-3xl mx-auto border border-brand-stone/60 bg-white p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-[9px] tracking-widest font-mono uppercase bg-brand-stone/40 px-2 py-0.5 text-brand-text-muted">
                Clinical Policy
              </span>
            </div>

            <div className="flex flex-col items-center text-center py-6 gap-4">
              <div className="p-4 bg-brand-stone/20 text-brand-text-muted">
                <Lock className="w-6 h-6 opacity-30" aria-hidden="true" />
              </div>
              <p className="font-serif text-xl md:text-2xl text-brand-green-deep font-medium italic max-w-xl text-balance">
                &ldquo;Client-approved result imagery will appear here.&rdquo;
              </p>
              <p className="text-sm text-brand-text-muted max-w-md leading-relaxed">
                To respect patient confidentiality and medical ethics, Aurevia only shares verified clinical cases privately, under strict professional guidelines.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-brand-stone/30">
              {[
                { label: "Classification", value: "Acne Scar Care" },
                { label: "Session count", value: "To be verified" },
                { label: "Treatment interval", value: "To be verified" },
                { label: "Consent status", value: "Required" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <span className="text-[10px] uppercase tracking-wider font-mono text-brand-text-muted block mb-0.5">{label}</span>
                  <span className="text-xs text-brand-green-deep font-medium">{value}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-[11px] text-brand-text-muted/70 italic leading-relaxed text-center">
              Results vary. Biological response differs significantly between skin characteristics and recovery compliance. Client approval is required before production.
            </p>
          </div>
        </Container>
      </Section>

      {/* ── CLINIC GALLERY ── */}
      <Section spacing="default" className="bg-brand-ivory-dark">
        <Container>
          <SectionHeader
            eyebrow="Our Environment"
            title="The clinic experience"
            description="Every detail of our space is curated to support a calm, private, and considered clinical environment."
            layout="split"
            className="mb-12 md:mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryData.map((gal, idx) => {
              // Alternate aspect ratios for visual variety
              const aspect = idx % 3 === 1 ? "aspect-[3/4]" : "aspect-[4/3]";
              return (
                <div key={gal.id} className="flex flex-col gap-3 group">
                  <div className={`relative ${aspect} w-full overflow-hidden bg-brand-stone/20`}>
                    <ResponsiveMedia
                      src={gal.image}
                      alt={gal.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-serif font-medium text-brand-green-deep mb-0.5">{gal.title}</p>
                    <p className="text-xs text-brand-text-muted leading-relaxed">{gal.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ── INSIGHTS ── */}
      <Section spacing="default" surface="ivory">
        <Container>
          <SectionHeader
            eyebrow="Dermatological Insights"
            title="Educational insights"
            description="Evidence-led articles from our dermatologists to demystify skin science and support considered home care."
            layout="split"
            className="mb-12 md:mb-14"
          />

          <Grid cols={3} gap="lg">
            {insightsData.map((ins) => (
              <div key={ins.id} className="flex flex-col h-full group border border-brand-stone/40 hover:border-brand-sand transition-all duration-300 bg-white overflow-hidden">
                <div className="relative aspect-[16/9] w-full bg-brand-stone/10 overflow-hidden">
                  <ResponsiveMedia
                    src={ins.image}
                    alt={ins.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[10px] tracking-wider uppercase bg-brand-green-deep text-white px-2.5 py-1 font-mono">
                      {ins.category}
                    </span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between p-6">
                  <div>
                    <div className="flex justify-between items-center text-[10px] font-mono text-brand-text-muted mb-3">
                      <span>{ins.publishDate}</span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3" aria-hidden="true" />
                        {ins.readTime}
                      </span>
                    </div>
                    <Heading level={3} size="sm" className="mb-2 group-hover:text-brand-sage-dark transition-colors">
                      {ins.title}
                    </Heading>
                    <p className="text-sm text-brand-text-muted leading-relaxed">{ins.summary}</p>
                  </div>
                  <div className="pt-5 mt-5 border-t border-brand-stone/30">
                    <Link
                      href={`/insights/${ins.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-green-deep hover:text-brand-sage-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage rounded-sm group/link"
                    >
                      Read article
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ── FAQ ── */}
      <Section spacing="default" className="bg-brand-ivory-dark border-t border-brand-stone/40">
        <Container size="narrow">
          <SectionHeader
            eyebrow="Clinical FAQ"
            title="Frequently asked questions"
            description="Clear, honest answers to common questions about our consultation process."
            layout="stacked"
            align="center"
            className="mb-12 text-center"
          />

          <div className="flex flex-col gap-0 border border-brand-stone/50 overflow-hidden">
            {faqsData.map((faq, idx) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`bg-white border-b border-brand-stone/50 last:border-b-0`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-brand-ivory/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-sage transition-colors"
                    aria-expanded={isOpen}
                    id={`faq-btn-${faq.id}`}
                    aria-controls={`faq-panel-${faq.id}`}
                  >
                    <span className="font-serif font-medium text-base text-brand-green-deep leading-snug pr-4 text-pretty">
                      {faq.question}
                    </span>
                    <span className="shrink-0 w-7 h-7 flex items-center justify-center bg-brand-stone/30 text-brand-text-muted">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" aria-hidden="true" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${faq.id}`}
                        role="region"
                        aria-labelledby={`faq-btn-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-1 border-t border-brand-stone/30 text-sm text-brand-text-muted leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ── FINAL CONSULTATION CTA ── */}
      <Section spacing="default" className="bg-brand-green-deep text-white">
        <Container size="narrow">
          <div className="text-center max-w-2xl mx-auto py-6">
            <p className="text-xs tracking-[0.15em] uppercase font-sans font-medium text-brand-sand mb-4">
              Start your skin journey
            </p>
            <Heading level={2} size="xl" className="text-white mb-5 text-balance">
              Schedule your private consultation
            </Heading>
            <BodyText size="lg" className="text-white/65 mb-8 leading-relaxed">
              Meet with a specialist profile in an unhurried consultation designed to understand your skin or hair concerns and discuss suitable next steps.
            </BodyText>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center justify-center h-12 px-7 bg-brand-sand text-brand-green-deep text-sm font-medium hover:bg-brand-sand/85 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sand focus-visible:ring-offset-2 focus-visible:ring-offset-brand-green-deep rounded-sm"
              >
                Book a consultation
              </Link>
              <a
                href={`tel:${clinicConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center justify-center h-12 px-7 border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-green-deep rounded-sm"
              >
                Call clinic
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-center gap-6 text-xs text-white/40">
              <span>By appointment</span>
              <span className="w-1 h-1 rounded-full bg-brand-sand/60" aria-hidden="true" />
              <span>Indiranagar, Bengaluru</span>
              <span className="w-1 h-1 rounded-full bg-brand-sand/60" aria-hidden="true" />
              <span>Mon – Sat</span>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
