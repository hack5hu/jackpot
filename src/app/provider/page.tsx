"use client";
import ProviderPage from "@/components/pages/Providers/ProviderPage";
import { useGameFilters } from "@/store/useGameFilters";
import React from "react";
import styles from "./Provider.module.scss";
export default function Provider() {
  const { vendor = "" } = useGameFilters();
  return (
    <>
      <div className={styles.main}>
        <ProviderPage vendor={vendor} />
      </div>
    </>
  );
}

