import type { Todo } from "../types/todo";
import { CheckCircle2, Circle, ListTodo } from "lucide-react";

interface TodoStatsProps {
  todos: Todo[];
}

export default function TodoStats({ todos }: TodoStatsProps) {
  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const pending = total - completed;

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-gray-800 rounded-xl p-2 sm:p-3 shadow-sm"
          >
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
              <div className={`p-1 sm:p-1.5 rounded-lg ${stat.color}`}>
                <stat.icon size={14} className="sm:hidden" />
                <stat.icon size={16} className="hidden sm:block" />
              </div>
              <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 truncate">
                {stat.label}
              </span>
            </div>
            <p className="text-lg sm:text-2xl font-bold text-gray-800 dark:text-white">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
