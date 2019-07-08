/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../Header/Header";
import "./style.css";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children, page }) => {
  return (
    <>
      <Header page={page || "Programming"} />
      <div className="page-wrapper">
        <div className="horizontal-layout">
          <Sidebar className="hidden-on-mobile"/>
          <main>{children}</main>
        </div>
        {/*<footer>*/}
        {/*  © {new Date().getFullYear()}, Built with*/}
        {/*  {` `}*/}
        {/*  <a href="https://www.gatsbyjs.org">Gatsby</a>*/}
        {/*</footer>*/}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
