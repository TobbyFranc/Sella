// src/components/Breadcrumb.jsx
import { Link } from "react-router-dom";

const Breadcrumb = ({ items }) => {
  return (
    <nav className="mb-6 text-sm text-gray-600">
      {items.map((item, idx) => (
        <span key={idx}>
          {item.to ? (
            <Link to={item.to} className="hover:underline capitalize">
              {item.label}
            </Link>
          ) : (
            <span className="text-[var(--accent)] capitalize">{item.label}</span>
          )}
          {idx < items.length - 1 && " > "}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
