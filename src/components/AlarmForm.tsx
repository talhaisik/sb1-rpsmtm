import React, { useState } from 'react';
import { Bell, Volume2 } from 'lucide-react';

interface AlarmFormProps {
  onSetAlarm: (time: string) => void;
}

export function AlarmForm({ onSetAlarm }: AlarmFormProps) {
  const [alarmTime, setAlarmTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (alarmTime) {
      onSetAlarm(alarmTime);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center space-x-4">
        <Bell className="w-6 h-6 text-blue-600" />
        <input
          type="time"
          value={alarmTime}
          onChange={(e) => setAlarmTime(e.target.value)}
          className="px-4 py-2 text-xl border-2 border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Set Alarm
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <Volume2 className="w-5 h-5 text-gray-600" />
        <select className="px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="default">Default Alarm Sound</option>
          <option value="bell">Bell</option>
          <option value="digital">Digital</option>
          <option value="gentle">Gentle Wake</option>
        </select>
      </div>
    </form>
  );
}