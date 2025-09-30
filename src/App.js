import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import SectionLayout from "./layouts/SectionLayout";
import Home from "./pages/Home";
import { CardAlphaCompo } from "./sections/alphabet/CardAlphaCompo";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hi Masooma! Salam 🌸</h1>
      </div>

      <Routes>
        {/* مسیر اصلی */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          {/* بخش آموزش - الفبا */}
          <Route
            path="alphabet"
            element={
              <SectionLayout
                basePath="/alphabet"
                menuItems={[{ label: "کارت الفبا", path: "" }]}
              />
            }
          >
            <Route path="" element={<CardAlphaCompo />} />
          </Route>

          {/* در آینده می‌توانید مسیرهای دیگر اضافه کنید */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
