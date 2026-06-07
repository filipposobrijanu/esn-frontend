import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const languages = [
    { code: "us", name: "English" },
    { code: "gr", name: "Greek" },
    { code: "fr", name: "French" },
    { code: "es", name: "Spanish" },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const savedLang = localStorage.getItem("selectedLanguage");
    return savedLang ? JSON.parse(savedLang) : languages[0]; // default Greek
  });
  const [menu, setMenu] = useState(() => {
    return localStorage.getItem("menu") || "home";
  });

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedMatch, setSelectedMatch] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [user, setUser] = useState(null);
  const [minheight_var, setMinheight_var] = useState("0vh");
  useEffect(() => {
    if (selectedLanguage) {
      localStorage.setItem(
        "selectedLanguage",
        JSON.stringify(selectedLanguage)
      );
    }
  }, [selectedLanguage]);

  // Whenever menu changes, save it
  useEffect(() => {
    if (menu) {
      localStorage.setItem("menu", menu);
    }
  }, [menu]);

  const contextValue = {
    selectedLanguage,
    setSelectedLanguage,
    menu,
    setMenu,
    searchQuery,
    setSearchQuery,
    selectedMatch,
    setSelectedMatch,
    isAuthenticated,
    setIsAuthenticated,
    user,
    setUser,
    minheight_var,
    setMinheight_var,
    selectedCategory,
    setSelectedCategory,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
