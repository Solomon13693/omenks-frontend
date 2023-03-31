import { Route, Routes } from "react-router-dom"
import ScrollToTop from "./components/ScrollTop";
import AboutPage from "./pages/AboutPage";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import FaqPage from "./pages/FaqPage";
import Home from "./pages/Home";
import InvestmentClub from "./pages/InvestmentClub";
import RealEstate from "./pages/Investments/RealEstate";
import Portfolio from "./pages/Portfolio";

function App() {
  return (

    <>

        <ScrollToTop />

        <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/investment-strategy" element={<InvestmentClub />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />


        {/* INVESTMENT */}       
         <Route path="/real-estate" element={<RealEstate />} />

        <Route path="*" element={<ErrorPage />} />

        </Routes>

    </>

  );
}

export default App;
