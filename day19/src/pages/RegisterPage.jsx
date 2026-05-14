import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ToastMessage from "../components/ToastMessage";
import { FaUser, FaEnvelope, FaLock, FaUserPlus } from "react-icons/fa";

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
    } catch {
      setError("Could not register. Please check your details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-wrapper">
        {/* Welcome Section */}
        <div className="welcome-section">
          <div className="welcome-content">
            <div className="logo-section">
              <FaUserPlus className="logo-icon" />
              <h1>ContactHub</h1>
            </div>
            <h2>Join Our Community</h2>
            <p>Create your account and start managing your contacts with ease. Connect with friends, family, and colleagues all in one place.</p>
            <div className="features">
              <div className="feature-item">
                <span className="feature-icon">📱</span>
                <span>Easy Contact Management</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔒</span>
                <span>Secure & Private</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">⚡</span>
                <span>Fast & Reliable</span>
              </div>
            </div>
          </div>
        </div>

        {/* Register Form Section */}
        <div className="register-section">
          <div className="register-card">
            <div className="register-header">
              <h2>Create Account</h2>
              <p>Fill in your details to get started</p>
            </div>

            {error && <ToastMessage message={error} type="danger" />}
            {success && <ToastMessage message={success} type="success" />}

            <form onSubmit={handleSubmit} className="register-form">
              <div className="input-group">
                <label htmlFor="username">Username</label>
                <div className="input-wrapper">
                  <FaUser className="input-icon" />
                  <input
                    id="username"
                    type="text"
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                    placeholder="Enter your username"
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-wrapper">
                  <FaEnvelope className="input-icon" />
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                  <FaLock className="input-icon" />
                  <input
                    id="password"
                    type="password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    placeholder="Create a password"
                    minLength={6}
                    required
                  />
                </div>
              </div>

              <button className="register-btn" type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <div className="spinner"></div>
                    Creating Account...
                  </>
                ) : (
                  <>
                    <FaUserPlus />
                    Create Account
                  </>
                )}
              </button>
            </form>

            <div className="register-footer">
              <p>Already have an account? <Link to="/login">Sign In</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
