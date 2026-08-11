"use client";

import type { ReactNode } from "react";

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
  formId: string;
};

export function TallyPopupButton({ children, className, formId }: TallyPopupButtonProps) {
  const openForm = () => {
    if (window.Tally?.openPopup) {
      window.Tally.openPopup(formId, {
        layout: "modal",
        width: 700,
        autoClose: 5000,
      });
      return;
    }

    window.open(
      `https://tally.so/r/${formId}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <button type="button" className={className} onClick={openForm}>
      {children}
    </button>
  );
}
