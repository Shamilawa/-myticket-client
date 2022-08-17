import './App.css';
import TopHeader from "./TopHeader";
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Events from './Events';
import ScrollTop from './ScrollTop';

function App() {
  return (
    <Router>
      <div className="container">
        <TopHeader />
        <ScrollTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </ScrollTop>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
