import React from 'react';
import { services } from '../data/portfolioData';
import { SectionHeader } from './ui/SectionHeader';
import {
  Code2,
  Layers,
  LayoutDashboard,
  ShoppingBag,
  Rocket,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-teal-400" />;
      case 'LayoutDashboard':
        return <LayoutDashboard className="w-5 h-5 text-cyan-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-indigo-400" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-emerald-400" />;
      default:
        return <Code2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="SERVICES"
          heading="What I Deliver"
          description="High-quality web development services for founders and businesses."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-neutral-900/70 dark:bg-neutral-900/80 border border-neutral-800 p-6 sm:p-7 hover:border-emerald-500/40 hover:bg-neutral-900/90 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 border border-neutral-700/80 flex items-center justify-center group-hover:border-emerald-500/40 transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <a
                    href="#contact"
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-neutral-500 group-hover:text-emerald-400 group-hover:bg-neutral-800 transition-all"
                    aria-label={`Inquire about ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-neutral-200 leading-relaxed mb-5 font-normal">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2 mb-4">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-neutral-200 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best for */}
              <div className="pt-3 border-t border-neutral-800 text-xs text-neutral-300">
                <span className="text-emerald-400 font-bold uppercase tracking-wider text-[10px] font-mono mr-1.5">Ideal for:</span>
                <span className="text-neutral-100 font-medium">{service.idealFor}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
