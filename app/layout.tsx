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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
