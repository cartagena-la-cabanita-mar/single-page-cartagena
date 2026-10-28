const lemonSvg = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="240" height="200">
  <defs>
    <radialGradient id="lg" cx="32%" cy="28%" r="72%">
      <stop offset="0%"   stop-color="#FFFDE7"/>
      <stop offset="12%"  stop-color="#FFF176"/>
      <stop offset="35%"  stop-color="#F9C400"/>
      <stop offset="65%"  stop-color="#E6A800"/>
      <stop offset="85%"  stop-color="#C98600"/>
      <stop offset="100%" stop-color="#A86D00"/>
    </radialGradient>
    <radialGradient id="sp" cx="38%" cy="32%" r="62%">
      <stop offset="0%"   stop-color="rgba(255,255,255,0.82)"/>
      <stop offset="45%"  stop-color="rgba(255,255,255,0.28)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
    </radialGradient>
    <radialGradient id="lf" cx="42%" cy="38%" r="60%">
      <stop offset="0%"   stop-color="#A5D6A7"/>
      <stop offset="55%"  stop-color="#388E3C"/>
      <stop offset="100%" stop-color="#1B5E20"/>
    </radialGradient>
    <radialGradient id="tip" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#D4920A"/>
      <stop offset="100%" stop-color="#A86D00"/>
    </radialGradient>
  </defs>

  <!-- Lemon 1 — large, rotated 22° -->
  <g transform="translate(72,78) rotate(22)" opacity="0.82">
    <!-- Drop shadow -->
    <ellipse cx="3" cy="7" rx="25" ry="11.5" fill="rgba(0,0,0,0.16)"/>
    <!-- Body -->
    <path d="M-24 0 C-27 -4.5 -25 -10.5 -19 -13.5 C-11 -17 11 -17 19 -13.5 C25 -10.5 27 -4.5 24 0 C27 4.5 25 10.5 19 13.5 C11 17 -11 17 -19 13.5 C-25 10.5 -27 4.5 -24 0Z"
      fill="url(#lg)" stroke="#B87800" stroke-width="0.7"/>
    <!-- Left tip -->
    <path d="M-24 0 C-26 -2 -31 -1.8 -30.5 0 C-31 1.8 -26 2 -24 0Z"
      fill="url(#tip)" stroke="#A06000" stroke-width="0.5"/>
    <!-- Right tip (nipple end) -->
    <path d="M24 0 C26 -2.5 32 -2 31.5 0 C32 2 26 2.5 24 0Z"
      fill="url(#tip)" stroke="#A06000" stroke-width="0.5"/>
    <!-- Navel ring on nipple end -->
    <ellipse cx="29" cy="0" rx="1.4" ry="1" fill="none" stroke="#8A5500" stroke-width="0.5" opacity="0.55"/>
    <!-- Stem -->
    <path d="M-2 -15.5 Q-0.5 -21 1.5 -24.5" stroke="#5D4037" stroke-width="1.4" fill="none" stroke-linecap="round"/>
    <!-- Leaf -->
    <path d="M1.5 -24.5 Q12 -36 18 -29 Q11 -21 1.5 -24.5Z" fill="url(#lf)" stroke="#2E7D32" stroke-width="0.7"/>
    <!-- Leaf midrib + side vein -->
    <path d="M1.5 -24.5 Q9.5 -29.5 18 -29" stroke="#1B5E20" stroke-width="0.5" fill="none"/>
    <path d="M8 -28 Q7 -24 9 -22" stroke="#2E7D32" stroke-width="0.35" fill="none" opacity="0.6"/>
    <!-- Specular highlight -->
    <ellipse cx="-9" cy="-6" rx="11" ry="5.5" fill="url(#sp)" transform="rotate(-28,-9,-6)"/>
    <!-- Peel texture (oil glands) -->
    <circle cx="-4"  cy="5"   r="0.9" fill="rgba(130,85,0,0.22)"/>
    <circle cx="6"   cy="-5"  r="0.8" fill="rgba(130,85,0,0.22)"/>
    <circle cx="12"  cy="7"   r="0.9" fill="rgba(130,85,0,0.2)"/>
    <circle cx="-12" cy="-3"  r="0.8" fill="rgba(130,85,0,0.2)"/>
    <circle cx="2"   cy="11"  r="0.7" fill="rgba(130,85,0,0.18)"/>
    <circle cx="-7"  cy="9"   r="0.7" fill="rgba(130,85,0,0.18)"/>
    <circle cx="17"  cy="-2"  r="0.7" fill="rgba(130,85,0,0.16)"/>
    <circle cx="-17" cy="4"   r="0.7" fill="rgba(130,85,0,0.16)"/>
    <circle cx="9"   cy="-10" r="0.7" fill="rgba(130,85,0,0.16)"/>
    <circle cx="-3"  cy="-9"  r="0.6" fill="rgba(130,85,0,0.15)"/>
    <circle cx="19"  cy="6"   r="0.6" fill="rgba(130,85,0,0.14)"/>
    <circle cx="-19" cy="-5"  r="0.6" fill="rgba(130,85,0,0.14)"/>
    <circle cx="4"   cy="-13" r="0.5" fill="rgba(130,85,0,0.13)"/>
    <circle cx="-8"  cy="13"  r="0.5" fill="rgba(130,85,0,0.13)"/>
    <circle cx="14"  cy="-8"  r="0.5" fill="rgba(130,85,0,0.12)"/>
    <circle cx="-14" cy="9"   r="0.5" fill="rgba(130,85,0,0.12)"/>
    <!-- Subtle equatorial crease line -->
    <path d="M-20 1 Q0 -2 20 1" stroke="rgba(160,100,0,0.12)" stroke-width="0.5" fill="none"/>
  </g>

  <!-- Lemon 2 — small, rotated −18° -->
  <g transform="translate(184,138) rotate(-18)" opacity="0.70">
    <ellipse cx="2" cy="5.5" rx="19.5" ry="9" fill="rgba(0,0,0,0.13)"/>
    <path d="M-18 0 C-21 -3.5 -19.5 -8.5 -14.5 -11 C-8.5 -13.5 8.5 -13.5 14.5 -11 C19.5 -8.5 21 -3.5 18 0 C21 3.5 19.5 8.5 14.5 11 C8.5 13.5 -8.5 13.5 -14.5 11 C-19.5 8.5 -21 3.5 -18 0Z"
      fill="url(#lg)" stroke="#B87800" stroke-width="0.6"/>
    <path d="M-18 0 C-20 -1.8 -25 -1.4 -24.5 0 C-25 1.4 -20 1.8 -18 0Z"
      fill="url(#tip)" stroke="#A06000" stroke-width="0.4"/>
    <path d="M18 0 C20 -1.8 25.5 -1.5 25 0 C25.5 1.5 20 1.8 18 0Z"
      fill="url(#tip)" stroke="#A06000" stroke-width="0.4"/>
    <ellipse cx="22.5" cy="0" rx="1.1" ry="0.8" fill="none" stroke="#8A5500" stroke-width="0.4" opacity="0.5"/>
    <path d="M-1 -12.5 Q0.5 -17 2 -19.5" stroke="#5D4037" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    <path d="M2 -19.5 Q10 -29 14.5 -23 Q8 -17 2 -19.5Z" fill="url(#lf)" stroke="#2E7D32" stroke-width="0.6"/>
    <path d="M2 -19.5 Q8.5 -25 14.5 -23" stroke="#1B5E20" stroke-width="0.4" fill="none"/>
    <ellipse cx="-6.5" cy="-5" rx="8" ry="4" fill="url(#sp)" transform="rotate(-28,-6.5,-5)"/>
    <circle cx="3"   cy="3"   r="0.7" fill="rgba(130,85,0,0.22)"/>
    <circle cx="-5"  cy="-3"  r="0.7" fill="rgba(130,85,0,0.2)"/>
    <circle cx="9"   cy="-4"  r="0.6" fill="rgba(130,85,0,0.2)"/>
    <circle cx="-9"  cy="5"   r="0.6" fill="rgba(130,85,0,0.18)"/>
    <circle cx="13"  cy="4"   r="0.6" fill="rgba(130,85,0,0.16)"/>
    <circle cx="-13" cy="-2"  r="0.5" fill="rgba(130,85,0,0.16)"/>
    <circle cx="0"   cy="9"   r="0.6" fill="rgba(130,85,0,0.15)"/>
    <circle cx="-4"  cy="8"   r="0.5" fill="rgba(130,85,0,0.14)"/>
    <circle cx="6"   cy="-9"  r="0.5" fill="rgba(130,85,0,0.13)"/>
    <circle cx="-7"  cy="-8"  r="0.5" fill="rgba(130,85,0,0.12)"/>
    <path d="M-15 0.5 Q0 -1.5 15 0.5" stroke="rgba(160,100,0,0.1)" stroke-width="0.4" fill="none"/>
  </g>
</svg>`)

export const lemonBg = {
    backgroundImage: `url("data:image/svg+xml,${lemonSvg}")`,
    backgroundRepeat: 'repeat' as const,
    backgroundSize: '240px 200px',
}
