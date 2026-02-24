import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Breakfast } from "./pages/Breakfast";
import { Dinner } from "./pages/Dinner";
import { Drinks } from "./pages/Drinks";
import { Lunch } from "./pages/Lunch";
import { Error } from "./pages/Error";
import { Invoice } from "./pages/Invoice";
import { Nav } from "./components/Nav";
import { ChatBotPage } from "./pages/ChatBotPage";

function App() {
  return (
    <>
      <Nav />
      <main className="container mt-3">
        <h1 className="title">Restaurant Menu</h1>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/breakfast" element={<Breakfast />} />
            <Route path="/dinner" element={<Dinner />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/lunch" element={<Lunch />} />
            <Route path="/" element={<Home />} />
            <Route path="/nav" element={<Nav />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/chatbot" element={<ChatBotPage />} />

          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
