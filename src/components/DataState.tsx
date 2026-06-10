type DataStateProps = {
  title: string;
  message: string;
};

export function DataState({ title, message }: DataStateProps) {
  return (
    <div className="border border-slate-200 bg-white p-6 text-slate-700 shadow-soft">
      <p className="font-semibold text-ink">{title}</p>
      <p className="mt-2 text-sm leading-6">{message}</p>
    </div>
  );
}
