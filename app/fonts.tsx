import {
  League_Script,
  Montserrat,
  Inter,
  Cormorant_Garamond,
} from 'next/font/google';

export const leagueScript = League_Script({ weight: '400' });
export const montserrat = Montserrat({});

export const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
});
