import { useState } from "react";
import Header from "./components/Headers/MainHeader";
import Footer from "./components/Footer/MainFooter";
import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
      {/* <PostDetailPage /> */}
      <LoginPage />
    </>
  );
}

export default App;
