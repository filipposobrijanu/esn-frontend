import React from "react";
import { useEffect } from "react";
import logo from "../../assets/favicon.ico";
import { Link } from "react-router-dom";
import "./Home.css";
import eurosender from "../../assets/eurosender.jpg";
import medusa from "../../assets/medusa.jpg";
import metropolis from "../../assets/metropolis.jpg";
import ryanair from "../../assets/ryanair_erasmus_1_1_1.jpg";
import kaloypi from "../../assets/kaloypi.jpg";
import tedx from "../../assets/tedx.jpg";
import findhouse from "../../assets/findhouse.png";
import gettheesncard from "../../assets/gettheesncard.png";
import learnmore from "../../assets/learnmore.png";
import survivalguide from "../../assets/survivalguide.png";
import { useState, useContext, useMemo } from "react";
import { ShopContext } from "../../context/ShopContext";
import { translations } from "../../translations/translations";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import New from "../New/New";
import Event from "../Event/Event"; // Import Event component

const Home = () => {
  const { selectedLanguage } = useContext(ShopContext);
  const [currentNewsPage, setCurrentNewsPage] = useState(1);
  const [currentEventsPage, setCurrentEventsPage] = useState(1);
  const [newsData, setNewsData] = useState([]);
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = "https://esn-unipi-backend.onrender.com";

  const itemsPerPage = 3; // Reduced for home page to fit better

  // Fetch news from database
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setIsLoading(true); // Add this line

        // Fetch news
        const newsResponse = await fetch(`${API_URL}/allnews`);
        if (!newsResponse.ok)
          throw new Error(`HTTP error! status: ${newsResponse.status}`);
        const newsData = await newsResponse.json();
        setNewsData(newsData);

        // Fetch events
        const eventsResponse = await fetch(`${API_URL}/allevents`);
        if (!eventsResponse.ok)
          throw new Error(`HTTP error! status: ${eventsResponse.status}`);
        const eventsData = await eventsResponse.json();
        setEventsData(eventsData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load data");
      } finally {
        setLoading(false);
        setIsLoading(false); // Add this line
      }
    };

    fetchData();
  }, []);

  // Calculate total pages
  const totalNewsPages = Math.ceil(newsData.length / itemsPerPage);
  const totalEventsPages = Math.ceil(eventsData.length / itemsPerPage);

  // Get current items
  const getCurrentItems = (data, currentPage) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return data.slice(indexOfFirstItem, indexOfLastItem);
  };

  const currentNewsItems = getCurrentItems(newsData, currentNewsPage);
  const currentEventsItems = getCurrentItems(eventsData, currentEventsPage);

  // Smart pagination generation
  const generatePagination = (currentPage, totalPages) => {
    const delta = 1; // Reduced for home page
    const range = [];
    const rangeWithDots = [];

    if (totalPages <= 1) return [1];

    // Always show first page
    range.push(1);

    // Calculate range around current page
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    // Always show last page
    range.push(totalPages);

    // Remove duplicates and sort
    const uniqueRange = [...new Set(range)].sort((a, b) => a - b);

    // Add dots where there are gaps
    let prev;
    for (const page of uniqueRange) {
      if (prev) {
        if (page - prev === 2) {
          rangeWithDots.push(prev + 1);
        } else if (page - prev !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(page);
      prev = page;
    }

    return rangeWithDots;
  };

  // Format date function
  const formatDate = (dateString) => {
    if (!dateString) return "";

    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      return dateString;
    }
  };

  // Create slug from name
  const createSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  };

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
    <>
      {/* How can we help section skeleton */}
      <div className="homediv d-flex align-items-center justify-content-center gap-5">
        <div className="container my-1 d-flex flex-column justify-content-start">
          {/* Title skeleton */}
          <div className="d-flex justify-content-start mb-4">
            <div className="placeholder-glow">
              <div
                className="placeholder rounded-5"
                style={{ width: "200px", height: "32px" }}
              ></div>
            </div>
          </div>

          {/* Help links skeleton */}
          <div className="d-inline-flex gap-3 flex-wrap justify-content-center align-items-start">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="d-flex flex-column align-items-center gap-2 p-3"
              >
                <div className="placeholder-glow">
                  <div
                    className="placeholder rounded-5"
                    style={{ width: "115px", height: "115px" }}
                  ></div>
                </div>
                <div className="placeholder-glow text-center">
                  <div
                    className="placeholder rounded-5 mb-1"
                    style={{ width: "100px", height: "16px" }}
                  ></div>
                  <div
                    className="placeholder rounded-5"
                    style={{ width: "80px", height: "16px" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* News and Past Events sections skeleton */}
      <div className="homediv flex-column flex-lg-row d-flex align-items-start justify-content-center gap-5">
        {/* News section skeleton */}
        <div className="container my-5 mt-0 d-flex flex-column align-items-start">
          <div className="d-flex justify-content-center mb-4">
            <div className="placeholder-glow">
              <div
                className="placeholder rounded-5"
                style={{ width: "100px", height: "32px" }}
              ></div>
            </div>
          </div>
          {[...Array(3)].map((_, index) => (
            <div key={index} className="placeholder-glow w-100 mb-3">
              <div
                className="placeholder rounded-5"
                style={{ height: "100px", width: "100%" }}
              ></div>
            </div>
          ))}
        </div>

        {/* Past Events section skeleton */}
        <div className="container my-5 mt-0 d-flex flex-column align-items-start">
          <div className="d-flex justify-content-center mb-4">
            <div className="placeholder-glow">
              <div
                className="placeholder rounded-5"
                style={{ width: "150px", height: "32px" }}
              ></div>
            </div>
          </div>
          {[...Array(3)].map((_, index) => (
            <div key={index} className="placeholder-glow w-100 mb-3">
              <div
                className="placeholder rounded-5"
                style={{ height: "100px", width: "100%" }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Video and Partners sections skeleton */}
      <div className="homediv flex-column flex-lg-row d-flex align-items-start justify-content-center gap-5">
        {/* Video section skeleton */}
        <div className="container my-5 mt-0 d-flex flex-column align-items-start">
          <div className="d-flex justify-content-center mb-4">
            <div className="placeholder-glow">
              <div
                className="placeholder rounded-5"
                style={{ width: "250px", height: "32px" }}
              ></div>
            </div>
          </div>
          <div className="ratio ratio-16x9 w-100">
            <div className="placeholder-glow">
              <div className="placeholder rounded-5 w-100 h-100"></div>
            </div>
          </div>
        </div>

        {/* Partners section skeleton */}
        <div className="container my-5 mt-0 d-flex flex-column align-items-start">
          <div className="d-flex justify-content-center mb-4">
            <div className="placeholder-glow">
              <div
                className="placeholder rounded-5"
                style={{ width: "120px", height: "32px" }}
              ></div>
            </div>
          </div>
          <div className="partners-container d-flex flex-column gap-2 w-100">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="d-flex justify-content-start align-items-center mb-2 w-100"
              >
                <div className="me-3">
                  <div className="placeholder-glow">
                    <div
                      className="placeholder rounded-5"
                      style={{ width: "60px", height: "60px" }}
                    ></div>
                  </div>
                </div>
                <div className="d-flex flex-column align-items-start flex-grow-1">
                  <div className="placeholder-glow mb-1">
                    <div
                      className="placeholder rounded-5"
                      style={{
                        width: index === 3 ? "250px" : "150px",
                        height: "20px",
                      }}
                    ></div>
                  </div>
                  <div className="placeholder-glow">
                    <div
                      className="placeholder rounded-5"
                      style={{ width: "100px", height: "14px" }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  if (isLoading) {
    return <SkeletonLoader />;
  }

  const newsPaginationItems = generatePagination(
    currentNewsPage,
    totalNewsPages
  );
  const eventsPaginationItems = generatePagination(
    currentEventsPage,
    totalEventsPages
  );

  // Pagination component for reusability
  const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
    paginationItems,
  }) => {
    if (totalPages <= 1) return null;

    return (
      <div className="d-flex justify-content-center align-items-center mt-3 gap-1 flex-wrap">
        {/* Previous Button */}
        <button
          className="btn btn-light rounded-5 btn-sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          {translations[selectedLanguage.code]?.["PREVIOUS"] || "Previous"}
        </button>

        {/* Page Numbers */}
        <div className="d-flex gap-1 flex-wrap justify-content-center">
          {paginationItems.map((item, index) => (
            <React.Fragment key={index}>
              {item === "..." ? (
                <span className="btn btn-light rounded-5 btn-sm disabled">
                  ...
                </span>
              ) : (
                <button
                  className={`btn btn-sm ${
                    currentPage === item
                      ? "btn-dark text-light rounded-5 fw-bold"
                      : "btn-light rounded-5"
                  }`}
                  onClick={() => onPageChange(item)}
                  aria-label={`Page ${item}`}
                  aria-current={currentPage === item ? "page" : undefined}
                >
                  {item}
                </button>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Next Button */}
        <button
          className="btn btn-light rounded-5 btn-sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          {translations[selectedLanguage.code]?.["NEXT"] || "Next"}
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="homediv d-flex align-items-center justify-content-center gap-5">
        <div className="container my-1 d-flex flex-column justify-content-start">
          <div className="d-flex justify-content-start mb-4">
            <ScrollAnimation delay={0.1}>
              <div
                className="d-inline-flex gap-1 align-items-center px-2 py-1"
                style={{
                  border: "2px solid #2eb92eff",
                  borderRadius: "40px 40px 40px 0px",
                  backgroundColor: "#2eb92eff",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="bi bi-question-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                </svg>
                <h5 className="text-uppercase fw-bold fs-6  mb-0 text-white">
                  {translations[selectedLanguage.code]["how can we help?"]}
                </h5>
              </div>
            </ScrollAnimation>
          </div>
          <ScrollAnimation delay={0.2}>
            <div className="d-inline-flex gap-1 gap-lg-3 flex-wrap justify-content-center align-items-start">
              <Link
                id="link-how-to-help"
                className="d-flex flex-column align-items-center gap-2 p-3 rounded-5"
                style={{ textDecoration: "none", color: "#00b3e6" }}
                to="/meet-piraeus"
                onClick={() => window.scrollTo(0, 0)}
              >
                <img
                  width={"115px"}
                  className="rounded-3"
                  src={learnmore}
                  alt=""
                />
                <span>
                  {translations[selectedLanguage.code]["Learn About"]}
                  <br></br>
                  {translations[selectedLanguage.code]["Peiraeus"]}
                </span>
              </Link>
              <Link
                id="link-how-to-help"
                className="d-flex flex-column align-items-center gap-2 p-3 rounded-5"
                style={{ textDecoration: "none", color: "#e6007a" }}
                to="/accomondation-piraeus-athens-metropolitan-area"
                onClick={() => window.scrollTo(0, 0)}
              >
                <img
                  width={"115px"}
                  className="rounded-3"
                  src={findhouse}
                  alt=""
                />
                <span>
                  {translations[selectedLanguage.code]["Find a House"]}
                </span>
              </Link>
              <Link
                id="link-how-to-help"
                className="d-flex flex-column align-items-center gap-2 p-3 rounded-5"
                style={{ textDecoration: "none", color: "#7ac142" }}
                to="/esncard"
                onClick={() => window.scrollTo(0, 0)}
              >
                <img
                  width={"115px"}
                  className="rounded-3"
                  src={gettheesncard}
                  alt=""
                />
                <span>
                  {translations[selectedLanguage.code]["Get the"]}
                  <br></br>ESNcard
                </span>
              </Link>
              <Link
                id="link-how-to-help"
                className="d-flex flex-column align-items-center gap-2 p-3 rounded-5"
                style={{ textDecoration: "none", color: "#f28c28" }}
                to="/survival-guide"
                onClick={() => window.scrollTo(0, 0)}
              >
                <img
                  width={"115px"}
                  className="rounded-3"
                  src={survivalguide}
                  alt=""
                />
                <span>
                  {translations[selectedLanguage.code]["Survival Guide"]}
                </span>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <ScrollAnimation delay={0.3}>
        <div className="homediv flex-column flex-lg-row d-flex align-items-start justify-content-center gap-2 gap-lg-5">
          {/* News Section */}
          <div className="container my-5 mt-0 d-flex flex-column align-items-start">
            <div className="d-flex justify-content-center mb-4">
              <div
                className="d-inline-flex gap-1 align-items-center px-2 py-1"
                style={{
                  border: "2px solid #0063f8ff",
                  borderRadius: "40px 40px 40px 0px",
                  backgroundColor: "#0063f8ff",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="bi bi-info-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                </svg>
                <h5 className="text-uppercase fw-bold fs-6  mb-0 text-white">
                  {translations[selectedLanguage.code]["NEWS"]}
                </h5>
              </div>
            </div>

            {loading ? (
              // News Skeleton Loader
              <div className="w-100">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="placeholder-glow w-100 mb-3">
                    <div
                      className="placeholder rounded-5"
                      style={{ height: "100px", width: "100%" }}
                    ></div>
                  </div>
                ))}
              </div>
            ) : (
              // Actual News Content
              <div
                className="d-flex text-start flex-column gap-2 w-100"
                style={{ overflowWrap: "break-word" }}
              >
                {currentNewsItems.length > 0 ? (
                  currentNewsItems.map((item) => (
                    <Link
                      to={`/news/${createSlug(item.name)}`}
                      key={item.id}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <New
                        id={item.id}
                        date={formatDate(item.date)}
                        image={item.image}
                        name={item.name}
                        paragraph={
                          item.paragraph
                            ? item.paragraph.substring(0, 100) + "..."
                            : ""
                        }
                      />
                    </Link>
                  ))
                ) : (
                  <div className="text-center py-3">
                    <p>No news available</p>
                  </div>
                )}
              </div>
            )}

            {/* News Pagination */}
            {!loading && (
              <div className="mx-3">
                <Pagination
                  currentPage={currentNewsPage}
                  totalPages={totalNewsPages}
                  onPageChange={setCurrentNewsPage}
                  paginationItems={newsPaginationItems}
                />
              </div>
            )}
          </div>

          {/* Past Events Section */}
          <div className="container my-5 mt-0 d-flex flex-column align-items-start">
            <div className="d-flex justify-content-center mb-4">
              <div
                className="d-inline-flex gap-1 align-items-center px-2 py-1"
                style={{
                  border: "2px solid #f85b00ff",
                  borderRadius: "40px 40px 40px 0px",
                  backgroundColor: "#f85b00ff",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="bi bi-calendar-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5" />
                </svg>
                <h5 className="text-uppercase fw-bold fs-6  mb-0 text-white">
                  {translations[selectedLanguage.code]["PAST EVENTS"]}
                </h5>
              </div>
            </div>

            {loading ? (
              // Events Skeleton Loader
              <div className="w-100">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="placeholder-glow w-100 mb-3">
                    <div
                      className="placeholder rounded-5"
                      style={{ height: "100px", width: "100%" }}
                    ></div>
                  </div>
                ))}
              </div>
            ) : (
              // Actual Events Content
              <div
                className="d-flex text-start flex-column gap-2 w-100"
                style={{ overflowWrap: "break-word" }}
              >
                {currentEventsItems.length > 0 ? (
                  currentEventsItems.map((item) => (
                    <Link
                      to={`/events/${createSlug(item.name)}`}
                      key={item.id}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Event
                        id={item.id}
                        date={formatDate(item.date)}
                        image={item.image}
                        name={item.name}
                        paragraph={
                          item.paragraph
                            ? item.paragraph.substring(0, 100) + "..."
                            : ""
                        }
                      />
                    </Link>
                  ))
                ) : (
                  <div className="text-center py-3">
                    <p>No past events available</p>
                  </div>
                )}
              </div>
            )}

            {/* Events Pagination */}
            {!loading && (
              <div className="mx-3">
                <Pagination
                  currentPage={currentEventsPage}
                  totalPages={totalEventsPages}
                  onPageChange={setCurrentEventsPage}
                  paginationItems={eventsPaginationItems}
                />
              </div>
            )}
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation delay={0.4}>
        <div className="homediv flex-column flex-lg-row d-flex align-items-start justify-content-center gap-2 gap-lg-5">
          <div className="container my-5 mt-0 d-flex flex-column align-items-start">
            <div className="d-flex justify-content-center mb-4">
              <div
                className="d-inline-flex gap-2 align-items-center px-2 py-1"
                style={{
                  border: "2px solid #0063f8ff",
                  borderRadius: "40px 40px 40px 0px",
                  backgroundColor: "#0063f8ff",
                }}
              >
                <img
                  style={{ filter: "brightness(0) invert(1)" }}
                  src={logo}
                  width={"16px"}
                  height={"16px"}
                  alt=""
                />
                <h5 className="text-uppercase fw-bold fs-6  mb-0 text-white">
                  {
                    translations[selectedLanguage.code][
                      "The Crete Trip Aftermovie"
                    ]
                  }
                </h5>
              </div>
            </div>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/ujo3U0WgnQo?si=Jihv9IzX7tU3AqMC"
                title="YouTube video player"
                frameBorder="0"
                className="rounded-5"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="container my-5 mt-0 d-flex flex-column align-items-start">
            <div className="d-flex justify-content-center mb-4">
              <div
                className="d-inline-flex gap-1 align-items-center px-2 py-1"
                style={{
                  border: "2px solid #f85b00ff",
                  borderRadius: "40px 40px 40px 0px",
                  backgroundColor: "#f85b00ff",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="bi bi-file-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                  <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                <h5 className="text-uppercase fw-bold fs-6  mb-0 text-white">
                  {translations[selectedLanguage.code]["PARTNERS"]}
                </h5>
              </div>
            </div>
            <div className="partners-container d-flex flex-column gap-2 w-100">
              <div className="d-flex justify-content-start align-items-center mb-2 w-100">
                <img
                  className="rounded-5 me-3"
                  style={{
                    border: "2px solid rgb(230, 230, 230)",
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                  }}
                  src={eurosender}
                  alt="Eurosender"
                />
                <div className="d-flex flex-column align-items-start">
                  <p className="mb-1 fw-bold">Eurosender</p>
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
              <div className="d-flex justify-content-start align-items-center mb-2 w-100">
                <img
                  className="rounded-5 me-3"
                  style={{
                    border: "2px solid rgb(230, 230, 230)",
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                  }}
                  src={medusa}
                  alt="Medusa Barber Shop"
                />
                <div className="d-flex flex-column align-items-start">
                  <p className="mb-1 fw-bold">Medusa Barber Shop</p>
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
              <div className="d-flex justify-content-start align-items-center mb-2 w-100">
                <img
                  className="rounded-5 me-3"
                  style={{
                    border: "2px solid rgb(230, 230, 230)",
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                  }}
                  src={metropolis}
                  alt="Medusa Barber Shop"
                />
                <div className="d-flex flex-column align-items-start">
                  <p className="mb-1 fw-bold">Metropolis Cafe</p>
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
              <div className="d-flex justify-content-start align-items-center mb-2 w-100">
                <img
                  className="rounded-5 me-3"
                  style={{
                    border: "2px solid rgb(230, 230, 230)",
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                  }}
                  src={ryanair}
                  alt="Medusa Barber Shop"
                />
                <div className="d-flex flex-column text-start justify-content-start align-items-start">
                  <p className="mb-1 fw-bold">
                    Ryanair Discount for Erasmus Members
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-start align-items-center mb-2 w-100">
                <img
                  className="rounded-5 me-3"
                  style={{
                    border: "2px solid rgb(230, 230, 230)",
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                  }}
                  src={tedx}
                  alt="Medusa Barber Shop"
                />
                <div className="d-flex flex-column align-items-start">
                  <p className="mb-1 fw-bold">TEDxUniversityofPiraeus</p>
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
              <div className="d-flex justify-content-start align-items-center mb-2 w-100">
                <img
                  className="rounded-5 me-3"
                  style={{
                    border: "2px solid rgb(230, 230, 230)",
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                  }}
                  src={kaloypi}
                  alt="Medusa Barber Shop"
                />
                <div className="d-flex flex-column align-items-start">
                  <p className="mb-1 fw-bold">ΚαΛουΠι</p>
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
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
};

export default Home;
