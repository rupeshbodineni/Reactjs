import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar({ onToggleTheme, darkMode }) {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="app-navbar">
      <div className="brand">Contact Manager</div>
      <div className="navbar-actions">
        <button className="theme-toggle" onClick={onToggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        {user ? (
          <>
            <span className="user-label">{user.username}</span>
            <button className="btn btn-ghost" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn btn-secondary">
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
