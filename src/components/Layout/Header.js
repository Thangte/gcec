import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  return (
    <>
      <nav
        className="navbar navbar-light navbar-expand-lg fixed-top"
        style={{ backgroundColor: "#781704" }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              GCEC Private School
            </Link>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" style={{ color: "white" }}>
                  Home
                </NavLink>
              </li>

              {!auth?.user ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className="nav-link"
                      style={{ color: "white" }}
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none", color: "white" }}
                    >
                      {auth?.user?.name ? "teacher" : "student"}
                    </NavLink>

                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.name ? "teacher" : "student"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
