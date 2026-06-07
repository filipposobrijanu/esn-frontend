import React from "react";
import logo from "../../assets/favicon.ico";
import { Link } from "react-router-dom";
import "./JoinUs.css";
import banner1 from "../../assets/meet-peiraius/1.jpg";
import banner2 from "../../assets/meet-peiraius/images.jpg";
import banner3 from "../../assets/meet-peiraius/arheio_lipsis_1.jpg";
import banner4 from "../../assets/meet-peiraius/PIREAS.jpg";
import esnimg from "../../assets/meet-peiraius/dsc_0070_2.jpg";
import Breadcrum from "../Breadcrum/Breadcrum";
import { useState, useContext, useMemo } from "react";
import { ShopContext } from "../../context/ShopContext";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import { translations } from "../../translations/translations";

const JoinUs = () => {
  const { selectedLanguage } = useContext(ShopContext);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = "https://esn-unipi-backend.onrender.com";
  const [successdiv, setSuccessdiv] = useState("d-none");
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    phone: "",
    uni: "",
    howFound: "",
    whyWantJoin: "",
  });

  const languages = useMemo(
    () => [
      { code: "us", name: "English" },
      { code: "gr", name: "Greek" },
      { code: "fr", name: "French" },
      { code: "es", name: "Spanish" },
    ],
    []
  );

  const [focusedFields, setFocusedFields] = useState({
    name: false,
    email: false,
    phone: false,
    uni: false,
    howFound: false,
    whyWantJoin: false,
  });

  const handleFocus = (fieldName) => {
    setFocusedFields((prev) => ({ ...prev, [fieldName]: true }));
  };

  const handleBlur = (fieldName) => {
    setFocusedFields((prev) => ({ ...prev, [fieldName]: false }));
  };

  // Join Us state - updated to match backend schema
  const [joinUsDetails, setJoinUsDetails] = useState({
    name: "",
    email: "",
    phone: "",
    uni: "",
    howFound: "",
    whyWantJoin: "",
  });
  const [loading, setLoading] = useState(false);

  // Validation functions - updated for new fields
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name is required";
        } else if (value.trim().length < 2) {
          error = "Name must be at least 2 characters";
        } else if (value.trim().length > 50) {
          error = "Name must be less than 50 characters";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address";
        }
        break;

      case "phone":
        if (!value.trim()) {
          error = "Phone number is required";
        } else if (!/^[0-9+\-\s()]+$/.test(value)) {
          error = "Please enter a valid phone number";
        } else if (value.replace(/[^0-9]/g, "").length < 8) {
          error = "Phone number must be at least 8 digits";
        }
        break;

      case "uni":
        if (!value.trim()) {
          error = "University is required";
        } else if (value.trim().length < 2) {
          error = "University name must be at least 2 characters";
        }
        break;

      case "howFound":
        if (!value.trim()) {
          error = "This field is required";
        } else if (value.trim().length < 5) {
          error = "Please provide more details";
        }
        break;

      case "whyWantJoin":
        if (!value.trim()) {
          error = "This field is required";
        } else if (value.trim().length < 10) {
          error = "Please provide more details";
        } else if (value.trim().length > 500) {
          error = "Please keep your response under 500 characters";
        }
        break;

      default:
        break;
    }

    return error;
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setJoinUsDetails({ ...joinUsDetails, [name]: value });
    setSuccessdiv("d-none");

    const error = validateField(name, value);
    setValidationErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleBlurWithValidation = (fieldName) => {
    handleBlur(fieldName);
    const value = joinUsDetails[fieldName];
    const error = validateField(fieldName, value);
    setValidationErrors((prev) => ({
      ...prev,
      [fieldName]: error,
    }));
  };

  const Submit_JoinUs = async (e) => {
    if (e) {
      e.preventDefault();
    }

    // Validate all fields before submission
    const errors = {
      name: validateField("name", joinUsDetails.name),
      email: validateField("email", joinUsDetails.email),
      phone: validateField("phone", joinUsDetails.phone),
      uni: validateField("uni", joinUsDetails.uni),
      howFound: validateField("howFound", joinUsDetails.howFound),
      whyWantJoin: validateField("whyWantJoin", joinUsDetails.whyWantJoin),
    };

    setValidationErrors(errors);

    // Check if there are any errors
    const hasErrors = Object.values(errors).some((error) => error !== "");

    if (
      !joinUsDetails.name ||
      !joinUsDetails.email ||
      !joinUsDetails.phone ||
      !joinUsDetails.uni ||
      !joinUsDetails.howFound ||
      !joinUsDetails.whyWantJoin
    ) {
      alert("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      // Prepare data for backend - convert phone to number
      const joinUsData = {
        name: joinUsDetails.name,
        email: joinUsDetails.email,
        phone: parseInt(joinUsDetails.phone.replace(/[^0-9]/g, ""), 10),
        uni: joinUsDetails.uni,
        howFound: joinUsDetails.howFound,
        whyWantJoin: joinUsDetails.whyWantJoin,
      };

      console.log("Sending join us data:", joinUsData);

      const addResponse = await fetch(`${API_URL}/addjoinus`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(joinUsData),
      });

      const result = await addResponse.json();

      if (result.success) {
        setSuccessdiv("d-flex");
        // Reset form and validation errors
        setJoinUsDetails({
          name: "",
          email: "",
          phone: "",
          uni: "",
          howFound: "",
          whyWantJoin: "",
        });
        setValidationErrors({
          name: "",
          email: "",
          phone: "",
          uni: "",
          howFound: "",
          whyWantJoin: "",
        });
      } else {
        throw new Error("Failed to submit application");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Simulate loading completion
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Skeleton Loading Component
  // Skeleton Loading Component
  const SkeletonLoader = () => (
    <>
      <div className="joinus d-flex align-items-center justify-content-center gap-5">
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
                  style={{ width: "120px", height: "24px" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Content Skeleton */}
          <div className="d-flex text-start flex-column gap-4">
            {/* First paragraph skeletons */}
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
                  className="placeholder rounded-5"
                  style={{ height: "16px", width: "80%" }}
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

            {/* Second paragraph skeletons */}
            <div className="d-flex flex-column text-start gap-3 align-items-start">
              <div className="placeholder-glow w-100">
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
                  style={{ height: "16px", width: "75%" }}
                ></div>
              </div>
            </div>

            {/* Form Skeleton */}
            <div className="d-flex flex-column gap-4 mt-3">
              {/* Name & Email Row */}
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="placeholder-glow">
                    <div
                      className="placeholder rounded-5 mb-2"
                      style={{ height: "20px", width: "100px" }}
                    ></div>
                    <div
                      className="placeholder rounded-5"
                      style={{ height: "48px", width: "100%" }}
                    ></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="placeholder-glow">
                    <div
                      className="placeholder rounded-5 mb-2"
                      style={{ height: "20px", width: "80px" }}
                    ></div>
                    <div
                      className="placeholder rounded-5"
                      style={{ height: "48px", width: "100%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Phone & University Row */}
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="placeholder-glow">
                    <div
                      className="placeholder rounded-5 mb-2"
                      style={{ height: "20px", width: "120px" }}
                    ></div>
                    <div
                      className="placeholder rounded-5"
                      style={{ height: "48px", width: "100%" }}
                    ></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="placeholder-glow">
                    <div
                      className="placeholder rounded-5 mb-2"
                      style={{ height: "20px", width: "100px" }}
                    ></div>
                    <div
                      className="placeholder rounded-5"
                      style={{ height: "48px", width: "100%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* How Found Field */}
              <div className="placeholder-glow">
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "20px", width: "250px" }}
                ></div>
                <div
                  className="placeholder rounded-5"
                  style={{ height: "80px", width: "100%" }}
                ></div>
              </div>

              {/* Why Join Field */}
              <div className="placeholder-glow">
                <div
                  className="placeholder rounded-5 mb-2"
                  style={{ height: "20px", width: "220px" }}
                ></div>
                <div
                  className="placeholder rounded-5"
                  style={{ height: "120px", width: "100%" }}
                ></div>
              </div>

              {/* Submit Button Skeleton */}
              <div className="placeholder-glow">
                <div
                  className="placeholder rounded-5"
                  style={{ height: "48px", width: "180px" }}
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
      <div className="joinus d-flex align-items-center justify-content-center gap-5">
        <div className="container my-1 d-flex flex-column justify-content-start">
          <ScrollAnimation>
            <div className="d-flex justify-content-start">
              <Breadcrum name="JOIN US!" link="/become-one-us" />
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
                  className="bi bi-people-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                </svg>
                <h5 className="text-uppercase fw-bold fs-3 mb-0 text-BLACK">
                  {translations[selectedLanguage.code]["JOIN US!"]}
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
                    "Post-Erasmus depression; We feel you!"
                  ]
                }{" "}
                🤒<br></br>
                <br></br>
                {
                  translations[selectedLanguage.code][
                    "Don't worry, ESN has the solution for you: live the Erasmus experience in your city!"
                  ]
                }{" "}
                ✨<br></br>
                <br></br>
                {
                  translations[selectedLanguage.code][
                    "Meet students from all over the world, live unique experiences, learn to organize events from scratch, take part in events and conferences, acquire new skills and make friendships that last, while practicing that dusty Proficiency!"
                  ]
                }{" "}
                🤗
                <br></br>
                <br></br>
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.3}>
              <img
                className="rounded-5 img-fluid"
                src={esnimg}
                alt="ESN Survival Guide"
                style={{ maxWidth: "500px", width: "100%" }}
              />
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <p className="mt-4 mb-5">
                {
                  translations[selectedLanguage.code][
                    "Interested in learning more before joining the coolest team?"
                  ]
                }{" "}
                😎<br></br>
                <br></br>
                {
                  translations[selectedLanguage.code][
                    "Fill out the form below and you will soon receive all the necessary information for our next meeting."
                  ]
                }{" "}
                👀
                <br></br>
                <br></br>
                <span className="fw-bold">
                  {
                    translations[selectedLanguage.code][
                      "For any questions, do not hesitate to send a message to our social media or to"
                    ]
                  }
                  &nbsp;
                  <Link
                    style={{ textDecoration: "none" }}
                    to="mailto:info@esnunipi.gr"
                  >
                    info@esnunipi.gr
                  </Link>
                  <br></br>
                  {
                    translations[selectedLanguage.code][
                      "Until then, follow us on"
                    ]
                  }
                  &nbsp;
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                    to="https://www.instagram.com/esnunipi/"
                  >
                    Instagram
                  </Link>{" "}
                  {
                    translations[selectedLanguage.code][
                      "so you don't miss any events!"
                    ]
                  }
                </span>
              </p>
            </ScrollAnimation>
            <div
              id="success-div"
              className={`${successdiv} gap-2 align-items-center justify-content-center fw-bold rounded-5 p-2 mb-3`}
              style={{
                backgroundColor: "#5fad24ff",
                border: "1px solid #5fad24ff",
                color: "white",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="white"
                className="bi bi-check-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              {
                translations[selectedLanguage.code][
                  "Application Submitted Successfully!"
                ]
              }
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="white"
                className="bi bi-check-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
            </div>
            <div className="d-flex text-start flex-column">
              <ScrollAnimation delay={0.5}>
                <form
                  id="joinus-form"
                  method="POST"
                  onSubmit={Submit_JoinUs}
                  className="rounded-5"
                >
                  {/* Name & Email Row */}
                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <div className="form">
                        <label
                          htmlFor="name"
                          className="fw-semibold text-black mb-1"
                        >
                          &nbsp;&nbsp;{" "}
                          {translations[selectedLanguage.code]["Full Name"]}{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <div
                          className={`d-flex bg-white rounded-3 align-items-center px-3 gap-0 shadow-sm rounded-5 p-1 ${
                            focusedFields.name ? "input_contact" : ""
                          }`}
                          style={{ boxShadow: "0 0 5px rgb(255, 255, 255)" }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="black"
                            className="bi bi-person-circle"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path
                              fillRule="evenodd"
                              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                            />
                          </svg>
                          <input
                            type="text"
                            id="name"
                            onChange={changeHandler}
                            name="name"
                            value={joinUsDetails.name}
                            className="form-control bg-white border-0 rounded-5"
                            placeholder={
                              translations[selectedLanguage.code]["Full Name"]
                            }
                            required
                            onFocus={() => handleFocus("name")}
                            onBlur={() => handleBlurWithValidation("name")}
                            style={{ boxShadow: "none" }}
                          />
                        </div>
                        {validationErrors.name && (
                          <div className="text-danger small mt-1 ms-2">
                            {
                              translations[selectedLanguage.code][
                                validationErrors.name
                              ]
                            }
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form">
                        <label
                          htmlFor="email"
                          className="fw-semibold text-black mb-1"
                        >
                          &nbsp;&nbsp; Email{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <div
                          className={`d-flex bg-white rounded-3 align-items-center px-3 gap-0 shadow-sm rounded-5 p-1 ${
                            focusedFields.email ? "input_contact" : ""
                          }`}
                          style={{ boxShadow: "0 0 5px rgb(255, 255, 255)" }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="black"
                            className="bi bi-envelope-at-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                            <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                          </svg>
                          <input
                            onChange={changeHandler}
                            type="email"
                            id="email"
                            name="email"
                            value={joinUsDetails.email}
                            onFocus={() => handleFocus("email")}
                            onBlur={() => handleBlurWithValidation("email")}
                            className="form-control bg-white border-0 rounded-5"
                            placeholder="Email"
                            required
                            style={{ boxShadow: "none" }}
                          />
                        </div>
                        {validationErrors.email && (
                          <div className="text-danger small mt-1 ms-2">
                            {
                              translations[selectedLanguage.code][
                                validationErrors.email
                              ]
                            }
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Phone & University Row */}
                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <div className="form">
                        <label
                          htmlFor="phone"
                          className="fw-semibold text-black mb-1"
                        >
                          &nbsp;&nbsp;{" "}
                          {translations[selectedLanguage.code]["Phone Number"]}{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <div
                          className={`d-flex bg-white rounded-3 align-items-center px-3 gap-0 shadow-sm rounded-5 p-1 ${
                            focusedFields.phone ? "input_contact" : ""
                          }`}
                          style={{ boxShadow: "0 0 5px rgb(255, 255, 255)" }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="black"
                            className="bi bi-phone"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                          </svg>
                          <input
                            onChange={changeHandler}
                            type="tel"
                            id="phone"
                            name="phone"
                            value={joinUsDetails.phone}
                            onFocus={() => handleFocus("phone")}
                            onBlur={() => handleBlurWithValidation("phone")}
                            className="form-control bg-white border-0 rounded-5"
                            placeholder={
                              translations[selectedLanguage.code][
                                "Phone Number"
                              ]
                            }
                            required
                            style={{ boxShadow: "none" }}
                          />
                        </div>
                        {validationErrors.phone && (
                          <div className="text-danger small mt-1 ms-2">
                            {
                              translations[selectedLanguage.code][
                                validationErrors.phone
                              ]
                            }
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form">
                        <label
                          htmlFor="uni"
                          className="fw-semibold text-black mb-1"
                        >
                          &nbsp;&nbsp;{" "}
                          {translations[selectedLanguage.code]["University"]}{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <div
                          className={`d-flex bg-white rounded-3 align-items-center px-3 gap-0 shadow-sm rounded-5 p-1 ${
                            focusedFields.uni ? "input_contact" : ""
                          }`}
                          style={{ boxShadow: "0 0 5px rgb(255, 255, 255)" }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="black"
                            className="bi bi-building"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                            <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z" />
                          </svg>
                          <input
                            onChange={changeHandler}
                            type="text"
                            id="uni"
                            name="uni"
                            value={joinUsDetails.uni}
                            onFocus={() => handleFocus("uni")}
                            onBlur={() => handleBlurWithValidation("uni")}
                            className="form-control bg-white border-0 rounded-5"
                            placeholder={
                              translations[selectedLanguage.code]["University"]
                            }
                            required
                            style={{ boxShadow: "none" }}
                          />
                        </div>
                        {validationErrors.uni && (
                          <div className="text-danger small mt-1 ms-2">
                            {
                              translations[selectedLanguage.code][
                                validationErrors.uni
                              ]
                            }
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* How did you find out about us? */}
                  <div className="form mb-4">
                    <label
                      htmlFor="howFound"
                      className="fw-semibold text-black mb-1"
                    >
                      &nbsp;&nbsp;{" "}
                      {
                        translations[selectedLanguage.code][
                          "How did you find out about ESN UniPi?"
                        ]
                      }{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className={`form-control form-control border-0 shadow-sm rounded-5 p-3 ${
                        focusedFields.howFound ? "input_contact" : ""
                      }`}
                      onChange={changeHandler}
                      value={joinUsDetails.howFound}
                      id="howFound"
                      name="howFound"
                      onFocus={() => handleFocus("howFound")}
                      onBlur={() => handleBlurWithValidation("howFound")}
                      placeholder={
                        translations[selectedLanguage.code][
                          "e.g., Social media, friends, university event, etc."
                        ]
                      }
                      style={{ height: "80px" }}
                      required
                    ></textarea>
                    {validationErrors.howFound && (
                      <div className="text-danger small mt-1 ms-2">
                        {
                          translations[selectedLanguage.code][
                            validationErrors.howFound
                          ]
                        }
                      </div>
                    )}
                  </div>

                  {/* Why do you want to join? */}
                  <div className="form mb-4">
                    <label
                      htmlFor="whyWantJoin"
                      className="fw-semibold text-black mb-1"
                    >
                      &nbsp;&nbsp;{" "}
                      {
                        translations[selectedLanguage.code][
                          "Why do you want to join ESN UniPi?"
                        ]
                      }{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className={`form-control form-control border-0 shadow-sm rounded-5 p-3 ${
                        focusedFields.whyWantJoin ? "input_contact" : ""
                      }`}
                      onChange={changeHandler}
                      value={joinUsDetails.whyWantJoin}
                      id="whyWantJoin"
                      name="whyWantJoin"
                      onFocus={() => handleFocus("whyWantJoin")}
                      onBlur={() => handleBlurWithValidation("whyWantJoin")}
                      placeholder={
                        translations[selectedLanguage.code][
                          "Tell us about your motivation and what you hope to contribute..."
                        ]
                      }
                      style={{ height: "120px" }}
                      required
                    ></textarea>
                    {validationErrors.whyWantJoin && (
                      <div className="text-danger small mt-1 ms-2">
                        {
                          translations[selectedLanguage.code][
                            validationErrors.whyWantJoin
                          ]
                        }
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="text-start">
                    <button
                      type="submit"
                      className="btn but_cont btn-dark border-0 btn-lg px-5 py-1 rounded-5 fw-bold text-uppercase shadow hover-scale"
                    >
                      {translations[selectedLanguage.code]["Send"]}
                    </button>
                  </div>
                </form>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
