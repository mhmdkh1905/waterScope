// App.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";


const App = () => (
  <div className="flex flex-col min-h-screen bg-gray-50">
    <Header />
    <main className="flex-grow px-4 py-6 w-full">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default App;