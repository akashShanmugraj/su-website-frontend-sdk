import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import "./styles/tailwind.output.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
