import React from "react";
import logo from "../../assets/favicon.ico";
import { Link } from "react-router-dom";
import "./WhatIsESN.css";
import banner1 from "../../assets/meet-peiraius/1.jpg";
import banner2 from "../../assets/meet-peiraius/images.jpg";
import banner3 from "../../assets/meet-peiraius/arheio_lipsis_1.jpg";
import banner4 from "../../assets/meet-peiraius/PIREAS.jpg";
import banner from "../../assets/meet-peiraius/survival_guide.jpg";
import esn_png from "../../assets/meet-peiraius/download_1.png";
import Breadcrum from "../Breadcrum/Breadcrum";
import { useState, useContext, useMemo } from "react";
import { ShopContext } from "../../context/ShopContext";
import { translations } from "../../translations/translations";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const WhatIsESN = () => {
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
      <div className="whatisesn d-flex align-items-center justify-content-center gap-5">
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
                  style={{ width: "180px", height: "24px" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Content Skeleton */}
          <div className="d-flex text-start flex-column">
            {/* First Title Skeleton */}
            <div className="mb-3">
              <div className="placeholder-glow">
                <div
                  className="placeholder rounded-5"
                  style={{ width: "300px", height: "30px" }}
                ></div>
              </div>
            </div>

            {/* Image Skeleton */}
            <div className="mb-4">
              <div className="placeholder-glow">
                <div
                  className="placeholder rounded-5"
                  style={{ width: "300px", height: "200px" }}
                ></div>
              </div>
            </div>

            {/* Paragraph Skeletons */}
            <div className="mb-3">
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
                  style={{ height: "16px", width: "80%" }}
                ></div>
              </div>
            </div>

            <div className="mb-3">
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
                  style={{ height: "16px", width: "70%" }}
                ></div>
              </div>
            </div>

            {/* List Skeletons */}
            <div className="mb-4">
              <div className="placeholder-glow">
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "20px", width: "250px" }}
                ></div>
                <div className="ps-3">
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
                </div>
              </div>
            </div>

            {/* Mission, Vision & Values Section Skeleton */}
            <div className="mb-3">
              <div className="placeholder-glow">
                <div
                  className="placeholder rounded-5 mb-3"
                  style={{ height: "30px", width: "350px" }}
                ></div>
              </div>
            </div>

            {/* Vision Skeleton */}
            <div className="mb-4">
              <div className="placeholder-glow">
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "20px", width: "100px" }}
                ></div>
                <div
                  className="ps-3"
                  style={{ borderLeft: "#7ac142 3px solid" }}
                >
                  <div
                    className="placeholder rounded-5"
                    style={{ height: "20px" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Mission Skeleton */}
            <div className="mb-4">
              <div className="placeholder-glow">
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "20px", width: "100px" }}
                ></div>
                <div
                  className="ps-3"
                  style={{ borderLeft: "#00b3e6 3px solid" }}
                >
                  <div
                    className="placeholder rounded-5 mb-1"
                    style={{ height: "16px" }}
                  ></div>
                  <div
                    className="placeholder rounded-5 mb-1"
                    style={{ height: "16px" }}
                  ></div>
                  <div
                    className="placeholder rounded-5"
                    style={{ height: "16px", width: "60%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Values Skeleton */}
            <div className="mb-4">
              <div className="placeholder-glow">
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "20px", width: "100px" }}
                ></div>
                <div
                  className="placeholder rounded-5 mb-3"
                  style={{ height: "16px", width: "80%" }}
                ></div>

                {/* Value badges skeleton */}
                <div className="d-flex flex-wrap mt-2">
                  {[...Array(7)].map((_, index) => (
                    <div key={index} className="placeholder-glow me-2 mb-2">
                      <div
                        className="placeholder rounded-5"
                        style={{ width: "120px", height: "32px" }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Link Skeleton */}
            <div className="placeholder-glow">
              <div
                className="placeholder rounded-5 mb-1"
                style={{ height: "16px", width: "300px" }}
              ></div>
              <div
                className="placeholder rounded-5"
                style={{ height: "16px", width: "150px" }}
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
      <div className="whatisesn d-flex align-items-center justify-content-center gap-5">
        <div className="container my-1 d-flex flex-column justify-content-start">
          <ScrollAnimation>
            <div className="d-flex justify-content-start">
              <Breadcrum
                name="WHAT IS ESN?"
                link="/what-esn"
                name2="ABOUT ESN"
                link1="/what-esn"
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
                  className="bi bi-question-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                </svg>
                <h5 className="text-uppercase fw-bold fs-3  mb-0 text-BLACK">
                  {translations[selectedLanguage.code]["what is esn?"]}
                </h5>
              </div>
            </div>
          </ScrollAnimation>
          <div className="d-flex text-start flex-column">
            <ScrollAnimation delay={0.2}>
              <p>
                <span className="fw-bold fs-4">
                  {
                    translations[selectedLanguage.code][
                      "The Erasmus Student Network!"
                    ]
                  }
                </span>
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.3}>
              <img
                className="rounded-5 img-fluid"
                src={esn_png}
                alt="ESN Survival Guide"
                style={{ maxWidth: "300px", width: "100%" }}
              />
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <p className="mt-4">
                {
                  translations[selectedLanguage.code][
                    "The Erasmus Student Network is not only present in Piraeus. In fact, as of June 2021, the network consists of 544 local sections in 42 countries. ESN was founded on October 16, 1989, and legally registered in 1990 for supporting and developing student exchange. The network has an average annual growth rate of 12% since 2005 and is currently the biggest student association in Europe. The vast majority of its active members are volunteers."
                  ]
                }
                <br></br>
                <br></br>
                {
                  translations[selectedLanguage.code][
                    "ESN is operating on three levels: local, national, and international. Each level of the network contributes in its own way to promote a more mobile and flexible education environment by supporting and developing the student exchange and providing an intercultural experience to local students."
                  ]
                }
                <br></br>
                <br></br>
                {
                  translations[selectedLanguage.code][
                    "ESN is working in Higher Education (HE):"
                  ]
                }
                <br></br>
                <br></br>

                <ul>
                  <li>
                    {
                      translations[selectedLanguage.code][
                        "offering services to"
                      ]
                    }{" "}
                    <span className="fw-bold">
                      350,000 {translations[selectedLanguage.code]["students"]}
                    </span>
                  </li>
                  <li>
                    <span className="fw-bold">15,000</span>{" "}
                    {translations[selectedLanguage.code]["active members"]} (
                    <span className="fw-bold">40,000</span>{" "}
                    {
                      translations[selectedLanguage.code][
                        "with the buddies included"
                      ]
                    }
                    )
                  </li>
                  <li>
                    {translations[selectedLanguage.code]["mainly on a"]}{" "}
                    <span className="fw-bold">
                      {translations[selectedLanguage.code]["volunteer"]}
                    </span>{" "}
                    {translations[selectedLanguage.code]["basis"]}
                  </li>
                  <li>
                    {
                      translations[selectedLanguage.code][
                        "with an average annual growth rate of"
                      ]
                    }{" "}
                    <span className="fw-bold">12%</span>{" "}
                    {translations[selectedLanguage.code]["since"]} 2005
                  </li>
                </ul>
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.5}>
              <p>
                <span className="fw-bold fs-4">
                  {
                    translations[selectedLanguage.code][
                      "Mission, Vision & Values"
                    ]
                  }
                </span>
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.6}>
              <p className="mt-4">
                {
                  translations[selectedLanguage.code][
                    "The vision and mission of Erasmus Student Network were discussed and approved at the Annual General Meeting in Utrecht in March 2009"
                  ]
                }
                <br></br>
                <br></br>
                <span className="fw-bold">
                  <span className="fw-bold fs-4">
                    {translations[selectedLanguage.code]["Vision"]}
                  </span>
                </span>
                <br></br>
                <br></br>
                <p
                  className="mb-0 ps-3 "
                  style={{ borderLeft: "#7ac142 3px solid" }}
                >
                  {
                    translations[selectedLanguage.code][
                      "Enrichment of society through international students"
                    ]
                  }
                </p>
                <br></br>
                <br></br>
                <span className="fw-bold">
                  <span className="fw-bold fs-4">
                    {translations[selectedLanguage.code]["Mission"]}
                  </span>
                </span>
                <br></br>
                <br></br>
                <p
                  className="mb-0 ps-3 "
                  style={{ borderLeft: "#00b3e6 3px solid" }}
                >
                  {
                    translations[selectedLanguage.code][
                      "ESN is the key volunteer student organization in international higher education in Europe. We provide opportunities for cultural understanding and self-development under the principle of SHS - Students Helping Students."
                    ]
                  }
                </p>
                <br></br>
                <br></br>
                <span className="fw-bold">
                  <span className="fw-bold fs-4">
                    {translations[selectedLanguage.code]["Values"]}
                  </span>
                </span>
                <br></br>
                <br></br>
                {
                  translations[selectedLanguage.code][
                    "The values of Erasmus Student Network that all members stand and work for are:"
                  ]
                }
                <br></br>
                <br></br>
                <div className="d-flex flex-wrap mt-2">
                  <span className="badge fs-6 bg-light text-dark me-2 mb-2 p-2 border">
                    <small
                      className="d-flex flex-wrap"
                      style={{ overflowWrap: "break-word" }}
                    >
                      {
                        translations[selectedLanguage.code][
                          "unity in diversity, diversity in the unity"
                        ]
                      }
                    </small>
                  </span>
                  <span className="badge fs-6 bg-light text-dark me-2 mb-2 p-2 border">
                    <small>
                      {
                        translations[selectedLanguage.code][
                          "students helping students"
                        ]
                      }
                    </small>
                  </span>
                  <span className="badge fs-6 bg-light text-dark me-2 mb-2 p-2 border">
                    <small>
                      {
                        translations[selectedLanguage.code][
                          "fun in friendship and respect"
                        ]
                      }
                    </small>
                  </span>
                  <span className="badge fs-6 bg-light text-dark me-2 mb-2 p-2 border">
                    <small>
                      {
                        translations[selectedLanguage.code][
                          "international dimension of the life"
                        ]
                      }
                    </small>
                  </span>
                  <span className="badge fs-6 bg-light text-dark me-2 mb-2 p-2 border">
                    <small>
                      {
                        translations[selectedLanguage.code][
                          "love for Europe as an area of peace"
                        ]
                      }
                    </small>
                  </span>
                  <span className="badge fs-6 bg-light text-dark me-2 mb-2 p-2 border">
                    <small>
                      {
                        translations[selectedLanguage.code][
                          "openness with tolerance"
                        ]
                      }
                    </small>
                  </span>
                  <span className="badge fs-6 bg-light text-dark me-2 mb-2 p-2 border">
                    <small>
                      {
                        translations[selectedLanguage.code][
                          "cooperation in the integration"
                        ]
                      }
                    </small>
                  </span>
                </div>
                <br></br>
                <br></br>
                {
                  translations[selectedLanguage.code][
                    "Official Website of ESN International :"
                  ]
                }{" "}
                <Link
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://esn.org/"
                >
                  https://esn.org/
                </Link>
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatIsESN;
