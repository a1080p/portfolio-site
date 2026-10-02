import { Big_Shoulders, Doto, JetBrains_Mono, Public_Sans } from 'next/font/google';

// Fonts borrowed from each project's own site so the case study pages match.

// Iron Pillar (ironpillar.app)
export const bigShoulders = Big_Shoulders({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-ip-display',
  display: 'swap',
});

export const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ip-body',
  display: 'swap',
});

// Shared mono (Iron Pillar stats, Dither Dog UI labels)
export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-project-mono',
  display: 'swap',
});

// Dither Dog (ditherdog.tech)
export const doto = Doto({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-dd-display',
  display: 'swap',
});

export const projectFontVariables = [
  bigShoulders.variable,
  publicSans.variable,
  jetbrainsMono.variable,
  doto.variable,
].join(' ');
