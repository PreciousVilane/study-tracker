import { useState, useEffect } from "react";

const roadmap = [
  { week: 1, task: "IP Addresses, Binary, Subnetting" },
  { week: 2, task: "OSI Model, TCP/UDP, Routers & Switches" },
  { week: 3, task: "Cisco Final Quiz & Networking Badge" },

  { week: 4, task: "AWS Global Infrastructure" },
  { week: 5, task: "EC2 Instances & S3 Buckets" },
  { week: 6, task: "VPCs & Security Groups" },
  { week: 7, task: "Cloud Practitioner Exam Preparation" },

  { week: 8, task: "Load Balancers & Auto Scaling" },
  { week: 9, task: "RDS, DynamoDB & Migration" },
  { week: 10, task: "Build AWS S3 Static Website Project" },
  { week: 11, task: "Practice Exams" },
  { week: 12, task: "Solutions Architect Exam Preparation" },
];

export default function App() {
  const [done, setDone] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("study");
    if (saved) {
      setDone(JSON.parse(saved));
    }
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
  <div
    style={{
      minHeight: "100vh",
      width: "100%",
      backgroundColor: "#f4f6f9",
      padding: "30px",
      boxSizing: "border-box",
    }}
  >
      <h1> 12-Week Cloud Study Tracker</h1>

      {roadmap.map((item) => (
        <div
          key={item.week}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "8px",
          }}
        >
          <h2>Week {item.week}</h2>
          <p>{item.task}</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "10px",
            }}
          >
            {days.map((day, index) => {
              const key = `${item.week}-${index}`;

              return (
                <button
                  key={key}
                  onClick={() => toggle(key)}
                  style={{
                    padding: "10px",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    backgroundColor: done[key] ? "#4CAF50" : "#e0e0e0",
                    color: done[key] ? "white" : "black",
                  }}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}