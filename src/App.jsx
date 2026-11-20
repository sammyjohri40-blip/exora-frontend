
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

function HomePage() {
  const navigate = useNavigate();

  return <Home onLogin={() => navigate("/login")} />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;