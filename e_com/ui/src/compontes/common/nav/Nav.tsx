import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="p-5 border  bg-slate-700 flex justify-between">
      <div className="flex">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-500 p-2" : "text-black p-2"
          }
        >
          home
        </NavLink>
        <NavLink
          to="/brands"
          className={({ isActive }) =>
            isActive ? "text-red-500 p-2" : "text-black p-2"
          }
        >
          brands{" "}
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "text-red-500 p-2" : "text-black p-2"
          }
        >
          products{" "}
        </NavLink>
      </div>
      <div className="flex">
        <div className="p-2">login</div>
        <div className="p-2">sing up </div>
      </div>
    </nav>
  );
}

export default Nav;
