import React, { useEffect, useState } from "react";
import BannerSection from "../sections/Home Section/BannerSection";
import FeatureSection from "../sections/Home Section/FeatureSection";
import SidebarSection from "../sections/Sidebar Section/Sidebar";
import { getUserInfo } from "../store/Auth/authActions.js";
import { useDispatch } from "react-redux";

export default function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
  }, []);
  return (
    <>
      <main>
        <BannerSection />
        <FeatureSection />
        <SidebarSection />
      </main>
    </>
  );
}
