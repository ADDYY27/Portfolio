/**
 * Horizontally scrolling ticker strip.
 * The text is repeated `repeat` times so the loop is seamless.
 */
export default function Marquee({
  text   = "Building the web, one commit at a time ·",
  repeat = 10,
  speed  = "22s",
}) {
  return (
    <div className="overflow-hidden border-t border-b border-[#2a2820] py-5">
      <div
        className="flex gap-10 whitespace-nowrap"
        style={{ animation: `marquee ${speed} linear infinite` }}
      >
        {Array(repeat)
          .fill(text)
          .map((t, i) => (
            <span
              key={i}
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
              className="text-xl text-[#2e2c26]"
            >
              {t}
            </span>
          ))}
      </div>
    </div>
  );
}
