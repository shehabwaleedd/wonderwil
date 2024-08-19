import React from 'react';

import './globals.css';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import localFont from 'next/font/local';
import Background from '@/components/background';
import Navbar from '@/components/navbar';
const SmoothScrolling = dynamic(() => import('@/animations/SmoothScrolling'), { ssr: false });

const youth = localFont({
  src: '../../public/fonts/Futura.woff2',
  variable: '--font-youth',
  display: 'swap',
  weight: 'normal',
  preload: true,
});

const satoshiVariable = localFont({
  src: '../../public/fonts/Satoshi-Variable.woff2',
  variable: '--font-satoshi-variable',
  display: 'swap',
  weight: '100 900',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Wonderwil | Creative Studio for Branding, Content, and Community Advocacy',
  description: 'Wonderwil: A premier creative studio specializing in brand strategy, high-quality content, and production for top-tier global projects. Committed to advancing community-powered public spaces for social good.',

  metadataBase: new URL('https://wonderwil.com'),
  keywords: [
    'Brand Strategy', 'Branding', 'Content Creation', 'Production', 'Creative Studio', 
    'High-Profile Projects', 'Public Spaces', 'Social Good', 'Community Advocacy',
    'Wonderwil', 'Design', 'Creative Development', 'Marketing', 'Community Development',
    'Public Space Advocacy', 'Community Engagement', 'Social Impact', 'Brand Identity',
    'Global Projects', 'Digital Content', 'Creative Production'
  ],
  openGraph: {
    type: 'website',
    url: 'https://wonderwil.com',
    title: 'Wonderwil | Creative Studio for Branding, Content, and Community Advocacy',
    description: 'Wonderwil: A premier creative studio specializing in brand strategy, high-quality content, and production for top-tier global projects. Committed to advancing community-powered public spaces for social good.',
    images: {
      url: 'https://example.com/path-to-wonderwil-og-image.jpg', // Replace with actual image URL
      width: 1200,
      height: 630,
      alt: 'Wonderwil - Creative Studio for Global Projects and Social Good'
    },
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Wonderwil',
    title: 'Wonderwil | Creative Studio for Branding, Content, and Community Advocacy',
    description: 'Wonderwil: Specializing in brand strategy, content creation, and advocacy for community-powered public spaces.',
    images: ['https://example.com/path-to-wonderwil-twitter-image.jpg'], // Replace with actual image URL
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://wonderwil.com',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${youth.variable} ${satoshiVariable.variable}`}>
      <body>
        <Navbar />
        <Background />
        <SmoothScrolling />
        {children}
      </body>
    </html>
  );
}
