import { useState, useEffect } from "react";

export default function App() {
  const [done, setDone] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("study");
    if (saved) setDone(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("study", JSON.stringify(done));
  }, [done]);

  const toggle = (key) => {
    setDone((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
         Study Tracker MVP
      </h1>

      {[1, 2, 3].map((week) => (
        <div key={week} className="mb-6 border p-4 rounded">
          <h2 className="font-semibold">Week {week}</h2>

          <div className="grid grid-cols-7 gap-2 mt-2">
            {days.map((day, i) => {
              const key = `${week}-${i}`;

              return (
                <div
                  key={key}
                  onClick={() => toggle(key)}
                  className={`p-3 text-center cursor-pointer rounded
                    ${done[key] ? "bg-green-500 text-white" : "bg-gray-200"}
                  `}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}