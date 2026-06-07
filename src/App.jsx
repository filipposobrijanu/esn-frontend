import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Home from "./components/Home/Home";
import MeetPeiraius from "./components/MeetPeiraius/MeetPeiraius";
import FindHouse from "./components/FindHouse/FindHouse";
import GetTheESNcard from "./components/GetTheESNcard/GetTheESNcard";
import SurvivalGuide from "./components/SurvivalGuide/SurvivalGuide";
import WhatIsESN from "./components/WhatIsESN/WhatIsESN";
import ErasmusProjects from "./components/ErasmusProjects/ErasmusProjects";
import UniversityOfPeiraeus from "./components/UniversityOfPeiraeus/UniversityOfPeiraeus";
import Partners from "./components/Partners/Partners";
import ContactUs from "./components/ContactUs/ContactUs";
import JoinUs from "./components/JoinUs/JoinUs";
import News from "./components/News/News";
import NewPage from "./components/NewPage/NewPage";
import Events from "./components/Events/Events";
import EventPage from "./components/EventPage/EventPage";
import ESNUnipi from "./components/ESNUnipi/ESNUnipi";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <div
                style={{
                  backgroundColor: "#f1f1f1ff",
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <Hero />
              </div>
              <Home />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <div
                style={{
                  backgroundColor: "#f1f1f1ff",
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <Hero />
              </div>
              <Home />
            </>
          }
        />
        <Route path="/meet-piraeus" element={<MeetPeiraius />} />
        <Route
          path="/accomondation-piraeus-athens-metropolitan-area"
          element={<FindHouse />}
        />
        <Route path="/esncard" element={<GetTheESNcard />} />
        <Route path="/survival-guide" element={<SurvivalGuide />} />
        <Route path="/what-esn" element={<WhatIsESN />} />
        <Route path="/erasmus-projects" element={<ErasmusProjects />} />
        <Route path="/university-piraeus" element={<UniversityOfPeiraeus />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/become-one-us" element={<JoinUs />} />
        <Route path="/about-us" element={<ESNUnipi />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:newsSlug" element={<NewPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:newsSlug" element={<EventPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
