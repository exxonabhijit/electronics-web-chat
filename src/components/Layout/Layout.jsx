import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Headers/MainHeader";
import Footer from "../Footer/MainFooter";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="App">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
