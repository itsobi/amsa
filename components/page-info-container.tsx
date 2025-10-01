export function PageInfoContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-8 mx-auto max-w-6xl">{children}</div>
  );
}
