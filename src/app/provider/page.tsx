"use client";
import React from "react";
import styles from "./Provider.module.scss";
import ProviderTemplate from "@/components/templates/ProvidersTemplate/ProvidersTemplate";
export default function Provider() {
  return (
    <>
      <div className={styles.main}>
        <ProviderTemplate />
      </div>
    </>
  );
}

