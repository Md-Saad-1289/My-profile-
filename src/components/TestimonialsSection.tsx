import React from 'react';
import { testimonialConfig } from '../data/portfolioData';
import { SectionHeader } from './ui/SectionHeader';
import { Quote, MessageSquareDashed } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  // If testimonials are disabled and no authentic items exist, show an elegant transparent placeholder
  if (!testimonialConfig.enabled || testimonialConfig.items.length === 0) {
    return (
      <section className="py-16 sm:py-20 border-t border-neutral-800/40 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/60 flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center text-neutral-400 mb-3">
              <MessageSquareDashed className="w-5 h-5 text-emerald-400/80" />
            </div>
            <h3 className="text-base font-semibold text-neutral-200 mb-1">
              Client & Collaborator Reviews
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-lg leading-relaxed">
              Authenticity comes first. Verified client feedback from active collaborations and SaaS deployments will be showcased here.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 sm:py-32 bg-neutral-900/30 border-y border-neutral-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="COLLABORATION"
          heading="What partners say."
          description="Direct feedback from startup founders and business owners."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialConfig.items.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-neutral-900/70 border border-neutral-800 p-6 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-6 h-6 text-emerald-400/60 mb-3" />
                <p className="text-sm text-neutral-300 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-100">{item.name}</div>
                  <div className="text-[11px] text-neutral-400">
                    {item.role} · {item.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
