import React, { useState, useEffect } from 'react';
import { Clock } from './components/Clock';
import { AlarmForm } from './components/AlarmForm';
import { ActiveAlarms } from './components/ActiveAlarms';
import { Moon, Sun } from 'lucide-react';

function App() {
  const [alarms, setAlarms] = useState<string[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSetAlarm = (time: string) => {
    setAlarms([...alarms, time]);
  };

  const handleDeleteAlarm = (index: number) => {
    setAlarms(alarms.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const checkAlarms = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
      });
      
      alarms.forEach((alarm) => {
        if (alarm === currentTime) {
          alert('Wake up! Alarm is ringing!');
        }
      });
    }, 1000);

    return () => clearInterval(checkAlarms);
  }, [alarms]);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold">Online Alarm Clock</h1>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
          >
            {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </header>

        <main className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <Clock />
          </div>

          <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <AlarmForm onSetAlarm={handleSetAlarm} />
            <ActiveAlarms alarms={alarms} onDeleteAlarm={handleDeleteAlarm} />
          </div>

          <footer className="mt-12 text-center text-sm text-gray-500">
            <p>Click the bell icon to test the alarm sound. The alarm will ring for 1 minute or until dismissed.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;