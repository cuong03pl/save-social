"use client";

type PasteButtonProps = {
  onPaste: () => void;
  text?: string;
};

export default function PasteButton({
  onPaste,
  text = "Dán",
}: PasteButtonProps) {
  return (
    <button
      type="button"
      onClick={onPaste}
      className="absolute right-0 top-0 bottom-0 rounded-r-md bg-red-100 px-4 py-2 text-sm text-red-600 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
    >
      <span className="mr-1">📋</span>
      {text}
    </button>
  );
}
