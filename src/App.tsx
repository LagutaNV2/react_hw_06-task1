// src/App.tsx

import { useEffect, useState } from 'react';
import { ClockData } from "./types/types";
import { useCurrentTime } from "./utils/useCurrTime";
import ClockForm from './components/ClockForm';
import ClockList from "./components/ClockList";
import './App.css';

export const App = () => {
  const [clocks, setClocks] = useState<ClockData[]>([]);
  const currentTime = useCurrentTime();

  const addClock = (clock: ClockData) => {
    setClocks(prev => [...prev, clock]);
  };

  const removeClock = (id: string) => {
    setClocks(prev => prev.filter(clock => clock.id !== id));
  };

  return (
    <div>
      <ClockForm onAddClock={addClock} />
      <ClockList clocks={clocks} currentTime={currentTime} onRemove={removeClock} />
    </div>
  );
};

export default App;
