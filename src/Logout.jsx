import { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.removeItem("token");
      window.location.reload();
    },1800);

    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default Logout;
