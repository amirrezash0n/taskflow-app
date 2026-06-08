import { useState } from "react";
import { Check, Trash2, Edit2, Save, X } from "lucide-react";
import type { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
  onEdit,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <button
        onClick={() => onToggle(todo.id)}
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                   ${todo.completed ? "bg-green-500 border-green-500" : "border-gray-400"}`}
      >
        {todo.completed && <Check size={16} className="text-white" />}
      </button>

      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="flex-1 px-2 py-1 border rounded dark:bg-gray-700 dark:border-gray-600"
          autoFocus
        />
      ) : (
        <span
          className={`flex-1 text-gray-800 dark:text-gray-200 ${todo.completed ? "line-through text-gray-500" : ""}`}
        >
          {todo.text}
        </span>
      )}

      <div className="flex gap-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="text-green-500 hover:text-green-600"
            >
              <Save size={18} />
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="text-red-500 hover:text-red-600"
            >
              <X size={18} />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-500 hover:text-blue-600"
            >
              <Edit2 size={18} />
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="text-red-500 hover:text-red-600"
            >
              <Trash2 size={18} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
