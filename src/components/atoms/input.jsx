export function Input({ type = "text", placeholder = "", ...rest }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-md border border-(--base-gray-300) dark:border-black bg-white dark:bg-(--base-gray-600) px-3 py-2.5  text-(--base-gray-700) dark:text-white focus:outline-none focus:ring-1 focus:ring-(--blue) focus:border-transparent"
      {...rest}
    />
  );
}
