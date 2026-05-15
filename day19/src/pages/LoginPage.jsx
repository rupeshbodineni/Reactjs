import { useContext, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ToastMessage from "../components/ToastMessage";

export default function LoginPage() {
  const { login } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(credentials);
      navigate(from, { replace: true });
    } catch (err) {
      setError("Invalid username or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h2>Login</h2>
        <p>Access your contact manager account.</p>
        {error && <ToastMessage message={error} type="danger" />}
        <form onSubmit={handleSubmit} className="form-grid">
          <label>
            Username
            <input type="text" value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} required />
          </label>
          <label>
            Password
            <input type="password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} required />
          </label>
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>
        <div className="auth-footer">
          <span>New user?</span>
          <Link to="/register">Create an account</Link>
        </div>
      </div>
    </main>
  );
}
