import React from "react";
import logo from "../../assets/favicon.ico";
import { Link } from "react-router-dom";
import "./MeetPeiraius.css";
import banner1 from "../../assets/meet-peiraius/1.jpg";
import banner2 from "../../assets/meet-peiraius/images.jpg";
import banner3 from "../../assets/meet-peiraius/arheio_lipsis_1.jpg";
import banner4 from "../../assets/meet-peiraius/PIREAS.jpg";
import Breadcrum from "../Breadcrum/Breadcrum";
import { useState, useContext, useMemo } from "react";
import { ShopContext } from "../../context/ShopContext";
import { translations } from "../../translations/translations";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const Home = () => {
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
      <div className="meetpeir d-flex align-items-center justify-content-center gap-3 gap-md-5">
        <div className="container my-1 d-flex flex-column justify-content-start">
          {/* Breadcrumb Skeleton */}
          <div className="d-flex justify-content-start mb-3">
            <div className="placeholder-glow">
              <div
                className="placeholder rounded-5"
                style={{ width: "120px", height: "20px" }}
              ></div>
            </div>
          </div>

          {/* Title Section Skeleton */}
          <div className="d-flex justify-content-start mb-4 mb-md-5">
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
            {/* First text-image pair skeleton */}
            <div className="d-flex flex-column flex-lg-row gap-3 gap-lg-4 align-items-center align-items-lg-start mb-4 mb-lg-5">
              <div className="order-2 order-lg-1 flex-grow-1 w-100">
                <div className="placeholder-glow">
                  {[...Array(4)].map((_, index) => (
                    <div
                      key={`text1-${index}`}
                      className="placeholder rounded-5 mb-2"
                      style={{
                        width: `${100 - index * 5}%`,
                        height: "16px",
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="order-1 order-lg-2 w-100 w-lg-50">
                <div className="placeholder-glow ratio ratio-16x9">
                  <div className="placeholder rounded-5 w-100 h-100"></div>
                </div>
              </div>
            </div>

            {/* Second image-text pair skeleton */}
            <div className="d-flex flex-column flex-lg-row gap-3 gap-lg-4 align-items-center align-items-lg-start mb-4 mb-lg-5">
              <div className="order-1 order-lg-1 w-100 w-lg-50">
                <div className="placeholder-glow ratio ratio-16x9">
                  <div className="placeholder rounded-5 w-100 h-100"></div>
                </div>
              </div>
              <div className="order-2 order-lg-2 flex-grow-1 w-100">
                <div className="placeholder-glow">
                  {[...Array(4)].map((_, index) => (
                    <div
                      key={`text2-${index}`}
                      className="placeholder rounded-5 mb-2"
                      style={{
                        width: `${100 - index * 5}%`,
                        height: "16px",
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Standalone paragraph skeleton */}
            <div className="my-4">
              <div className="placeholder-glow">
                {[...Array(6)].map((_, index) => (
                  <div
                    key={`para1-${index}`}
                    className="placeholder rounded-5 mb-2"
                    style={{
                      width: `${100 - index * 4}%`,
                      height: "16px",
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Third text-image pair skeleton */}
            <div className="d-flex flex-column flex-lg-row gap-3 gap-lg-4 align-items-center align-items-lg-start mb-4 mb-lg-5">
              <div className="order-2 order-lg-1 flex-grow-1 w-100">
                <div className="placeholder-glow">
                  {[...Array(5)].map((_, index) => (
                    <div
                      key={`text3-${index}`}
                      className="placeholder rounded-5 mb-2"
                      style={{
                        width: `${100 - index * 4}%`,
                        height: "16px",
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="order-1 order-lg-2 w-100 w-lg-50">
                <div className="placeholder-glow ratio ratio-16x9">
                  <div className="placeholder rounded-5 w-100 h-100"></div>
                </div>
              </div>
            </div>

            {/* Fourth image-text pair skeleton */}
            <div className="d-flex flex-column flex-lg-row gap-3 gap-lg-4 align-items-center align-items-lg-start mb-4 mb-lg-5">
              <div className="order-1 order-lg-1 w-100 w-lg-50">
                <div className="placeholder-glow ratio ratio-16x9">
                  <div className="placeholder rounded-5 w-100 h-100"></div>
                </div>
              </div>
              <div className="order-2 order-lg-2 flex-grow-1 w-100">
                <div className="placeholder-glow">
                  {[...Array(5)].map((_, index) => (
                    <div
                      key={`text4-${index}`}
                      className="placeholder rounded-5 mb-2"
                      style={{
                        width: `${100 - index * 4}%`,
                        height: "16px",
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Final standalone paragraph skeleton */}
            <div className="my-4">
              <div className="placeholder-glow">
                {[...Array(6)].map((_, index) => (
                  <div
                    key={`para2-${index}`}
                    className="placeholder rounded-5 mb-2"
                    style={{
                      width: `${100 - index * 4}%`,
                      height: "16px",
                    }}
                  ></div>
                ))}
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
      <div className="meetpeir d-flex align-items-center justify-content-center">
        <div className="container my-1 d-flex flex-column justify-content-start">
          <ScrollAnimation>
            <div className="d-flex justify-content-start">
              <Breadcrum
                name="MEET PEIRAEUS"
                link="/meet-piraeus"
                name2="ERASMUS IN PEIRAEUS"
                link1="/meet-piraeus"
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={0.1}>
            <div className="d-flex justify-content-start mb-5 mb-lg-5">
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
                  fill="currentColor"
                  className="bi bi-arrow-down-right-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m5.904-2.803a.5.5 0 1 0-.707.707L9.293 10H6.525a.5.5 0 0 0 0 1H10.5a.5.5 0 0 0 .5-.5V6.525a.5.5 0 0 0-1 0v2.768z" />
                </svg>
                <h5 className="text-uppercase fw-bold fs-3 mb-0 text-black">
                  {translations[selectedLanguage.code]["MEET PEIRAEUS"]}
                </h5>
              </div>
            </div>
          </ScrollAnimation>

          <div className="d-flex text-start flex-column">
            {/* First text-image pair */}
            <div className="row align-items-center mb-4 mb-lg-5">
              <div className="col-lg-6 order-2 order-lg-1">
                <ScrollAnimation delay={0.2}>
                  <p className="mb-0">
                    {
                      translations[selectedLanguage.code][
                        "Piraeus is a port city in the region of Attica, Greece. Piraeus is located within the Athens urban area, 12 kilometres (7 miles) southwest from its city center (municipality of Athens), and lies along the east coast of the Saronic Gulf."
                      ]
                    }
                  </p>
                </ScrollAnimation>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 mb-3 mb-lg-0">
                <ScrollAnimation delay={0.3}>
                  <img
                    className="rounded-5 img-fluid w-100"
                    src={banner1}
                    alt="Piraeus landscape"
                    style={{ maxHeight: "400px", objectFit: "cover" }}
                  />
                </ScrollAnimation>
              </div>
            </div>

            {/* Second image-text pair */}
            <div className="row align-items-center mb-4 mb-lg-5">
              <div className="col-lg-6 mb-3 mb-lg-0">
                <ScrollAnimation delay={0.4}>
                  <img
                    className="rounded-5 img-fluid w-100"
                    src={banner2}
                    alt="Piraeus city view"
                    style={{ maxHeight: "400px", objectFit: "cover" }}
                  />
                </ScrollAnimation>
              </div>
              <div className="col-lg-6">
                <ScrollAnimation delay={0.5}>
                  <p className="mb-0">
                    {
                      translations[selectedLanguage.code][
                        "According to the 2011 census, Piraeus had a population of 163,688 people within its administrative limits, making it the fourth largest municipality in Greece and the second largest within the urban area of the Greek capital, following the municipality of Athens. The municipality of Piraeus and several other suburban municipalities within the regional unit population of 448,997."
                      ]
                    }
                  </p>
                </ScrollAnimation>
              </div>
            </div>

            {/* Standalone paragraph */}
            <ScrollAnimation delay={0.6}>
              <div className="row mb-4 mb-lg-5">
                <div className="col-12">
                  <p className="mb-0">
                    {
                      translations[selectedLanguage.code][
                        "Piraeus has a long recorded history, dating to ancient Greece. The city was largely developed in the early 5th century BC, when it was selected to serve as the port city of classical Athens and was transformed into a prototype harbour, concentrating all the import and transit trade of Athens. Consequently, it became the chief harbour of ancient Greece, but declined gradually after the 4th century AD, growing once more in the 19th century, especially after Athens' declaration as the capital of Greece. In the modern era, Piraeus is a large city, bustling with activity and an integral part of Athens, acting as home to the country's biggest harbour and bearing all the characteristics of a huge marine and commercial-industrial centre. The port of Piraeus is the chief port in Greece, the largest passenger port in Europe and the third largest in the world, servicing about 20 million passengers annually. With a throughput of 1.4 million TEUs, Piraeus is placed among the top ten ports in container traffic in Europe and the top container port in the Eastern Mediterranean. The city hosted events in both the 1896 and 2004 Summer Olympics held in Athens."
                      ]
                    }
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Third text-image pair */}
            <div className="row align-items-center mb-4 mb-lg-5">
              <div className="col-lg-6 order-2 order-lg-1">
                <ScrollAnimation delay={0.2}>
                  <p className="mb-0">
                    {
                      translations[selectedLanguage.code][
                        "Piraeus is situated in the southwest part of the central plain of Attica, also widely known as the Attica Basin, which the Athens agglomeration (urban area) sprawls across. Piraeus is bounded by the Mount Egaleo to the northwest, and the Saronic Gulf to the south and west, and connected with the rest of the Athens Urban Area to the east and northeast. The city proper of Piraeus consists of a rocky peninsula, originally an island, featuring three natural harbours. In addition to the central one, called Kantharos in ancient times, the smaller harbours to the east are still in use: Zea, also known as Pasalimani, and Munichia, the smallest of the three and widely known as Mikrolimano."
                      ]
                    }
                  </p>
                </ScrollAnimation>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 mb-3 mb-lg-0">
                <ScrollAnimation delay={0.3}>
                  <img
                    className="rounded-5 img-fluid w-100"
                    src={banner3}
                    alt="Piraeus harbors"
                    style={{ maxHeight: "400px", objectFit: "cover" }}
                  />
                </ScrollAnimation>
              </div>
            </div>

            {/* Fourth image-text pair */}
            <div className="row align-items-center mb-4 mb-lg-5">
              <div className="col-lg-6 mb-3 mb-lg-0">
                <ScrollAnimation delay={0.4}>
                  <img
                    className="rounded-5 img-fluid w-100"
                    src={banner4}
                    alt="Piraeus neighborhoods"
                    style={{ maxHeight: "400px", objectFit: "cover" }}
                  />
                </ScrollAnimation>
              </div>
              <div className="col-lg-6">
                <ScrollAnimation delay={0.5}>
                  <p className="mb-0">
                    {
                      translations[selectedLanguage.code][
                        "Nowadays, the Piraeus larger urban area includes the suburban harbours of Drapetsona, Keratsini and Perama. The central harbour is a hub of commercial and passenger shipping, whereas the two smaller ones cater to recreational and fishing craft as well as passenger hydrofoils. The city of Piraeus is marked by the diversity of culture among its neighborhoods. The hill of Kastella is one of the most prosperous and attractive neighborhoods of the city, with a panoramic view over Athens and the Saronic Gulf."
                      ]
                    }
                  </p>
                </ScrollAnimation>
              </div>
            </div>

            {/* Final standalone paragraph */}
            <ScrollAnimation delay={0.6}>
              <div className="row">
                <div className="col-12">
                  <p className="mb-0">
                    {
                      translations[selectedLanguage.code][
                        "Its elegance comes from its numerous neo-classical mansions, while the Veakeio Theater and a church dedicated to the Prophet Elijah are the most popular buildings. The coastal area of Neo Faliro has been upgraded and is also prominent, with the Peace and Friendship Stadium and the Karaiskakis Stadium, an indoor arena and a football ground respectively lying opposite one another, predominating. Mikrolimano and Bay of Zea, the smaller harbours of the city, attract large numbers of visitors with their picturesque vistas and vigorous nightlife, hosting fishing boats as well as yachts and cruise ships. Kaminia, by contrast, is a working-className neighbourhood which still preserves the traditional look of an earlier period. The Municipal Theater in downtown Piraeus was built in 1885 and remains an impressive neo-classical building. Located across from the Neo-Byzantine Piraeus Cathedral, it forms one of the most renowned landmarks of the city and a popular meeting place."
                      ]
                    }
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
