'use client';
import { useGameFilters } from '@/store/useGameFilters';
import React from 'react'

export default function Provider() {
    const { vendor } = useGameFilters();
  return (
    
    <div style={{padding:100}}>{vendor}</div>
  )
}
