interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center group">
      <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient-amber inline-block">
        {value}
      </div>
      <div className="text-sm text-white/50 mt-2 font-medium tracking-wide uppercase">{label}</div>
    </div>
  );
}
