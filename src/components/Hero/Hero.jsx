import React from "react";
import "./Hero.css";
import heroImage from "../../assets/banner1.jpg";
import { useState, useContext, useMemo } from "react";
import { ShopContext } from "../../context/ShopContext";
import { translations } from "../../translations/translations";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const Hero = () => {
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

  // Simulate loading completion
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Skeleton Loading Component
  const SkeletonLoader = () => (
    <div className="hero">
      <div className="container-fluid mt-sm-0 mt-md-3 mt-lg-2">
        <div className="row align-items-stretch g-0">
          {/* Left spacer */}
          <div className="col-lg-1 d-none d-lg-flex p-2 p-lg-4 align-items-center justify-content-center"></div>

          {/* Image skeleton with proper animation */}
          <div className="col-12 col-lg-6 p-0">
            <div
              className="placeholder-glow w-100 h-100 d-flex align-items-center justify-content-center"
              style={{
                minHeight: "150px",
                backgroundColor: "#f8f9fa",
              }}
            >
              <div
                className="placeholder w-100 h-100 rounded-5"
                style={{ minHeight: "250px" }}
              ></div>
            </div>
          </div>

          {/* Text content skeleton */}
          <div className="col-12 col-lg-4 p-3 p-lg-4 d-flex align-items-center justify-content-center">
            <div className="placeholder-glow w-100">
              <div
                className="placeholder rounded-5 w-100 mb-2"
                style={{ height: "25px" }}
              ></div>
              <div
                className="placeholder rounded-5 w-100 mb-2"
                style={{ height: "25px" }}
              ></div>
              <div
                className="placeholder rounded-5 w-75"
                style={{ height: "25px" }}
              ></div>
            </div>
          </div>

          {/* Right spacer */}
          <div className="col-lg-1 d-none d-lg-flex p-2 p-lg-4 align-items-center justify-content-center"></div>
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return <SkeletonLoader />;
  }
  return (
    <div className="hero">
      <div className="container-fluid mt-sm-0 mt-md-3 mt-lg-2">
        <ScrollAnimation>
          <div className="row align-items-stretch g-0">
            {/* Left spacer - hidden on mobile, visible on lg and up */}
            <div className="col-lg-1 d-none d-lg-flex p-2 p-lg-4 align-items-center justify-content-center"></div>

            {/* Image column */}
            <div className="col-12 col-lg-6 p-0">
              <img
                src={heroImage}
                className="w-100 h-100 hero-image"
                style={{ objectFit: "cover", minHeight: "150px" }}
                alt="Erasmus+ event"
              />
            </div>
            {/* Text content */}
            <div
              className="col-12 col-lg-4 p-3 p-lg-4 d-flex align-items-start justify-content-center hero-text"
              style={{ backgroundColor: "#2831b6ff" }}
            >
              <div
                className="text-white my-2 my-lg-3 fs-3 fw-bold py-lg-3 text-center text-lg-start w-100"
                style={{ textTransform: "uppercase", lineHeight: "1.1" }}
              >
                {
                  translations[selectedLanguage.code][
                    "6th Erasmus+ International Staff Week of the University of Piraeus"
                  ]
                }
              </div>
            </div>
            {/* Right spacer */}
            <div className="col-lg-1 d-none d-lg-flex p-2 p-lg-4 align-items-center justify-content-center"></div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Hero;
