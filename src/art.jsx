// Inline SVG placeholder art — replaced later by real factory/product photos.
import React from 'react'

export function CupArt({ tint = '#7DD3FC', body = '#E0F2FE', lid = false, straw = false }) {
  return (
    <svg viewBox="0 0 120 150" role="img" aria-label="Cup illustration">
      {straw && <rect x="70" y="6" width="8" height="52" rx="4" fill={tint} transform="rotate(12 74 32)" />}
      {lid && <path d="M28 34 Q60 18 92 34 L92 42 L28 42 Z" fill={tint} />}
      <path d="M30 44 L90 44 L82 138 Q81 144 75 144 L45 144 Q39 144 38 138 Z" fill={body} stroke={tint} strokeWidth="3" />
      <path d="M36 62 L84 62 L80 108 L40 108 Z" fill="#FFFFFF" opacity="0.5" />
      <rect x="26" y="38" width="68" height="8" rx="4" fill={tint} />
    </svg>
  )
}

export function LidArt() {
  return (
    <svg viewBox="0 0 120 150" role="img" aria-label="Lids illustration">
      <path d="M20 60 Q60 28 100 60 L100 70 L20 70 Z" fill="#BAE6FD" stroke="#38BDF8" strokeWidth="3" />
      <rect x="52" y="38" width="16" height="10" rx="3" fill="#38BDF8" />
      <ellipse cx="60" cy="104" rx="44" ry="12" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="3" />
      <ellipse cx="60" cy="100" rx="44" ry="12" fill="#F0F9FF" stroke="#38BDF8" strokeWidth="3" />
      <circle cx="60" cy="100" r="5" fill="#38BDF8" />
    </svg>
  )
}

export function PaperCupArt() {
  return (
    <svg viewBox="0 0 120 150" role="img" aria-label="Paper cup illustration">
      <path d="M32 40 L88 40 L80 138 Q79 144 73 144 L47 144 Q41 144 40 138 Z" fill="#FDE9D0" stroke="#D6A874" strokeWidth="3" />
      <rect x="28" y="34" width="64" height="9" rx="4.5" fill="#D6A874" />
      <path d="M40 70 L80 70 L78 96 L42 96 Z" fill="#FFFFFF" opacity="0.6" />
      <circle cx="60" cy="84" r="10" fill="#0EA5E9" opacity="0.75" />
    </svg>
  )
}

export function FactoryArt() {
  return (
    <svg viewBox="0 0 200 150" role="img" aria-label="Factory illustration">
      <rect x="16" y="70" width="168" height="64" rx="4" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="3" />
      <path d="M16 70 L58 46 L58 70 L100 46 L100 70 L142 46 L142 70" fill="none" stroke="#38BDF8" strokeWidth="3" />
      <rect x="34" y="92" width="22" height="42" fill="#7DD3FC" />
      <rect x="74" y="92" width="22" height="24" rx="2" fill="#BAE6FD" />
      <rect x="112" y="92" width="22" height="24" rx="2" fill="#BAE6FD" />
      <rect x="150" y="92" width="22" height="24" rx="2" fill="#BAE6FD" />
      <rect x="160" y="28" width="12" height="30" fill="#94A3B8" />
    </svg>
  )
}

export function PrintArt() {
  return (
    <svg viewBox="0 0 200 150" role="img" aria-label="Custom printing illustration">
      <path d="M60 34 L140 34 L130 140 Q129 146 123 146 L77 146 Q71 146 70 140 Z" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="3" />
      <rect x="55" y="28" width="90" height="9" rx="4.5" fill="#38BDF8" />
      <circle cx="100" cy="80" r="20" fill="#0EA5E9" />
      <path d="M92 80 L98 86 L110 72" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="78" y="112" width="44" height="7" rx="3.5" fill="#7DD3FC" />
    </svg>
  )
}
