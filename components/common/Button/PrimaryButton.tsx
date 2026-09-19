type ButtonProps = {
  type?: "button" | "submit" | "reset";
  text: string;
  icon?: string;
  disabled?: boolean;
  variant?: "youtube" | "tiktok" | "facebook";
};

export default function Button({
  type = "button",
  text,
  icon,
  disabled = false,
  variant = "tiktok",
}: ButtonProps) {
  const buttonVariants = {
    youtube: "bg-red-600 hover:bg-red-700 focus:ring-red-500",
    tiktok: "bg-black hover:bg-gray-800 focus:ring-gray-500",
    facebook: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={`
        group relative flex w-full justify-center
        rounded-md border border-transparent
        px-4 py-3
        text-sm font-medium text-white
        focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:cursor-not-allowed disabled:opacity-50
        ${buttonVariants[variant]}
      `}
    >
      {icon && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="h-5 w-5 group-hover:opacity-80">{icon}</span>
        </span>
      )}

      {text}
    </button>
  );
}
