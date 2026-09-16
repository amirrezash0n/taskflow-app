import type { FilterType } from "../types/todo";

export const FILTERS: { value: FilterType; label: string }[] = [
  { value: "all", label: "All Tasks" },
  { value: "pending", label: "Pending" },
  { value: "completed", label: "Completed" },
];

export const EMPTY_MESSAGES: Record<FilterType, string> = {
  all: "No tasks yet. Add one above!",
  completed: "No completed tasks yet.",
  pending: "No pending tasks. All done! 🎉",
};
