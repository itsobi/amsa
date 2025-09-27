interface Props {
  title: string;
  description?: string;
}

export function PageHeading({ title, description }: Props) {
  return (
    <div className="mb-10 space-y-2">
      <h1 className="text-2xl md:text-4xl font-semibold">{title}</h1>
      {description && (
        <p className="text-muted-foreground text-sm md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
