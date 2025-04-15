// src/components/ClockList.tsx
import { memo } from 'react';
import Clock from "./Clock";
import { ClockListProps } from "../types/types";

const ClockList = ({ clocks, currentTime, onRemove }: ClockListProps) => {
  return (
    <div className="clocks">
      {clocks.map((clock) => (
        <Clock key={clock.id} data={clock} currentTime={currentTime} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default memo(ClockList);
