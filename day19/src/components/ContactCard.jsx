import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function ContactCard({ contact }) {
  return (
    <article className="contact-card">
      <div className="contact-card-image">
        <img src={contact.image ? `${import.meta.env.VITE_API_URL || "http://localhost:8000"}/uploads/${contact.image}` : "https://via.placeholder.com/320x240?text=Contact"} alt={contact.full_name} />
      </div>
      <div className="contact-card-body">
        <div className="contact-card-header">
          <h3>{contact.full_name}</h3>
          {contact.is_favorite ? <FaStar className="favorite-icon" /> : <FaRegStar className="favorite-icon" />}
        </div>
        <p>{contact.job_title || contact.company}</p>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
      </div>
      <Link to={`/contacts/${contact.id}`} className="btn btn-sm btn-primary">
        View
      </Link>
    </article>
  );
}
