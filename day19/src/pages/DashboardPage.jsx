import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getContacts, exportContacts, importContacts } from "../services/contactService";
import ContactCard from "../components/ContactCard";
import ImportModal from "../components/ImportModal";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import ToastMessage from "../components/ToastMessage";

export default function DashboardPage() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState("");
  const [toast, setToast] = useState("");
  const [showImportModal, setShowImportModal] = useState(false);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const data = await getContacts({ page, per_page: 12, search: searchTerm || undefined, favorite: favorite || undefined });
      setContacts(data.items);
      setTotal(data.total);
      if (!data.items.length) {
        setNotice("No contacts found. Add a new contact to get started.");
      } else {
        setNotice("");
      }
    } catch (err) {
      setNotice("Unable to load contacts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, [page, searchTerm, favorite]);

  const handleExport = async () => {
    try {
      const response = await exportContacts();
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "contacts.csv");
      document.body.appendChild(link);
      link.click();
      link.remove();
      setToast("Download started.");
    } catch (err) {
      setToast("Could not export contacts.");
    }
  };

  const handleImport = async (file) => {
    if (!file) {
      setImportError("Please choose a CSV file.");
      return;
    }

    setLoading(true);
    setImportError("");
    try {
      const result = await importContacts(file);
      setToast(result.data.detail || "Import completed.");
      setShowImportModal(false);
      fetchContacts();
    } catch (err) {
      setToast("Import failed. Please use a valid CSV file.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="dashboard-page">
      <ImportModal open={showImportModal} onClose={() => setShowImportModal(false)} onImport={handleImport} loading={loading} />
      <div className="page-header">
        <div>
          <h1>Contacts</h1>
          <p>Manage your address book with filters, search, and favorites.</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-secondary" type="button" onClick={handleExport}>
            Export CSV
          </button>
          <button className="btn btn-secondary" type="button" onClick={() => setShowImportModal(true)}>
            Import CSV
          </button>
          <Link to="/contacts/new" className="btn btn-primary">
            + New Contact
          </Link>
        </div>
      </div>
      <SearchBar value={searchTerm} onChange={setSearchTerm} favorite={favorite} setFavorite={setFavorite} onFilter={() => setSearchTerm("")} />
      {toast && <ToastMessage message={toast} type="info" />}
      {loading ? (
        <Loader />
      ) : (
        <>
          {notice && <ToastMessage message={notice} type="info" />}
          <div className="contacts-grid">
            {contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>
          <Pagination page={page} total={total} perPage={12} onPageChange={setPage} />
        </>
      )}
    </section>
  );
}
