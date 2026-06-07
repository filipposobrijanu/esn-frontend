import React from "react";
import logo from "../../assets/favicon.ico";
import { Link } from "react-router-dom";
import "./UniversityOfPeiraeus.css";
import banner1 from "../../assets/meet-peiraius/1.jpg";
import banner2 from "../../assets/meet-peiraius/images.jpg";
import banner3 from "../../assets/meet-peiraius/arheio_lipsis_1.jpg";
import banner4 from "../../assets/meet-peiraius/PIREAS.jpg";
import banner from "../../assets/meet-peiraius/survival_guide.jpg";
import unipiimg from "../../assets/meet-peiraius/2-9.jpg";
import Breadcrum from "../Breadcrum/Breadcrum";
import { useState, useContext, useMemo } from "react";
import { ShopContext } from "../../context/ShopContext";
import { translations } from "../../translations/translations";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const UniversityOfPeiraeus = () => {
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
      <div className="universityofpeiraeus d-flex align-items-center justify-content-center gap-5">
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
                  style={{ width: "280px", height: "24px" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Content Skeleton */}
          <div className="d-flex text-start flex-column">
            {/* Official Website Link Skeleton */}
            <div className="mb-4">
              <div className="placeholder-glow">
                <div
                  className="placeholder rounded-5"
                  style={{ height: "20px", width: "250px" }}
                ></div>
                <div
                  className="placeholder rounded-5"
                  style={{ height: "20px", width: "200px" }}
                ></div>
              </div>
            </div>

            {/* Image Skeleton */}
            <div className="mb-4">
              <div className="placeholder-glow">
                <div
                  className="placeholder rounded-5"
                  style={{ width: "500px", height: "300px", maxWidth: "100%" }}
                ></div>
              </div>
            </div>

            {/* Paragraph Skeletons */}
            <div className="mb-4">
              <div className="placeholder-glow">
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "16px" }}
                ></div>
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "16px" }}
                ></div>
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "16px" }}
                ></div>
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "16px" }}
                ></div>
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "16px" }}
                ></div>
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "16px", width: "90%" }}
                ></div>
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "16px", width: "80%" }}
                ></div>
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "16px", width: "70%" }}
                ></div>
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "16px", width: "85%" }}
                ></div>
                <div
                  className="placeholder rounded-5"
                  style={{ height: "16px", width: "75%" }}
                ></div>
              </div>
            </div>

            {/* Map Skeleton */}
            <div className="mt-4">
              <div className="placeholder-glow">
                <div
                  className="placeholder rounded-5"
                  style={{ width: "100%", height: "400px", maxWidth: "600px" }}
                ></div>
              </div>
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
      <div className="universityofpeiraeus d-flex align-items-center justify-content-center gap-5">
        <div className="container my-1 d-flex flex-column justify-content-start">
          <ScrollAnimation>
            <div className="d-flex justify-content-start">
              <Breadcrum
                name="UNIVERSITY OF PEIRAEUS"
                link="/university-piraeus"
                name2="ERASMUS IN PEIRAEUS"
                link1="/university-piraeus"
              />
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
                  className="bi bi-universal-access-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4.143A1.071 1.071 0 1 0 8 2a1.071 1.071 0 0 0 0 2.143m-4.668 1.47 3.24.316v2.5l-.323 4.585A.383.383 0 0 0 7 13.14l.826-4.017c.045-.18.301-.18.346 0L9 13.139a.383.383 0 0 0 .752-.125L9.43 8.43v-2.5l3.239-.316a.38.38 0 0 0-.047-.756H3.379a.38.38 0 0 0-.047.756Z" />
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8" />
                </svg>
                <h5 className="text-uppercase fw-bold fs-3  mb-0 text-BLACK">
                  {
                    translations[selectedLanguage.code][
                      "UNIVERSITY OF PEIRAEUS"
                    ]
                  }
                </h5>
              </div>
            </div>
          </ScrollAnimation>
          <div
            className="d-flex text-start flex-column"
            style={{ overflowWrap: "break-word" }}
          >
            <ScrollAnimation delay={0.2}>
              <p>
                {translations[selectedLanguage.code]["Official website:"]}{" "}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  to="http://www.unipi.gr/unipi/en/"
                >
                  {
                    translations[selectedLanguage.code][
                      "UNIVERSITY OF PEIRAEUS"
                    ]
                  }
                </Link>
                <br></br>
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.3}>
              <img
                className="rounded-5 img-fluid"
                src={unipiimg}
                alt="ESN Survival Guide"
                style={{ maxWidth: "500px", width: "100%" }}
              />
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <p>
                <br></br>
                {
                  translations[selectedLanguage.code][
                    "The University of Piraeus was founded in 1938 under the title of the “School for Industrial Studies”, by the Industrialists and Tradesmen Association. In 1945 it was renamed to “Higher School for Industrial Studies” and its aim was defined to be the systematic, theoretical and practical training of managerial executives. In 1958, the “Higher School for Industrial Studies» was again renamed to “Graduate School of Industrial Studies”, with its headquarters in Piraeus. Starting from 1966, the University operated in the form of a public legal entity. In 1989, the “Graduate School of Industrial Studies” was renamed to University of Piraeus. Today, the following seven Departments are run by the University of Piraeus: - Economics - Business Administration - Statistics and Insurance Science - Financial Management and Banking - Industrial Management - Maritime Studies - Informatics - Digital Systems"
                  ]
                }
              </p>
            </ScrollAnimation>
            <iframe
              className="rounded-5 mt-4"
              height="400"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              maxWidth="600"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Karaoli%20ke%20Dimitriou%2080%20Piraeus+(University%20Of%20Peiraeus)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>{" "}
            <script
              type="text/javascript"
              src="https://embedmaps.com/google-maps-authorization/script.js?id=16cb03843d999f2d29b2ae3da9d5873c1fab8f53"
            ></script>
          </div>
        </div>
      </div>
    </>
  );
};

export default UniversityOfPeiraeus;
