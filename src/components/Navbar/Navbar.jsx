import "./NavBar.css";
import React, {
  useContext,
  useRef,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/esnunipi.png";
import nav_dropdown from "../../assets/nav_dropdown.png";
import { translations } from "../../translations/translations";
import { ShopContext } from "../../context/ShopContext";

const NavBar = () => {
  const [hover, setHover] = useState(false);

  const {
    menu,
    setMenu,
    selectedLanguage,
    setSelectedLanguage,
    searchQuery,
    setSearchQuery,
    selectedMatch,
    setSelectedMatch,
    isAuthenticated,
    setIsAuthenticated,
    user,
    setUser,
    minheight_var,
    setMinheight_var,
  } = useContext(ShopContext);

  const location = useLocation();

  // Make useEffect more efficient
  useEffect(() => {
    const path = location.pathname;
    const pathMap = {
      "/home": "home",
      "/": "home",
      "/allgames": "allgames",
      "/status": "status",
    };

    if (pathMap[path]) {
      setMenu(pathMap[path]);
    }
  }, [location.pathname, setMenu]);

  const menuRef = useRef();
  const menuRef1 = useRef();
  // Function to close all dropdowns
  const closeAllDropdowns = () => {
    // Close Bootstrap dropdowns
    const dropdowns = document.querySelectorAll(".dropdown-menu.show");
    dropdowns.forEach((dropdown) => {
      const dropdownInstance = bootstrap.Dropdown.getInstance(
        dropdown.previousElementSibling
      );
      if (dropdownInstance) {
        dropdownInstance.hide();
      }
    });

    // Close mobile menu
    if (menuRef.current?.classList.contains("nav-menu-visible")) {
      menuRef.current.classList.remove("nav-menu-visible");
      menuRef1.current?.classList.remove("navbar-height");
    }
  };
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    menuRef1.current.classList.toggle("navbar-height");
    e.target.classList.toggle("open");
  };
  // Enhanced click handler for all links
  const handleLinkClick = () => {
    closeAllDropdowns();
    scrollTo(0, 0);
  };
  // Memoize languages array
  const languages = useMemo(
    () => [
      { code: "us", name: "English" },
      { code: "gr", name: "Greek" },
      { code: "fr", name: "French" },
      { code: "es", name: "Spanish" },
    ],
    []
  );

  // Replace the scroll effect with this for gradual scaling
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset || document.documentElement.scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Calculate scale factor based on scroll position
  const getScaleFactor = () => {
    const maxScroll = 100; // Adjust this value
    if (window.innerWidth < 576) return 1; // No scaling on small screens
    const scale = Math.max(0.9, 1 - (scrollY / maxScroll) * 0.2);
    return scale;
  };
  return (
    <>
      <main className="content">{/* Your page content */}</main>
      <div className="fixed-top">
        <div className="color-bar-container">
          <div className="color-bar">
            <div className="color-block blue"></div>
            <div className="color-block pink"></div>
            <div className="color-block green"></div>
            <div className="color-block orange"></div>
            <div className="color-block blue"></div>
            <div className="color-block pink"></div>
            <div className="color-block green"></div>
            <div className="color-block orange"></div>
            <div className="color-block blue"></div>
            <div className="color-block pink"></div>
            <div className="color-block green"></div>
            <div className="color-block orange"></div>
            <div className="color-block blue"></div>
            <div className="color-block pink"></div>
            <div className="color-block green"></div>
            <div className="color-block orange"></div>
            <div className="color-block blue"></div>
          </div>
        </div>
        <nav
          ref={menuRef1}
          className="navbar navbar-expand-lg bg-body-dark main-nav-bg p-0 py-2 px-2 px-lg-5"
        >
          <div className="container-fluid px-3 px-sm-5">
            <Link
              className="navbar-brand text-black fw-bold fs-5"
              to="/home"
              onClick={() => {
                handleLinkClick();
              }}
            >
              <img
                width={`${150 * getScaleFactor()}px`}
                style={{
                  transform: `scale(${getScaleFactor()})`,
                  transition: "all 0.3s ease-in-out",
                }}
                src={logo}
                alt=""
              />
            </Link>
            <ul
              ref={menuRef}
              className="nav-menu gap-0 navbar-nav me-auto mb-2 fs-6 px-2"
            >
              <li
                className="nav-item"
                style={{
                  textDecoration: "none",
                  fontWeight: menu === "home" ? "bold" : "normal",
                  color: menu === "home" ? "black" : "inherit",
                }}
              >
                <div className="nav-item dropdown">
                  <button
                    className="dropdown-toggle1 btn align-items-center d-flex py-1 rounded-0 rounded-top-4  fw-bold"
                    id="languageDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "#919191ff" }}
                  >
                    <span>
                      {translations[selectedLanguage.code]["ABOUT ESN"]}
                    </span>
                  </button>
                  <ul
                    className="dropdown-menu rounded-0 rounded-bottom-4 rounded-end-4 dropdown-menu-start text-black mt-0"
                    aria-labelledby="languageDropdown"
                    style={{ backgroundColor: "#7ac142" }}
                  >
                    <li>
                      <Link style={{ textDecoration: "none" }} to="what-esn">
                        <button
                          className="dropdown-item rounded-5 d-flex gap-2 fw-bold text-white"
                          onClick={() => {
                            handleLinkClick();
                          }}
                          type="button"
                        >
                          {translations[selectedLanguage.code]["WHAT IS ESN?"]}
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link style={{ textDecoration: "none" }} to="about-us">
                        <button
                          className="dropdown-item rounded-5 d-flex gap-2 fw-bold text-white"
                          type="button"
                          onClick={() => {
                            handleLinkClick();
                          }}
                        >
                          ESN UNIPI
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="erasmus-projects"
                      >
                        <button
                          className="dropdown-item rounded-5 d-flex gap-2 fw-bold text-white"
                          onClick={() => {
                            handleLinkClick();
                          }}
                          type="button"
                        >
                          {translations[selectedLanguage.code]["PROJECTS"]}
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                className="nav-item"
                style={{
                  textDecoration: "none",
                  fontWeight: menu === "home" ? "bold" : "normal",
                  color: menu === "home" ? "black" : "inherit",
                }}
              >
                <div className="nav-item dropdown">
                  <button
                    className="dropdown-toggle1 btn align-items-center d-flex py-1 rounded-0 rounded-top-4  fw-bold"
                    id="languageDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "#919191ff" }}
                  >
                    <span>
                      {
                        translations[selectedLanguage.code][
                          "ERASMUS IN PEIRAEUS"
                        ]
                      }
                    </span>
                  </button>
                  <ul
                    className="dropdown-menu rounded-0 rounded-bottom-4 rounded-end-4 dropdown-menu-start text-black mt-0"
                    aria-labelledby="languageDropdown"
                    style={{ backgroundColor: "#7ac142" }}
                  >
                    <li>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="meet-piraeus"
                      >
                        <button
                          className="dropdown-item rounded-5 d-flex gap-2 fw-bold text-white"
                          type="button"
                          onClick={() => {
                            handleLinkClick();
                          }}
                        >
                          {translations[selectedLanguage.code]["MEET PEIRAEUS"]}
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="university-piraeus"
                      >
                        <button
                          className="dropdown-item rounded-5 d-flex gap-2 fw-bold text-white"
                          type="button"
                          onClick={() => {
                            handleLinkClick();
                          }}
                        >
                          {
                            translations[selectedLanguage.code][
                              "UNIVERSITY OF PEIRAEUS"
                            ]
                          }
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="accomondation-piraeus-athens-metropolitan-area"
                      >
                        <button
                          className="dropdown-item rounded-5 d-flex gap-2 fw-bold text-white"
                          type="button"
                          onClick={() => {
                            handleLinkClick();
                          }}
                        >
                          {translations[selectedLanguage.code]["ACCOMMODATION"]}
                        </button>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link
                        style={{ textDecoration: "none" }}
                        to="survival-guide"
                      >
                        <button
                          className="dropdown-item rounded-5 d-flex gap-2 fw-bold text-white"
                          type="button"
                          onClick={() => {
                            handleLinkClick();
                          }}
                        >
                          {
                            translations[selectedLanguage.code][
                              "SURVIVAL GUIDE"
                            ]
                          }
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link style={{ textDecoration: "none" }} to="esncard">
                        <button
                          className="dropdown-item rounded-5 d-flex gap-2 fw-bold text-white"
                          type="button"
                          onClick={() => {
                            handleLinkClick();
                          }}
                        >
                          ESNCARD
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                className="nav-item"
                style={{
                  textDecoration: "none",
                  fontWeight: menu === "home" ? "bold" : "normal",
                  color: menu === "home" ? "black" : "inherit",
                }}
              >
                <div className="nav-item dropdown">
                  <Link style={{ textDecoration: "none" }} to="events">
                    <button
                      className="dropdown-toggle1 btn align-items-center d-flex py-1 rounded-4  fw-bold"
                      role="button"
                      aria-expanded="false"
                      onClick={() => {
                        handleLinkClick();
                      }}
                      style={{ color: "#919191ff" }}
                    >
                      <span>
                        {translations[selectedLanguage.code]["EVENTS"]}
                      </span>
                    </button>
                  </Link>
                </div>
              </li>
              <li
                className="nav-item"
                style={{
                  textDecoration: "none",
                  fontWeight: menu === "home" ? "bold" : "normal",
                  color: menu === "home" ? "black" : "inherit",
                }}
              >
                <div className="nav-item dropdown">
                  <Link style={{ textDecoration: "none" }} to="news">
                    <button
                      className="dropdown-toggle1 btn align-items-center d-flex py-1 rounded-4  fw-bold"
                      role="button"
                      aria-expanded="false"
                      style={{ color: "#919191ff" }}
                      onClick={() => {
                        handleLinkClick();
                      }}
                    >
                      <span>{translations[selectedLanguage.code]["NEWS"]}</span>
                    </button>
                  </Link>
                </div>
              </li>
              <li
                className="nav-item"
                style={{
                  textDecoration: "none",
                  fontWeight: menu === "home" ? "bold" : "normal",
                  color: menu === "home" ? "black" : "inherit",
                }}
              >
                <div className="nav-item dropdown">
                  <Link style={{ textDecoration: "none" }} to="partners">
                    <button
                      className="dropdown-toggle1 btn align-items-center d-flex py-1 rounded-4  fw-bold"
                      role="button"
                      aria-expanded="false"
                      onClick={() => {
                        handleLinkClick();
                      }}
                      style={{ color: "#919191ff" }}
                    >
                      <span>
                        {translations[selectedLanguage.code]["PARTNERS"]}
                      </span>
                    </button>
                  </Link>
                </div>
              </li>
              <li
                className="nav-item"
                style={{
                  textDecoration: "none",
                  fontWeight: menu === "home" ? "bold" : "normal",
                  color: menu === "home" ? "black" : "inherit",
                }}
              >
                <div className="nav-item dropdown">
                  {" "}
                  <Link style={{ textDecoration: "none" }} to="become-one-us">
                    <button
                      className="dropdown-toggle1 btn align-items-center d-flex py-1 rounded-4  fw-bold"
                      role="button"
                      aria-expanded="false"
                      onClick={() => {
                        handleLinkClick();
                      }}
                      style={{ color: "#919191ff" }}
                    >
                      <span>
                        {translations[selectedLanguage.code]["JOIN US!"]}
                      </span>
                    </button>{" "}
                  </Link>
                </div>
              </li>
              <li
                className="nav-item"
                style={{
                  textDecoration: "none",
                  fontWeight: menu === "home" ? "bold" : "normal",
                  color: menu === "home" ? "black" : "inherit",
                }}
              >
                <div className="nav-item dropdown">
                  <Link style={{ textDecoration: "none" }} to="contact">
                    <button
                      className="dropdown-toggle1 btn align-items-center d-flex py-1 rounded-4  fw-bold"
                      role="button"
                      aria-expanded="false"
                      onClick={() => {
                        handleLinkClick();
                      }}
                      style={{ color: "#919191ff" }}
                    >
                      <span>
                        {translations[selectedLanguage.code]["CONTACT"]}
                      </span>
                    </button>
                  </Link>
                </div>
              </li>
              <li
                className="nav-item"
                style={{
                  textDecoration: "none",
                  fontWeight: menu === "home" ? "bold" : "normal",
                  color: menu === "home" ? "black" : "inherit",
                }}
              >
                <div className="nav-item dropdown">
                  <div className="d-flex gap-2 px-2 mt-2" id="social_div2">
                    <Link
                      to={"https://www.instagram.com/esnunipi/?hl=en"}
                      target="_blank"
                    >
                      <button
                        id="ig_but"
                        type="button"
                        className="btn border-0 rounded-5 justify-content-center btn-outline-dark align-items-center d-flex p-2"
                        style={{
                          width: "34px",
                          height: "34px",
                          backgroundColor: "#e6007a",
                        }}
                        onClick={() => {
                          scrollTo(0, 0);
                        }}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="white"
                          className="bi bi-instagram"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                        </svg>
                      </button>
                    </Link>
                    <Link
                      to={"https://www.tiktok.com/@esnunipi"}
                      target="_blank"
                    >
                      <button
                        id="tiktok_but"
                        type="button"
                        className="btn border-0 rounded-5 justify-content-center btn-outline-dark align-items-center d-flex p-2"
                        onClick={() => {
                          scrollTo(0, 0);
                        }}
                        style={{
                          width: "34px",
                          height: "34px",
                          backgroundColor: "#0d0d0d",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="white"
                          className="bi bi-tiktok"
                          viewBox="0 0 16 16"
                        >
                          <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                        </svg>
                      </button>
                    </Link>
                    <Link
                      to={"https://www.facebook.com/esn.unipi"}
                      target="_blank"
                    >
                      <button
                        id="fb_but"
                        type="button"
                        onClick={() => {
                          scrollTo(0, 0);
                        }}
                        className="btn border-0 rounded-5 justify-content-center btn-outline-dark align-items-center d-flex p-2"
                        style={{
                          width: "34px",
                          height: "34px",
                          backgroundColor: "#0062e8",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="white"
                          className="bi bi-facebook"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
            <form className="d-flex gap-2" role="search">
              <button
                onClick={dropdown_toggle}
                className="nav-dropdown btn btn-light align-items-center d-flex rounded-5"
                type="button"
                style={{
                  background: "rgb(224, 224, 224)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="black"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              </button>
              <div className="d-flex gap-2" id="social_div">
                <Link
                  to={"https://www.instagram.com/esnunipi/?hl=en"}
                  target="_blank"
                >
                  <button
                    id="ig_but"
                    type="button"
                    className="btn border-0 rounded-5 justify-content-center btn-outline-dark align-items-center d-flex p-2"
                    style={{
                      width: "36px",
                      height: "36px",
                      backgroundColor: "#e6007a",
                    }}
                    onClick={() => {
                      scrollTo(0, 0);
                    }}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="white"
                      className="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                  </button>
                </Link>
                <Link to={"https://www.tiktok.com/@esnunipi"} target="_blank">
                  <button
                    id="tiktok_but"
                    type="button"
                    className="btn border-0 rounded-5 justify-content-center btn-outline-dark align-items-center d-flex p-2"
                    onClick={() => {
                      scrollTo(0, 0);
                    }}
                    style={{
                      width: "36px",
                      height: "36px",
                      backgroundColor: "#0d0d0d",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="white"
                      className="bi bi-tiktok"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                    </svg>
                  </button>
                </Link>
                <Link to={"https://www.facebook.com/esn.unipi"} target="_blank">
                  <button
                    id="fb_but"
                    type="button"
                    onClick={() => {
                      scrollTo(0, 0);
                    }}
                    className="btn border-0 rounded-5 justify-content-center btn-outline-dark align-items-center d-flex p-2"
                    style={{
                      width: "36px",
                      height: "36px",
                      backgroundColor: "#0062e8",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="white"
                      className="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                  </button>
                </Link>
              </div>
              <div className="nav-item dropdown">
                <button
                  className={`dropdown-toggle btn align-items-center d-flex py-2 rounded-0 ${
                    window.innerWidth > 1600 ? "rounded-top-4" : "rounded-4"
                  }`}
                  id="languageDropdown"
                  role="button"
                  onClick={() => {
                    scrollTo(0, 0);
                  }}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    width: "58px",
                    height: "36px",
                    backgroundColor: "transparent",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-globe"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                  </svg>
                </button>
                <ul
                  className={`dropdown-menu rounded-0 rounded-bottom-4 rounded-end-4 ${
                    window.innerWidth < 1600 ? "rounded-4" : null
                  }  ${
                    window.innerWidth < 1700
                      ? "dropdown-menu-end mt-2"
                      : "dropdown-menu-start"
                  } text-black`}
                  aria-labelledby="languageDropdown"
                >
                  <li>
                    <button
                      className="dropdown-item  align-items-center rounded-5 d-flex gap-2"
                      onClick={() => setSelectedLanguage(languages[0])}
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 32 32"
                      >
                        <rect
                          x="1"
                          y="4"
                          width="30"
                          height="24"
                          rx="4"
                          ry="4"
                          fill="#fff"
                        ></rect>
                        <path
                          d="M1.638,5.846H30.362c-.711-1.108-1.947-1.846-3.362-1.846H5c-1.414,0-2.65,.738-3.362,1.846Z"
                          fill="#a62842"
                        ></path>
                        <path
                          d="M2.03,7.692c-.008,.103-.03,.202-.03,.308v1.539H31v-1.539c0-.105-.022-.204-.03-.308H2.03Z"
                          fill="#a62842"
                        ></path>
                        <path fill="#a62842" d="M2 11.385H31V13.231H2z"></path>
                        <path
                          fill="#a62842"
                          d="M2 15.077H31V16.923000000000002H2z"
                        ></path>
                        <path fill="#a62842" d="M1 18.769H31V20.615H1z"></path>
                        <path
                          d="M1,24c0,.105,.023,.204,.031,.308H30.969c.008-.103,.031-.202,.031-.308v-1.539H1v1.539Z"
                          fill="#a62842"
                        ></path>
                        <path
                          d="M30.362,26.154H1.638c.711,1.108,1.947,1.846,3.362,1.846H27c1.414,0,2.65-.738,3.362-1.846Z"
                          fill="#a62842"
                        ></path>
                        <path
                          d="M5,4h11v12.923H1V8c0-2.208,1.792-4,4-4Z"
                          fill="#102d5e"
                        ></path>
                        <path
                          d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                          opacity=".15"
                        ></path>
                        <path
                          d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                          fill="#fff"
                          opacity=".2"
                        ></path>
                        <path
                          fill="#fff"
                          d="M4.601 7.463L5.193 7.033 4.462 7.033 4.236 6.338 4.01 7.033 3.279 7.033 3.87 7.463 3.644 8.158 4.236 7.729 4.827 8.158 4.601 7.463z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M7.58 7.463L8.172 7.033 7.441 7.033 7.215 6.338 6.989 7.033 6.258 7.033 6.849 7.463 6.623 8.158 7.215 7.729 7.806 8.158 7.58 7.463z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M10.56 7.463L11.151 7.033 10.42 7.033 10.194 6.338 9.968 7.033 9.237 7.033 9.828 7.463 9.603 8.158 10.194 7.729 10.785 8.158 10.56 7.463z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M6.066 9.283L6.658 8.854 5.927 8.854 5.701 8.158 5.475 8.854 4.744 8.854 5.335 9.283 5.109 9.979 5.701 9.549 6.292 9.979 6.066 9.283z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M9.046 9.283L9.637 8.854 8.906 8.854 8.68 8.158 8.454 8.854 7.723 8.854 8.314 9.283 8.089 9.979 8.68 9.549 9.271 9.979 9.046 9.283z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M12.025 9.283L12.616 8.854 11.885 8.854 11.659 8.158 11.433 8.854 10.702 8.854 11.294 9.283 11.068 9.979 11.659 9.549 12.251 9.979 12.025 9.283z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M6.066 12.924L6.658 12.494 5.927 12.494 5.701 11.799 5.475 12.494 4.744 12.494 5.335 12.924 5.109 13.619 5.701 13.19 6.292 13.619 6.066 12.924z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M9.046 12.924L9.637 12.494 8.906 12.494 8.68 11.799 8.454 12.494 7.723 12.494 8.314 12.924 8.089 13.619 8.68 13.19 9.271 13.619 9.046 12.924z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M12.025 12.924L12.616 12.494 11.885 12.494 11.659 11.799 11.433 12.494 10.702 12.494 11.294 12.924 11.068 13.619 11.659 13.19 12.251 13.619 12.025 12.924z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M13.539 7.463L14.13 7.033 13.399 7.033 13.173 6.338 12.947 7.033 12.216 7.033 12.808 7.463 12.582 8.158 13.173 7.729 13.765 8.158 13.539 7.463z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M4.601 11.104L5.193 10.674 4.462 10.674 4.236 9.979 4.01 10.674 3.279 10.674 3.87 11.104 3.644 11.799 4.236 11.369 4.827 11.799 4.601 11.104z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M7.58 11.104L8.172 10.674 7.441 10.674 7.215 9.979 6.989 10.674 6.258 10.674 6.849 11.104 6.623 11.799 7.215 11.369 7.806 11.799 7.58 11.104z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M10.56 11.104L11.151 10.674 10.42 10.674 10.194 9.979 9.968 10.674 9.237 10.674 9.828 11.104 9.603 11.799 10.194 11.369 10.785 11.799 10.56 11.104z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M13.539 11.104L14.13 10.674 13.399 10.674 13.173 9.979 12.947 10.674 12.216 10.674 12.808 11.104 12.582 11.799 13.173 11.369 13.765 11.799 13.539 11.104z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M4.601 14.744L5.193 14.315 4.462 14.315 4.236 13.619 4.01 14.315 3.279 14.315 3.87 14.744 3.644 15.44 4.236 15.01 4.827 15.44 4.601 14.744z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M7.58 14.744L8.172 14.315 7.441 14.315 7.215 13.619 6.989 14.315 6.258 14.315 6.849 14.744 6.623 15.44 7.215 15.01 7.806 15.44 7.58 14.744z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M10.56 14.744L11.151 14.315 10.42 14.315 10.194 13.619 9.968 14.315 9.237 14.315 9.828 14.744 9.603 15.44 10.194 15.01 10.785 15.44 10.56 14.744z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M13.539 14.744L14.13 14.315 13.399 14.315 13.173 13.619 12.947 14.315 12.216 14.315 12.808 14.744 12.582 15.44 13.173 15.01 13.765 15.44 13.539 14.744z"
                        ></path>
                      </svg>
                      English
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item align-items-center rounded-5 d-flex gap-2"
                      onClick={() => setSelectedLanguage(languages[1])}
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 32 32"
                      >
                        <rect
                          x="1"
                          y="4"
                          width="30"
                          height="24"
                          rx="4"
                          ry="4"
                          fill="#fff"
                        ></rect>
                        <path
                          d="M1.244,6.67H30.756c-.55-1.552-2.016-2.67-3.756-2.67H5c-1.74,0-3.206,1.118-3.756,2.67Z"
                          fill="#295cab"
                        ></path>
                        <path fill="#295cab" d="M1 9.34H31V12.01H1z"></path>
                        <path fill="#295cab" d="M1 14.68H31V17.35H1z"></path>
                        <path
                          fill="#295cab"
                          d="M1 20.02H31V22.689999999999998H1z"
                        ></path>
                        <path
                          d="M1.253,25.36c.558,1.536,2.018,2.64,3.747,2.64H27c1.729,0,3.188-1.104,3.747-2.64H1.253Z"
                          fill="#295cab"
                        ></path>
                        <path
                          d="M14.35,4H5c-2.209,0-4,1.791-4,4v9.35H14.35V4Z"
                          fill="#295cab"
                        ></path>
                        <path fill="#fff" d="M1 9.34H14.35V12.01H1z"></path>
                        <path
                          transform="rotate(90 7.675 10.675)"
                          fill="#fff"
                          d="M1 9.34H14.35V12.01H1z"
                        ></path>
                        <path
                          d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                          opacity=".15"
                        ></path>
                        <path
                          d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                          fill="#fff"
                          opacity=".2"
                        ></path>
                      </svg>
                      Ελληνικά
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item align-items-center rounded-5 d-flex gap-2"
                      onClick={() => setSelectedLanguage(languages[2])}
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 32 32"
                      >
                        <path fill="#fff" d="M10 4H22V28H10z"></path>
                        <path
                          d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                          fill="#092050"
                        ></path>
                        <path
                          d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                          transform="rotate(180 26 16)"
                          fill="#be2a2c"
                        ></path>
                        <path
                          d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                          opacity=".15"
                        ></path>
                        <path
                          d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                          fill="#fff"
                          opacity=".2"
                        ></path>
                      </svg>
                      François
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item align-items-center rounded-5 d-flex gap-2"
                      onClick={() => setSelectedLanguage(languages[3])}
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 32 32"
                      >
                        <path fill="#f1c142" d="M1 10H31V22H1z"></path>
                        <path
                          d="M5,4H27c2.208,0,4,1.792,4,4v3H1v-3c0-2.208,1.792-4,4-4Z"
                          fill="#a0251e"
                        ></path>
                        <path
                          d="M5,21H27c2.208,0,4,1.792,4,4v3H1v-3c0-2.208,1.792-4,4-4Z"
                          transform="rotate(180 16 24.5)"
                          fill="#a0251e"
                        ></path>
                        <path
                          d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                          opacity=".15"
                        ></path>
                        <path
                          d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                          fill="#fff"
                          opacity=".2"
                        ></path>
                        <path
                          d="M12.614,13.091c.066-.031,.055-.14-.016-.157,.057-.047,.02-.15-.055-.148,.04-.057-.012-.144-.082-.13,.021-.062-.042-.127-.104-.105,.01-.068-.071-.119-.127-.081,.004-.068-.081-.112-.134-.069-.01-.071-.11-.095-.15-.035-.014-.068-.111-.087-.149-.028-.027-.055-.114-.057-.144-.004-.03-.047-.107-.045-.136,.002-.018-.028-.057-.044-.09-.034,.009-.065-.066-.115-.122-.082,.002-.07-.087-.111-.138-.064-.013-.064-.103-.087-.144-.036-.02-.063-.114-.075-.148-.017-.036-.056-.129-.042-.147,.022-.041-.055-.135-.031-.146,.036-.011-.008-.023-.014-.037-.016,.006-.008,.01-.016,.015-.025h.002c.058-.107,.004-.256-.106-.298v-.098h.099v-.154h-.099v-.101h-.151v.101h-.099v.154h.099v.096c-.113,.04-.169,.191-.11,.299h.002c.004,.008,.009,.017,.014,.024-.015,.002-.029,.008-.04,.017-.011-.067-.106-.091-.146-.036-.018-.064-.111-.078-.147-.022-.034-.057-.128-.046-.148,.017-.041-.052-.131-.028-.144,.036-.051-.047-.139-.006-.138,.064-.056-.033-.131,.017-.122,.082-.034-.01-.072,.006-.091,.034-.029-.047-.106-.049-.136-.002-.03-.054-.117-.051-.143,.004-.037-.059-.135-.04-.149,.028-.039-.06-.14-.037-.15,.035-.053-.043-.138,0-.134,.069-.056-.038-.137,.013-.127,.081-.062-.021-.125,.044-.104,.105-.05-.009-.096,.033-.096,.084h0c0,.017,.005,.033,.014,.047-.075-.002-.111,.101-.055,.148-.071,.017-.082,.125-.016,.157-.061,.035-.047,.138,.022,.154-.013,.015-.021,.034-.021,.055h0c0,.042,.03,.077,.069,.084-.023,.048,.009,.11,.06,.118-.013,.03-.012,.073-.012,.106,.09-.019,.2,.006,.239,.11-.015,.068,.065,.156,.138,.146,.06,.085,.133,.165,.251,.197-.021,.093,.064,.093,.123,.118-.013,.016-.043,.063-.055,.081,.024,.013,.087,.041,.113,.051,.005,.019,.004,.028,.004,.031,.091,.501,2.534,.502,2.616-.001v-.002s.004,.003,.004,.004c0-.003-.001-.011,.004-.031l.118-.042-.062-.09c.056-.028,.145-.025,.123-.119,.119-.032,.193-.112,.253-.198,.073,.01,.153-.078,.138-.146,.039-.104,.15-.129,.239-.11,0-.035,.002-.078-.013-.109,.044-.014,.07-.071,.049-.115,.062-.009,.091-.093,.048-.139,.069-.016,.083-.12,.022-.154Zm-.296-.114c0,.049-.012,.098-.034,.141-.198-.137-.477-.238-.694-.214-.002-.009-.006-.017-.011-.024,0,0,0-.001,0-.002,.064-.021,.074-.12,.015-.153,0,0,0,0,0,0,.048-.032,.045-.113-.005-.141,.328-.039,.728,.09,.728,.393Zm-.956-.275c0,.063-.02,.124-.054,.175-.274-.059-.412-.169-.717-.185-.007-.082-.005-.171-.011-.254,.246-.19,.81-.062,.783,.264Zm-1.191-.164c-.002,.05-.003,.102-.007,.151-.302,.013-.449,.122-.719,.185-.26-.406,.415-.676,.73-.436-.002,.033-.005,.067-.004,.101Zm-1.046,.117c0,.028,.014,.053,.034,.069,0,0,0,0,0,0-.058,.033-.049,.132,.015,.152,0,0,0,.001,0,.002-.005,.007-.008,.015-.011,.024-.219-.024-.495,.067-.698,.206-.155-.377,.323-.576,.698-.525-.023,.015-.039,.041-.039,.072Zm3.065-.115s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0Zm-3.113,1.798v.002s-.002,0-.003,.002c0-.001,.002-.003,.003-.003Z"
                          fill="#9b8028"
                        ></path>
                        <path
                          d="M14.133,16.856c.275-.65,.201-.508-.319-.787v-.873c.149-.099-.094-.121,.05-.235h.072v-.339h-.99v.339h.075c.136,.102-.091,.146,.05,.235v.76c-.524-.007-.771,.066-.679,.576h.039s0,0,0,0l.016,.036c.14-.063,.372-.107,.624-.119v.224c-.384,.029-.42,.608,0,.8v1.291c-.053,.017-.069,.089-.024,.123,.007,.065-.058,.092-.113,.083,0,.026,0,.237,0,.269-.044,.024-.113,.03-.17,.028v.108s0,0,0,0v.107s0,0,0,0v.107s0,0,0,0v.108s0,0,0,0v.186c.459-.068,.895-.068,1.353,0v-.616c-.057,.002-.124-.004-.17-.028,0-.033,0-.241,0-.268-.054,.008-.118-.017-.113-.081,.048-.033,.034-.108-.021-.126v-.932c.038,.017,.073,.035,.105,.053-.105,.119-.092,.326,.031,.429l.057-.053c.222-.329,.396-.743-.193-.896v-.35c.177-.019,.289-.074,.319-.158Z"
                          fill="#9b8028"
                        ></path>
                        <path
                          d="M8.36,16.058c-.153-.062-.39-.098-.653-.102v-.76c.094-.041,.034-.115-.013-.159,.02-.038,.092-.057,.056-.115h.043v-.261h-.912v.261h.039c-.037,.059,.039,.078,.057,.115-.047,.042-.108,.118-.014,.159v.873c-.644,.133-.611,.748,0,.945v.35c-.59,.154-.415,.567-.193,.896l.057,.053c.123-.103,.136-.31,.031-.429,.032-.018,.067-.036,.105-.053v.932c-.055,.018-.069,.093-.021,.126,.005,.064-.059,.089-.113,.081,0,.026,0,.236,0,.268-.045,.024-.113,.031-.17,.028v.401h0v.215c.459-.068,.895-.068,1.352,0v-.186s0,0,0,0v-.108s0,0,0,0v-.107s0,0,0,0v-.107s0,0,0,0v-.108c-.056,.002-.124-.004-.169-.028,0-.033,0-.241,0-.269-.055,.008-.119-.018-.113-.083,.045-.034,.03-.107-.024-.124v-1.29c.421-.192,.383-.772,0-.8v-.224c.575,.035,.796,.314,.653-.392Z"
                          fill="#9b8028"
                        ></path>
                        <path
                          d="M12.531,14.533h-4.28l.003,2.572v1.485c0,.432,.226,.822,.591,1.019,.473,.252,1.024,.391,1.552,.391s1.064-.135,1.544-.391c.364-.197,.591-.587,.591-1.019v-4.057Z"
                          fill="#a0251e"
                        ></path>
                      </svg>
                      Español
                    </button>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
};

export default React.memo(NavBar);
