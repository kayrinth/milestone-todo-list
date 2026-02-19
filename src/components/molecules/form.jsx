import { Button } from "../atoms/button";
import { Input } from "../atoms/input";
import { PlusCircle } from "lucide-react";
import { useTodo } from "../../hooks/useTodo";

export function Form({ className }) {
  const { add } = useTodo();

  const submit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get("title");

    if (!title || title.trim() === "") return;

    add({
      title: title.trim(),
      completed: false,
      userId: 1,
    });
    e.target.reset();
  };

  return (
    <form onSubmit={submit} className={`flex gap-2 ${className}`}>
      <Input type="text" name="title" placeholder="Tambah Tugas Baru" />

      <Button
        type="submit"
        className="flex items-center gap-2 text-white bg-(--blue-dark) hover:bg-(--blue) px-2 rounded-lg text-sm"
      >
        Tambah
        <PlusCircle className="w-4 h-4" />
      </Button>
    </form>
  );
}
