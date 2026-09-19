"use client";

import PasteButton from "../Button/PasteButton";

type UrlInputProps = {
  id?: string;
  name?: string;
  placeholder?: string;
};

export default function UrlInput({
  id = "url",
  name = "url",
  placeholder = "https://www.youtube.com/....",
}: UrlInputProps) {
  const handlePaste = async () => {
    const text = await navigator.clipboard.readText();
  };

  return (
    <div className="relative flex items-center">
      <span className="absolute left-3 text-gray-400">🔗</span>
      <input
        id={id}
        name={name}
        type="url"
        autoComplete="url"
        required
        className="appearance-none rounded-none relative block w-full px-10 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
        placeholder={placeholder}
      />

      <PasteButton onPaste={handlePaste} text="Dán" />
    </div>
  );
}
