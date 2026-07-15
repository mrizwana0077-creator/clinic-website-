"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { brandConfig } from '@/config/brand';
import { clinicConfig } from '@/config/clinic';
import { navigationConfig } from '@/config/navigation';
import { Container, Button, IconButton } from '@/components/primitives';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        if (menuButtonRef.current) {
          menuButtonRef.current.focus();
        }
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
          setMegaMenuOpen(false);
          return;
        }
        if (e.key === 'Tab' && mobileMenuRef.current && menuButtonRef.current) {
          const focusableElements = mobileMenuRef.current.querySelectorAll(
            'a[href], button:not([disabled]), textarea, input, select'
          );
          const elements = [menuButtonRef.current, ...Array.from(focusableElements)] as HTMLElement[];
          const firstElement = elements[0];
          const lastElement = elements[elements.length - 1];
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
      if (isFirstRender.current) {
        isFirstRender.current = false;
      } else {
        if (menuButtonRef.current) {
          menuButtonRef.current.focus();
        }
      }
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setMegaMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDesktopEscape = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setMegaMenuOpen(false);
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-brand-ivory/98 backdrop-blur-sm border-b border-brand-stone/60 py-3 shadow-[0_1px_3px_rgba(26,36,33,0.06)]"
            : pathname === "/"
              ? "bg-transparent py-5 lg:py-6"
              : "bg-brand-ivory/98 backdrop-blur-sm border-b border-brand-stone/40 py-4 lg:py-5"
        )}
        onKeyDown={handleDesktopEscape}
      >
        <Container size="wide" className="flex items-center justify-between gap-6">
          {/* Wordmark */}
          <Link
            href="/"
            className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-2 rounded-sm z-50 relative"
            aria-label={`${brandConfig.name} Home`}
            onClick={() => {
              setMobileMenuOpen(false);
              setMegaMenuOpen(false);
            }}
          >
            <span className="font-serif text-xl md:text-2xl font-medium tracking-tight text-brand-green-deep">
              Aurevia<span className="text-brand-sage">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label="Main navigation">
            {navigationConfig.mainNav.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

              if (item.hasMegaMenu) {
                return (
                  <div key={item.label} className="relative" ref={megaMenuRef}>
                    <button
                      type="button"
                      onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-sage-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-2 rounded-sm py-1",
                        isActive ? "text-brand-sage-dark" : "text-brand-green-deep",
                        megaMenuOpen && "text-brand-sage-dark"
                      )}
                      aria-expanded={megaMenuOpen}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn("h-3.5 w-3.5 transition-transform duration-200 motion-reduce:transition-none", megaMenuOpen && "rotate-180")}
                        aria-hidden="true"
                      />
                    </button>

                    {megaMenuOpen && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-5 w-[520px] bg-brand-ivory border border-brand-stone shadow-[0_8px_24px_rgba(26,36,33,0.08)] overflow-hidden animate-in fade-in slide-in-from-top-3 duration-200 motion-reduce:animate-none"
                        role="menu"
                      >
                        <div className="p-6 grid grid-cols-2 gap-1">
                          {navigationConfig.megaMenu.treatments.map((tItem) => (
                            <Link
                              key={tItem.label}
                              href={tItem.href}
                              className="group block px-4 py-3 hover:bg-brand-stone/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-inset transition-colors"
                              onClick={() => setMegaMenuOpen(false)}
                              role="menuitem"
                            >
                              <div className="text-sm text-brand-green-deep font-medium group-hover:text-brand-sage-dark transition-colors">{tItem.label}</div>
                              <div className="text-xs text-brand-text-muted mt-0.5">{tItem.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-brand-sage-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-2 rounded-sm py-1 relative",
                    isActive
                      ? "text-brand-sage-dark after:absolute after:bottom-0 after:inset-x-0 after:h-[2px] after:bg-brand-sage-dark after:rounded-full"
                      : "text-brand-text-main"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Button as="link" href="/book" variant="primary" size="sm">
              Book a consultation
            </Button>
          </div>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-2">
            <Button as="link" href="/book" variant="primary" size="sm" className="hidden sm:flex text-sm">
              Book
            </Button>
            <IconButton
              ref={menuButtonRef}
              variant="quiet"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative z-50"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </IconButton>
          </div>
        </Container>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className="fixed inset-0 z-40 bg-brand-ivory lg:hidden overflow-y-auto overscroll-contain animate-in fade-in duration-200 motion-reduce:animate-none"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="pt-24 pb-32 px-6 flex flex-col min-h-full">
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {navigationConfig.mainNav.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

                if (item.hasMegaMenu) {
                  return (
                    <div key={item.label} className="flex flex-col">
                      <button
                        className="flex items-center justify-between py-4 text-xl font-serif text-brand-green-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage rounded-sm text-left border-b border-brand-stone/30"
                        onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                        aria-expanded={megaMenuOpen}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn("h-5 w-5 text-brand-text-muted transition-transform duration-200 motion-reduce:transition-none", megaMenuOpen && "rotate-180")}
                          aria-hidden="true"
                        />
                      </button>

                      {megaMenuOpen && (
                        <div className="flex flex-col gap-1 pl-4 py-3 border-b border-brand-stone/30 animate-in slide-in-from-top-2 fade-in duration-200 motion-reduce:animate-none">
                          {navigationConfig.megaMenu.treatments.map((tItem) => (
                            <Link
                              key={tItem.label}
                              href={tItem.href}
                              className="py-2.5 text-base text-brand-text-main hover:text-brand-sage-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage rounded-sm transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {tItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "py-4 text-xl font-serif border-b border-brand-stone/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage rounded-sm",
                      isActive ? "text-brand-sage-dark" : "text-brand-green-deep"
                    )}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMegaMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto pt-10 flex flex-col gap-3">
              <Button
                as="link"
                href="/book"
                variant="primary"
                size="lg"
                className="w-full justify-center"
                onClick={() => { setMobileMenuOpen(false); setMegaMenuOpen(false); }}
              >
                Book a consultation
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  as="link"
                  href={`tel:${clinicConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                  variant="secondary"
                  className="w-full justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Call clinic
                </Button>
                <Button
                  as="link"
                  href={`https://wa.me/${clinicConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  variant="secondary"
                  className="w-full justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  WhatsApp
                </Button>
              </div>
              <div className="mt-4 pt-5 border-t border-brand-stone/40 text-center">
                <p className="text-xs text-brand-text-muted mb-1.5">Clinic address</p>
                <a
                  href={clinicConfig.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-green-deep hover:underline block max-w-[280px] mx-auto leading-relaxed"
                >
                  {clinicConfig.location.address}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
