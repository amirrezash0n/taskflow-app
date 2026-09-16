import { useTodos } from "./hooks/useTodos";
import { useFilter } from "./hooks/useFilter";
import { useTheme } from "./hooks/useTheme";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import TodoStats from "./components/TodoStats";
import TodoTitle from "./components/TodoTitle";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, editTodo } = useTodos();
  const { filter, setFilter, filteredTodos } = useFilter(todos);
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto max-w-2xl px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <TodoTitle />
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        </div>
        <TodoInput onAdd={addTodo} />
        <TodoStats todos={todos} />
        <TodoFilter currentFilter={filter} onFilterChange={setFilter} />
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      </div>
    </div>
  );
}

export default App;
