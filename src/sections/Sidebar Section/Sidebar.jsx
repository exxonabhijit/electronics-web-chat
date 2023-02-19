import React, { useEffect } from "react";
import BestSellerSidebar from "../../components/Sidebars/BestSellerSidebar";
import CategorySidebar from "../../components/Sidebars/CategorySidebar";
import PostCard from "../../components/Post card/PostCard";
import SocialMediaCard from "../../components/Post card/SocialMediaCard";
import ProductList from "../../components/Product List/ProductList";
import PostDesignOne from "../../components/Post card/PostDesignOne";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

//! import fetchAllPosts action from postActions
import { fetchAllPosts } from "../../store/Posts/postsActions";

export default function Sidebar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);
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
              <ProductList />
              <PostDesignOne />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
