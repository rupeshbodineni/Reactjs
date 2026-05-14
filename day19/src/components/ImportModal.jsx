import { useState } from "react";

export default function ImportModal({ open, onClose, onImport, loading }) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  if (!open) return null;

  const handleFileChange = (event) => {
    const selected = event.target.files?.[0] || null;
    setError("");
    if (selected && selected.type !== "text/csv" && !selected.name.endsWith(".csv")) {
      setError("Please select a CSV file.");
      setFile(null);
      return;
    }
    setFile(selected);
  };

  const handleSubmit = async () => {
    if (!file) {
      setError("Choose a CSV file to import.");
      return;
    }
    await onImport(file);
    setFile(null);
  };

  return (
    <div className="modal-backdrop">
      <div className="import-modal">
        <div className="modal-header">
          <h3>Import Contacts</h3>
          <button className="btn btn-ghost" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="modal-body">
          <p>Upload a CSV file with these headers:</p>
          <pre className="csv-sample">full_name,email,phone,address,company,job_title,notes,is_favorite,image</pre>
          <label className="file-picker">
            <span>{file ? file.name : "Select CSV file"}</span>
            <input type="file" accept=".csv,text/csv" onChange={handleFileChange} />
          </label>
          {error && <div className="modal-error">{error}</div>}
        </div>
        <div className="modal-actions">
          <button className="btn btn-outline" onClick={onClose} disabled={loading}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSubmit} disabled={loading}>
            {loading ? "Importing..." : "Import Contacts"}
          </button>
        </div>
      </div>
    </div>
  );
}
