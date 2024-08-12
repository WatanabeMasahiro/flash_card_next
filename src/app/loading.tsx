'use client'

import { useState, useEffect } from "react";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    return () => {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <main className="l-main--loading">
        <div className="p-loading">
          <div className="p-loading__loader--spinner"></div>
        </div>
      </main>
    </>
  )
}