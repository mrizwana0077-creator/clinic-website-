import React from 'react';
import Link from 'next/link';
import { brandConfig } from '@/config/brand';
import { clinicConfig } from '@/config/clinic';
import { navigationConfig } from '@/config/navigation';
import { Container } from '@/components/primitives';
import { Instagram, Facebook, Phone, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-green-deep text-brand-ivory pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0">
      {/* Main footer content */}
      <div className="pt-16 md:pt-20 pb-12 md:pb-16">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 pb-12 border-b border-white/10">

            {/* Brand column */}
            <div className="lg:col-span-1 flex flex-col gap-5">
              <Link
                href="/"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-2 focus-visible:ring-offset-brand-green-deep rounded-sm w-fit"
                aria-label={`${brandConfig.name} Home`}
              >
                <span className="font-serif text-2xl font-medium tracking-tight text-white">
                  Aurevia<span className="text-brand-sage">.</span>
                </span>
              </Link>
              <p className="text-sm text-white/65 leading-relaxed max-w-xs">
                {brandConfig.tagline}
              </p>
              <div className="flex gap-3 pt-1">
                <a
                  href={clinicConfig.social.instagram}
                  className="text-white/40 hover:text-white/80 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-2 focus-visible:ring-offset-brand-green-deep rounded-sm transition-colors"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={clinicConfig.social.facebook}
                  className="text-white/40 hover:text-white/80 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-2 focus-visible:ring-offset-brand-green-deep rounded-sm transition-colors"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Nav link groups */}
            {navigationConfig.footer.groups.map((group) => (
              <div key={group.title} className="flex flex-col gap-4">
                <h3 className="text-[10px] tracking-widest uppercase font-sans font-semibold text-white/40">
                  {group.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/65 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-2 focus-visible:ring-offset-brand-green-deep rounded-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact & hours column */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h3 className="text-[10px] tracking-widest uppercase font-sans font-semibold text-white/40">
                  Contact
                </h3>
                <div className="flex flex-col gap-2">
                  <a
                    href={`tel:${clinicConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                    className="flex items-center gap-2.5 text-sm text-white/65 hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 shrink-0 text-brand-sage" aria-hidden="true" />
                    {clinicConfig.contact.phone}
                  </a>
                  <a
                    href={`mailto:${clinicConfig.contact.email}`}
                    className="flex items-center gap-2.5 text-sm text-white/65 hover:text-white transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 shrink-0 text-brand-sage" aria-hidden="true" />
                    {clinicConfig.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-[10px] tracking-widest uppercase font-sans font-semibold text-white/40">
                  Opening Hours
                </h3>
                <div className="text-sm text-white/65 space-y-1.5">
                  <div className="flex justify-between gap-4">
                    <span>Mon – Fri</span>
                    <span>{clinicConfig.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Saturday</span>
                    <span>{clinicConfig.hours.saturday}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Sunday</span>
                    <span className="text-white/40">{clinicConfig.hours.sunday}</span>
                  </div>
                </div>
              </div>
              <Link
                href="/book"
                className="inline-flex items-center justify-center h-10 px-5 text-sm font-medium border border-white/20 text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-2 focus-visible:ring-offset-brand-green-deep rounded-sm"
              >
                Book a consultation
              </Link>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-xs text-white/30">
              &copy; {currentYear} {brandConfig.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-white/30">
              {navigationConfig.footer.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-white/60 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-sage focus-visible:ring-offset-2 focus-visible:ring-offset-brand-green-deep rounded-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Demo notice */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-[11px] text-white/25 leading-relaxed max-w-3xl">
              Demonstration website created using fictional and placeholder content. Clinic information, credentials, treatments, reviews, and results must be verified before production use.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
