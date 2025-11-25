import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    // If URL contains #section
    if (location.hash) {
      const id = location.hash.substring(1); // remove "#"
      const element = document.getElementById(id);

      if (element) {
        // Delay ensures homepage content has mounted
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    } else {
      // No hash → scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return null;
}
