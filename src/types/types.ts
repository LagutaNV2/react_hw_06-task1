//src/types/types.ts
// TypeScript interfaces for the clock application

// src/types/types.ts
export interface ClockData {
  id: string;
  title: string;
  timezone: number; // Смещение относительно UTC
}

export interface ClockProps {
  data: ClockData;
  currentTime: Date;
  onRemove: (id: string) => void;
}

export interface ClockListProps {
  clocks: ClockData[];
  currentTime: Date;
  onRemove: (id: string) => void;
}
