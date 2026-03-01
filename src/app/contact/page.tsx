import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Contact — Bildera' };

const faqs = [
  {
    q: 'How long does a demo take?',
    a: 'Most demos run 30 minutes. We walk through your workflow, show Bildera on a real spec, and answer questions.',
  },
  {
    q: 'Do I need to prepare anything?',
    a: 'No preparation needed. If you have a spec PDF you\'d like us to demo with, we\'re happy to use it — but it\'s not required.',
  },
  {
    q: 'Is there a free plan?',
    a: 'Yes. After the demo, you can start with the Free plan — one project, three categories, no credit card required.',
  },
  {
    q: 'How quickly can I be up and running?',
    a: 'Most teams are generating their first takeoff within 15 minutes of signing up. There\'s nothing to install — Bildera runs in your browser.',
  },
];

export default function ContactPage() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900">Request a Demo</h1>
        <p className="mt-4 text-center text-lg text-gray-600 max-w-2xl mx-auto">
          See how Bildera can transform your preconstruction workflow. Fill out the form and we&apos;ll
          be in touch within one business day.
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F4E79] focus:border-transparent outline-none"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F4E79] focus:border-transparent outline-none"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F4E79] focus:border-transparent outline-none"
                  placeholder="Acme Construction"
                />
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <select
                  id="role"
                  name="role"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F4E79] focus:border-transparent outline-none bg-white"
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Tell us about your workflow (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F4E79] focus:border-transparent outline-none resize-none"
                  placeholder="What types of projects do you bid on? What tools do you currently use?"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-[#1F4E79] text-white rounded-lg text-lg font-medium hover:bg-[#163a5c] transition"
              >
                Request Demo
              </button>
              <p className="text-xs text-gray-400 text-center">
                We&apos;ll respond within one business day. No spam, no obligations.
              </p>
            </form>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Common Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q}>
                  <h3 className="font-semibold text-gray-900">{faq.q}</h3>
                  <p className="mt-1 text-gray-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900">Prefer email?</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Reach us directly at{' '}
                <a href="mailto:hello@bildera.com" className="text-[#1F4E79] underline">
                  hello@bildera.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
