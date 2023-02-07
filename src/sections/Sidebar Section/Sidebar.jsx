import React from "react";
import BestSellerSidebar from "../../components/Sidebars/BestSellerSidebar";
import CategorySidebar from "../../components/Sidebars/CategorySidebar";
import PostCard from "../../components/Post card/PostCard";
import SocialMediaCard from "../../components/Post card/SocialMediaCard";
import ProductList from "../../components/Product List/ProductList";
import PostDesignOne from "../../components/Post card/PostDesignOne";
import { Outlet } from "react-router-dom";
export default function Sidebar() {
  return (
    <>
      <div className="product-container1">
        <div className="container1">
          <div className="sidebar  has-scrollbar" data-mobile-menu>
            <CategorySidebar />
            <BestSellerSidebar />
          </div>
          <div className="product-box">
            <div className="product-main">
              <PostCard />
              <PostDesignOne />
              <PostDesignOne />
              <PostDesignOne />
              <ProductList />
              <PostDesignOne />
              <PostDesignOne />
              <PostDesignOne />
              <ProductList />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
