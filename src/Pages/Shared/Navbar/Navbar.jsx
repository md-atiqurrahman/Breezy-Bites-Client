import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarOptions = (
    <>
      <li>
        <Link to="/" className="p-0 hover:text-[#EEFF25]">
          Home
        </Link>
      </li>
      <li>
        <Link to="/contact" className="p-0 hover:text-[#EEFF25]">
          CONTACT us
        </Link>
      </li>
      <li>
        <Link to="/dashboard" className="p-0 hover:text-[#EEFF25]">
          DASHBOARD
        </Link>
      </li>
      <li>
        <Link to="/menu" className="p-0 hover:text-[#EEFF25]">
          Our Menu
        </Link>
      </li>
      <li>
        <Link to="/shop" className="p-0 hover:text-[#EEFF25]">
          Our Shop
        </Link>
      </li>
      <li>
        <Link to="/login" className="p-0 hover:text-[#EEFF25]">
          Login
        </Link>
      </li>
    </>
  );
  return (
    <header>
      <nav className="navbar justify-between bg-[#15151580] text-white px-0 lg:px-[36px] py-[15px]">
        <div className="flex flex-row-reverse justify-evenly  w-full lg:w-auto">
          <div className="dropdown  dropdown-bottom dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#15151580] rounded-box w-52"
            >
              {navbarOptions}
            </ul>
          </div>
          <div className="flex flex-col justify-start items-start font-[Cinzel]">
            <Link
              to="/"
              className="text-[32px] font-black uppercase tracking-[1px]"
            >
              Breezy Bites
            </Link>
            <p className="uppercase text-[24px] font-bold tracking-[9.12px]">
              Restaurant
            </p>
          </div>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-4 px-1 text-[20px] font-normal uppercase">
            {navbarOptions}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
