import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Headeer from "./Header";
import Home from "./Home";
import NotFound from "./NotFound";
import About from "./About";
import Search from "./Search";
import AddItem from "./AddItem";
import Login from "./Login";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Headeer />
        <main className="flex-grow"> {/* This allows main content to   take remaining space */}
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/additem" element={<AddItem />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


 