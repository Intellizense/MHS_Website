"use client";

import type { ReactNode } from "react";

const TALLY_FORM_ID = "gDVB14";

type TallyPopupOptions = {
  layout?: "default" | "modal";
  width?: number;
  autoClose?: number;
};

declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string, options?: TallyPopupOptions) => void;
    };
  }
}

type TallyPopupButtonProps = {
  children: ReactNode;
  className?: string;
};

export function TallyPopupButton({ children, className }: TallyPopupButtonProps) {
  const openInquiryForm = () => {
    if (window.Tally?.openPopup) {
      window.Tally.openPopup(TALLY_FORM_ID, {
        layout: "modal",
        width: 700,
        autoClose: 5000,
      });
      return;
    }

    window.open(
      `https://tally.so/r/${TALLY_FORM_ID}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <button type="button" className={className} onClick={openInquiryForm}>
      {children}
    </button>
  );
}
