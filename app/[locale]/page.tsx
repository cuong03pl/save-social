import React from "react";

export default function HomePage() {
  return (
    <div className="  flex items-center justify-center ">
      <div className="max-w-md w-full space-y-8  p-10 rounded-lg ">
        <div>
          <h1 className="mt-6 text-center text-3xl  text-gray-900">
            Tải Video YouTube
          </h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Tải video từ YouTube 1080p. Miễn phí.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="youtube-link" className="sr-only">
                Liên kết YouTube
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-3 text-gray-400">🔗</span>
                <input
                  id="youtube-link"
                  name="youtube-link"
                  type="url"
                  autoComplete="url"
                  required
                  className="appearance-none rounded-none relative block w-full px-10 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                  placeholder="https://www.youtube.com/...."
                />
                <button
                  type="button"
                  className="absolute right-0 top-0 bottom-0 px-4 py-2 bg-red-100 text-red-600 rounded-r-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-sm"
                >
                  <span className="mr-1">📋</span> Dán
                </button>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <span className="h-5 w-5 text-white group-hover:text-red-300">
                  ⬇️
                </span>
              </span>
              Tải xuống
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
