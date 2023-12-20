import FooterSection from "@/components/FooterSection";
import NavbarSection from "@/components/NavbarSection";
import React from "react";

export default function Layout({ children }) {
  return (
    <main>
      <NavbarSection />
        {children}
        <FooterSection />
    </main>
  );
}
