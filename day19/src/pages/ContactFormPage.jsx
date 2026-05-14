import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createContact, getContact, updateContact } from "../services/contactService";
import Loader from "../components/Loader";
import ToastMessage from "../components/ToastMessage";

export default function ContactFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);
  const [contact, setContact] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
    company: "",
    job_title: "",
    notes: "",
    is_favorite: false,
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isEdit) {
      setLoading(true);
      getContact(id)
        .then((data) => setContact({ ...data, image: null }))
        .catch(() => setMessage("Failed to load contact."))
        .finally(() => setLoading(false));
    }
  }, [id, isEdit]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setLoading(true);
    try {
      const payload = { ...contact, image: contact.image };
      if (isEdit) {
        await updateContact(id, payload);
      } else {
        await createContact(payload);
      }
      navigate("/");
    } catch (err) {
      setMessage("Unable to save contact. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleField = (field) => (event) => {
    const value = field === "image" ? event.target.files[0] : event.target.value;
    setContact({ ...contact, [field]: field === "is_favorite" ? event.target.checked : value });
  };

  return (
    <main className="form-page">
      <div className="form-card">
        <h2>{isEdit ? "Edit contact" : "Add new contact"}</h2>
        {message && <ToastMessage message={message} type="danger" />}
        {loading ? (
          <Loader />
        ) : (
          <form onSubmit={handleSubmit} className="form-grid">
            <label>
              Full Name
              <input type="text" value={contact.full_name} onChange={handleField("full_name")} required />
            </label>
            <label>
              Email
              <input type="email" value={contact.email} onChange={handleField("email")} />
            </label>
            <label>
              Phone
              <input type="tel" value={contact.phone} onChange={handleField("phone")} />
            </label>
            <label>
              Address
              <input type="text" value={contact.address} onChange={handleField("address")} />
            </label>
            <label>
              Company
              <input type="text" value={contact.company} onChange={handleField("company")} />
            </label>
            <label>
              Job Title
              <input type="text" value={contact.job_title} onChange={handleField("job_title")} />
            </label>
            <label>
              Notes
              <textarea value={contact.notes} onChange={handleField("notes")} rows={4} />
            </label>
            <label>
              Profile Image
              <input type="file" accept="image/*" onChange={handleField("image")} />
            </label>
            <label className="checkbox-field">
              <input type="checkbox" checked={contact.is_favorite} onChange={handleField("is_favorite")} />
              Mark as favorite
            </label>
            <div className="form-actions">
              <button className="btn btn-primary" type="submit">
                {isEdit ? "Update Contact" : "Create Contact"}
              </button>
              <button className="btn btn-outline" type="button" onClick={() => navigate(-1)}>
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
