import type { FilterType } from "../types/todo";

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export default function TodoFilter({
  currentFilter,
  onFilterChange,
}: TodoFilterProps) {
  const filters: { value: FilterType; label: string }[] = [
    { value: "all", label: "All Tasks" },
    { value: "pending", label: "Pending" },
    { value: "completed", label: "Completed" },
  ];

  return (
    <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
      {filters.map((filter) => (
        <button
          key={filter.value}
          type="button"
          onClick={() => onFilterChange(filter.value)}
          className={`px-4 sm:px-5 py-2 rounded-xl font-medium transition-all duration-200 
            whitespace-nowrap text-sm sm:text-base
            ${
              currentFilter === filter.value
                ? "bg-blue-500 text-white shadow-md shadow-blue-200 dark:shadow-none"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
