export interface ClockData {
    id: string;
    title: string;
    timezone: number;
  }

export interface ClocksProps {
  clocks: ClockData[];
  data: ClockData;
  currentTime: Date;
  onRemove: (id: string) => void;
}
