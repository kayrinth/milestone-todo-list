import { Check } from "lucide-react";

export function CircleCheckbox({ checked, onChange }) {
  return (
    <label className="relative inline-block cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />

      <div
        className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all
          ${
            checked
              ? "bg-(--purple-dark) border-(--purple-dark) dark:bg-(--purple-dark) dark:border-(--purple-dark)"
              : "border-(--base-gray-700) dark:border-(--blue) bg-transparent"
          }
        `}
      >
        {checked && <Check className="w-2 h-2 text-white" strokeWidth={3} />}
      </div>
    </label>
  );
}
