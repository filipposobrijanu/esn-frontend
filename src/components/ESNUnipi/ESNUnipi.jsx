import React from "react";
import logo from "../../assets/favicon.ico";
import { Link } from "react-router-dom";
import "./ESNUnipi.css";
import banner1 from "../../assets/meet-peiraius/1.jpg";
import banner2 from "../../assets/meet-peiraius/images.jpg";
import banner3 from "../../assets/meet-peiraius/arheio_lipsis_1.jpg";
import banner4 from "../../assets/meet-peiraius/PIREAS.jpg";
import banner from "../../assets/meet-peiraius/survival_guide.jpg";
import unipiimg from "../../assets/meet-peiraius/2-9.jpg";
import Breadcrum from "../Breadcrum/Breadcrum";
import { useState, useContext, useMemo, useEffect } from "react";
import { ShopContext } from "../../context/ShopContext";
import { translations } from "../../translations/translations";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import esnunipiimg from "../../assets/meet-peiraius/2.jpg";

const ESNUnipi = () => {
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
  // Skeleton Loading Component
  const SkeletonLoader = () => (
    <>
      <div className="esnunipi d-flex align-items-center justify-content-center gap-5">
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
          <div className="d-flex text-start flex-column gap-4">
            {/* Paragraph Skeletons */}
            <div className="d-flex flex-column text-start gap-3 align-items-start">
              <div className="placeholder-glow w-100">
                <div
                  className="placeholder rounded-5 mb-2"
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
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "16px", width: "75%" }}
                ></div>
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "16px", width: "70%" }}
                ></div>
              </div>
            </div>

            {/* Image Skeleton */}
            <div className="placeholder-glow">
              <div
                className="placeholder rounded-5"
                style={{
                  width: "100%",
                  height: "300px",
                  maxWidth: "500px",
                }}
              ></div>
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
                name="ESN UNIPI"
                link="/about-us"
                name2="ABOUT ESN"
                link1="/about-us"
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
                  className="bi bi-record-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                <h5 className="text-uppercase fw-bold fs-3  mb-0 text-BLACK">
                  {translations[selectedLanguage.code]["ESN UNIPI"] ||
                    "ESN UNIPI"}
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
                {
                  translations[selectedLanguage.code][
                    "Having decided to study during your Erasmus at the University of Piraeus, your designated ESN section is ESN UniPi. laugh We are one of the 20 members of ESN Greece and we are happy to say that our family keeps growing every minute. We are here to help you surpass all the difficulties you may face during your stay in Piraeus!"
                  ]
                }{" "}
                😁<br></br>
                <br></br>
                {
                  translations[selectedLanguage.code][
                    "We are here to answer all your questions and try to make your feel like home! Our one and main purpose is to make this experience, an unforgettable one. We provide a warm environment, a huge hug and a lot of love for our Erasmus friends."
                  ]
                }{" "}
                😳<br></br>
                <br></br>
                {
                  translations[selectedLanguage.code][
                    "Full of energy and passion, we are addicted to Erasmus spirit and we have to make sure that they have a pleasant stay and many experiences to carry in their countries!!! So do not hesitate to contact us with any problems, questions or information you may need. We are proud to welcome you in our big family and we wish you an extraordinary Erasmus!"
                  ]
                }{" "}
                ❤<br></br>
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.3}>
              <img
                className="rounded-5 img-fluid"
                src={esnunipiimg}
                alt="ESN Survival Guide"
                style={{ maxWidth: "500px", width: "100%" }}
              />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </>
  );
};

export default ESNUnipi;
