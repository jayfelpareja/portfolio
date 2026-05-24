import React, { useState, useRef } from 'react';
import { CheckCircle2, ArrowRight, Gauge, Layers2, Sparkles, Sliders, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Contact: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [projectType, setProjectType] = useState<string>('WordPress Build');
  const [timeline, setTimeline] = useState<string>('1-2 Months');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Track hCaptcha Token and element reference
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);

  const projectTypes = ['WordPress/CMS Build', 'Funnel Build', 'Landing Pages'];
  const timelines = ['Immediate', '1-2 Months', 'Flexible'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleVerificationSuccess = (token: string) => {
    setCaptchaToken(token);
  };

  const handleVerificationExpire = () => {
    setCaptchaToken(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Enforce captcha completion before routing
    if (!captchaToken) {
      alert("Please check the security box to verify you are human.");
      return;
    }

    setStatus('sending');

    const payload = {
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
      name: formData.name,
      email: formData.email,
      message: formData.message,
      project_focus: projectType,
      target_timeline: timeline,
      from_name: "Portfolio Lead Generator",
      subject: `New Project Brief: ${projectType} from ${formData.name}`,
      // Pass the valid verification token straight to Web3Forms API
      "g-recaptcha-response": captchaToken,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setCaptchaToken(null);
        captchaRef.current?.resetCaptcha(); // Wipe widget instance

        setTimeout(() => {
          setStatus('idle');
          setStep(1);
        }, 3500);
      } else {
        setStatus('error');
        captchaRef.current?.resetCaptcha();
        setCaptchaToken(null);
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (error) {
      console.error("Form transmission fault:", error);
      setStatus('error');
      captchaRef.current?.resetCaptcha();
      setCaptchaToken(null);
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 px-6 lg:px-16 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">

        {/* Header Block Section */}
        <div className="max-w-xl mb-16 lg:mb-20">
          <span className="text-[10px] font-mono tracking-[0.3em] text-neutral-400 dark:text-neutral-500 uppercase block mb-3">
            [ 04 / CONVERSION ENGINE ]
          </span>
          <h2 className="text-4xl font-sans tracking-tight text-neutral-950 dark:text-white mb-4">
            Initialize your pipeline setup.
          </h2>
          <p className="text-sm font-sans text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
            Configure your project criteria interactively below. Skip the lengthy discovery back-and-forth and jump directly into a structured production build template.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

          {/* Left Column: Interactive Selector Panel Container */}
          <div className="lg:col-span-7 bg-neutral-50/40 dark:bg-neutral-900/10 border border-neutral-100 dark:border-neutral-900 rounded-lg p-6 sm:p-8 flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-8 my-auto">
              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-8"
                  >
                    {/* Project Type Block Selection */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-neutral-400">
                        <Layers2 className="w-3.5 h-3.5" />
                        <label className="text-[10px] font-mono tracking-wider uppercase">Project Target</label>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {projectTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setProjectType(type)}
                            className={`p-4 text-xs text-left font-sans tracking-wide transition-all duration-200 rounded-xs border cursor-pointer ${projectType === type
                              ? 'bg-neutral-950 border-neutral-950 text-white dark:bg-white dark:text-neutral-950 dark:border-white shadow-xs'
                              : 'bg-transparent border-neutral-200 dark:border-neutral-900 text-neutral-500 dark:text-neutral-400 hover:border-neutral-400 dark:hover:border-neutral-700'
                              }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Timeline Selection Grid */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-neutral-400">
                        <Gauge className="w-3.5 h-3.5" />
                        <label className="text-[10px] font-mono tracking-wider uppercase">Deployment Speed</label>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {timelines.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setTimeline(time)}
                            className={`p-4 text-xs text-left font-sans tracking-wide transition-all duration-200 rounded-xs border cursor-pointer ${timeline === time
                              ? 'bg-neutral-950 border-neutral-950 text-white dark:bg-white dark:text-neutral-950 dark:border-white shadow-xs'
                              : 'bg-transparent border-neutral-200 dark:border-neutral-900 text-neutral-500 dark:text-neutral-400 hover:border-neutral-400 dark:hover:border-neutral-700'
                              }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-neutral-100 dark:border-neutral-900/60 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-6 py-3.5 bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-sans font-medium text-xs tracking-wider uppercase rounded-xs hover:opacity-90 transition-opacity duration-200 flex items-center gap-2 cursor-pointer"
                      >
                        <span>Continue Setup</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">Who are we collaborating with?</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your name"
                          disabled={status === 'sending' || status === 'success'}
                          className="w-full px-4 py-3 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-900 focus:border-neutral-950 dark:focus:border-white rounded-xs font-sans text-xs text-neutral-950 dark:text-white focus:outline-hidden transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">Where should we send your blueprint?</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter your email "
                          disabled={status === 'sending' || status === 'success'}
                          className="w-full px-4 py-3 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-900 focus:border-neutral-950 dark:focus:border-white rounded-xs font-sans text-xs text-neutral-950 dark:text-white focus:outline-hidden transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">Brief Description of The Projects</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="What are we building? Tell me about the vision"
                        disabled={status === 'sending' || status === 'success'}
                        className="w-full px-4 py-3 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-900 focus:border-neutral-950 dark:focus:border-white rounded-xs font-sans text-xs text-neutral-950 dark:text-white focus:outline-hidden transition-colors resize-none variant-normal leading-relaxed"
                      />
                    </div>

                    {/* hCaptcha Integration Block */}
                    <div className="pt-2 flex justify-start overflow-hidden">
                      <HCaptcha
                        ref={captchaRef}
                        sitekey={import.meta.env.VITE_HCAPTCHA_SITE_KEY || ""}    // Swap out with your real hCaptcha sitekey
                        onVerify={handleVerificationSuccess}
                        onExpire={handleVerificationExpire}
                        theme="light" // Can switch conditionally to "dark" based on dark mode states
                      />
                    </div>

                    <div className="pt-4 border-t border-neutral-100 dark:border-neutral-900/60 flex items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        disabled={status === 'sending' || status === 'success'}
                        className="text-[11px] font-mono tracking-wider uppercase text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer disabled:opacity-50"
                      >
                        &larr; Modify Scope
                      </button>

                      <button
                        type="submit"
                        disabled={status !== 'idle' || !captchaToken}
                        className={`px-6 py-3.5 rounded-xs font-sans font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer ${status === 'success'
                          ? 'bg-emerald-600 border border-emerald-600 text-white cursor-default'
                          : status === 'error'
                            ? 'bg-rose-600 border border-rose-600 text-white cursor-default'
                            : status === 'sending'
                              ? 'bg-neutral-100 dark:bg-neutral-900 text-neutral-400 cursor-not-allowed border border-neutral-200'
                              : !captchaToken
                                ? 'bg-neutral-200 text-neutral-400 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 cursor-not-allowed'
                                : 'bg-neutral-950 hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-100 dark:text-neutral-950'
                          }`}
                      >
                        <AnimatePresence mode="wait" initial={false}>
                          {status === 'idle' && (
                            <motion.div key="idle" className="flex items-center gap-2">
                              <span>Deploy Proposal</span>
                            </motion.div>
                          )}
                          {status === 'sending' && (
                            <motion.div key="sending" className="flex items-center gap-2">
                              <div className="w-3 h-3 border-2 border-neutral-400 border-t-transparent rounded-full animate-spin" />
                              <span>Processing...</span>
                            </motion.div>
                          )}
                          {status === 'success' && (
                            <motion.div key="success" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Securely Handled</span>
                            </motion.div>
                          )}
                          {status === 'error' && (
                            <motion.div key="error" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                              <AlertCircle className="w-3.5 h-3.5" />
                              <span>Dispatch Failed</span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

          {/* Right Column: Live Context Matrix Sidebar Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 p-6 rounded-lg border border-neutral-100 dark:border-neutral-900">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-neutral-400 dark:text-neutral-500">
                <Sliders className="w-3.5 h-3.5" />
                <span className="font-mono text-[10px] tracking-wider uppercase">Live Brief Compilation Matrix</span>
              </div>

              {/* Param display logs layout */}
              <div className="font-mono text-[11px] space-y-3 bg-neutral-50 dark:bg-neutral-900/30 p-4 rounded-xs border border-neutral-100/70 dark:border-neutral-900/60 text-left">
                <div className="flex justify-between border-b border-neutral-100 dark:border-neutral-900/50 pb-2">
                  <span className="text-neutral-400">BUILD TYPE:</span>
                  <span className="text-neutral-950 dark:text-neutral-200 font-medium">{projectType}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-100 dark:border-neutral-900/50 pb-2">
                  <span className="text-neutral-400">TARGET DELIVERY:</span>
                  <span className="text-neutral-950 dark:text-neutral-200 font-medium">{timeline}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-neutral-400">SECURE DISPATCH:</span>
                  <span className="text-neutral-950 dark:text-white uppercase font-bold tracking-tight">
                    {step === 2 ? "Ready to transmit" : "Awaiting validation"}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xs bg-neutral-50/40 dark:bg-neutral-900/10 border border-dashed border-neutral-200 dark:border-neutral-800 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                <p className="text-xs text-neutral-400 dark:text-neutral-500 font-light leading-normal text-left">
                  Selecting target criteria updates server routing presets, formatting data loops directly into your technical pipeline review.
                </p>
              </div>
            </div>

            {/* Flat Social Communication Anchors */}
            <div className="flex items-center gap-6 text-neutral-400 dark:text-neutral-600 border-t border-neutral-100 dark:border-neutral-900 pt-6">
              <a href="https://github.com/jayfelpareja" target="_blank" rel="noopener noreferrer" aria-label="GitHub Developer Profile" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
                <GithubIcon className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/jayfelpareja/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Professional Network" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <span className="text-[10px] font-mono tracking-wider text-neutral-300 dark:text-neutral-800 ml-auto select-none">
                EST. 2026
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};