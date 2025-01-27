import { Link, useLocation } from "react-router";
import { LINKS } from "../data/constant/links.const";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div className="navbar absolute rounded-lg flex justify-center gap-3">
      {LINKS.map((link) => (
        <Link
          key={link.label}
          to={link.path}
          className={`navbar-link ${link.path === pathname ? "active" : ""}`}
        >
          {link.label}
        </Link>
      ))}
      {/* <Link to="/" className="navbar-link active">
        Home
      </Link>
      <Link href="#" className="navbar-link">
        About
      </Link>
      <Link href="#" className="navbar-link">
        Education
      </Link>
      <Link href="#" className="navbar-link">
        Skills
      </Link>
      <Link href="#" className="navbar-link">
        Contact
      </Link> */}
    </div>
  );
};

export default Navbar;
