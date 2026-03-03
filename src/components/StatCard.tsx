interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold tracking-tight">{value}</div>
      <div className="text-sm text-white/60 mt-2 font-medium">{label}</div>
    </div>
  );
}
