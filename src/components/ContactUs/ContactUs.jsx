import React from "react";
import logo from "../../assets/favicon.ico";
import { Link } from "react-router-dom";
import "./ContactUs.css";
import banner1 from "../../assets/meet-peiraius/1.jpg";
import banner2 from "../../assets/meet-peiraius/images.jpg";
import banner3 from "../../assets/meet-peiraius/arheio_lipsis_1.jpg";
import banner4 from "../../assets/meet-peiraius/PIREAS.jpg";
import Breadcrum from "../Breadcrum/Breadcrum";
import { useState, useContext, useMemo } from "react";
import { ShopContext } from "../../context/ShopContext";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import { translations } from "../../translations/translations";

const ContactUs = () => {
  const { selectedLanguage } = useContext(ShopContext);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const API_URL = "https://esn-unipi-backend.onrender.com";
  const [successdiv, setSuccessdiv] = useState("d-none");
  // Add validation state
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const [focusedFields, setFocusedFields] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleFocus = (fieldName) => {
    setFocusedFields((prev) => ({ ...prev, [fieldName]: true }));
  };

  const handleBlur = (fieldName) => {
    setFocusedFields((prev) => ({ ...prev, [fieldName]: false }));
  };
  // Email state
  const [emailDetails, setEmailDetails] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Validation functions
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

      case "subject":
        if (!value.trim()) {
          error = "Subject is required";
        } else if (value.trim().length < 5) {
          error = "Subject must be at least 5 characters";
        } else if (value.trim().length > 100) {
          error = "Subject must be less than 100 characters";
        }
        break;

      case "message":
        if (!value.trim()) {
          error = "Message is required";
        } else if (value.trim().length < 10) {
          error = "Message must be at least 10 characters";
        } else if (value.trim().length > 1000) {
          error = "Message must be less than 1000 characters";
        }
        break;

      default:
        break;
    }

    return error;
  };

  // Update changeHandler to include validation
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setEmailDetails({ ...emailDetails, [name]: value });
    setSuccessdiv("d-none");

    // Validate field on change
    const error = validateField(name, value);
    setValidationErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  // Add onBlur validation
  const handleBlurWithValidation = (fieldName) => {
    handleBlur(fieldName);
    const value = emailDetails[fieldName];
    const error = validateField(fieldName, value);
    setValidationErrors((prev) => ({
      ...prev,
      [fieldName]: error,
    }));
  };

  const Add_Email = async (e) => {
    if (e) {
      e.preventDefault();
    }

    // Validate all fields before submission
    const errors = {
      name: validateField("name", emailDetails.name),
      email: validateField("email", emailDetails.email),
      subject: validateField("subject", emailDetails.subject),
      message: validateField("message", emailDetails.message),
    };

    setValidationErrors(errors);

    // Check if there are any errors
    const hasErrors = Object.values(errors).some((error) => error !== "");

    if (
      !emailDetails.name ||
      !emailDetails.email ||
      !emailDetails.subject ||
      !emailDetails.message
    ) {
      alert("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      // Add email to database
      const emailThing = {
        name: emailDetails.name,
        email: emailDetails.email,
        subject: emailDetails.subject,
        message: emailDetails.message,
      };

      console.log("Sending email data:", emailThing);

      const addResponse = await fetch(`${API_URL}/addemail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailThing),
      });

      const result = await addResponse.json();

      if (result.success) {
        setSuccessdiv("d-flex");
        // Reset form and validation errors
        setEmailDetails({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setValidationErrors({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message: " + error.message);
    } finally {
      setLoading(false);
    }
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
    <>
      <div className="contactus d-flex align-items-center justify-content-center gap-5">
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
                  className="placeholder  rounded-5"
                  style={{ width: "24px", height: "24px" }}
                ></div>
              </div>
              <div className="placeholder-glow">
                <div
                  className="placeholder  rounded-5"
                  style={{ width: "200px", height: "24px" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Form Skeleton */}
          <div className="d-flex text-start flex-column">
            <div className="rounded-5">
              {/* Name & Email Row Skeleton */}
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <div className="mb-2">
                    <div className="placeholder-glow">
                      <div
                        className="placeholder  rounded-5"
                        style={{ width: "100px", height: "16px" }}
                      ></div>
                    </div>
                  </div>
                  <div className="d-flex bg-white rounded-3 align-items-center px-3 gap-0 shadow-sm rounded-5 p-1">
                    <div className="placeholder-glow">
                      <div
                        className="placeholder  rounded-5"
                        style={{ width: "20px", height: "20px" }}
                      ></div>
                    </div>
                    <div className="placeholder-glow w-100">
                      <div
                        className="placeholder rounded-5"
                        style={{ height: "38px" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-2">
                    <div className="placeholder-glow">
                      <div
                        className="placeholder  rounded-5"
                        style={{ width: "80px", height: "16px" }}
                      ></div>
                    </div>
                  </div>
                  <div className="d-flex bg-white rounded-3 align-items-center px-3 gap-0 shadow-sm rounded-5 p-1">
                    <div className="placeholder-glow">
                      <div
                        className="placeholder  rounded-5"
                        style={{ width: "20px", height: "20px" }}
                      ></div>
                    </div>
                    <div className="placeholder-glow w-100">
                      <div
                        className="placeholder rounded-5"
                        style={{ height: "38px" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subject Field Skeleton */}
              <div className="mb-4">
                <div className="mb-2">
                  <div className="placeholder-glow">
                    <div
                      className="placeholder  rounded-5"
                      style={{ width: "70px", height: "16px" }}
                    ></div>
                  </div>
                </div>
                <div className="d-flex bg-white rounded-3 align-items-center px-3 gap-0 shadow-sm rounded-5 p-1">
                  <div className="placeholder-glow">
                    <div
                      className="placeholder  rounded-5"
                      style={{ width: "20px", height: "20px" }}
                    ></div>
                  </div>
                  <div className="placeholder-glow w-100">
                    <div
                      className="placeholder rounded-5"
                      style={{ height: "38px" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Message Field Skeleton */}
              <div className="mb-4">
                <div className="mb-2">
                  <div className="placeholder-glow">
                    <div
                      className="placeholder  rounded-5"
                      style={{ width: "120px", height: "16px" }}
                    ></div>
                  </div>
                </div>
                <div className="d-flex bg-white rounded-3 align-items-center px-3 gap-0 shadow-sm rounded-5 p-1">
                  <div className="placeholder-glow">
                    <div
                      className="placeholder rounded-5"
                      style={{ width: "100%", height: "150px" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Submit Button Skeleton */}
              <div className="text-start">
                <div className="placeholder-glow">
                  <div
                    className="placeholder rounded-5"
                    style={{ width: "150px", height: "45px" }}
                  ></div>
                </div>
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
      <div className="contactus d-flex align-items-center justify-content-center gap-5">
        <div className="container my-1 d-flex flex-column justify-content-start">
          <ScrollAnimation>
            <div className="d-flex justify-content-start">
              <Breadcrum name="CONTACT" link="/contact" />
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
                  className="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                </svg>
                <h5 className="text-uppercase fw-bold fs-3  mb-0 text-BLACK">
                  {translations[selectedLanguage.code]["contact us!"]}
                </h5>
              </div>
            </div>
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
            {translations[selectedLanguage.code]["Email Sent Successfully!"]}{" "}
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
            <ScrollAnimation delay={0.2}>
              <form
                id="contact-form"
                method="POST"
                onSubmit={Add_Email}
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
                        style={{
                          boxShadow: "0 0 5px rgb(255, 255, 255)",
                        }}
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
                          value={emailDetails.name}
                          className="form-control bg-white border-0 rounded-5"
                          placeholder={
                            translations[selectedLanguage.code]["Full Name"]
                          }
                          required
                          onFocus={() => handleFocus("name")}
                          onBlur={() => handleBlurWithValidation("name")}
                          style={{ boxShadow: "none" }}
                        />
                      </div>{" "}
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
                        htmlFor="name"
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
                          value={emailDetails.email}
                          onFocus={() => handleFocus("email")}
                          onBlur={() => handleBlurWithValidation("email")}
                          className="form-control bg-white border-0 rounded-5"
                          placeholder="Email"
                          required
                          style={{ boxShadow: "none" }}
                        />
                      </div>{" "}
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
                {/* Subject Field */}
                <div className="form mb-4">
                  <label htmlFor="name" className="fw-semibold text-black mb-1">
                    &nbsp;&nbsp;{" "}
                    {translations[selectedLanguage.code]["Subject"]}{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <div
                    className={`d-flex bg-white rounded-3 align-items-center px-3 gap-0 shadow-sm rounded-5 p-1 ${
                      focusedFields.subject ? "input_contact" : ""
                    }`}
                    style={{ boxShadow: "0 0 5px rgb(255, 255, 255)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="black"
                      className="bi bi-chat-square-text-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
                    </svg>
                    <input
                      onChange={changeHandler}
                      type="text"
                      id="subject"
                      name="subject"
                      value={emailDetails.subject}
                      onFocus={() => handleFocus("subject")}
                      onBlur={() => handleBlurWithValidation("subject")}
                      className="form-control bg-white border-0 rounded-5"
                      placeholder={
                        translations[selectedLanguage.code][
                          "How can we help you?"
                        ]
                      }
                      required
                      style={{ boxShadow: "none" }}
                    />
                  </div>{" "}
                  {validationErrors.subject && (
                    <div className="text-danger small mt-1 ms-2">
                      {
                        translations[selectedLanguage.code][
                          validationErrors.subject
                        ]
                      }
                    </div>
                  )}
                </div>
                {/* Message Field */}
                <div className="form mb-4">
                  <label
                    htmlFor="message"
                    className="fw-semibold text-black mb-1"
                  >
                    &nbsp;&nbsp;{" "}
                    {translations[selectedLanguage.code]["Your Message"]}{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className={`form-control form-control border-0 shadow-sm rounded-5 p-3 ${
                      focusedFields.message ? "input_contact" : ""
                    }`}
                    onChange={changeHandler}
                    value={emailDetails.message}
                    id="message"
                    name="message"
                    onFocus={() => handleFocus("message")}
                    onBlur={() => handleBlurWithValidation("message")}
                    placeholder={
                      translations[selectedLanguage.code][
                        "Enter your message here..."
                      ]
                    }
                    style={{ height: "150px" }}
                    required
                  ></textarea>
                  {validationErrors.message && (
                    <div className="text-danger small mt-1 ms-2">
                      {
                        translations[selectedLanguage.code][
                          validationErrors.message
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
    </>
  );
};

export default ContactUs;
