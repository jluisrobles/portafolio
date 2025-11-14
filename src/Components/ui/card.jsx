import React from "react";

export function Card({ children, className = "", ...props }) {
  return (
    <div className={`rounded-xl bg-white ${className}`} {...props}>
      {children}
    </div>
  );
}
