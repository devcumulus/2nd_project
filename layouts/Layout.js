import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main style={{ marginTop: '250px' }}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
