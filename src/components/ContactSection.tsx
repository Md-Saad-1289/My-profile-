import React, { useState } from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
import { SectionHeader } from './ui/SectionHeader';
import { Button } from './ui/Button';
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Send,
  CheckCircle2,
  Copy,
  Check,
  AlertCircle,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'SaaS / MVP',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const projectTypes = [
    'SaaS / MVP',
    'Web Application',
    'Business System',
    'E-Commerce',
    'Website',
    'Other',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please share a brief summary (minimum 10 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    /*
      CONFIGURATION GUIDE FOR PRODUCTION EMAIL INTEGRATION:
      =======================================================
      To hook this form up to your favorite email provider:

      1. FORMSPREE:
         const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify(formData),
         });

      2. RESEND / CUSTOM SERVER:
         const response = await fetch("/api/contact", {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify(formData),
         });

      3. EMAILJS:
         emailjs.send("SERVICE_ID", "TEMPLATE_ID", formData, "PUBLIC_KEY");
    */

    // Simulated graceful client-side submission handler
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="CONTACT"
          heading="Start a Conversation"
          description="Have a project, MVP idea, or team requirement? Send a message and let's talk."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl bg-neutral-900/70 dark:bg-neutral-900/80 border border-neutral-800 p-6 sm:p-8 shadow-xl shadow-black/20 hover:border-neutral-700 transition-colors">
              {isSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Message Prepared Successfully!
                  </h3>
                  <p className="text-sm text-neutral-200 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, <span className="text-white font-semibold">{formData.name}</span>. For this portfolio preview, you can also email me directly at{' '}
                    <span className="text-emerald-300 font-mono font-bold">{personalInfo.email}</span>.
                  </p>
                  <div className="pt-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          projectType: 'SaaS / MVP',
                          message: '',
                        });
                      }}
                    >
                      Send Another Inquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-neutral-200 mb-1.5 font-bold"
                    >
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Alex Rahman"
                      className={`w-full px-4 py-2.5 rounded-lg bg-neutral-950/90 border text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors font-medium ${
                        errors.name ? 'border-rose-500/80' : 'border-neutral-700'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-rose-400 text-xs mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-neutral-200 mb-1.5 font-bold"
                    >
                      Your Email <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-2.5 rounded-lg bg-neutral-950/90 border text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors font-medium ${
                        errors.email ? 'border-rose-500/80' : 'border-neutral-700'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-rose-400 text-xs mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Project Type */}
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-xs font-mono uppercase tracking-wider text-neutral-200 mb-1.5 font-bold"
                    >
                      Project Scope / Category
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-neutral-950/90 border border-neutral-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors font-medium"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-neutral-900 text-neutral-100">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono uppercase tracking-wider text-neutral-200 mb-1.5 font-bold"
                    >
                      Project Description & Goals <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Tell me about your product vision, timeline, target users, and key requirements..."
                      className={`w-full px-4 py-2.5 rounded-lg bg-neutral-950/90 border text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors font-medium ${
                        errors.message ? 'border-rose-500/80' : 'border-neutral-700'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-rose-400 text-xs mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    icon={<Send className="w-4 h-4" />}
                    className="w-full justify-center"
                  >
                    {isSubmitting ? 'Validating...' : 'Send Message'}
                  </Button>

                  <p className="text-xs text-neutral-300 font-mono text-center pt-1 font-medium">
                    No spam. Typical response within 24 business hours.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right Column: Direct Contact & Socials */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct Email Card */}
            <motion.div
              whileHover={{ y: -3 }}
              className="rounded-2xl bg-neutral-900/80 border border-neutral-800 p-6 hover:border-emerald-500/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Direct Email</h3>
                  <p className="text-xs text-neutral-300 font-medium">For inquiries, RFPs & proposals</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-950/80 border border-neutral-700 font-mono text-xs text-white font-semibold mt-4">
                <span className="truncate">{personalInfo.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded text-neutral-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </motion.div>

            {/* Social Channels */}
            <div className="rounded-2xl bg-neutral-900/80 border border-neutral-800 p-6 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2 font-bold">
                Connect on Developer Platforms
              </h3>

              <motion.a
                whileHover={{ x: 4 }}
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-neutral-950/80 border border-neutral-800 hover:border-emerald-500/40 text-neutral-200 hover:text-white transition-all group font-medium"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-neutral-300 group-hover:text-emerald-400 transition-colors" />
                  <span className="text-xs font-mono">github.com/Md-Saad-1289</span>
                </div>
                <span className="text-xs text-neutral-300 font-mono font-medium">Profile</span>
              </motion.a>

              <motion.a
                whileHover={{ x: 4 }}
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-neutral-950/80 border border-neutral-800 hover:border-emerald-500/40 text-neutral-200 hover:text-white transition-all group font-medium"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-neutral-300 group-hover:text-emerald-400 transition-colors" />
                  <span className="text-xs font-mono">linkedin.com/in/md-mutasim-billah-saad</span>
                </div>
                <span className="text-xs text-neutral-300 font-mono font-medium">Connect</span>
              </motion.a>

              <motion.a
                whileHover={{ x: 4 }}
                href={personalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-neutral-950/80 border border-neutral-800 hover:border-emerald-500/40 text-neutral-200 hover:text-white transition-all group font-medium"
              >
                <div className="flex items-center gap-3">
                  <Twitter className="w-4 h-4 text-neutral-300 group-hover:text-emerald-400 transition-colors" />
                  <span className="text-xs font-mono">x.com/mdsaad_dev</span>
                </div>
                <span className="text-xs text-neutral-300 font-mono font-medium">Follow</span>
              </motion.a>
            </div>

            {/* Quick Metadata */}
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-200 space-y-2 font-mono font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Location: {personalInfo.location} (UTC+6)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Working hours: Flexible overlap with US, EU, and APAC</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
