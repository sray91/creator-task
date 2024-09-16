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
    Tuesday: [
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
    Wednesday: [
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
    Thursday: [
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
    Friday: [
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
    Saturday: [
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
    Sunday: [
      { type: 'task', content: "Post as many off the dome tweets as possible" },
      { type: 'task', content: "Write content for the next week" }
    ]
  };

const WeeklyPlannerChecklist = () => {
  const [currentDay, setCurrentDay] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [tasks, setTasks] = useState([]);
  const [checkedTasks, setCheckedTasks] = useState({});
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const today = new Date();
    setCurrentDay(days[today.getDay()]);
    setTasks(tasksByDay[days[today.getDay()]] || []);

    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
      updateCurrentTimeBlock(now);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const totalTasks = tasks.filter(task => task.type === 'task').length;
    const completedTasks = Object.values(checkedTasks).filter(Boolean).length;
    setProgress(totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0);
  }, [tasks, checkedTasks]);

  const toggleTask = (index) => {
    setCheckedTasks(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const updateCurrentTimeBlock = (now) => {
    const hour = now.getHours();
    setTasks(prevTasks => 
      prevTasks.map(task => {
        if (task.type === 'header') {
          const [startStr, endStr] = task.content.split(':')[0].split('-');
          const start = parseInt(startStr);
          const end = parseInt(endStr) === 12 ? 24 : parseInt(endStr); // Treat 12 as 24 for proper comparison
          task.isCurrentBlock = (hour >= start && hour < end);
        }
        return task;
      })
    );
  };

return (
  <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto w-full px-4 sm:px-0">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div className="max-w-md mx-auto">
          <h1 className="text-5xl font-bold text-center mb-4 text-black">{currentTime}</h1>
          <div className="mb-6">
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${progress}%`}}></div>
            </div>
            <p className="text-center mt-2 text-black">{Math.round(progress)}% Complete</p>
          </div>
          <h2 className="text-2xl font-semibold mb-6 text-black">{currentDay}&apos;s Tasks</h2>
          <ul>
            {tasks.map((item, index) => (
              <li key={index} className="mb-2 text-black">
                {item.type === 'header' ? (
                  <h3 className={`text-lg font-semibold mt-4 mb-2 p-2 rounded ${item.isCurrentBlock ? 'bg-yellow-200' : 'text-blue-600'}`}>
                    {item.content}
                  </h3>
                ) : (
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleTask(index)}>
                      {checkedTasks[index] ? (
                        <CheckSquare className="text-green-500" />
                      ) : (
                        <Square className="text-gray-300" />
                      )}
                    </button>
                    <span className={checkedTasks[index] ? 'line-through text-gray-500' : ''}>
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