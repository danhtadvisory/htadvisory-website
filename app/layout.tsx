import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hinonga o Tutuki Advisory | Qualitative Research',
  description:
    'End-to-end delivery of sensitive qualitative research projects. Social research expertise enhanced by skillful project management.',
  openGraph: {
    title: 'Hinonga o Tutuki Advisory',
    description: 'Sensitive qualitative research specialists, Aotearoa New Zealand.',
    url: 'https://www.htadvisory.co.nz',
    siteName: 'HT Advisory',
    locale: 'en_NZ',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
