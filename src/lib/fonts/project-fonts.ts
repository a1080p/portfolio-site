import {
  Bodoni_Moda,
  Courier_Prime,
  Doto,
  JetBrains_Mono,
  Lato,
  Zilla_Slab,
} from 'next/font/google';

// Fonts borrowed from (or chosen to match) each project so its case study page has
// its own voice. preload is off: every themed page imports this module, and each one
// only uses two or three of these. The splash screen covers the brief swap.

// Shared mono (Iron Pillar stats, Dither Dog UI labels)
export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-project-mono',
  display: 'swap',
  preload: false,
});

// Dither Dog (ditherdog.tech)
export const doto = Doto({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-dd-display',
  display: 'swap',
  preload: false,
});

// MGK x Dossier: high-contrast didone, like a fragrance ad
export const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-mgk-display',
  display: 'swap',
  preload: false,
});

// Whiskey Thief: distillery-signage slab plus the typewriter mono from the pitch slides
export const zillaSlab = Zilla_Slab({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-wt-display',
  display: 'swap',
  preload: false,
});

export const courierPrime = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-wt-mono',
  display: 'swap',
  preload: false,
});

// Apostrophe: the heavy Lato capitals from apostrophetv.com
export const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-apos-display',
  display: 'swap',
  preload: false,
});

export const projectFontVariables = [
  jetbrainsMono.variable,
  doto.variable,
  bodoniModa.variable,
  zillaSlab.variable,
  courierPrime.variable,
  lato.variable,
].join(' ');
