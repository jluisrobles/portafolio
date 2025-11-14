import React from "react";

export function Badge({ children, className = "", ...props }) {
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${className}`} {...props}>
      {children}
    </span>
  );
}
