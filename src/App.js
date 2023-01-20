import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, Songs, Show, New, Edit } from "./pages/Index";

function App() {
  return (
    <div className="w-100 min-h-screen md:h-screen	app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/songs/:id" element={<Show />} />
          <Route path="/songs/new" element={<New />} />
          <Route path="/songs/:id/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
