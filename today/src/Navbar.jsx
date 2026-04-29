const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg text-light">
      <a href="/index" className="navbar-brand">logo</a>
        <div className="ms-auto">
          <ul className="navbar-nav">
            <li><a href="./index" className="nav-link">Index</a></li>
            <li><a href="./home"  className="nav-link">Home</a></li>
            <li><a href="./services"  className="nav-link">servives</a></li>
            <li><a href="./login"  className="nav-link">login</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;