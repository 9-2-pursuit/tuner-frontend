import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, Songs, Show, New, Edit } from "./pages/Index";

function App() {
  return (
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
  );
}

export default App;
