'use client';

import React, { useState, useEffect } from 'react';
import { CheckSquare, Square } from 'lucide-react';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const tasksByDay = {
  Monday: [
    { type: 'header', content: "6am - 12pm: TOP OF FUNNEL (Personal takes, opinions, stories)" },
    { type: 'task', content: "Post 1 long-form tweet (personal story)" },
    { type: 'task', content: "Post 3 short tweets (personal opinions, experiences)" },
    { type: 'task', content: "Post 2 image-based tweets (memes, gym, family)" },
    { type: 'task', content: "Post 1 short-form video (< 1 minute, personal take)" },
    { type: 'task', content: "Spend 30 minutes engaging with audience" },
    { type: 'header', content: "12pm - 6pm: MIDDLE OF FUNNEL (General niche advice, problem-solving, how-to's)" },
    { type: 'task', content: "Post 1 long-form tweet (niche advice or insight)" },
    { type: 'task', content: "Post 1 thread (inspirational brand comparison or how-to)" },
    { type: 'task', content: "Post 3 value tweets (what, why, how of niche topics)" },
    { type: 'task', content: "Post 2 pieces of competence content (social proof, how-i)" },
    { type: 'task', content: "Post 1 short-form video (< 1 minute, quick tip or advice)" },
    { type: 'task', content: "Publish 1 email and promo tweet (CTA)" },
    { type: 'task', content: "Spend 30 minutes engaging with audience" },
    { type: 'header', content: "6pm - 12am: BOTTOM OF FUNNEL (Extremely technical, in-depth, step by step)" },
    { type: 'task', content: "Post 1 long-form tweet (technical deep dive)" },
    { type: 'task', content: "Post 1 thread (step-by-step guide or technical breakdown)" },
    { type: 'task', content: "Post 20 outbound DMs selling to cold prospects" },
    { type: 'task', content: "Post 20 outbound DMs selling to warm prospects" },
    { type: 'task', content: "Re-engage old conversations that have died" }
  ],
  // ... (similar arrays for other days)
  Sunday: [
    { type: 'task', content: "Post as many off the dome tweets as possible" },
    { type: 'task', content: "Write content for the next week" }
  ]
};

const WeeklyPlannerChecklist = () => {
  const [currentDay, setCurrentDay] = useState('');
  const [tasks, setTasks] = useState([]);
  const [checkedTasks, setCheckedTasks] = useState({});

  useEffect(() => {
    const today = new Date().getDay();
    setCurrentDay(days[today]);
    setTasks(tasksByDay[days[today]] || []);
  }, []);

  const toggleTask = (index) => {
    setCheckedTasks(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold mb-6 text-black">{currentDay}&apos;s Tasks</h1>
            <ul>
              {tasks.map((item, index) => (
                <li key={index} className="mb-2">
                  {item.type === 'header' ? (
                    <h2 className="text-lg font-semibold text-blue-600 mt-4 mb-2">{item.content}</h2>
                  ) : (
                    <div className="flex items-center space-x-2 text-black">
                      <button onClick={() => toggleTask(index)}>
                        {checkedTasks[index] ? (
                          <CheckSquare className="text-green-500" />
                        ) : (
                          <Square className="text-black" />
                        )}
                      </button>
                      <span className={checkedTasks[index] ? 'line-through text-black' : ''}>
                        {item.content}
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyPlannerChecklist;