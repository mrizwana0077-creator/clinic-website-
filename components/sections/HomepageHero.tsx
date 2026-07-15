import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { clinicConfig } from '@/config/clinic';

export function HomepageHero() {
  return (
    <section
      aria-label="Hero — specialist-led skin and hair care"
      className="relative w-full bg-brand-ivory overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[90vh] max-w-[1600px] mx-auto">

        {/* ── Left: text column ── */}
        <div className="w-full lg:w-[44%] flex flex-col justify-center px-6 sm:px-10 lg:pl-12 xl:pl-20 lg:pr-10 xl:pr-14 py-14 lg:py-28 order-2 lg:order-1">

          {/* Eyebrow */}
          <p className="font-sans text-xs tracking-[0.18em] uppercase text-brand-sage-dark font-medium mb-5">
            Specialist-led skin and hair care
          </p>

          {/* H1 */}
          <h1 className="font-serif text-[2.2rem] sm:text-[2.6rem] lg:text-[2.8rem] xl:text-[3.2rem] leading-[1.12] tracking-tight text-brand-green-deep text-balance mb-6">
            Advanced care for skin that feels confidently yours.
          </h1>

          {/* Description */}
          <p className="font-sans text-base lg:text-[1.0625rem] text-brand-text-main leading-relaxed max-w-[420px] mb-8">
            Evidence-led dermatology, personalised treatment planning, and thoughtful follow-up, delivered in a calm, private clinical environment.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start mb-10">
            <Link
              href="/book"
              className="inline-flex items-center justify-center h-12 px-7 bg-brand-green-deep text-white text-sm font-medium tracking-wide hover:bg-brand-sage-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-2 rounded-sm"
            >
              Book a consultation
            </Link>
            <Link
              href="/treatments"
              className="inline-flex items-center gap-1.5 h-12 px-3 text-sm font-medium text-brand-green-deep hover:text-brand-sage-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-2 rounded-sm group"
            >
              Explore treatments
              <span className="inline-block transition-transform group-hover:translate-x-0.5 duration-200 motion-reduce:transform-none">→</span>
            </Link>
          </div>

          {/* Trust indicators */}
          <ul className="flex flex-col gap-2.5 pt-8 border-t border-brand-stone/40">
            {[
              'Dermatologist-led consultations',
              'Personalised treatment plans',
              'Modern clinical technology',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-brand-text-muted">
                <Check className="w-3.5 h-3.5 text-brand-sage-dark shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right: image column ── */}
        <div className="w-full lg:w-[56%] relative order-1 lg:order-2">
          {/* Main hero image */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-full min-h-[300px]">
            <Image
              src="/images/hero/aurevia-clinic-hero.png"
              alt="A calm, private clinical consultation room at Aurevia with soft ivory tones and natural light"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 56vw"
              className="object-cover object-center"
            />
            {/* Subtle vignette on the left edge to blend into the text area on desktop */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-brand-ivory to-transparent pointer-events-none" aria-hidden="true" />
          </div>

          {/* Floating care card — stable position, doesn't cover face */}
          <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 max-w-[240px] bg-white/95 backdrop-blur-sm p-5 border border-brand-stone/30 shadow-[0_4px_20px_rgba(26,36,33,0.10)] hidden sm:block">
            <p className="font-serif text-base text-brand-green-deep leading-snug mb-1.5">
              Care designed around you
            </p>
            <p className="text-xs text-brand-text-muted leading-relaxed">
              Private consultations and considered treatment planning for natural results.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
