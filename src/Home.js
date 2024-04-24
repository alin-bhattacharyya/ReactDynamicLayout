import React from "react";
import Helmet from "react-helmet";

const Home = ({ children, title }) => {
  const year = new Date().getFullYear();
  return (
    <div className="layout-1">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <header>
        <div className="header-home">
          <a href="/" className="active">
            Home
          </a>
          <a href="/page1">Layout 1</a>
          <a href="/page2">Layout 2</a>
        </div>
      </header>

      <main style={{ padding: "80px" }}>
        <div>
          <h1>Welcome Guest!!</h1>
          <div>
            <ul>
              <li>Please click on Layout 1, which uses Layout 1 design to apply dynamically.</li>
              <li>Please click on Layout 2, which uses Layout 2 design to apply dynamically.</li>
            </ul>
          </div>
        </div>
      </main>
      <footer className="footer-home">{`Copyright | Coforge © ${year}-${
        year + 1
      }`}</footer>
    </div>
  );
};

export default Home;
