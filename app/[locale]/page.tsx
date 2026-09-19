import Button from "@/components/common/Button/PrimaryButton";
import UrlInput from "@/components/common/Input/UrlInput";
import PageHero from "@/components/ui/PageHero/PageHero";
import React from "react";

export default function HomePage() {
  return (
    <div className="  flex items-center justify-center ">
      <div className="max-w-[800px] w-full space-y-8  p-10 rounded-lg ">
        <PageHero
          title="Tải video từ Tiktok"
          description="Tải video từ Tiktok. Miễn phí."
        />
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="youtube-link" className="sr-only">
                Liên kết YouTube
              </label>
              <UrlInput placeholder="https://www.tiktok.com/...." />
            </div>
          </div>

          <div>
            <Button variant="tiktok" text="Tải xuống" />
          </div>
        </div>
      </div>
    </div>
  );
}
