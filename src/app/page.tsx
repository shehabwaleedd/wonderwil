import React from 'react';
import styles from "./page.module.scss";
import QuoteOverlay from '@/components/quoteOverlay';

export default function Home() {

  return (
    <main className={styles.main}>
      <QuoteOverlay />
    </main>
  );
}