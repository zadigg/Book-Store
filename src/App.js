import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import Header from "./components/Header";
import Add from "./pages/Add";
import Books from "./pages/Books";
import About from "./pages/About";
import BookDetail from "./pages/BookDetail";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  return (
    <ThemeContext>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add" element={<Add />} />
          <Route exact path="/books" element={<Books />} />
          <Route exact path="/books/:id" element={<BookDetail />} />
          <Route exact path="/about" element={<About />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext>
  );
}

export default App;
