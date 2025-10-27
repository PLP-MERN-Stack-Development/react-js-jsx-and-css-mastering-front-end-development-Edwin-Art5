import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-2xl font-bold">PLP Task Manager</Link>
        <div className="flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "font-bold underline" : ""}
          >
            Home
          </NavLink>
          <NavLink
            to="/tasks"
            className={({ isActive }) => isActive ? "font-bold underline" : ""}
          >
            Tasks
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? "font-bold underline" : ""}
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
