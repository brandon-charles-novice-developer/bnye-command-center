// Typography scale from Figma design system
// Font: Inter (via next/font/google)

export const typography = {
  display: { size: "3rem", lineHeight: "3.5rem", weight: 700 },
  h1: { size: "2.25rem", lineHeight: "2.75rem", weight: 700 },
  h2: { size: "1.75rem", lineHeight: "2.25rem", weight: 600 },
  h3: { size: "1.375rem", lineHeight: "1.75rem", weight: 600 },
  bodyLg: { size: "1.125rem", lineHeight: "1.75rem", weight: 400 },
  body: { size: "1rem", lineHeight: "1.5rem", weight: 400 },
  bodySm: { size: "0.875rem", lineHeight: "1.25rem", weight: 400 },
  caption: { size: "0.75rem", lineHeight: "1rem", weight: 500 },
  overline: { size: "0.6875rem", lineHeight: "1rem", weight: 600 },
} as const;
