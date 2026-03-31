import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'PreCal-IQ — AI-Powered Preconstruction',
    short_name: 'PreCal-IQ',
    description:
      'Automate construction takeoffs, build bids, and manage vendors with AI.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1D1D1F',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
