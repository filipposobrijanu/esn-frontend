import React from "react";
import logo from "../../assets/favicon.ico";
import { Link } from "react-router-dom";
import "./GetTheESNcard.css";
import banner1 from "../../assets/meet-peiraius/1.jpg";
import banner2 from "../../assets/meet-peiraius/images.jpg";
import banner3 from "../../assets/meet-peiraius/arheio_lipsis_1.jpg";
import banner4 from "../../assets/meet-peiraius/PIREAS.jpg";
import Breadcrum from "../Breadcrum/Breadcrum";
import { useState, useContext, useMemo } from "react";
import { ShopContext } from "../../context/ShopContext";
import { translations } from "../../translations/translations";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const GetTheESNcard = () => {
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
      <div className="gettheesncard d-flex align-items-center justify-content-center gap-5">
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
                  style={{ width: "100px", height: "24px" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Content Skeleton */}
          <div
            className="d-flex text-start flex-column"
            style={{ overflowWrap: "break-word" }}
          >
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

            {/* "What is the ESNcard?" section skeleton */}
            <div className="mb-4">
              <div className="placeholder-glow mb-3">
                <div
                  className="placeholder rounded-5"
                  style={{ height: "30px", width: "250px" }}
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
                  className="placeholder rounded-5"
                  style={{ height: "16px", width: "85%" }}
                ></div>
              </div>
            </div>

            {/* "Who can get the ESNcard?" section skeleton */}
            <div className="mb-4">
              <div className="placeholder-glow mb-3">
                <div
                  className="placeholder rounded-5"
                  style={{ height: "30px", width: "300px" }}
                ></div>
              </div>
              <div className="placeholder-glow">
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "16px", width: "100%" }}
                ></div>
                <div
                  className="placeholder rounded-5 mb-3"
                  style={{ height: "16px", width: "95%" }}
                ></div>

                {/* List skeletons */}
                <div className="ps-3">
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

                  {/* Nested list skeletons */}
                  <div className="ps-3">
                    <div
                      className="placeholder rounded-5 mb-2"
                      style={{ height: "16px", width: "95%" }}
                    ></div>
                    <div
                      className="placeholder rounded-5 mb-2"
                      style={{ height: "16px", width: "90%" }}
                    ></div>
                    <div
                      className="placeholder rounded-5"
                      style={{ height: "16px", width: "85%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Link section skeleton */}
            <div className="mb-4">
              <div className="placeholder-glow">
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "16px", width: "250px" }}
                ></div>
                <div
                  className="placeholder rounded-5"
                  style={{ height: "16px", width: "150px" }}
                ></div>
              </div>
            </div>

            {/* "How can you get the ESNcard?" section skeleton */}
            <div className="mb-4">
              <div className="placeholder-glow mb-3">
                <div
                  className="placeholder rounded-5"
                  style={{ height: "30px", width: "350px" }}
                ></div>
              </div>
              <div className="placeholder-glow">
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "16px", width: "100%" }}
                ></div>
                <div
                  className="placeholder rounded-5"
                  style={{ height: "16px", width: "95%" }}
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
      <div className="gettheesncard d-flex align-items-center justify-content-center gap-5">
        <div className="container my-1 d-flex flex-column justify-content-start">
          <ScrollAnimation>
            <div className="d-flex justify-content-start">
              <Breadcrum
                name="ESNCARD"
                link="/esncard"
                name2="ERASMUS IN PEIRAEUS"
                link1="/esncard"
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
                  className="bi bi-person-vcard-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5M9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8m1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96q.04-.245.04-.5M7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0" />
                </svg>
                <h5 className="text-uppercase fw-bold fs-3  mb-0 text-BLACK">
                  ESNcard
                </h5>
              </div>
            </div>
          </ScrollAnimation>
          <div className="d-flex text-start flex-column">
            <ScrollAnimation delay={0.2}>
              <p className="fw-bold" style={{ color: "#4d4d4dff" }}>
                {
                  translations[selectedLanguage.code][
                    "Now, you too, can become a part of the Erasmus Student Network & take advantage of a ton of discounts and offers from various partnerships and services with just 12€!"
                  ]
                }
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.3}>
              <p className="mt-4">
                <span className="fw-bold fs-4">
                  {translations[selectedLanguage.code]["What is the ESNcard?"]}
                </span>
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <p>
                {
                  translations[selectedLanguage.code][
                    "The ESNcard is the membership card of ESN which means that you can access to all the services offered by the ESN and our partners. With the ESNcard, you will enjoy thousands of discounts (housing, sport, food, bars, etc.) all over Europe. Moreover, you will have the opportunity to participate in thousands of events (trips, cultural events, sports activities and parties) all year long. The aim of the ESNcard is to support and give opportunities to international students during and after their exchange. Who uses the ESNcard? The ESNcard is used by over 100.000 people per year in 36 countries, and the numbers are growing every year."
                  ]
                }
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.5}>
              <p className="mt-4">
                <span className="fw-bold fs-4">
                  {
                    translations[selectedLanguage.code][
                      "Who can get the ESNcard?"
                    ]
                  }
                </span>
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.6}>
              <p>
                {
                  translations[selectedLanguage.code][
                    "You can get the ESNcard, if you belong to one of the following groups:"
                  ]
                }
                <br></br>
                <br></br>
                <ul>
                  <li>
                    {
                      translations[selectedLanguage.code][
                        "The ESNcard is used by over 140.000 people per year in 40 countries, and the numbers are growing every year."
                      ]
                    }
                  </li>
                  <li>
                    {
                      translations[selectedLanguage.code][
                        "You can get the ESNcard, if you belong to one of the following groups:"
                      ]
                    }
                  </li>
                  <li>
                    Erasmus+ {translations[selectedLanguage.code]["students;"]}
                  </li>
                  <li>
                    Erasmus+ {translations[selectedLanguage.code]["trainees;"]}
                  </li>
                  <li>
                    {
                      translations[selectedLanguage.code][
                        "International incoming students or trainees on a mobility programme, outside of Erasmus+;"
                      ]
                    }
                  </li>
                  <li>
                    {
                      translations[selectedLanguage.code][
                        "International undergraduate or postgraduate full degree students;"
                      ]
                    }
                  </li>
                  <li>{translations[selectedLanguage.code]["Volunteers:"]}</li>
                  <ul>
                    <li>
                      {
                        translations[selectedLanguage.code][
                          "ESNers: either active on Local, National or International level. They are all members of a section;"
                        ]
                      }
                    </li>
                    <li>
                      {
                        translations[selectedLanguage.code][
                          "Alumni: they can be entitled to get an ESNcard if the statutes of their ESN section explicitly set so;"
                        ]
                      }
                    </li>
                    <li>
                      {
                        translations[selectedLanguage.code][
                          "Buddies: sections are recommended to distribute to that group of people, only after they have a proof of a person’s role as a buddy. Sections can either obtain the list from their University, although some sections organise the whole buddy system themselves."
                        ]
                      }
                    </li>
                  </ul>
                </ul>
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <p>
                {
                  translations[selectedLanguage.code][
                    "For more information please visit the site :"
                  ]
                }{" "}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  to="www.esncard.org"
                >
                  www.esncard.org
                </Link>
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.3}>
              <p className="mt-4">
                <span className="fw-bold fs-4">
                  {
                    translations[selectedLanguage.code][
                      "How can you get the ESNcard?"
                    ]
                  }
                </span>
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <p>
                {
                  translations[selectedLanguage.code][
                    "Contact your local ESN Section! If it's us, ESN UniPi, make sure to join our welcome week at the beginning of your Erasmus exchange semester and we'll make sure to reach you"
                  ]
                }{" "}
                😏
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetTheESNcard;
