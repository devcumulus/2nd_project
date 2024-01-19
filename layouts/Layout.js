import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Breadcrumb from "./../components/breadcrumb/Breadcrumb";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <Breadcrumb />
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
