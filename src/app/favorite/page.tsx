'use client'
import React from 'react'
import FavoriteTemplate from '@/components/templates/FavoriteTemplate/FavoriteTemplate';
import styles from "./page.module.scss";
export default function FavoritePage() {
  return (
     <div className={styles.page}>
      <div style={{ margin: 40 }} />
      <FavoriteTemplate />
    </div>
  );
}



