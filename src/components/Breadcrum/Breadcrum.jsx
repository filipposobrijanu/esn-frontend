import React from "react";
import "./Breadcrum.css";
import { Link } from "react-router-dom";
import { useState, useContext, useMemo } from "react";
import { ShopContext } from "../../context/ShopContext";
import { translations } from "../../translations/translations";

const Breadcrum = (props) => {
  const { selectedLanguage } = useContext(ShopContext);
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
  return (
    <div
      className="breadcrum d-flex flex-wrap gap-2 align-items-center justify-content-start mb-3"
      style={{ fontSize: "0.9em" }}
    >
      <span className="fw-bold mt-1">
        <Link
          style={{
            textDecoration: "none",
            color: "white",
            textShadow:
              "-1px -1px 0 #00a4d1ff, 1px -1px 0 #00a4d1ff,-1px 1px 0 #00a4d1ff,1px 1px 0 #00a4d1ff",
          }}
          to="/"
        >
          {translations[selectedLanguage.code]["HOME"]}
        </Link>
      </span>
      {props.name2 ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right-circle"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
            />
          </svg>
          <span className="fw-bold  mt-1">
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                textShadow:
                  "-1px -1px 0 #d40272ff, 1px -1px 0 #d40272ff,-1px 1px 0 #d40272ff,1px 1px 0 #d40272ff",
              }}
              to={props.link1}
            >
              {translations[selectedLanguage.code][props.name2]}
            </Link>
          </span>
        </>
      ) : null}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-arrow-right-circle"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
        />
      </svg>
      <span className="fw-bold  mt-1">
        <Link
          style={{
            textDecoration: "none",
            color: "white",
            textShadow:
              "-1px -1px 0 #61a32fff, 1px -1px 0 #61a32fff,-1px 1px 0 #61a32fff,1px 1px 0 #61a32fff",
          }}
          to={props.link}
        >
          {translations[selectedLanguage.code][props.name] || props.name}
        </Link>
      </span>
    </div>
  );
};

export default Breadcrum;
