import React from "react";
import logo from "../../assets/favicon.ico";
import { Link, useLocation } from "react-router-dom";
import "./Event.css";
import banner1 from "../../assets/meet-peiraius/1.jpg";
import banner2 from "../../assets/meet-peiraius/images.jpg";
import banner3 from "../../assets/meet-peiraius/arheio_lipsis_1.jpg";
import banner4 from "../../assets/meet-peiraius/PIREAS.jpg";
import Breadcrum from "../Breadcrum/Breadcrum";
import { useState, useContext, useMemo, useEffect } from "react";
import { ShopContext } from "../../context/ShopContext";
import { translations } from "../../translations/translations";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const Event1 = (props) => {
  const { selectedLanguage } = useContext(ShopContext);
  const locationurl = useLocation();
  const [color, setColor] = useState("#00b3e6"); // Add loading state
  const [sizeoftext, setSizeOfText] = useState("fs-5");
  useEffect(() => {
    {
      if (locationurl.pathname === "/home" || locationurl.pathname === "/") {
        setColor("#f85b00ff");
        setSizeOfText("fs-6");
      }
    }
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
  return (
    <>
      <style>{` #link-how-to-help3:hover { border: 1px solid ${color} } `}</style>
      <div
        id="link-how-to-help3"
        className="d-flex text-start gap-3 align-items-center p-3 rounded-5"
        style={{
          overflowWrap: "break-word",
          borderColor: `${color} !important`,
        }}
      >
        <img
          className="rounded-5"
          src={props.image}
          style={{ objectFit: "cover" }}
          width={"125px"}
          height={"90px"}
          alt=""
        />
        <div className="d-flex flex-column text-start gap-1 align-items-start mt-1">
          <small style={{ fontSize: "0.75em" }}>{props.date}</small>
          <p className={`${sizeoftext} fw-bold`} style={{ color: color }}>
            {props.name}
          </p>
        </div>
      </div>
    </>
  );
};

export default Event1;
