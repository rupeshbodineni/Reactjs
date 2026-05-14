import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="app-sidebar">
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/contacts/new">Add Contact</Link>
        <Link to="/">All Contacts</Link>
      </nav>
    </aside>
  );
}
