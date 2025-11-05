export default function Page({ index, title, text, theme = 'sunset' }) {
  const isEven = (index + 1) % 2 === 0;
  return (
    <div className="book-page" role="article" aria-label={`Page ${index + 1}`}>
      <div className="page-art" style={{
        background: isEven
          ? 'radial-gradient(800px 400px at 100% 0%, rgba(254, 215, 170, 0.35), transparent), radial-gradient(600px 600px at -10% 120%, rgba(219, 234, 254, 0.35), transparent)'
          : 'radial-gradient(800px 400px at 0% 0%, rgba(186, 230, 253, 0.35), transparent), radial-gradient(600px 600px at 120% 100%, rgba(254, 249, 195, 0.35), transparent)'
      }} />
      <div className="safeline" aria-hidden="true" />
      <div className="page-inner">
        <div className="badge">?? ?????? ?? ????? ????</div>
        <div className="page-title">{title}</div>
        <div className="page-text">{text}</div>
        <svg className="illus" viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="fur" x1="0" x2="1">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
            <linearGradient id="wool" x1="0" x2="1">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
          {/* Cat */}
          <g transform="translate(20,60)">
            <ellipse cx="30" cy="30" rx="30" ry="20" fill="url(#fur)" opacity="0.9"/>
            <circle cx="60" cy="20" r="16" fill="url(#fur)" opacity="0.9"/>
            <polygon points="52,6 58,18 44,14" fill="#fb923c" />
            <polygon points="68,6 62,18 76,14" fill="#fb923c" />
            <circle cx="56" cy="20" r="2" fill="#111827"/>
            <circle cx="66" cy="20" r="2" fill="#111827"/>
            <path d="M58 26 Q62 28 66 26" stroke="#111827" stroke-width="2" fill="none"/>
            <path d="M14 34 Q8 40 14 46" stroke="#fb923c" stroke-width="6" fill="none" stroke-linecap="round"/>
          </g>
          {/* Baby Goat */}
          <g transform="translate(100,70)">
            <ellipse cx="40" cy="25" rx="36" ry="18" fill="url(#wool)" opacity="0.9"/>
            <circle cx="20" cy="20" r="14" fill="url(#wool)" opacity="0.9"/>
            <polygon points="10,10 2,2 16,6" fill="#93c5fd"/>
            <circle cx="16" cy="20" r="2" fill="#0f172a"/>
            <path d="M20 28 q6 4 12 0" stroke="#0f172a" stroke-width="2" fill="none"/>
            <path d="M34 40 l-6 10" stroke="#60a5fa" stroke-width="5" stroke-linecap="round"/>
            <path d="M48 40 l6 10" stroke="#60a5fa" stroke-width="5" stroke-linecap="round"/>
          </g>
        </svg>
        <div className="page-footer">
          <span>????? {index + 1}</span>
          <span>0.125in safe-zone ? 15pt</span>
        </div>
      </div>
    </div>
  );
}
