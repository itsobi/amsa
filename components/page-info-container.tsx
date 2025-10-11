export function PageInfoContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-8 mx-auto max-w-4xl px-2 xl:px-0">
      {children}
    </div>
  );
}
