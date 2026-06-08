// src/components/TodoStats.tsx
import type { Todo } from "../types/todo";
import { Moon, Sun, CheckCircle2, Circle, ListTodo } from "lucide-react";
import { useEffect, useState } from "react";

interface TodoStatsProps {
  todos: Todo[];
}

export default function TodoStats({ todos }: TodoStatsProps) {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const pending = total - completed;

  // کارت‌های آماری
  const stats = [
    {
      label: "Total",
      value: total,
      icon: ListTodo,
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    },
    {
      label: "Completed",
      value: completed,
      icon: CheckCircle2,
      color:
        "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    },
    {
      label: "Pending",
      value: pending,
      icon: Circle,
      color:
        "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
    },
  ];

  return (
    <div className="mb-6">
      {/* سه کارت آمار */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className={`p-1.5 rounded-lg ${stat.color}`}>
                <stat.icon size={16} />
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {stat.label}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* دکمه دارک مود - جدا از کارت‌ها */}
      <div className="flex justify-end">
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
        >
          {isDark ? (
            <Sun size={20} className="text-yellow-500" />
          ) : (
            <Moon size={20} className="text-gray-600" />
          )}
        </button>
      </div>
    </div>
  );
}
