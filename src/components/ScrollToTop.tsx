import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls the window to top when the route changes.
 * Fixes the issue where navigating (e.g. on mobile) leaves the user at the previous scroll position (e.g. footer).
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
