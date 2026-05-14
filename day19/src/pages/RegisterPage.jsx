import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ToastMessage from "../components/ToastMessage";

export default function RegisterPage() {
  const { register } = useContext(AuthContext);
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      await register(form);
      setSuccess("Registration successful. You can log in now.");
      setTimeout(() => navigate("/login"), 1200);
    } catch (err) {
      setError("Could not register. Please check your details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h2>Register</h2>
        <p>Create your account and manage contacts with ease.</p>
        {error && <ToastMessage message={error} type="danger" />}
        {success && <ToastMessage message={success} type="success" />}
        <form onSubmit={handleSubmit} className="form-grid">
          <label>
            Username
            <input type="text" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} required />
          </label>
          <label>
            Email
            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          </label>
          <label>
            Password
            <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} minLength={6} required />
          </label>
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <div className="auth-footer">
          <span>Already registered?</span>
          <Link to="/login">Login instead</Link>
        </div>
      </div>
    </main>
  );
}
