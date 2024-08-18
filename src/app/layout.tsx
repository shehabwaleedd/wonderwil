import React from 'react';

import './globals.css';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
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
  title: 'Cairo Studio | Premium Web Development, Branding & Graphic Design in Egypt',
  description: 'Cairo Studio: Egypt\'s leading digital studio for web development, UI/UX, graphic design, and branding. Transform your digital presence.',

  metadataBase: new URL('https://cairo-studio.com'),
  keywords: [
    'UI/UX Design', 'Web Development', 'Build Website', 'انشاء موقع الكتروني', 'Responsive Design',
    'Brand Identity', 'Digital Design', 'Graphic Design', 'Illustrations', 'E-commerce',
    'Cairo Studio', 'Cairo', 'Egypt', 'تصميم واجهة المستخدم', 'تطوير الويب',
    'تصميم العلامة التجارية', 'التصميم الرقمي', 'التصميم الجرافيكي', 'الرسوم التوضيحية',
    'التجارة الإلكترونية', 'استوديو القاهرة', 'مصر', 'Next.js 14', 'GSAP', 'Framer Motion',
    'SCSS Modules', 'JavaScript', 'HTML', 'CSS', 'Frontend Development', 'تحسين تجربة المستخدم'
  ],
  openGraph: {
    type: 'website',
    url: 'https://cairo-studio.com',
    title: 'Cairo Studio | Premium Web Development, Branding & Graphic Design in Egypt',
    description: 'Cairo Studio: Egypt\'s leading digital studio for web development, UI/UX, graphic design, and branding. Transform your digital presence.',
    images: {
      url: 'https://res.cloudinary.com/ds20vy7zo/image/upload/v1718735293/CDS_OG_Image_2_qdahop.webp',
      width: 1200,
      height: 630,
      alt: 'Cairo Studio - Leading Digital Agency in Egypt'
    },
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@CairoStudioo',
    title: 'Cairo Studio | Premium Web Development, Branding & Graphic Design in Egypt',
    description: 'Transform your digital presence with Cairo Studio, Egypt\'s leading agency for web development, UI/UX, graphic design, and branding.',
    images: ['https://res.cloudinary.com/ds20vy7zo/image/upload/v1718735293/CDS_OG_Image_2_qdahop.webp'],
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
    canonical: 'https://cairo-studio.com',
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
