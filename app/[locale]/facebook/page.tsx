import Button from "@/components/common/Button/PrimaryButton";
import UrlInput from "@/components/common/Input/UrlInput";
import PageHero from "@/components/ui/PageHero/PageHero";
import React from "react";

export default function Facebook() {
  return (
    <div className="  flex items-center justify-center ">
      <div className="max-w-[800px] w-full space-y-8  p-10 rounded-lg ">
        <PageHero
          title="Tải video từ Facebook"
          description="Tải video từ Facebook. Miễn phí."
        />
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="facebook-link" className="sr-only">
                Liên kết Facebook
              </label>
              <UrlInput placeholder="https://www.facebook.com/...." />
            </div>
          </div>

          <div>
            <Button variant="facebook" text="Tải xuống" />
          </div>
        </div>
      </div>
    </div>
  );
}
