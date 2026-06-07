import React from "react";
import { Link } from "react-router-dom";
import "./News.css";
import Breadcrum from "../Breadcrum/Breadcrum";
import { useState, useContext, useEffect } from "react";
import { ShopContext } from "../../context/ShopContext";
import { translations } from "../../translations/translations";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import New from "../New/New";

const News = () => {
  const { selectedLanguage } = useContext(ShopContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = "https://esn-unipi-backend.onrender.com";

  const itemsPerPage = 5;

  // Fetch news from database
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/allnews`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched news:", data);
        setNewsData(data);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Failed to load news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Calculate total pages based on fetched data
  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newsData.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Optional: Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Smart pagination generation
  const generatePagination = () => {
    const delta = 2; // Number of pages to show on each side of current page
    const range = [];
    const rangeWithDots = [];

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

    // Always show last page if there's more than 1 page
    if (totalPages > 1) {
      range.push(totalPages);
    }

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

  // Skeleton Loading Component
  const SkeletonLoader = () => (
    <div className="news d-flex align-items-center justify-content-center gap-5">
      <div className="container my-1 d-flex flex-column justify-content-start">
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

        {/* News Items Skeleton */}
        <div className="d-flex text-start flex-column gap-1">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="d-flex  gap-3 align-items-start p-3 rounded-5"
            >
              {/* Image Skeleton */}
              <div className="placeholder-glow">
                <div
                  className="placeholder rounded-5"
                  style={{
                    width: "150px",
                    height: "100px",
                    minWidth: "150px",
                  }}
                ></div>
              </div>

              {/* Content Skeleton */}
              <div className="d-flex flex-column flex-grow-1 w-100">
                {/* Title Skeleton */}
                <div className="placeholder-glow mb-2">
                  <div
                    className="placeholder rounded-5"
                    style={{ height: "16px", width: "130px" }}
                  ></div>
                </div>

                {/* Date Skeleton */}
                <div className="placeholder-glow mb-3">
                  <div
                    className="placeholder rounded-5"
                    style={{ height: "20px", width: "40%" }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Skeleton */}
        <div className="d-flex justify-content-center align-items-center mt-5 gap-2 flex-wrap">
          <div className="placeholder-glow">
            <div
              className="placeholder rounded-5"
              style={{ width: "80px", height: "38px" }}
            ></div>
          </div>
          {[...Array(5)].map((_, index) => (
            <div key={index} className="placeholder-glow">
              <div
                className="placeholder rounded-5"
                style={{ width: "40px", height: "38px" }}
              ></div>
            </div>
          ))}
          <div className="placeholder-glow">
            <div
              className="placeholder rounded-5"
              style={{ width: "80px", height: "38px" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return <SkeletonLoader />;
  }
  if (error) {
    return (
      <div className="news d-flex align-items-center justify-content-center">
        <div className="container my-5 text-center">
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
          <button
            className="btn btn-primary"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const paginationItems = generatePagination();

  return (
    <>
      <div
        className="news d-flex align-items-start justify-content-center gap-5"
        style={{ minHeight: "75vh" }}
      >
        <div className="container my-1 d-flex flex-column justify-content-start">
          <ScrollAnimation>
            <div className="d-flex justify-content-start">
              <Breadcrum name="NEWS" link="/news" />
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
                  className="bi bi-newspaper"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                  <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z" />
                </svg>
                <h5 className="text-uppercase fw-bold fs-3 mb-0 text-black">
                  {translations[selectedLanguage.code]?.["NEWS"] || "NEWS"}
                </h5>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            {/* News Items */}
            <div
              className="d-flex text-start flex-column gap-1"
              style={{ overflowWrap: "break-word" }}
            >
              {currentItems.length > 0 ? (
                currentItems.map((item) => (
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
                          ? item.paragraph.substring(0, 150) + "..."
                          : ""
                      }
                    />
                  </Link>
                ))
              ) : (
                <div className="text-center fw-bold py-5">
                  <p>
                    {
                      translations[selectedLanguage.code]?.[
                        "No news available."
                      ]
                    }
                  </p>
                </div>
              )}
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={0.3}>
            {/* Enhanced Pagination Controls */}
            {totalPages > 1 && (
              <div className="d-flex justify-content-center align-items-center mt-5 gap-1 flex-wrap">
                {/* First Page Button - Show on mobile */}
                <button
                  className="btn btn-light rounded-5 d-md-none"
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage === 1}
                  aria-label="First page"
                >
                  «
                </button>

                {/* Previous Button */}
                <button
                  className="btn btn-light rounded-5"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                >
                  {translations[selectedLanguage.code]?.["PREVIOUS"] ||
                    "Previous"}
                </button>

                {/* Page Numbers with Smart Dots */}
                <div className="d-flex gap-1 flex-wrap justify-content-center">
                  {paginationItems.map((item, index) => (
                    <React.Fragment key={index}>
                      {item === "..." ? (
                        <span className="btn btn-light rounded-5 disabled">
                          ...
                        </span>
                      ) : (
                        <button
                          className={`btn ${
                            currentPage === item
                              ? "btn-dark text-light rounded-5 fw-bold"
                              : "btn-light rounded-5"
                          }`}
                          onClick={() => handlePageChange(item)}
                          aria-label={`Page ${item}`}
                          aria-current={
                            currentPage === item ? "page" : undefined
                          }
                        >
                          {item}
                        </button>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Next Button */}
                <button
                  className="btn btn-light rounded-5"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  aria-label="Next page"
                >
                  {translations[selectedLanguage.code]?.["NEXT"] || "Next"}
                </button>

                {/* Last Page Button - Show on mobile */}
                <button
                  className="btn btn-light rounded-5 d-md-none"
                  onClick={() => handlePageChange(totalPages)}
                  disabled={currentPage === totalPages}
                  aria-label="Last page"
                >
                  »
                </button>

                {/* Page Info for Mobile */}
                <div className="d-md-none text-center w-100 mt-2 small text-muted">
                  {translations[selectedLanguage.code]?.["Page"]} {currentPage}{" "}
                  {translations[selectedLanguage.code]?.["of"]} {totalPages}
                </div>
              </div>
            )}
          </ScrollAnimation>
        </div>
      </div>
    </>
  );
};

export default News;
