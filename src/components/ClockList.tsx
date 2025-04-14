import Clock from "./Clock";
import { ClocksProps } from "../types/types";

const ClockList = ({ clocks, currentTime, onRemove }: ClocksProps) => {
  return (
    <div className="clocks">
      {clocks.map((clock) => (
        <Clock key={clock.id} data={clock} currentTime={currentTime} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default ClockList;
