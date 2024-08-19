'use client'
import React from 'react';
import styles from "./page.module.scss";
import Background from "@/components/background";
import QuoteOverlay from '@/components/quoteOverlay';
import { useAccess } from '@/context/AccessContext';

export default function Home() {
  const { hasAccess } = useAccess();

  return (
    <main className={styles.main}>
      <Background />
      <QuoteOverlay />
    </main>
  );
}