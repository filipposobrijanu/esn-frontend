import React from "react";
import logo from "../../assets/favicon.ico";
import { Link } from "react-router-dom";
import "./Partners.css";
import banner1 from "../../assets/meet-peiraius/1.jpg";
import banner2 from "../../assets/meet-peiraius/images.jpg";
import banner3 from "../../assets/meet-peiraius/arheio_lipsis_1.jpg";
import banner4 from "../../assets/meet-peiraius/PIREAS.jpg";
import banner from "../../assets/meet-peiraius/survival_guide.jpg";
import eurosender from "../../assets/eurosender.jpg";
import medusa from "../../assets/medusa.jpg";
import metropolis from "../../assets/metropolis.jpg";
import ryanair from "../../assets/ryanair_erasmus_1_1_1.jpg";
import kaloypi from "../../assets/kaloypi.jpg";
import tedx from "../../assets/tedx.jpg";
import Breadcrum from "../Breadcrum/Breadcrum";
import { useState, useContext, useMemo } from "react";
import { ShopContext } from "../../context/ShopContext";
import { translations } from "../../translations/translations";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const Partners = () => {
  const { selectedLanguage } = useContext(ShopContext);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

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

  // Simulate loading completion (replace this with your actual data fetching logic)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300); // Simulate 2 second loading

    return () => clearTimeout(timer);
  }, []);

  // Skeleton Loading Component
  const SkeletonLoader = () => (
    <>
      <div className="partners d-flex align-items-center justify-content-center gap-5">
        <div className="container my-1 d-flex flex-column justify-content-start">
          {/* Breadcrumb Skeleton */}
          <div className="d-flex justify-content-start mb-3">
            <div className="placeholder-glow">
              <div
                className="placeholder col-3 rounded-5"
                style={{ width: "48px", height: "20px" }}
              ></div>
            </div>
          </div>

          {/* Title Section Skeleton */}
          <div className="d-flex justify-content-start mb-5">
            <div
              className="d-inline-flex gap-2 align-items-center px-3 py-1"
              style={{
                border: "2px solid #e0e0e0ff",
                borderRadius: "40px 40px 40px 0px",
                backgroundColor: "#e0e0e0ff",
              }}
            >
              <div className="placeholder-glow">
                <div
                  className="placeholder rounded-5"
                  style={{ width: "24px", height: "24px" }}
                ></div>
              </div>
              <div className="placeholder-glow">
                <div
                  className="placeholder rounded-5"
                  style={{ width: "150px", height: "24px" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Partners List Skeleton */}
          <div className="d-flex text-start flex-column">
            <div className="d-flex flex-column gap-4 w-100">
              {/* Partner items skeleton */}
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-start align-items-center mb-2 w-100"
                >
                  {/* Logo skeleton */}
                  <div className="me-3">
                    <div className="placeholder-glow">
                      <div
                        className="placeholder rounded-5"
                        style={{
                          border: "2px solid rgb(230, 230, 230)",
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Partner info skeleton */}
                  <div className="d-flex flex-column align-items-start flex-grow-1">
                    <div className="placeholder-glow mb-1">
                      <div
                        className="placeholder rounded-5"
                        style={{
                          width: index === 3 ? "350px" : "200px",
                          height: "30px",
                        }}
                      ></div>
                    </div>
                    <div className="placeholder-glow">
                      <div
                        className="placeholder rounded-5"
                        style={{
                          width: "120px",
                          height: "16px",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );

  if (isLoading) {
    return <SkeletonLoader />;
  }
  return (
    <>
      <div className="partners d-flex align-items-center justify-content-center gap-5">
        <div className="container my-1 d-flex flex-column justify-content-start">
          <ScrollAnimation>
            <div className="d-flex justify-content-start">
              <Breadcrum name="PARTNERS" link="/partners" />
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={0.1}>
            <div className="d-flex justify-content-start mb-5">
              <div
                className="d-inline-flex gap-2 align-items-center px-3 py-1"
                style={{
                  border: "2px solid #e0e0e0ff",
                  borderRadius: "40px 40px 40px 0px",
                  backgroundColor: "#e0e0e0ff",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="black"
                  className="bi bi-file-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                  <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                <h5 className="text-uppercase fw-bold fs-3  mb-0 text-BLACK">
                  {translations[selectedLanguage.code]["PARTNERS"]}
                </h5>
              </div>
            </div>
          </ScrollAnimation>
          <div className="d-flex text-start flex-column">
            <div className="d-flex flex-column gap-4 w-100">
              <ScrollAnimation delay={0.2}>
                <div className="d-flex justify-content-start align-items-center mb-2 w-100">
                  <img
                    className="rounded-5 me-3"
                    style={{
                      border: "2px solid rgb(230, 230, 230)",
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                    src={eurosender}
                    alt="Eurosender"
                  />
                  <div className="d-flex flex-column align-items-start">
                    <p className="mb-1 fs-4 fw-bold">Eurosender</p>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={"https://www.eurosender.com/"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <small id="hoverable-shit" className="text-muted">
                        https://www.eurosender.com/
                      </small>
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delay={0.3}>
                <div className="d-flex justify-content-start align-items-center mb-2 w-100">
                  <img
                    className="rounded-5 me-3"
                    style={{
                      border: "2px solid rgb(230, 230, 230)",
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                    src={medusa}
                    alt="Medusa Barber Shop"
                  />
                  <div className="d-flex flex-column align-items-start">
                    <p className="mb-1 fs-4 fw-bold">Medusa Barber Shop</p>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={
                        "https://medusashop.gr/index.php/portfolio-item/medusa-barber-peiraias/"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <small id="hoverable-shit" className="text-muted">
                        {translations[selectedLanguage.code]["Website"]}
                      </small>
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delay={0.4}>
                <div className="d-flex justify-content-start align-items-center mb-2 w-100">
                  <img
                    className="rounded-5 me-3"
                    style={{
                      border: "2px solid rgb(230, 230, 230)",
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                    src={metropolis}
                    alt="Medusa Barber Shop"
                  />
                  <div className="d-flex flex-column align-items-start">
                    <p className="mb-1 fs-4 fw-bold">Metropolis Cafe</p>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={"https://www.facebook.com/metropolispanormou/"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <small id="hoverable-shit" className="text-muted">
                        Facebook
                      </small>
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delay={0.5}>
                <div className="d-flex justify-content-start align-items-center mb-2 w-100">
                  <img
                    className="rounded-5 me-3"
                    style={{
                      border: "2px solid rgb(230, 230, 230)",
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                    src={ryanair}
                    alt="Medusa Barber Shop"
                  />
                  <div className="d-flex flex-column text-start justify-content-start align-items-start">
                    <p className="mb-1 fs-4 fw-bold">
                      Ryanair Discount for Erasmus Members
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delay={0.6}>
                <div className="d-flex justify-content-start align-items-center mb-2 w-100">
                  <img
                    className="rounded-5 me-3"
                    style={{
                      border: "2px solid rgb(230, 230, 230)",
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                    src={tedx}
                    alt="Medusa Barber Shop"
                  />
                  <div className="d-flex flex-column align-items-start">
                    <p className="mb-1 fs-4 fw-bold d-flex flex-wrap">
                      <span>TEDx</span>
                      <span>University</span>
                      <span>of</span>
                      <span>Piraeus</span>
                    </p>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={"https://tedxuniversityofpiraeus.com//"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <small id="hoverable-shit" className="text-muted">
                        {translations[selectedLanguage.code]["Website"]}
                      </small>
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delay={0.7}>
                <div className="d-flex justify-content-start align-items-center mb-2 w-100">
                  <img
                    className="rounded-5 me-3"
                    style={{
                      border: "2px solid rgb(230, 230, 230)",
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                    src={kaloypi}
                    alt="Medusa Barber Shop"
                  />
                  <div className="d-flex flex-column align-items-start">
                    <p className="mb-1 fs-4 fw-bold">ΚαΛουΠι</p>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={"https://www.instagram.com/kaloupi_cafe/?hl=en"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <small id="hoverable-shit" className="text-muted">
                        Instagram
                      </small>
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
