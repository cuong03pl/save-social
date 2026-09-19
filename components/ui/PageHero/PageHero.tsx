import React from "react";

export default function PageHero({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div>
      <h1 className="mt-6 text-center text-3xl  text-gray-900">
        {title || "Tải Video YouTube"}
      </h1>
      <p className="mt-2 text-center text-sm text-gray-600">
        {description || "Tải video từ YouTube 1080p. Miễn phí."}
      </p>
    </div>
  );
}
