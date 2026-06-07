import React from "react";
import logo from "../../assets/favicon.ico";
import { Link, useParams } from "react-router-dom";
import "./NewPage.css";
import banner1 from "../../assets/meet-peiraius/1.jpg";
import banner2 from "../../assets/meet-peiraius/images.jpg";
import banner3 from "../../assets/meet-peiraius/arheio_lipsis_1.jpg";
import banner4 from "../../assets/meet-peiraius/PIREAS.jpg";
import Breadcrum from "../Breadcrum/Breadcrum";
import { useState, useContext, useMemo, useEffect } from "react";
import { ShopContext } from "../../context/ShopContext";
import { translations } from "../../translations/translations";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import data from "../../data_news";

const NewPage = (props) => {
  const { selectedLanguage } = useContext(ShopContext);
  const { newsSlug } = useParams();
  const [newThing, setNewThing] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [loading, setLoading] = useState(true);
  const API_URL = "https://esn-unipi-backend.onrender.com";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${API_URL}/allnews`);
        const data = await response.json();

        // Find by slug (generate from name)
        const foundNews = data.find(
          (item) => createSlug(item.name) === newsSlug
        );

        setNewThing(foundNews);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [newsSlug]);

  const createSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  };

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
  // Function to convert markdown to HTML
  const renderMarkdown = (text) => {
    if (!text) return "";

    return (
      text
        // Convert line breaks to <br>
        .replace(/\n/g, "<br>")
        // Convert **bold** to <strong>
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        // Convert *italic* to <em>
        .replace(/\*(.*?)\*/g, "<em>$1</em>")
        // Convert [links](url) to <a> tags
        .replace(
          /\[([^\]]+)\]\(([^)]+)\)/g,
          '<a href="$2" style="text-decoration:none" target="_blank" rel="noopener noreferrer">$1</a>'
        )
        // Convert • bullet points to list items
        .replace(/•\s*(.*?)(?=<br>|$)/g, "<li>$1</li>")
        // Wrap consecutive list items in <ul>
        .replace(/(<li>.*?<\/li>)+/g, "<ul>$&</ul>")
    );
  };
  // Simulate loading completion (replace this with your actual data fetching logic)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300); // Simulate 2 second loading

    return () => clearTimeout(timer);
  }, []);

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

        {/* Content Skeleton */}
        <div className="d-flex text-start flex-column gap-4">
          {/* Main Image Skeleton */}
          <div className="placeholder-glow">
            <div
              className="placeholder rounded-5"
              style={{
                width: "100%",
                height: "400px",
                maxHeight: "400px",
              }}
            ></div>
          </div>

          {/* Paragraph Skeletons */}
          <div className="d-flex flex-column text-start gap-3 align-items-start mt-1">
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
                className="placeholder rounded-5"
                style={{ height: "16px", width: "80%" }}
              ></div>
            </div>
          </div>

          {/* Additional Images Skeleton */}
          <div className="d-flex gap-3">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="placeholder-glow">
                <div
                  className="placeholder rounded-5"
                  style={{
                    width: "200px",
                    height: "150px",
                  }}
                ></div>
              </div>
            ))}
          </div>

          {/* Date Skeleton */}
          <div className="d-flex flex-column text-start gap-1 align-items-start mt-1">
            <div className="placeholder-glow">
              <div
                className="placeholder rounded-5"
                style={{ width: "150px", height: "14px" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return <SkeletonLoader />;
  }

  if (!newThing) {
    return (
      <div className="container my-5 text-center">
        <h2>News not found</h2>
        <Link to="/news" className="btn btn-primary">
          Back to News
        </Link>
      </div>
    );
  }
  return (
    <>
      <div className="news d-flex align-items-center justify-content-center gap-5">
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
                <h5 className="text-uppercase fw-bold fs-3 mb-0 text-black">
                  {newThing.name}
                </h5>
              </div>
            </div>
          </ScrollAnimation>

          {/* News Items */}
          <div
            className="d-flex text-start flex-column gap-4"
            style={{ overflowWrap: "break-word" }}
          >
            <ScrollAnimation delay={0.2}>
              <img
                style={{
                  objectFit: "cover",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
                className="rounded-5"
                src={newThing.image}
                width={"100%"}
                alt=""
              />
            </ScrollAnimation>
            <ScrollAnimation delay={0.3}>
              <div className="d-flex flex-column text-start gap-1 align-items-start mt-1">
                <p
                  className="fs-6"
                  dangerouslySetInnerHTML={{
                    __html: renderMarkdown(newThing.paragraph),
                  }}
                ></p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              {/* Additional Images Section */}
              {newThing.additionalImages &&
                newThing.additionalImages.length > 0 && (
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    {newThing.additionalImages.map((imageUrl, index) => (
                      <div key={index}>
                        <img
                          src={imageUrl}
                          alt={`${newThing.name} - Image ${index + 1}`}
                          className="img-fluid rounded-4 shadow-sm"
                          style={{
                            width: "100%",
                            height: "100%",
                            maxWidth: "200px",
                            objectFit: "cover",
                            cursor: "pointer",
                            transition: "transform 0.3s ease",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
            </ScrollAnimation>
            <ScrollAnimation delay={0.5}>
              <div className="d-flex flex-column text-start gap-1 align-items-start mt-1">
                <small className="fw-bold">{formatDate(newThing.date)}</small>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPage;
