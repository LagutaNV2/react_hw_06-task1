import React, { useEffect, useState } from 'react';
import ClockForm from './components/ClockForm';
import Clock from './components/Clock';
import ClockList from "./components/ClockList";
import { ClockData } from "./types/types";
import './App.css';

export const App = () => {
  const [clocks, setClocks] = useState<ClockData[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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
