import React from "react";
import logo from "../../assets/favicon.ico";
import { Link } from "react-router-dom";
import "./FindHouse.css";
import banner1 from "../../assets/meet-peiraius/1.jpg";
import banner2 from "../../assets/meet-peiraius/images.jpg";
import banner3 from "../../assets/meet-peiraius/arheio_lipsis_1.jpg";
import banner4 from "../../assets/meet-peiraius/PIREAS.jpg";
import Breadcrum from "../Breadcrum/Breadcrum";
import { useState, useContext, useMemo } from "react";
import { ShopContext } from "../../context/ShopContext";
import { translations } from "../../translations/translations";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const FindHouse = () => {
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
      <div className="findhouse d-flex align-items-center justify-content-center gap-5">
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
            {/* First bold paragraph skeleton */}
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

            {/* Contact us section skeleton */}
            <div className="mb-4">
              <div className="placeholder-glow">
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "24px", width: "200px" }}
                ></div>
                <div
                  className="placeholder rounded-5"
                  style={{ height: "20px", width: "250px" }}
                ></div>
              </div>
            </div>

            {/* University IRO section skeleton */}
            <div className="mb-4">
              <div className="placeholder-glow mb-3">
                <div
                  className="placeholder rounded-5"
                  style={{ height: "30px", width: "400px" }}
                ></div>
              </div>
              <div className="placeholder-glow">
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "16px", width: "100%" }}
                ></div>
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "16px", width: "95%" }}
                ></div>
                <div
                  className="placeholder roundrounded-5ed"
                  style={{ height: "16px", width: "90%" }}
                ></div>
              </div>
            </div>

            {/* Erasmus Accommodation Group section skeleton */}
            <div className="mb-4">
              <div className="placeholder-glow mb-3">
                <div
                  className="placeholder rounded-5"
                  style={{ height: "30px", width: "450px" }}
                ></div>
              </div>
              <div className="placeholder-glow">
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
                  className="placeholder rounded-5"
                  style={{ height: "16px", width: "250px" }}
                ></div>
              </div>
            </div>

            {/* StayInAthens section skeleton */}
            <div className="mb-4">
              <div className="placeholder-glow mb-3">
                <div
                  className="placeholder rounded-5"
                  style={{ height: "30px", width: "200px" }}
                ></div>
              </div>
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
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "16px", width: "80%" }}
                ></div>
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "16px", width: "75%" }}
                ></div>
                <div
                  className="placeholder rounded-5"
                  style={{ height: "16px", width: "70%" }}
                ></div>
              </div>
            </div>

            {/* StayInAthens contact info skeletons */}
            <div className="mb-4">
              <div className="placeholder-glow">
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "20px", width: "300px" }}
                ></div>
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "20px", width: "350px" }}
                ></div>
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "20px", width: "250px" }}
                ></div>
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "20px", width: "200px" }}
                ></div>
                <div
                  className="placeholder rounded-5"
                  style={{ height: "20px", width: "180px" }}
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
      <div className="findhouse d-flex align-items-center justify-content-center gap-5">
        <div className="container my-1 d-flex flex-column justify-content-start">
          <ScrollAnimation>
            <div className="d-flex justify-content-start">
              <Breadcrum
                name="ACCOMMODATION"
                link="/accomondation-piraeus-athens-metropolitan-area"
                name2="ERASMUS IN PEIRAEUS"
                link1="/accomondation-piraeus-athens-metropolitan-area"
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
                  className="bi bi-house-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
                </svg>
                <h5 className="text-uppercase fw-bold fs-3  mb-0 text-BLACK">
                  {translations[selectedLanguage.code]["ACCOMMODATION"]}
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
                    "The following options are recommended if you're looking for a place to stay while being on your exchange here in University of Piraeus:"
                  ]
                }
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.3}>
              <p className="mt-4">
                <span className="fw-bold fs-5">
                  {translations[selectedLanguage.code]["Contact us:"]}
                </span>{" "}
                <Link
                  style={{ textDecoration: "none" }}
                  to="mailto:accommodation@esnunipi.gr"
                >
                  accommodation@esnunipi.gr
                </Link>
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <p className="mt-4">
                <span className="fw-bold fs-4">
                  {
                    translations[selectedLanguage.code][
                      "Contact University of Piraeus IRO"
                    ]
                  }
                </span>
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.5}>
              <p>
                {translations[selectedLanguage.code]["By emailing to"]}{" "}
                <Link
                  style={{ textDecoration: "none" }}
                  to="mailto:incoming-erasmus@unipi.gr"
                >
                  incoming-erasmus@unipi.gr
                </Link>
                ,{" "}
                {
                  translations[selectedLanguage.code][
                    "the responsible people of the office are able to help you with house hunting and offer you some solutions about apartments located very close to the university."
                  ]
                }
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.6}>
              <p className="mt-4">
                <span className="fw-bold fs-4">
                  {
                    translations[selectedLanguage.code][
                      "Erasmus Accomondation Group by ESN in Athens"
                    ]
                  }
                </span>
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.7}>
              <p>
                {translations[selectedLanguage.code]["The following"]}{" "}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  to="https://www.facebook.com/groups/313962265301086/"
                >
                  facebook group
                </Link>{" "}
                {
                  translations[selectedLanguage.code][
                    "aims to help exchange student visiting Athens and trying a place to stay. The group is handled by volunteers of ESN UniPi and other ESN sections of Athens."
                  ]
                }
                <br></br>
                <br></br>
                {
                  translations[selectedLanguage.code][
                    "By entering the group, you are able to explore housing offers mainly from private owners and not from rental companies. You are also able to make your own posts in case you are looking for your own roommates."
                  ]
                }
                <br></br>
                <br></br>
                {
                  translations[selectedLanguage.code][
                    "Be careful for spammers and make sure to verify that the person you talk to is real will not steal your money!"
                  ]
                }{" "}
                😏
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.8}>
              <p className="mt-4">
                <span className="fw-bold fs-4">StayInAthens</span>
              </p>
              <p>
                {
                  translations[selectedLanguage.code][
                    "The StayInAthens team was created by Greek former Erasmus students of Athens University of Economics and Business being very active in the Erasmus Student Network."
                  ]
                }
                <br></br>
                <br></br>
                {
                  translations[selectedLanguage.code][
                    "The platform started offering its services ten years ago and it now addresses the accommodation needs of many Erasmus students studying in different Greek Universities."
                  ]
                }
                <br></br>
                <br></br>{" "}
                {
                  translations[selectedLanguage.code][
                    "StayInAthens is a platform where each Erasmus students chooses the apartment best suited for him/her during their short period of stay. All the apartments have the necessary furnishings and all electrical equipment needed during their stay. Our prices include all expenses and the use of the Internet to make their living in Athens easier and not to stress over the bills (electricity, water etc)."
                  ]
                }
                <br></br>
                <br></br>
                {
                  translations[selectedLanguage.code][
                    "Through a reliable system where student receive all the appropriate documentation (contracts, receipts, a list with approved owners, etc.), our organization has served so far more than 3000 students, and 300 students each year. This year StayInAthens goes to Thessaloniki J to make a new project team and create stayinsaloniki.com"
                  ]
                }
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.3}>
              <p>
                <span className="fw-bold">StayInAthens.com</span> |{" "}
                <span className="fw-bold">
                  {
                    translations[selectedLanguage.code][
                      "Accommodation Services"
                    ]
                  }
                </span>{" "}
                |{" "}
                <span className="fw-bold">
                  {translations[selectedLanguage.code]["Housing Services"]}
                </span>
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <p>
                <span className="fw-bold">
                  {
                    translations[selectedLanguage.code][
                      "Mitropoleos 10 - 105 63 Athens, Greece"
                    ]
                  }
                </span>{" "}
                | <span className="fw-bold">(+30) 210 88 20 898</span>
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.5}>
              <p>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  to="http://www.stayinathens.com"
                >
                  http://www.stayinathens.com
                </Link>{" "}
                |{" "}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  to="info@stayinathens.com"
                >
                  info@stayinathens.com
                </Link>
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.6}>
              <p>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  to="http://www.facebook.com/StayInAthens"
                >
                  http://www.facebook.com/StayInAthens
                </Link>{" "}
                |{" "}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  to="http://instagram.com/stayinathens"
                >
                  http://instagram.com/stayinathens
                </Link>
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindHouse;
