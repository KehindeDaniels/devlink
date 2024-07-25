// src/components/Toast.tsx
import React from "react";

interface ToastProps {
  message: string;
  show: boolean;
}

const Toast: React.FC<ToastProps> = ({ message, show }) => {
  return (
    show && (
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white rounded-lg py-2 px-4 flex items-center">
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 10h11M3 6h11m-6 8h6m-6 4h6M4 6l2 2m4-2l2 2m0 4l-2 2m-4-2l-2 2"
          ></path>
        </svg>
        <span>{message}</span>
      </div>
    )
  );
};

export default Toast;
