// App.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./layouts/header";
import Footer from "./layouts/footer";


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