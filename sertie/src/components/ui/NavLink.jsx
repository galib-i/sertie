import { Link } from "react-router-dom";

export function NavLink({ to, children, className = "" }) {
  return (
    <Link
      to={to}
      className={`relative hover:text-sertie-blue-500 after:absolute after:left-0 after:bottom-[-16px] after:w-full after:h-[2px] after:bg-sertie-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${className}`}
    >
      {children}
    </Link>
  );
}
