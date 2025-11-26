import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  useEffect(() => {
    // Hide navbar and footer
    const navbar = document.querySelector("nav");
    const footer = document.querySelector("footer");
    if (navbar) navbar.style.display = "none";
    if (footer) footer.style.display = "none";

    // Restore navbar and footer when leaving page
    return () => {
      if (navbar) navbar.style.display = "";
      if (footer) footer.style.display = "";
    };
  }, []);

  return (
    <div id="error" className="w-screen min-h-screen flex items-center justify-center bg-[#0d1117] p-5 text-center overflow-x-hidden overflow-y-auto">
      <div className="max-w-md sm:max-w-lg animate-fadeUp px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#58a6ff] mb-4 break-words">
          Oops! Something went wrong.
        </h1>
        <p className="text-base sm:text-lg text-[#f0f6fc] opacity-90 mb-6 break-words leading-relaxed">
          The page you're looking for isn't available right now.
          <br />
          It may be temporarily down or moved.
        </p>
        <button
          className="text-[#58a6ff] font-bold hover:underline text-lg sm:text-xl"
          onClick={() => navigate("/")}
        >
          Return to Homepage
        </button>
      </div>

      <style>{`
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(25px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeUp {
    animation: fadeUp 1s ease;
  }
`}</style>
    </div>
  );
}
