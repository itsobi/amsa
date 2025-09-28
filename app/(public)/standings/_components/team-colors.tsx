interface Props {
  color1: string | undefined;
  color2: string | undefined;
}

export function TeamColors({ color1, color2 }: Props) {
  return (
    <div className="flex items-center gap-2">
      {color1 && (
        <span
          className={`w-3 h-3 rounded`}
          style={{ backgroundColor: color1 }}
        />
      )}
      {color2 && (
        <span
          className={`w-3 h-3 rounded`}
          style={{ backgroundColor: color2 }}
        />
      )}
    </div>
  );
}
