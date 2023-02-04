import { useState } from "react";

//! Importing Router here
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//! Importing Pages here
import Header from "./components/Headers/MainHeader";
import Footer from "./components/Footer/MainFooter";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import PostDetailPage from "./pages/PostDetailPage";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path=":slug" element={<PostDetailPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign_up" element={<SignUpPage />} />
          <Route path="/post_detail" element={<PostDetailPage />} />
        </Routes>
        <Footer />
      </Router>
      ;
    </>
  );
}

export default App;
