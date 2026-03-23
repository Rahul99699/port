"use client";

import { useEffect, useState } from "react";

/**
 * Hook to determine if a component has been mounted on the client.
 * Useful for avoiding hydration errors when rendering non-deterministic content (like Math.random()).
 */
export const useMounted = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
};
