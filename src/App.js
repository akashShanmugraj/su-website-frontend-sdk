import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClubLanding from "./pages/ClubLanding";
import Clubs from "./pages/Clubs";
import Gallery from "./pages/Gallery";
import Landing from "./pages/Landing";
import OurTeam from "./pages/OurTeam";
import "./styles/tailwind.output.css";
import SUFeed from "./pages/SUFeed";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="team" element={<OurTeam />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="club/:id" element={<ClubLanding />} />
        <Route path="feed" element={<SUFeed/>}/>
        <Route path="clubs" element={<Clubs />} />
        <Route index element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
