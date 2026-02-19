import { useTodo } from "../../hooks/useTodo";

export function Info() {
  const { todos } = useTodo();
  const completed = todos.filter((todo) => todo.completed).length;
  const total = todos.length;

  return (
    <div className="flex justify-between font-bold">
      <div className="flex gap-2 justify-center items-center">
        <p className="text-(--blue) text-sm ">Belum Selesai</p>
        <div className="bg-(--blue) dark:bg-(--base-gray-400) rounded-2xl text-(--base-gray-100) text-sm px-2.5">
          {total - completed}
        </div>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <p className="text-(--purple) text-sm">Selesai</p>
        <div className="bg-(--purple) dark:bg-(--base-gray-400) rounded-2xl text-(--base-gray-100) text-sm px-2.5 ">
          {completed} de {total}
        </div>
      </div>
    </div>
  );
}
