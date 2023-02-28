import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Edit from "./Pages/Edit";
// import Four0Four from "./Pages/Four0Four";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import NewPL from "./Pages/NewPL"


import NavBar from "./Components/NavBar";
// import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Index />} />
            <Route path="/songs/new" element={<New />} />
            <Route exact path="/songs/:id" element={<Show />} />
            <Route path="/songs/:id/edit" element={<Edit />} />

            <Route path="/playlists/new" element={<NewPL />} />
            {/* <Route path="*" element={<Four0Four />} /> */}
          </Routes>
        </main>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;

