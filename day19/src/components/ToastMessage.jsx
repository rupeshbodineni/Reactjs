export default function ToastMessage({ message, type = "info" }) {
  if (!message) return null;
  return <div className={`toast-message toast-${type}`}>{message}</div>;
}
