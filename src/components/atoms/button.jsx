export function Button({
  children,
  variant = "default",
  size = "default",
  ...props
}) {
  const variantClasses = {
    default: "bg-primary text-white hover:bg-primary/90",
    ghost: "bg-transparent hover:bg-primary/10",
  };
  const sizeClasses = {
    default: "px-4 py-2",
    icon: "p-2",
  };

  const className = `${variantClasses[variant]} ${sizeClasses[size]} ${props.className || ""}`;
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
