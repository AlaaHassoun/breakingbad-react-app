import React from "react";
import Hero from "./Hero";
import Footer from "./Footer";

function Layout({ page, background, title, children }) {
  return (
    <>
      <Hero page={page} background={background} title={title} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
