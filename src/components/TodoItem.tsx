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

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <button
        type="button"
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? "Mark as pending" : "Mark as completed"}
        className={`w-6 h-6 shrink-0 rounded-full border-2 flex items-center justify-center
                   ${todo.completed ? "bg-green-500 border-green-500" : "border-gray-400"}`}
      >
        {todo.completed && <Check size={16} className="text-white" />}
      </button>

      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSave();
            if (e.key === "Escape") handleCancel();
          }}
          className="flex-1 min-w-0 px-2 py-1 text-sm sm:text-base border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          autoFocus
        />
      ) : (
        <span
          className={`flex-1 min-w-0 text-sm sm:text-base break-words text-gray-800 dark:text-gray-200 ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.text}
        </span>
      )}

      <div className="flex gap-1 sm:gap-2 shrink-0">
        {isEditing ? (
          <>
            <button
              type="button"
              onClick={handleSave}
              aria-label="Save"
              className="p-1 text-green-500 hover:text-green-600"
            >
              <Save size={18} />
            </button>
            <button
              type="button"
              onClick={handleCancel}
              aria-label="Cancel"
              className="p-1 text-red-500 hover:text-red-600"
            >
              <X size={18} />
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              aria-label="Edit"
              className="p-1 text-blue-500 hover:text-blue-600"
            >
              <Edit2 size={18} />
            </button>
            <button
              type="button"
              onClick={() => onDelete(todo.id)}
              aria-label="Delete"
              className="p-1 text-red-500 hover:text-red-600"
            >
              <Trash2 size={18} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
