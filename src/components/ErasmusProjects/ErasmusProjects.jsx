import React from "react";
import logo from "../../assets/favicon.ico";
import { Link } from "react-router-dom";
import "./ErasmusProjects.css";
import banner1 from "../../assets/meet-peiraius/1.jpg";
import banner2 from "../../assets/meet-peiraius/images.jpg";
import banner3 from "../../assets/meet-peiraius/arheio_lipsis_1.jpg";
import banner4 from "../../assets/meet-peiraius/PIREAS.jpg";
import Breadcrum from "../Breadcrum/Breadcrum";
import { useState, useContext, useMemo } from "react";
import { ShopContext } from "../../context/ShopContext";
import { translations } from "../../translations/translations";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const ErasmusProjects = () => {
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
      <div className="erasmusprojects d-flex align-items-center justify-content-center gap-5">
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
                  style={{ width: "250px", height: "24px" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Content Skeleton */}
          <div className="d-flex text-start flex-column">
            {/* Introduction paragraph skeleton */}
            <div className="mb-4">
              <div className="placeholder-glow">
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "20px", width: "100%" }}
                ></div>
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "20px", width: "95%" }}
                ></div>
                <div
                  className="placeholder rounded-5"
                  style={{ height: "20px", width: "90%" }}
                ></div>
              </div>
            </div>

            {/* Project sections skeletons */}
            {[...Array(7)].map((_, index) => (
              <div key={index} className="mb-4">
                {/* Project title skeleton */}
                <div className="placeholder-glow mb-3">
                  <div
                    className="placeholder rounded-5"
                    style={{
                      height: "30px",
                      width:
                        index === 0
                          ? "150px"
                          : index === 1
                          ? "200px"
                          : index === 2
                          ? "180px"
                          : index === 3
                          ? "80px"
                          : index === 4
                          ? "140px"
                          : index === 5
                          ? "100px"
                          : "120px",
                    }}
                  ></div>
                </div>

                {/* Project description skeletons */}
                <div className="placeholder-glow">
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

                  {/* Links skeleton for some projects */}
                  {(index === 0 ||
                    index === 1 ||
                    index === 2 ||
                    index === 3 ||
                    index === 4 ||
                    index === 5) && (
                    <>
                      <div
                        className="placeholder rounded-5 mb-2"
                        style={{ height: "16px", width: "200px" }}
                      ></div>
                      <div
                        className="placeholder rounded-5 mb-2"
                        style={{ height: "16px", width: "180px" }}
                      ></div>
                    </>
                  )}
                </div>
              </div>
            ))}

            {/* Final call-to-action skeleton */}
            <div className="mt-4">
              <div className="placeholder-glow">
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "20px", width: "100%" }}
                ></div>
                <div
                  className="placeholder rounded-5"
                  style={{ height: "20px", width: "95%" }}
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
      <div className="erasmusprojects d-flex align-items-center justify-content-center gap-5">
        <div className="container my-1 d-flex flex-column justify-content-start">
          <ScrollAnimation>
            <div className="d-flex justify-content-start">
              <Breadcrum
                name2="ABOUT ESN"
                link1="/erasmus-projects"
                name="ERASMUS PROJECTS"
                link="/erasmus-projects"
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
                  className="bi bi-journal-text"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                </svg>
                <h5 className="text-uppercase fw-bold fs-3  mb-0 text-BLACK">
                  {translations[selectedLanguage.code]["ERASMUS PROJECTS"]}
                </h5>
              </div>
            </div>
          </ScrollAnimation>
          <div
            className="d-flex text-start flex-column"
            style={{ overflowWrap: "break-word" }}
          >
            <ScrollAnimation delay={0.2}>
              <p className="fw-bold" style={{ color: "#4d4d4dff" }}>
                {
                  translations[selectedLanguage.code][
                    "Erasmus is much more than the trip we all love abroad. We invite you to discover the different aspects of the program below:"
                  ]
                }
              </p>
            </ScrollAnimation>

            <p className="mt-4">
              <ScrollAnimation delay={0.3}>
                <span className="fw-bold fs-4">SocialErasmus</span>
              </ScrollAnimation>
              <br></br>
              <br></br>
              <ScrollAnimation delay={0.4}>
                {
                  translations[selectedLanguage.code][
                    "SocialErasmus is an ESN international project which aims to involve young citizens into volunteering activities during their mobility experience to make a social change in the society. If you love to help others, take care of the environment and you believe that Erasmus is the time not only to party but to do something bigger. Check out these sites for more information:"
                  ]
                }
                &nbsp;
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  to="www.socialerasmus.esn.org"
                >
                  www.socialerasmus.esn.org
                </Link>{" "}
                {translations[selectedLanguage.code]["and"]}{" "}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  to="http://wiki.esn.org/projects/socialerasmus"
                >
                  http://wiki.esn.org/projects/socialerasmus
                </Link>
                . {translations[selectedLanguage.code]["Leave your mark!"]}
              </ScrollAnimation>
              <br></br>
              <br></br>
              <ScrollAnimation delay={0.5}>
                <span className="fw-bold fs-4">
                  {translations[selectedLanguage.code]["ExchangeAbility"]}
                </span>
              </ScrollAnimation>
              <br></br>
              <br></br>
              <ScrollAnimation delay={0.6}>
                {
                  translations[selectedLanguage.code][
                    "The main aims of this project are to help increase the number of students with disabilities going on exchange, to promote the existing opportunities for these students and also to make the Erasmus+ programme and ESN’s activities more accessible for students with disabilities."
                  ]
                }
                <br></br>
                <br></br>
                {
                  translations[selectedLanguage.code][
                    "More information can be found on:"
                  ]
                }
                <br></br>
                <br></br>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  to="www.exchangeability.esn.org"
                >
                  www.exchangeability.esn.org
                </Link>{" "}
                {translations[selectedLanguage.code]["or"]}{" "}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  to="http://wiki.esn.org/projects/exchangeability"
                >
                  http://wiki.esn.org/projects/exchangeability
                </Link>
              </ScrollAnimation>
              <br></br>
              <br></br>
              <ScrollAnimation delay={0.7}>
                <span className="fw-bold fs-4">
                  {translations[selectedLanguage.code]["Responsible Party"]}
                </span>
                <br></br>
                <br></br>
                {
                  translations[selectedLanguage.code][
                    "We all like to party... but the important thing is to party responsibly! The main aim of the project is to raise awareness about the negative effects of alcohol consumption and to contribute to the reduction of binge drinking by promoting responsible drinking among students."
                  ]
                }
                <br></br>
                <br></br>
                {translations[selectedLanguage.code]["Learn more here:"]}{" "}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  to="https://esn.org/responsible-party"
                >
                  https://esn.org/responsible-party
                </Link>{" "}
                {translations[selectedLanguage.code]["or"]}{" "}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  to="http://wiki.esn.org/projects/responsible-party"
                >
                  http://wiki.esn.org/projects/responsible-party
                </Link>
              </ScrollAnimation>
              <br></br>
              <br></br>
              <ScrollAnimation delay={0.2}>
                <span className="fw-bold fs-4">Eduk8</span>
              </ScrollAnimation>
              <br></br>
              <br></br>
              <ScrollAnimation delay={0.3}>
                {
                  translations[selectedLanguage.code][
                    "Eduk8 is ESN’s international training project based on non-formal education. It covers different topics related to the development of ESNers’ soft-skills: how to facilitate group discussion, leadership, communication or conflict management; sharing know-how and learning from one another."
                  ]
                }
                <br></br>
                <br></br>
                {
                  translations[selectedLanguage.code][
                    "It offers different types of events, organised every year: Eduk8 Starter, Eduk8 Forward, ESN Training and ESN Leadership Academy, you can read more about these trainings here"
                  ]
                }
                <br></br>
                <br></br>{" "}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  to="https://esn.org/eduk8"
                >
                  https://esn.org/eduk8
                </Link>{" "}
                {translations[selectedLanguage.code]["or"]}{" "}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  to="http://wiki.esn.org/projects/eduk8"
                >
                  http://wiki.esn.org/projects/eduk8
                </Link>
              </ScrollAnimation>
              <br></br>
              <br></br>
              <ScrollAnimation delay={0.4}>
                <span className="fw-bold fs-4">Mov’in Europe</span>
                <br></br>
                <br></br>
                {
                  translations[selectedLanguage.code][
                    "The main aim of this project is to promote mobility and to provide better information on exchange programmes and mobility opportunities for students and young people. Mobility is a lifestyle! Share your exchange experience with those who are not mobile yet and promote the project with us!"
                  ]
                }
                <br></br>
                <br></br>
                {
                  translations[selectedLanguage.code][
                    "You can learn more about the project on:"
                  ]
                }
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  to="http://movineurope.esn.org"
                >
                  http://movineurope.esn.org
                </Link>{" "}
                {translations[selectedLanguage.code]["and"]}{" "}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  to="http://wiki.esn.org/projects/movin-europe"
                >
                  http://wiki.esn.org/projects/movin-europe
                </Link>
                <br></br>
              </ScrollAnimation>
              <br></br>
              <ScrollAnimation delay={0.5}>
                <span className="fw-bold fs-4">ESNcard</span>
                <br></br>
              </ScrollAnimation>
              <br></br>
              <ScrollAnimation delay={0.6}>
                {
                  translations[selectedLanguage.code][
                    "The ESNcard is the membership card of ESN. It is a proof that you are a member of the biggest and the coolest student association in Europe! ESNcard holders can also enjoy discounts in (almost) every city where an ESN section is present."
                  ]
                }
                <br></br>
                <br></br>
                {
                  translations[selectedLanguage.code][
                    "You can check out all the discounts on:"
                  ]
                }{" "}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  to="http://esncard.org/"
                >
                  http://esncard.org/
                </Link>{" "}
                {
                  translations[selectedLanguage.code][
                    "and learn more about the project here:"
                  ]
                }{" "}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  to="http://wiki.esn.org/projects/esncard"
                >
                  http://wiki.esn.org/projects/esncard
                </Link>
                <br></br>
                <br></br>
                <span className="fw-bold fs-4">ESNsurvey</span>
                <br></br>
                <br></br>
                {
                  translations[selectedLanguage.code][
                    "Every year, ESN launches a European-wide survey that explores the different issues and impact of mobility. This is one of the biggest and most successful research projects of ESN."
                  ]
                }
                <br></br>
                <br></br>
                {
                  translations[selectedLanguage.code][
                    "More information can be found on"
                  ]
                }{" "}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  to="http://esn.org/ESNSurvey"
                >
                  http://esn.org/ESNSurvey
                </Link>{" "}
                {translations[selectedLanguage.code]["or"]}{" "}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  to="http://wiki.esn.org/projects/esnsurvey"
                >
                  http://wiki.esn.org/projects/esnsurvey
                </Link>
                <br></br>
                <br></br>
                <span className="fw-bold" style={{ color: "#4d4d4dff" }}>
                  {
                    translations[selectedLanguage.code][
                      "It's easy to join whichever one interests you most. Join us to help make a difference!!"
                    ]
                  }
                </span>
              </ScrollAnimation>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErasmusProjects;
