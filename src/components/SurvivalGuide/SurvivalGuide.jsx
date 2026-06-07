import React from "react";
import logo from "../../assets/favicon.ico";
import { Link } from "react-router-dom";
import "./SurvivalGuide.css";
import banner1 from "../../assets/meet-peiraius/1.jpg";
import banner2 from "../../assets/meet-peiraius/images.jpg";
import banner3 from "../../assets/meet-peiraius/arheio_lipsis_1.jpg";
import banner4 from "../../assets/meet-peiraius/PIREAS.jpg";
import banner from "../../assets/meet-peiraius/survival_guide.jpg";
import Breadcrum from "../Breadcrum/Breadcrum";
import { useState, useContext, useMemo } from "react";
import { ShopContext } from "../../context/ShopContext";
import { translations } from "../../translations/translations";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const SurvivalGuide = () => {
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
      <div className="survivalguide d-flex align-items-center justify-content-center gap-5">
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
                  style={{ width: "200px", height: "24px" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Content Skeleton */}
          <div className="d-flex text-start flex-column">
            <div className="d-flex flex-column flex-md-row gap-3 gap-md-4 align-items-center align-items-md-start">
              {/* Text Content Skeleton */}
              <div className="order-1 order-md-1 flex-grow-1">
                <div className="placeholder-glow">
                  <div
                    className="placeholder rounded-5 mb-2"
                    style={{ height: "20px", width: "300px" }}
                  ></div>
                  <div
                    className="placeholder rounded-5 mb-3"
                    style={{ height: "16px", width: "100%" }}
                  ></div>
                  <div
                    className="placeholder rounded-5 mb-2"
                    style={{ height: "16px", width: "100%" }}
                  ></div>
                  <div
                    className="placeholder rounded-5 mb-2"
                    style={{ height: "16px", width: "95%" }}
                  ></div>
                  <div
                    className="placeholder rounded-5 mb-2"
                    style={{ height: "16px", width: "90%" }}
                  ></div>
                  <div
                    className="placeholder rounded-5 mb-2"
                    style={{ height: "16px", width: "85%" }}
                  ></div>
                  <div
                    className="placeholder rounded-5 mb-2"
                    style={{ height: "16px", width: "80%" }}
                  ></div>
                  <div
                    className="placeholder rounded-5 mb-3"
                    style={{ height: "16px", width: "250px" }}
                  ></div>
                  <div
                    className="placeholder rounded-5"
                    style={{ height: "16px", width: "200px" }}
                  ></div>
                </div>
              </div>

              {/* Image Skeleton */}
              <div className="order-2 order-md-1">
                <div className="placeholder-glow">
                  <div
                    className="placeholder rounded-5"
                    style={{
                      width: "700px",
                      height: "400px",
                      maxWidth: "100%",
                    }}
                  ></div>
                </div>
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
      <div className="survivalguide d-flex align-items-center justify-content-center gap-5">
        <div className="container my-1 d-flex flex-column justify-content-start">
          <ScrollAnimation>
            <div className="d-flex justify-content-start">
              <Breadcrum
                name="SURVIVAL GUIDE"
                link="/survival-guide"
                name2="ERASMUS IN PEIRAEUS"
                link1="/survival-guide"
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
                  className="bi bi-book"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                </svg>
                <h5 className="text-uppercase fw-bold fs-3  mb-0 text-BLACK">
                  {translations[selectedLanguage.code]["SURVIVAL GUIDE"]}
                </h5>
              </div>
            </div>
          </ScrollAnimation>
          <div
            className="d-flex text-start flex-column"
            style={{ overflowWrap: "break-word" }}
          >
            <div className="d-flex flex-column flex-md-row gap-3 gap-md-4 align-items-center align-items-md-start">
              <ScrollAnimation delay={0.2}>
                <div className="order-1 order-md-1 flex-grow-1">
                  <p>
                    {
                      translations[selectedLanguage.code][
                        "Survival Guide for your Erasmus !"
                      ]
                    }
                    &nbsp;😁<br></br>
                    <br></br>
                    {
                      translations[selectedLanguage.code][
                        "The ESN Unipi Team gathered all the necessary information that you will need for your Erasmus in Piraeus!"
                      ]
                    }
                    <br></br>
                    <br></br>
                    {
                      translations[selectedLanguage.code][
                        "Hope that you will find it useful ! Have a pleasant stay and enjoy your time in Piraeus!"
                      ]
                    }
                    <br></br>
                    <br></br>
                    {translations[selectedLanguage.code]["Click"]}{" "}
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                      to="https://drive.google.com/file/d/1q_Ikv7XVaeHz_e92v2RVtXJ9ww030Fx0/view"
                    >
                      {translations[selectedLanguage.code]["here"]}
                    </Link>{" "}
                    {
                      translations[selectedLanguage.code][
                        "for the Survival Guide."
                      ]
                    }
                    <br></br>
                    <br></br>
                    <span className="fw-bold">
                      #esnunipi #erasmuspiraeus #liveyourmythinpiraeus
                    </span>
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delay={0.3}>
                <div className="order-2 order-md-1">
                  <img
                    className="rounded-5 img-fluid"
                    src={banner}
                    alt="ESN Survival Guide"
                    style={{ maxWidth: "700px", width: "100%" }}
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SurvivalGuide;
