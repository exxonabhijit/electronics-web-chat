import { useState } from "react";

//! Importing Router here
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

//! Importing Pages here
import Header from "./components/Headers/MainHeader";
import Footer from "./components/Footer/MainFooter";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import PostDetailPage from "./pages/PostDetailPage";
import ProductDetails from "./pages/ProductDetails";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProfilePage from "./pages/ProfilePage";
import Error404 from "./pages/Error404";
import AllProductsPage from "./pages/AllProductsPage";

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign_up" element={<SignUpPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="all_products" element={<AllProductsPage />} />
          <Route path="/post">
            <Route path=":id" element={<PostDetailPage />} />
          </Route>
          <Route path="/product">
            <Route path=":id" element={<ProductDetails />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
