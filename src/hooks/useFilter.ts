import { useState, useMemo } from "react";
import type { FilterType, Todo } from "../types/todo";

export function useFilter(todos: Todo[]) {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredTodos = useMemo(() => {
    if (filter === "completed") return todos.filter((t) => t.completed);
    if (filter === "pending") return todos.filter((t) => !t.completed);
    return todos;
  }, [todos, filter]);

  return { filter, setFilter, filteredTodos };
}
