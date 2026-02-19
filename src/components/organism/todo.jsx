import { CircleCheckbox } from "../atoms/circleCheckBox";
import { Trash2 } from "lucide-react";
import { EmptyState } from "../molecules/emptystate";
import { useTodo } from "../../hooks/useTodo";

export function Todo() {
  const { todos, remove, toggle } = useTodo();
  return (
    <div className="flex flex-col gap-4">
      {todos.length === 0 ? (
        <EmptyState />
      ) : (
        todos.map((todo) => (
          <div
            className={`flex justify-between items-center rounded-lg p-4 ${todo.completed ? "border-none bg-(--base-gray-100) dark:bg-(--base-gray-500)" : "border border-(--base-gray-300) dark:border-(--base-gray-400) bg-white dark:bg-(--base-gray-500)"}`}
            key={todo.id}
          >
            <div className="flex items-center gap-2">
              <CircleCheckbox
                checked={todo.completed}
                onChange={() => {
                  console.log("toggle", todo.id, !todo.completed);
                  toggle(todo.id, !todo.completed);
                }}
              />
              <p
                className={`font-medium text-sm  ${todo.completed ? "line-through text-(--base-gray-300) dark:text-(--base-gray-300)" : "text-(--base-gray-700) dark:text-white"}`}
              >
                {todo.title}
              </p>
            </div>
            <button
              className="text-(--danger) hover:text-(--danger-dark) hover:bg-(--base-gray-200) p-2 rounded-lg"
              onClick={() => remove(todo.id)}
            >
              <Trash2 className="w-5 h-5 text-black dark:text-(--base-gray-300) hover:text-(--danger) dark:hover:text-(--danger)  cursor-pointer" />
            </button>
          </div>
        ))
      )}
    </div>
  );
}
