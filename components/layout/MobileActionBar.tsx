"use client";

import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import Link from 'next/link';
import { navigationConfig } from '@/config/navigation';

export function MobileActionBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-brand-stone/60 shadow-[0_-2px_8px_rgba(26,36,33,0.06)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-label="Quick clinic actions"
    >
      <div className="flex items-stretch h-14">
        {navigationConfig.mobileActions.map((action, i) => {
          const Icon = action.icon === 'phone' ? Phone : action.icon === 'message' ? MessageCircle : Calendar;
          const isBook = action.label === 'Book';

          return (
            <Link
              key={action.label}
              href={action.href}
              className={[
                'flex flex-col items-center justify-center flex-1 min-h-0 gap-0.5 text-[11px] font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-sage',
                isBook
                  ? 'bg-brand-green-deep text-white hover:bg-brand-sage-dark'
                  : [
                      'text-brand-green-deep hover:bg-brand-ivory/80',
                      i !== 0 ? 'border-l border-brand-stone/50' : ''
                    ].join(' ')
              ].join(' ')}
              aria-label={action.label}
            >
              <Icon
                className={['w-4.5 h-4.5', isBook ? 'text-white' : 'text-brand-sage'].join(' ')}
                aria-hidden="true"
              />
              <span>{action.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
