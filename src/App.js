import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Dashboard from './pages/Dashboard';
import ScrollToTop from './components/common/ScrollToTop';
import Login from './components/Login_signup/Login';
import Signup from './components/Login_signup/Signup';
import Forgetpassword from './components/Login_signup/Forgetpassword';
import Changepassword from './components/Login_signup/Changepassword';

// ✅ Custom layout wrapper to handle Header/Footer conditionally
const LayoutWrapper = ({ children }) => {
  const location = useLocation();

  // hide Header & Footer on these paths
  const hideLayoutPaths = ['/login', '/signup',"/changepassword","/forgetpassword"];
  const shouldHideLayout = hideLayoutPaths.includes(location.pathname.toLowerCase());

  return (
    <>
      {!shouldHideLayout && <Header />}
      {children}
      {!shouldHideLayout && <Footer />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetpassword" element={<Forgetpassword />} />
          <Route path="/changepassword" element={<Changepassword />} />
        </Routes>
      </LayoutWrapper>
    </BrowserRouter>
  );
}

export default App;
