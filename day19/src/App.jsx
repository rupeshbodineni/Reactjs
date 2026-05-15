import { useEffect, useState, useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import ContactFormPage from "./pages/ContactFormPage";
import ContactDetailsPage from "./pages/ContactDetailsPage";
import "./App.css";

function AppShell() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="app-shell">
      <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode((prev) => !prev)} />
      <div className="app-layout">
        {user && <Sidebar />}
        <main className="app-content">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/contacts/new"
              element={
                <PrivateRoute>
                  <ContactFormPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/contacts/:id/edit"
              element={
                <PrivateRoute>
                  <ContactFormPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/contacts/:id"
              element={
                <PrivateRoute>
                  <ContactDetailsPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
