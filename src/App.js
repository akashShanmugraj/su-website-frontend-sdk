import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClubLanding from "./pages/ClubLanding";
import Clubs from "./pages/Clubs";
import Landing from "./pages/Landing";
import "./styles/tailwind.output.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="club/:id" element={<ClubLanding />} />
        <Route path="clubs" element={<Clubs />} />
        <Route index element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
