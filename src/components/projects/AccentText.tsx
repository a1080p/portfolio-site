/** Renders "Show up.\nStack the *days.*" with the *starred* part in the theme's accent color */
export function AccentText({ text }: { text: string }) {
  return (
    <>
      {text.split('*').map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="pt-accent">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
