function Navbar() {

  return (
    <nav className="navbar">
      <div className="navbar-logo">MyApp</div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/features">Features</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
