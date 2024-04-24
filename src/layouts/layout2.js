import React from "react";
import Helmet from "react-helmet";

const Layout2 = ({ children, title }) => {
  const year = new Date().getFullYear();
  return (
    <div className="layout-2">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <header>
        <div className="header1">
          <a href="/">Home</a>
          <a href="/page1">Layout 1</a>
          <a href="/page2" className="active">
          Layout 2
          </a>
        </div>
      </header>
      <section>{children}</section>
      <footer className="footer1">{`Copyright | Coforge © ${year}-${
        year + 1
      }`}</footer>
    </div>
  );
};

export default Layout2;
