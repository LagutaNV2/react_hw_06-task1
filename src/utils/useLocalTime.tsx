// src/utils/useLocalTime.ts
import { useMemo } from 'react';

export const useLocalTime = (timezone: number, currentTime: Date) => {
  return useMemo(() => {
    const utc = currentTime.getTime() + currentTime.getTimezoneOffset() * 60000;
    return new Date(utc + timezone * 3600000);
  }, [currentTime, timezone]);
};
