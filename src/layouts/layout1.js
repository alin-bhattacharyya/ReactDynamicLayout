import React from "react";
import Helmet from "react-helmet";

const Layout1 = ({ children, title }) => {
  const year = new Date().getFullYear();
  return (
    <div className="layout-1">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <header>
        <div className="header">
          <a href="/">Home</a>
          <a href="/page1" className="active">
            Layout 1
          </a>
          <a href="/page2">Layout 2</a>
        </div>
      </header>

      <main>{children}</main>
      <footer className="footer">{`Copyright | Coforge © ${year}-${
        year + 1
      }`}</footer>
    </div>
  );
};

export default Layout1;
