import type { Metadata } from 'next';
import AnimatedReveal from '@/components/AnimatedReveal';
import Section from '@/components/Section';
import SectionLabel from '@/components/SectionLabel';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'PreCal-IQ Privacy Policy. Learn how we collect, use, and protect your information when using the PreCal-IQ preconstruction platform.',
  alternates: { canonical: 'https://precaliq.com/privacy' },
};

export default function PrivacyPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-white py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedReveal direction="fade">
            <SectionLabel>Legal</SectionLabel>
          </AnimatedReveal>
          <AnimatedReveal direction="up" delay={100}>
            <h1 className="text-4xl md:text-[3rem] font-extrabold leading-tight tracking-[-0.02em] text-charcoal">Privacy Policy</h1>
          </AnimatedReveal>
          <AnimatedReveal direction="up" delay={200}>
            <p className="mt-4 text-sm text-slate">Last updated: March 1, 2026</p>
          </AnimatedReveal>
        </div>
      </section>

      <Section bg="snow">
        <AnimatedReveal direction="up">
          <div className="prose-rich space-y-8 text-graphite leading-relaxed text-[1.0625rem]">
            <div>
              <h2 className="text-xl font-bold text-charcoal mb-3">1. Introduction</h2>
              <p>
                PreCal-IQ (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), operated by Caliber Technologies, is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the PreCal-IQ platform and website (collectively, the &ldquo;Service&rdquo;).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-charcoal mb-3">2. Information We Collect</h2>
              <p className="mb-3"><strong className="text-charcoal">Account Information:</strong> When you register, we collect your name, email address, company name, and role.</p>
              <p className="mb-3"><strong className="text-charcoal">Project Data:</strong> We process construction specifications, architectural plans, takeoff data, vendor pricing, and bid documents that you upload to the Service. This data is used solely to provide the Service to you.</p>
              <p className="mb-3"><strong className="text-charcoal">Usage Data:</strong> We automatically collect information about how you interact with the Service, including pages visited, features used, and timestamps.</p>
              <p><strong className="text-charcoal">Device Information:</strong> We collect browser type, operating system, IP address, and device identifiers for security and analytics purposes.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-charcoal mb-3">3. How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1.5">
                <li>Provide, maintain, and improve the PreCal-IQ platform</li>
                <li>Process and generate takeoffs, bids, and related documents</li>
                <li>Send transactional communications (account confirmations, security alerts)</li>
                <li>Provide customer support</li>
                <li>Analyze usage patterns to improve our product</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-charcoal mb-3">4. Data Security</h2>
              <p>
                We implement industry-standard security measures, including encryption in transit (TLS 1.3) and at rest (AES-256), regular security audits, and access controls. Your construction documents and project data are stored in secure data centers within the United States.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-charcoal mb-3">5. Data Sharing</h2>
              <p>We do not sell your personal information or project data. We may share information with:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1.5">
                <li><strong className="text-charcoal">Service providers</strong> who assist in operating the platform (cloud hosting, analytics)</li>
                <li><strong className="text-charcoal">Vendors</strong> you explicitly invite through the Vendor Portal (limited to takeoff line items you choose to share)</li>
                <li><strong className="text-charcoal">Legal authorities</strong> when required by law</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-charcoal mb-3">6. Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of your personal data at any time by contacting us at <a href="mailto:privacy@precaliq.com" className="text-accent hover:text-accent-hover underline underline-offset-2">privacy@precaliq.com</a>. You may export or delete your project data through the platform&apos;s settings at any time.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-charcoal mb-3">7. Cookies</h2>
              <p>
                We use essential cookies for authentication and session management. We use analytics cookies to understand how the Service is used. You may disable non-essential cookies through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-charcoal mb-3">8. Data Retention</h2>
              <p>
                We retain your account information and project data for as long as your account is active. Upon account deletion, your data is permanently removed from our systems within 30 days, except where retention is required by law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-charcoal mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify registered users of material changes via email. Continued use of the Service after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-charcoal mb-3">10. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, contact us at <a href="mailto:privacy@precaliq.com" className="text-accent hover:text-accent-hover underline underline-offset-2">privacy@precaliq.com</a> or by mail at Caliber Technologies, PreCal-IQ Privacy, United States.
              </p>
            </div>
          </div>
        </AnimatedReveal>
      </Section>
    </div>
  );
}
