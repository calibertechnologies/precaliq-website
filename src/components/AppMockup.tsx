/* ──────────────────────────────────────────
   AppMockup — Pure CSS/HTML mockups of Precaliq
   5 variants: Hero, Dashboard, Takeoff, BidBuilder, Specs
   ────────────────────────────────────────── */

/* ── Shared tiny components ── */
function StatusBadge({ status }: { status: 'active' | 'draft' | 'completed' }) {
  const colors = {
    active: { bg: '#DCFCE7', text: '#166534' },
    draft: { bg: '#F3F4F6', text: '#6B7280' },
    completed: { bg: '#DBEAFE', text: '#1E40AF' },
  };
  const c = colors[status];
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-[8px] font-semibold uppercase tracking-wide"
      style={{ background: c.bg, color: c.text }}
    >
      {status}
    </span>
  );
}

function ProgressBar({ pct, color = '#2563EB' }: { pct: number; color?: string }) {
  return (
    <div className="w-full h-1.5 rounded-full bg-gray-100">
      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
    </div>
  );
}

function MockNav() {
  return (
    <div className="flex items-center h-10 px-4 gap-4 text-[9px] font-semibold text-white/80" style={{ background: '#1F4E79' }}>
      <span className="font-bold text-[10px] tracking-tight text-white">Precaliq</span>
      <div className="flex-1" />
      <span className="opacity-60">Projects</span>
      <span className="opacity-60">Settings</span>
      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[8px] text-white font-bold">JD</div>
    </div>
  );
}

/* ═══════════════════════════════════════
   0. HERO MOCKUP — Rich, multi-panel project view
   The visual centerpiece for the hero section
   ═══════════════════════════════════════ */

