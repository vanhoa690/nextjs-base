import Link from "next/link";

export default function Sidebar() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-100"
      style={{ width: 280, minHeight: "100vh" }}
    >
      <Link
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4">NextJS 15</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link href="/" className="nav-link active" aria-current="page">
            Home
          </Link>
        </li>
        <li>
          <Link href="/admin/products" className="nav-link text-white">
            Products
          </Link>
        </li>
      </ul>
    </div>
  );
}
