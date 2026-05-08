'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, role, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        setSubmitting(false);
        return;
      }
      setSubmitted(true);
    } catch {
      setError('Network error. Please try again or email hello@precaliq.com.');
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="card-spotlight bg-white rounded-2xl ring-1 ring-border shadow-card p-8 text-center">
        <div className="w-12 h-12 mx-auto mb-4 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.12), rgba(34,197,94,0.04))' }}>
          <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-charcoal">Thanks — we&apos;ll be in touch.</h3>
        <p className="mt-2 text-graphite text-sm leading-relaxed">
          We&apos;ll respond within one business day. In the meantime, feel free to email us at{' '}
          <a href="mailto:hello@precaliq.com" className="text-accent hover:text-accent-hover">
            hello@precaliq.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="card-spotlight bg-white rounded-2xl ring-1 ring-border shadow-card p-8">
      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-1.5">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 bg-snow ring-1 ring-border rounded-xl focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all text-charcoal placeholder:text-slate/50"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-1.5">
            Work Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-snow ring-1 ring-border rounded-xl focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all text-charcoal placeholder:text-slate/50"
            placeholder="john@company.com"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-charcoal mb-1.5">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full px-4 py-3 bg-snow ring-1 ring-border rounded-xl focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all text-charcoal placeholder:text-slate/50"
            placeholder="Acme Construction"
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-semibold text-charcoal mb-1.5">
            Role
          </label>
          <select
            id="role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-3 bg-snow ring-1 ring-border rounded-xl focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all text-charcoal"
          >
            <option value="">Select your role</option>
            <option value="estimator">Estimator</option>
            <option value="project-manager">Project Manager</option>
            <option value="preconstruction-manager">Preconstruction Manager</option>
            <option value="owner">Owner / Executive</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-1.5">
            Tell us about your workflow{' '}
            <span className="font-normal text-slate">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 bg-snow ring-1 ring-border rounded-xl focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all resize-none text-charcoal placeholder:text-slate/50"
            placeholder="What types of projects do you bid on? What tools do you currently use?"
          />
        </div>

        {error && (
          <div role="alert" className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full px-8 py-3.5 text-white rounded-xl text-[0.9375rem] font-semibold bg-accent hover:bg-accent-hover transition-all duration-300 shadow-sm hover:shadow-accent cursor-pointer btn-shimmer disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {submitting ? 'Sending...' : 'Request Demo'}
        </button>
        <p className="text-xs text-slate text-center">
          We&apos;ll respond within one business day. No spam, no obligations.
        </p>
      </form>
    </div>
  );
}
