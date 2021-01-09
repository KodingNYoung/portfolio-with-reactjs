import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavLink from "./NavLink";
import { CancelIcon, BurgerIcon } from "../Buttons/Buttons";
import SocialHandles from "../socialHandles/SocialHandles";
import logo from "../../img/logo.png";
import "./Nav.css";

const NavLinks = ({ views, newView, onClick, style }) => {
  return (
    <ul>
      {views.map((view, index) => {
        return (
          <NavLink
            view={view}
            key={index}
            active={newView}
            onClick={onClick}
            style={style}
          />
        );
      })}
    </ul>
  );
};

const NavDrawer = ({ views, open, closeDrawer, newView, contact }) => {
  const styles = {
    navDrawer: {
      transform: open ? "translateY(0%)" : "translateY(100%)",
    },
    links: {
      animation: open ? "slideIn 0.8s ease-in-out both" : "none",
    },
  };

  return (
    <nav className="navDrawer" style={styles.navDrawer}>
      <CancelIcon onClick={closeDrawer} />
      <NavLinks
        views={views}
        newView={newView}
        onClick={closeDrawer}
        style={styles.links}
      />
      <SocialHandles contact={contact} />
    </nav>
  );
};

const Navbar = ({ openDrawer, views, newView }) => {
  return (
    <section className="navBar">
      <header>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </header>
      <BurgerIcon onClick={openDrawer} />
      <NavLinks views={views} newView={newView} />
    </section>
  );
};

const Navs = ({ views, openDrawer, closeDrawer, open, contact }) => {
  const currentView = useLocation().pathname.split("/")[1];

  const [newView, setNewView] = useState("");
  useEffect(() => {
    onViewChange(currentView);
  }, [currentView]);

  const onViewChange = (view) => {
    setNewView(view);
  };

  return (
    <div className="Nav">
      <Navbar openDrawer={openDrawer} views={views} newView={newView} />
      <NavDrawer
        views={views}
        open={open}
        closeDrawer={closeDrawer}
        newView={newView}
        contact={contact}
      />
    </div>
  );
};

export default Navs;
