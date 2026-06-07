import React from "react";
import "./Footer.css";
import logo from "../../assets/favicon.ico";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { useMemo } from "react";
import { translations } from "../../translations/translations";

const Footer = () => {
  const { selectedLanguage } = useContext(ShopContext);
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
  return (
    <div className="footer text-center mt-2">
      <div className="container p-4">
        <section className="">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <div className="d-flex justify-content-center mb-4">
                <div
                  className="d-inline-flex gap-2 align-items-center px-2 py-1"
                  style={{
                    border: "2px solid #2e2e2eff",
                    borderRadius: "40px 40px 40px 0px",
                    backgroundColor: "#2e2e2eff",
                  }}
                >
                  <img
                    style={{ filter: "brightness(0) invert(1)" }}
                    src={logo}
                    width={"16px"}
                    height={"16px"}
                    alt=""
                  />
                  <h5 className="text-uppercase text-white fw-bold fs-6 mb-0">
                    {translations[selectedLanguage.code]["ABOUT US"]}
                  </h5>
                </div>
              </div>

              <ul className="list-unstyled mb-0">
                <li>
                  <p style={{ fontSize: "0.9em", lineHeight: "1.3em" }}>
                    {
                      translations[selectedLanguage.code][
                        "Erasmus Student Network (ESN) is a non-profit international student organisation. Our mission is to represent international students, thus provide opportunities for cultural understanding and self-development under the principle of Students Helping Students."
                      ]
                    }
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
              <div className="d-flex justify-content-center mb-4">
                <div
                  className="d-inline-flex gap-2 align-items-center px-2 py-1"
                  style={{
                    border: "2px solid #2e2e2eff",
                    borderRadius: "40px 40px 40px 0px",
                    backgroundColor: "#2e2e2eff",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="white"
                    className="bi bi-share-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
                  </svg>
                  <h5 className="text-uppercase text-white fw-bold fs-6 mb-0">
                    {translations[selectedLanguage.code]["SOCIAL MEDIA"]}
                  </h5>
                </div>
              </div>
              <ul className="list-unstyled mb-0  d-flex gap-2 justify-content-center">
                <li>
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
                </li>
                <li>
                  <Link to={"https://www.tiktok.com/@esnunipi"} target="_blank">
                    <button
                      id="tiktok_but"
                      type="button"
                      className="btn border-0 rounded-5 justify-content-center btn-outline-dark align-items-center d-flex p-2"
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
                </li>
                <li>
                  <Link
                    to={"https://www.facebook.com/esn.unipi"}
                    target="_blank"
                  >
                    <button
                      id="fb_but"
                      type="button"
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
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <div className="d-flex justify-content-center mb-4">
                <div
                  className="d-inline-flex gap-2 align-items-center px-2 py-1"
                  style={{
                    border: "2px solid #2e2e2eff",
                    borderRadius: "40px 40px 40px 0px",
                    backgroundColor: "#2e2e2eff",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="white"
                    className="bi bi-pin-map-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
                    />
                  </svg>
                  <h5 className="text-uppercase  fw-bold fs-6 text-white mb-0">
                    {translations[selectedLanguage.code]["ADDRESS"]}
                  </h5>
                </div>
              </div>

              <ul className="list-unstyled mb-0">
                <li>
                  <p style={{ fontSize: "0.9em", lineHeight: "1.3em" }}>
                    {
                      translations[selectedLanguage.code][
                        "International Relation Office, Karaoli & Dimitriou, 80, 185 34 Piraeus, Greece"
                      ]
                    }
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-2 mb-md-0">
              <div className="d-flex justify-content-center mb-4">
                <div
                  className="d-inline-flex gap-2 align-items-center px-2 py-1"
                  style={{
                    border: "2px solid #2e2e2eff",
                    borderRadius: "40px 40px 40px 0px",
                    backgroundColor: "#2e2e2eff",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="white"
                    className="bi bi-chat-left-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                  </svg>
                  <h5 className="text-uppercase fw-bold fs-6  mb-0 text-white">
                    {translations[selectedLanguage.code]["REACH US"]}
                  </h5>
                </div>
              </div>

              <ul className="list-unstyled mb-0">
                <li>
                  <p style={{ fontSize: "0.9em", lineHeight: "1.3em" }}>
                    <b>Email:</b>&nbsp;&nbsp;
                    <Link
                      id="linkss"
                      to={"mailto:info@esnunipi.gr"}
                      target="_blank"
                      style={{ textDecoration: "none", color: "#000000ff" }}
                    >
                      info@esnunipi.gr
                    </Link>
                  </p>
                </li>
                <li>
                  <p style={{ fontSize: "0.9em", lineHeight: "1.3em" }}>
                    <b>Facebook:</b>&nbsp;&nbsp;
                    <Link
                      id="linkss"
                      to={"https://www.facebook.com/esn.unipi"}
                      target="_blank"
                      style={{ textDecoration: "none", color: "#0062e8" }}
                    >
                      ESN UniPi
                    </Link>
                  </p>
                </li>
                <li>
                  <p
                    style={{
                      fontSize: "0.9em",
                      lineHeight: "1.3em",
                    }}
                  >
                    <b>Instagram:</b>&nbsp;&nbsp;
                    <Link
                      id="linkss"
                      to={"https://www.instagram.com/esnunipi/?hl=en"}
                      target="_blank"
                      style={{ textDecoration: "none", color: "#e6007a" }}
                    >
                      @esnunipi
                    </Link>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div
        className="text-center p-2 d-flex gap-2 justify-content-center align-items-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
      >
        <img src={logo} width={"20px"} alt="" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 512 512"
        >
          <mask id="a">
            <circle cx="256" cy="256" r="256" fill="#fff" />
          </mask>
          <g mask="url(#a)">
            <path
              fill="#0052b4"
              d="M0 0h99l29 32 28-32h356v57l-32 28 32 29v57l-32 28 32 29v57l-32 28 32 28v57l-32 29 32 28v57H0v-57l32-28-32-29v-56l32-29-32-28V171l32-29-32-28Z"
            />
            <path
              fill="#eee"
              d="M99 0v114H0v57h99v114H0v57h512v-57H156V171h100v-57H156V0Zm157 57v57h256V57Zm0 114v57h256v-57ZM0 398v57h512v-57z"
            />
          </g>
        </svg>
        <small>© 2025 Copyright ESNUniPi</small>
      </div>
    </div>
  );
};

export default Footer;
