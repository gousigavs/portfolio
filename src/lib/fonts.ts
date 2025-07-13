import {
  Fascinate_Inline,
  Inter,
  JetBrains_Mono,
  Plus_Jakarta_Sans,
} from 'next/font/google';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const fontHeading = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
});

const dancing = Fascinate_Inline({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dancing',
});

export const fonts = [
  fontSans.variable,
  fontMono.variable,
  fontHeading.variable,
  dancing.variable,
];
