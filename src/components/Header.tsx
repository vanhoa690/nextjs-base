import Link from "next/link";

export default function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <span className="navbar-brand">NextJS 15</span>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav me-auhref mb-2 mb-lg-0"
            style={{ gap: 3, fontSize: 20 }}
          >
            <li className="nav-item">
              <Link className="nav-link" href="/admin/products">
                Admin Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
