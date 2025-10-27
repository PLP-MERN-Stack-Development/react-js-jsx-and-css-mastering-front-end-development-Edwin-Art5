import React from "react";

export default function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      {children}
    </div>
  );
}
