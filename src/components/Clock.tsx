/**
 * src/components/Clock.tsx
 * использует useMemo для оптимизации производительности
 * использует memo для оптимизации рендеринга функциональных компонентов
 *
 * Принимает data и текущее общее время.
 * data — объект с id, title и timezone (число).
 * currentTime — текущее общее время в миллисекундах с 1 января 1970 года.
 * Вычисляет точное локальное время в нужной временной зоне.
 * Отображает часы через SVG и корректно поворачивает стрелки.
 * Удаляется по кнопке «×».
*/
import { useMemo, memo } from 'react';
import { ClockProps } from '../types/types';
import { useLocalTime } from '../utils/useLocalTime';
import './Clock.css';

const Clock = ({ data, currentTime, onRemove }: ClockProps) => {
  // Получаем текущее время в локальной временной зоне
  const localTime = useLocalTime(data.timezone, currentTime);

  // Получаем текущее время для данного часового пояса
  // и извлекаем часы, минуты и секунды
  // Используем useMemo для оптимизации производительности
  // и предотвращения лишних вычислений при каждом рендере

  const hours = localTime.getHours();
  const minutes = localTime.getMinutes();
  const seconds = localTime.getSeconds();

  // Расчёт углов поворота стрелок (в градусах)
  // Часовая стрелка: 30 градусов за час + 0.5 градуса за минуту
  // Минутная стрелка: 6 градусов за минуту
  // Секундная стрелка: 6 градусов за секунду
  const hourAngle = useMemo(() => (hours % 12) * 30 + minutes * 0.5, [hours, minutes]);
  const minuteAngle = useMemo(() => minutes * 6, [minutes]);
  const secondAngle = useMemo(() => seconds * 6, [seconds]);

  return (
    <div className="clock">
      <div className="clock-header">
        <span>{data.title}</span>
        <button onClick={() => onRemove(data.id)}>×</button>
      </div>
      <svg width="100" height="100" viewBox="0 0 100 100">
        {/* SVG Циферблат и стрелки */}

        {/* Рисуем белый круг с чёрной границей — основа часов.
        Центр круга в (50, 50), радиус — 45. */}
        <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="2" fill="white" />

        {/* 3 линии — стрелки:
            x1="50", y1="50" — начало каждой стрелки из центра.
            x2, y2 — считаются через тригонометрию по углу */}
        <line x1="50"
              y1="50"
              x2={50 + 25 * Math.sin((hourAngle * Math.PI) / 180)}
              y2={50 - 25 * Math.cos((hourAngle * Math.PI) / 180)}
              // Часовая стрелка — короче, толще.
              stroke="black"
              strokeWidth="3"
        />
        <line x1="50"
              y1="50"
              x2={50 + 35 * Math.sin((minuteAngle * Math.PI) / 180)}
              y2={50 - 35 * Math.cos((minuteAngle * Math.PI) / 180)}
              // Минутная стрелка — длиннее, тоньше.
              stroke="black"
              strokeWidth="2"
        />
        <line x1="50"
              y1="50"
              x2={50 + 40 * Math.sin((secondAngle * Math.PI) / 180)}
              y2={50 - 40 * Math.cos((secondAngle * Math.PI) / 180)}
              // Секундная стрелка — самая длинная, красная.
              stroke="red"
              strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default memo(Clock);
