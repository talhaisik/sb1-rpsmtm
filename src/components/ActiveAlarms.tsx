import React from 'react';
import { Trash2 } from 'lucide-react';

interface ActiveAlarmsProps {
  alarms: string[];
  onDeleteAlarm: (index: number) => void;
}

export function ActiveAlarms({ alarms, onDeleteAlarm }: ActiveAlarmsProps) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Active Alarms</h2>
      <div className="space-y-2">
        {alarms.map((alarm, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
          >
            <span className="text-lg font-mono">{alarm}</span>
            <button
              onClick={() => onDeleteAlarm(index)}
              className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}