import { ClipboardList } from "lucide-react";
import type { Todo, FilterType } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  filter: FilterType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

const emptyMessages: Record<FilterType, string> = {
  all: "No tasks yet. Add one above!",
  completed: "No completed tasks yet.",
  pending: "No pending tasks. All done! 🎉",
};

export default function TodoList({
  todos,
  filter,
  onToggle,
  onDelete,
  onEdit,
}: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10 sm:py-12 text-gray-400 dark:text-gray-500">
        <ClipboardList
          size={48}
          className="mb-3 opacity-50"
          strokeWidth={1.5}
        />
        <p className="text-sm sm:text-base">{emptyMessages[filter]}</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
