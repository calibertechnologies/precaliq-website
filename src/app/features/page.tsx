import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Features — PreCalIQ' };

const features = [
  {
    title: 'AI Specification Parsing',
    description: 'Upload spec PDFs and PreCalIQ reads every section — identifying manufacturers, materials, finishes, fire ratings, hardware sets, and standards. Specs are organized by CSI division and cross-referenced during takeoff generation.',
  },
  {
    title: 'Architectural Plan Analysis',
    description: 'Upload architectural plans and PreCalIQ classifies sheets (door schedules, finish schedules, floor plans), extracts door and room data, and combines plan data with specs for complete takeoffs.',
  },
  {
    title: '15-Category Takeoffs',
    description: 'Generate takeoffs for doors, millwork, cabinets, flooring, storefront, ceiling systems, painting, waterproofing, roofing, MEP rough-ins, structural steel, windows, specialty hardware, corner guards, and bumper rails.',
  },
  {
    title: 'Multi-Option Variants',
    description: 'Generate Standard, Premium, and Budget options for any takeoff. AI swaps materials, manufacturers, and finishes while preserving quantities and locations. Compare options side-by-side.',
  },
  {
    title: 'Vendor Portal & Pricing',
    description: 'Invite vendors, send takeoffs for pricing, and collect quotes through a secure portal. No vendor login required — just a secure link. Vendor pricing is automatically parsed and matched to takeoff items.',
  },
  {
    title: 'Collaborative Bid Builder',
    description: 'Create bid sessions, select variant options per category, and watch totals update in real-time. Every selection change is logged with user, timestamp, and cost delta.',
  },
  {
    title: 'Bid Document Generation',
    description: 'Generate professional PDF bid proposals and Excel workbooks with one click. Include company branding, scope of work, cost breakdowns, terms, and signature lines.',
  },
  {
    title: 'Change Order Detection',
    description: 'Upload a revised spec or plan and PreCalIQ compares it to the original, identifying additions, removals, and modifications. Each change includes estimated cost impact.',
  },
  {
    title: 'Excel Export',
    description: 'Export single takeoffs, multi-category workbooks, variant comparisons, and full bid packages to professionally formatted Excel files — ready for submission or further analysis.',
  },
];

export default function FeaturesPage() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900">Features</h1>
        <p className="mt-4 text-center text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to go from specs and plans to a winning bid.
        </p>

        <div className="mt-16 space-y-12">
          {features.map((feature, i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className="w-8 h-8 bg-[#1F4E79] text-white rounded-lg flex items-center justify-center font-bold shrink-0 text-sm">
                {i + 1}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{feature.title}</h2>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="/contact" className="px-8 py-3 bg-[#1F4E79] text-white rounded-lg text-lg font-medium hover:bg-[#163a5c] transition">
            Request a Demo
          </a>
        </div>
      </div>
    </div>
  );
}
