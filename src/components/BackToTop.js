import React from "react";

function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 hover:scale-105 transition-transform z-50"
    >
      ↑
    </button>
  );
}

export default BackToTop;