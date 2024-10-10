import Header from "./components/header.jsx"
// Panggil AOS
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Navigation from './components/navigation';
import Banner from "./components/banner.jsx";
import Profile from "./components/profile.jsx";
import Portfolio from "./components/portfolio.jsx";
import Footer from './components/footer';

function App() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div>
      <Header />
      <Navigation />
      <Banner />
      <Profile />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App
