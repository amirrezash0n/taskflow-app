import { useState } from "react";
import { Plus } from "lucide-react";

interface TodoInputProps {
  onAdd: (text: string) => void;
}

export default function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-3">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your task here ..."
          className="flex-1 px-5 py-3 text-gray-700 bg-white border-2 border-gray-200 rounded-xl 
                   focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                   transition-all duration-200 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
        />
        <button
          type="submit"
          className="px-6 py-3 font-semibold text-white bg-linear-to-r from-blue-500 to-blue-600 
                   rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 
                   flex items-center gap-2 shadow-md hover:shadow-lg"
        >
          <Plus size={20} />
          Add Task
        </button>
      </div>
    </form>
  );
}
