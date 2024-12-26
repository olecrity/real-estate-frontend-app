import { Navigate, Route, Routes } from "react-router-dom";
import Appartments from "./pages/Appartments";
import Work from "./pages/Work";
import AboutUs from "./pages/AboutUs";
import Header from "./ui/Header/Header";
import Login from "./pages/Login";
import { useAuth } from "./contexts/AuthContext";
import { useEffect } from "react";
import CreateAppartment from "./pages/CreateAppartment";
import FakePage from "./pages/FakePage";

function App() {
  const { isAuth, tokenLogin } = useAuth();

  useEffect(
    function () {
      tokenLogin();
    },
    [tokenLogin]
  );

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Navigate to="login" replace />} />
        <Route path="appartments" element={<Appartments />} />
        <Route path="work" element={<Work />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="login" element={<Login />} />
        {isAuth && (
          <Route path="appartment/create" element={<CreateAppartment />} />
        )}
      </Routes>
    </>
  );
}

export default App;
