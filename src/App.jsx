import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./Components/Home";
import PortfolioPage from "./Components/PortfolioPage"
import AboutPage from "./Components/AboutPage";
import InvestPage from "./Components/InvestPage";
import NewsPage from "./Components/NewsPage";
import ResearchPage from "./Components/ResearchPage";
import Chatbox from "./Components/Chatbox";

function App() {
  

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/invest" element={<InvestPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/chatbox" element={<Chatbox/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
