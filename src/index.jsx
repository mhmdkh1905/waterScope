import Header from "./layouts/header";
import Footer from "./layouts/footer";
import ScrollToTop from "./components/ScrollToTop";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
    <ScrollToTop />
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}