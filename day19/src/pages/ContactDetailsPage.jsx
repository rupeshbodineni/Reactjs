import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getContact, deleteContact } from "../services/contactService";
import Loader from "../components/Loader";
import ToastMessage from "../components/ToastMessage";

export default function ContactDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getContact(id)
      .then((data) => setContact(data))
      .catch(() => setMessage("Contact not found."))
      .finally(() => setLoading(false));
  }, [id]);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await deleteContact(id);
      navigate("/");
    } catch (err) {
      setMessage("Could not delete contact.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="details-page">
      {loading ? (
        <Loader />
      ) : contact ? (
        <div className="details-card">
          {message && <ToastMessage message={message} type="danger" />}
          <div className="details-header">
            <div>
              <h2>{contact.full_name}</h2>
              <p>{contact.job_title || contact.company}</p>
            </div>
            <div className="details-actions">
              <Link to={`/contacts/${id}/edit`} className="btn btn-outline">
                Edit
              </Link>
              <button className="btn btn-danger" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
          <div className="details-body">
            <div className="profile-image">
              <img src={contact.image ? `${import.meta.env.VITE_API_URL || "http://localhost:8000"}/uploads/${contact.image}` : "https://via.placeholder.com/640x420?text=Contact+Image"} alt={contact.full_name} />
            </div>
            <div className="profile-info">
              <p><strong>Email:</strong> {contact.email || "—"}</p>
              <p><strong>Phone:</strong> {contact.phone || "—"}</p>
              <p><strong>Address:</strong> {contact.address || "—"}</p>
              <p><strong>Company:</strong> {contact.company || "—"}</p>
              <p><strong>Notes:</strong> {contact.notes || "No notes added."}</p>
            </div>
          </div>
        </div>
      ) : (
        <ToastMessage message={message || "Contact details unavailable."} type="danger" />
      )}
    </main>
  );
}
