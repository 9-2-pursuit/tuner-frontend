import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, Index, Show, New, Edit, Artists, Albums } from "./pages/Imports";
import "./app.css";

function App() {
  return (
    <div className="w-100 min-h-screen md:h-screen	app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Index />} />
          <Route path="/songs/:id" element={<Show />} />
          <Route path="/songs/new" element={<New />} />
          <Route path="/songs/:id/edit" element={<Edit />} />
          <Route path="/artists/:id" element={<Artists />} />
          <Route path="/albums/:id" element={<Albums />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
