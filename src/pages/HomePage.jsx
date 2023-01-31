import React, { useState } from "react";
import BannerSection from "../sections/Home Section/BannerSection";
import FeatureSection from "../sections/Home Section/FeatureSection";
import SidebarSection from "../sections/Sidebar Section/Sidebar";
import ChatBox from "../components/Chat Box/ChatBox";

export default function HomePage() {
  const [value, setValue] = useState("");
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
