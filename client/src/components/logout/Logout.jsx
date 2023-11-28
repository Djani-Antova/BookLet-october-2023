import { useContext, useEffect } from "react";
import * as authService from "../../services/authService";
import { useNavigate } from "react-router-dom";
import Path from "../../paths";
import AuthContext from "../../contexts/authContext";
import { runSignOutAlert } from "../../utils/alerts";

export default function Logout() {
  const navigate = useNavigate();
  const { logoutHandler } = useContext(AuthContext);

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await authService.logout();
        logoutHandler();
        runSignOutAlert();
        navigate(Path.Home);
      } catch (error) {
        console.error(error);
        logoutHandler();
        navigate(Path.Home);
      }
    };

    handleLogout();
  }, [navigate, logoutHandler]);

  return null;
}