export function HeroMockup() {
  const takeoffRows = [
    { item: 'D-101', loc: 'Main Lobby', material: 'Solid Core Oak', hardware: 'Schlage ND80', fire: '90 min', qty: 2, cost: '$2,480' },
    { item: 'D-102', loc: 'Office Suite A', material: 'Hollow Metal', hardware: 'Von Duprin 99', fire: '60 min', qty: 4, cost: '$3,560' },
    { item: 'D-103', loc: 'Conference Rm', material: 'Glass Aluminum', hardware: 'DERA-950', fire: '—', qty: 1, cost: '$2,100' },
    { item: 'D-104', loc: 'Storage B', material: 'Solid Core Birch', hardware: 'Schlage ND40', fire: '60 min', qty: 2, cost: '$1,960' },
    { item: 'D-105', loc: 'Corridor 2F', material: 'Hollow Metal', hardware: 'Von Duprin 98', fire: '90 min', qty: 3, cost: '$2,670' },
    { item: 'D-106', loc: 'Exam Room 1', material: 'Solid Core Maple', hardware: 'Schlage ND80', fire: '60 min', qty: 2, cost: '$2,240' },
  ];

  const sidebarItems = [
    { icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z', label: 'Overview', active: false },
    { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', label: 'Documents', active: false },
    { icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10', label: 'Specs', active: false },
    { icon: 'M4 6h16M4 10h16M4 14h16M4 18h16', label: 'Takeoffs', active: true },
    { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', label: 'Vendors', active: false },
    { icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z', label: 'Bid Builder', active: false },
  ];

  return (
    <div className="bg-white min-h-0">
      <MockNav />
      {/* Project header */}
      <div className="px-4 pt-3 pb-2 bg-white border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[9px] font-bold text-white" style={{ background: '#2563EB' }}>HM</div>
            <div>
              <div className="flex items-center gap-2">
                <p className="text-[11px] font-bold text-gray-900">Highland Medical Center</p>
                <StatusBadge status="active" />
              </div>
              <p className="text-[7px] text-gray-400 mt-0.5">Summit Healthcare · 12 takeoffs · 78% complete</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="px-2 py-1 rounded-md text-[7px] font-semibold bg-gray-100 text-gray-500">Export</div>
            <div className="px-2 py-1 rounded-md text-[7px] font-semibold text-white" style={{ background: '#2563EB' }}>Generate Takeoff</div>
          </div>
        </div>
      </div>
      {/* Main content with sidebar */}
      <div className="flex">
        {/* Left sidebar */}
        <div className="w-[120px] bg-gray-50 border-r border-gray-100 py-2">
          {sidebarItems.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 px-3 py-1.5 mx-1.5 rounded-md text-[8px] font-medium ${
                item.active ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              <svg className={`w-3 h-3 shrink-0 ${item.active ? 'text-blue-600' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
              </svg>
              {item.label}
            </div>
          ))}
        </div>
        {/* Main area */}
        <div className="flex-1 min-w-0">
          {/* Takeoff header */}
          <div className="px-4 py-2 bg-white border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-[9px] font-bold text-gray-900">Interior Doors</span>
              <span className="px-1.5 py-0.5 rounded text-[7px] font-medium bg-blue-50 text-blue-600">12 items</span>
            </div>
            <div className="flex items-center gap-1">
              {['Standard', 'Premium', 'Budget'].map((v) => (
                <div
                  key={v}
                  className={`px-2.5 py-1 rounded-md text-[7px] font-semibold ${v === 'Standard' ? 'text-white' : 'bg-gray-100 text-gray-500'}`}
                  style={v === 'Standard' ? { background: '#2563EB' } : undefined}
                >
                  {v}
                </div>
              ))}
            </div>
          </div>
          {/* Data table */}
          <div className="px-3 py-1">
            <table className="w-full">
              <thead>
                <tr className="text-[7px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                  <th className="text-left py-2 px-2">Item</th>
                  <th className="text-left py-2 px-2">Location</th>
                  <th className="text-left py-2 px-2">Material</th>
                  <th className="text-left py-2 px-2">Hardware</th>
                  <th className="text-left py-2 px-2">Fire</th>
                  <th className="text-center py-2 px-2">Qty</th>
                  <th className="text-right py-2 px-2">Cost</th>
                </tr>
              </thead>
              <tbody>
                {takeoffRows.map((r, i) => (
                  <tr key={r.item} className={`text-[8px] border-b border-gray-50 ${i === 0 ? 'bg-blue-50/40' : ''}`}>
                    <td className="py-1.5 px-2 font-semibold text-blue-600">{r.item}</td>
                    <td className="py-1.5 px-2 text-gray-600">{r.loc}</td>
                    <td className="py-1.5 px-2 text-gray-700 font-medium">{r.material}</td>
                    <td className="py-1.5 px-2 text-gray-500 text-[7px]">{r.hardware}</td>
                    <td className="py-1.5 px-2">
                      {r.fire !== '—' ? (
                        <span className="px-1.5 py-0.5 rounded text-[7px] font-medium bg-orange-50 text-orange-600">{r.fire}</span>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="py-1.5 px-2 text-center font-semibold text-gray-700">{r.qty}</td>
                    <td className="py-1.5 px-2 text-right font-semibold text-gray-900">{r.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Bottom summary bar */}
          <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-[7px] text-gray-400"><span className="font-semibold text-gray-600">6</span> items shown</div>
              <div className="text-[7px] text-gray-400"><span className="font-semibold text-gray-600">14</span> total qty</div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[8px] text-gray-500">Category Total</span>
              <span className="text-[11px] font-bold text-gray-900">$15,010</span>
            </div>
          </div>
        </div>
        {/* Right summary panel */}
        <div className="w-[130px] bg-white border-l border-gray-100 p-3">
          <p className="text-[8px] font-bold text-gray-400 uppercase tracking-wider mb-3">Bid Summary</p>
          <div className="space-y-1.5">
            {[
              { cat: 'Int. Doors', amt: '$45.2K', color: '#2563EB' },
              { cat: 'Flooring', amt: '$128.5K', color: '#059669' },
              { cat: 'Millwork', amt: '$67.8K', color: '#7C3AED' },
              { cat: 'Cabinets', amt: '$89.3K', color: '#D97706' },
              { cat: 'Ceilings', amt: '$34.6K', color: '#DC2626' },
            ].map((c) => (
              <div key={c.cat} className="flex items-center justify-between text-[7px]">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: c.color }} />
                  <span className="text-gray-500">{c.cat}</span>
                </div>
                <span className="font-semibold text-gray-700">{c.amt}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-100 pt-2 mt-3">
            <div className="flex justify-between text-[8px]">
              <span className="font-bold text-gray-700">Total</span>
              <span className="font-bold" style={{ color: '#2563EB' }}>$478.9K</span>
            </div>
          </div>
          {/* Mini chart */}
          <div className="mt-3 flex items-end gap-[3px] h-[32px]">
            {[65, 100, 55, 72, 28, 42].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${h}%`,
                  background: i === 1 ? '#2563EB' : '#E5E7EB',
                  opacity: i === 1 ? 1 : 0.6,
                }}
              />
            ))}
          </div>
          <p className="text-[6px] text-gray-300 mt-1.5 text-center">Category cost distribution</p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   1. DASHBOARD MOCKUP
   ═══════════════════════════════════════ */

export function DashboardMockup() {
  const projects = [
    { name: 'Highland Medical Center', client: 'Summit Healthcare', status: 'active' as const, pct: 78, takeoffs: 12, updated: '2 hrs ago' },
    { name: 'Riverside Office Tower', client: 'Lakeshore Dev Group', status: 'draft' as const, pct: 15, takeoffs: 3, updated: '1 day ago' },
    { name: 'Metro Transit Hub', client: 'City of Metro', status: 'completed' as const, pct: 100, takeoffs: 18, updated: '5 days ago' },
  ];

  return (
    <div className="bg-gray-50 min-h-0">
      <MockNav />
      <div className="px-5 pt-4 pb-3 bg-white border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold text-gray-900">Projects</p>
            <p className="text-[8px] text-gray-400 mt-0.5">3 projects · 2 active</p>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="px-2.5 py-1 rounded-md text-[8px] font-semibold text-white" style={{ background: '#2563EB' }}>
              + New Project
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 grid grid-cols-3 gap-3">
        {projects.map((p) => (
          <div key={p.name} className="bg-white rounded-lg p-3 shadow-sm ring-1 ring-gray-100">
            <div className="flex items-start justify-between mb-2">
              <p className="text-[9px] font-bold text-gray-900 leading-tight max-w-[80%]">{p.name}</p>
              <StatusBadge status={p.status} />
            </div>
            <p className="text-[7px] text-gray-400 mb-2.5">{p.client}</p>
            <ProgressBar pct={p.pct} />
            <div className="flex items-center justify-between mt-2">
              <span className="text-[7px] text-gray-400">{p.pct}% complete</span>
              <span className="text-[7px] text-gray-400">{p.takeoffs} takeoffs</span>
            </div>
            <div className="mt-2 pt-2 border-t border-gray-50">
              <span className="text-[7px] text-gray-300">Updated {p.updated}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   2. TAKEOFF MOCKUP
   ═══════════════════════════════════════ */

export function TakeoffMockup() {
  const tabs = ['Overview', 'Documents', 'Specs', 'Takeoffs', 'Vendors', 'Bid Builder'];
  const variants = ['Standard', 'Premium', 'Budget'];
  const rows = [
    { item: 'D-101', loc: 'Main Lobby', material: 'Solid Core Oak', hardware: 'Schlage ND80', fire: '90 min', qty: 2 },
    { item: 'D-102', loc: 'Office Suite A', material: 'Hollow Metal', hardware: 'Von Duprin 99', fire: '60 min', qty: 4 },
    { item: 'D-103', loc: 'Conference Rm', material: 'Glass Aluminum', hardware: 'DERA-950', fire: '—', qty: 1 },
    { item: 'D-104', loc: 'Storage B', material: 'Solid Core Birch', hardware: 'Schlage ND40', fire: '60 min', qty: 2 },
    { item: 'D-105', loc: 'Corridor 2F', material: 'Hollow Metal', hardware: 'Von Duprin 98', fire: '90 min', qty: 3 },
  ];

  return (
    <div className="bg-gray-50 min-h-0">
      <MockNav />
      <div className="bg-white border-b border-gray-100 px-4 flex items-end gap-0">
        {tabs.map((t) => (
          <div
            key={t}
            className={`px-3 py-2 text-[8px] font-semibold ${t === 'Takeoffs' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400'}`}
          >
            {t}
          </div>
        ))}
      </div>
      <div className="px-4 py-2.5 bg-white flex items-center gap-4 border-b border-gray-100">
        <span className="text-[8px] font-bold text-gray-900">Interior Doors</span>
        <div className="flex items-center gap-1 ml-auto">
          {variants.map((v) => (
            <div
              key={v}
              className={`px-2.5 py-1 rounded text-[7px] font-semibold ${v === 'Standard' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}
            >
              {v}
            </div>
          ))}
        </div>
      </div>
      <div className="px-3 py-2">
        <table className="w-full">
          <thead>
            <tr className="text-[7px] font-bold text-gray-400 uppercase tracking-wider">
              <th className="text-left py-1.5 px-2">Item</th>
              <th className="text-left py-1.5 px-2">Location</th>
              <th className="text-left py-1.5 px-2">Material</th>
              <th className="text-left py-1.5 px-2">Hardware</th>
              <th className="text-left py-1.5 px-2">Fire Rating</th>
              <th className="text-right py-1.5 px-2">Qty</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.item} className={`text-[8px] ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                <td className="py-1.5 px-2 font-semibold text-blue-600">{r.item}</td>
                <td className="py-1.5 px-2 text-gray-600">{r.loc}</td>
                <td className="py-1.5 px-2 text-gray-600">{r.material}</td>
                <td className="py-1.5 px-2 text-gray-600">{r.hardware}</td>
                <td className="py-1.5 px-2">
                  {r.fire !== '—' ? (
                    <span className="px-1.5 py-0.5 rounded text-[7px] font-medium bg-orange-50 text-orange-600">{r.fire}</span>
                  ) : (
                    <span className="text-gray-300">—</span>
                  )}
                </td>
                <td className="py-1.5 px-2 text-right font-semibold text-gray-700">{r.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   3. BID BUILDER MOCKUP
   ═══════════════════════════════════════ */

export function BidBuilderMockup() {
  const categories = [
    { name: 'Interior Doors', amount: '$45,200', variant: 'Premium', color: '#2563EB' },
    { name: 'Flooring', amount: '$128,500', variant: 'Standard', color: '#059669' },
    { name: 'Millwork', amount: '$67,800', variant: 'Premium', color: '#7C3AED' },
    { name: 'Cabinets', amount: '$89,300', variant: 'Standard', color: '#D97706' },
    { name: 'Ceiling Systems', amount: '$34,600', variant: 'Budget', color: '#DC2626' },
    { name: 'Painting', amount: '$52,100', variant: 'Standard', color: '#0891B2' },
  ];

  return (
    <div className="bg-gray-50 min-h-0">
      <MockNav />
      <div className="px-5 pt-3 pb-2 bg-white border-b border-gray-100">
        <p className="text-[11px] font-bold text-gray-900">Bid Builder — Highland Medical Center</p>
        <p className="text-[8px] text-gray-400 mt-0.5">Bid Session V2 · Last edited 2 hrs ago</p>
      </div>
      <div className="flex">
        <div className="flex-1 p-3 grid grid-cols-2 gap-2">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-white rounded-lg p-2.5 shadow-sm ring-1 ring-gray-100">
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="w-2 h-2 rounded-sm" style={{ background: cat.color }} />
                <span className="text-[8px] font-semibold text-gray-800">{cat.name}</span>
              </div>
              <p className="text-[12px] font-bold text-gray-900">{cat.amount}</p>
              <div className="mt-1.5 flex items-center gap-1">
                <span className="text-[7px] text-gray-400">Variant:</span>
                <span className="px-1.5 py-0.5 rounded text-[7px] font-medium bg-blue-50 text-blue-600">{cat.variant}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[140px] bg-white border-l border-gray-100 p-3">
          <p className="text-[9px] font-bold text-gray-900 mb-3">Bid Summary</p>
          <div className="space-y-2">
            <div className="flex justify-between text-[8px]">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-semibold text-gray-700">$417,500</span>
            </div>
            <div className="flex justify-between text-[8px]">
              <span className="text-gray-500">Contingency (5%)</span>
              <span className="font-semibold text-gray-700">$20,875</span>
            </div>
            <div className="flex justify-between text-[8px]">
              <span className="text-gray-500">OH&P (10%)</span>
              <span className="font-semibold text-gray-700">$41,750</span>
            </div>
            <div className="border-t border-gray-100 pt-2 mt-2">
              <div className="flex justify-between text-[9px]">
                <span className="font-bold text-gray-900">Total</span>
                <span className="font-bold text-blue-600">$478,900</span>
              </div>
            </div>
          </div>
          <div className="mt-4 px-2 py-1.5 rounded-md text-[7px] font-semibold text-white text-center" style={{ background: '#2563EB' }}>
            Generate Bid Doc
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   4. SPECS MOCKUP
   ═══════════════════════════════════════ */

export function SpecsMockup() {
  const tree = [
    { level: 0, label: '08 Openings', expanded: true },
    { level: 1, label: '08 11 00 Metal Doors & Frames', expanded: true },
    { level: 1, label: '08 14 00 Wood Doors', active: true },
    { level: 1, label: '08 31 00 Access Doors & Panels' },
    { level: 1, label: '08 41 00 Entrances & Storefronts' },
    { level: 0, label: '09 Finishes', expanded: true },
    { level: 1, label: '09 29 00 Gypsum Board' },
    { level: 1, label: '09 30 00 Tiling' },
    { level: 1, label: '09 65 00 Resilient Flooring' },
  ];

  const specFields = [
    { label: 'Manufacturer', value: 'VT Industries', highlight: true },
    { label: 'Material', value: 'Solid Core Wood, Oak Veneer', highlight: true },
    { label: 'Finish', value: 'Factory-applied, UV-cured polyurethane' },
    { label: 'Fire Rating', value: '90-minute WHI listed', highlight: true },
    { label: 'Hardware Prep', value: 'Mortise lock, 161 hinge cutout' },
    { label: 'Glazing', value: 'None specified' },
    { label: 'Warranty', value: 'Limited lifetime structural' },
  ];

  return (
    <div className="bg-gray-50 min-h-0">
      <MockNav />
      <div className="bg-white border-b border-gray-100 px-4 flex items-end gap-0">
        {['Overview', 'Documents', 'Specs', 'Takeoffs', 'Vendors', 'Bid Builder'].map((t) => (
          <div
            key={t}
            className={`px-3 py-2 text-[8px] font-semibold ${t === 'Specs' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400'}`}
          >
            {t}
          </div>
        ))}
      </div>
      <div className="flex">
        <div className="w-[160px] bg-white border-r border-gray-100 p-3">
          <p className="text-[8px] font-bold text-gray-400 uppercase tracking-wider mb-2">CSI Divisions</p>
          <div className="space-y-0.5">
            {tree.map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-1 px-2 py-1 rounded text-[8px] ${
                  item.active ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-600'
                }`}
                style={{ paddingLeft: `${8 + item.level * 12}px` }}
              >
                {item.level === 0 ? (
                  <svg className="w-2.5 h-2.5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.expanded ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'} />
                  </svg>
                ) : (
                  <span className="w-2.5" />
                )}
                <span className="truncate">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 p-4">
          <div className="mb-3">
            <p className="text-[10px] font-bold text-gray-900">08 14 00 — Wood Doors</p>
            <p className="text-[7px] text-gray-400 mt-0.5">Extracted from Project Specification, pages 142–148</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm ring-1 ring-gray-100 overflow-hidden">
            {specFields.map((f, i) => (
              <div key={i} className={`flex items-center px-3 py-1.5 text-[8px] ${i > 0 ? 'border-t border-gray-50' : ''}`}>
                <span className="w-[90px] text-gray-400 font-medium shrink-0">{f.label}</span>
                <span className={`font-semibold ${f.highlight ? 'text-gray-900 bg-blue-50 px-1.5 py-0.5 rounded' : 'text-gray-600'}`}>
                  {f.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
