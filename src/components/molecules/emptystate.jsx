import { ClipboardList } from "lucide-react";

export function EmptyState() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="border-2 border-b-(--base-gray-100) dark:border-b-(--base-gray-400) w-full rounded-full mb-20"></div>
      <ClipboardList className="w-20 h-20 text-(--base-gray-400) dark:text-(--base-gray-400)" />
      <h1 className="text-2xl font-bold text-(--base-gray-300) dark:text-(--base-gray-400)">
        Belum ada tugas untuk saat ini
      </h1>
      <p className="text-xl font-medium text-(--base-gray-300) dark:text-(--base-gray-400)">
        Silakan tambahkan tugas baru pada form di atas.
      </p>
    </div>
  );
}
