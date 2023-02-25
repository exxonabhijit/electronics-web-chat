import React, { useEffect, useState } from "react";
import BestSellerSidebar from "../../components/Sidebars/BestSellerSidebar";
import CategorySidebar from "../../components/Sidebars/CategorySidebar";
import PostCard from "../../components/Post card/PostCard";
import ProductList from "../../components/Product List/ProductList";
import PostDesignOne from "../../components/Post card/PostDesignOne";
import { useDispatch, useSelector } from "react-redux";

//! import fetchAllPosts action from postActions
import { fetchAllPosts } from "../../store/Posts/postsActions";

export default function Sidebar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  //! get all posts from redux store
  const posts = useSelector((state) => state?.posts?.posts);

  console.log("all posts", posts?.data);
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
              <ProductList show="show" />
              <>
                {posts?.data?.map((post) => (
                  <PostDesignOne Post={post} key={post.id} />
                ))}
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
