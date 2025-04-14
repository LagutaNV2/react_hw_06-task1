import React, { useState } from 'react';

import { ClockData } from "../types/types";
import './ClockForm.css';

// библиотека для генерации уникальных идентификаторов
//  v1, v3, v5, v4 (самый популярный)
import { v4 as uuidv4 } from 'uuid';

interface ClockFormProps {
  onAddClock: (data: ClockData) => void;
}

function ClockForm({ onAddClock }: ClockFormProps) {
  const [title, setTitle] = useState('');
  const [timezone, setTimezone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || isNaN(Number(timezone))) return;

    onAddClock({ id: uuidv4(), title, timezone: Number(timezone) });

    setTitle('');
    setTimezone('');
  };

  return (
    <form className="clock-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Название"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Временная зона"
        value={timezone}
        onChange={(e) => setTimezone(e.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
}

export default ClockForm;
