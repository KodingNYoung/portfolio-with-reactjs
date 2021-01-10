import React, { useState, useEffect } from "react";

// components
import Navs from "./Components/Nav/Nav";
import Preloader from './Components/Preloader/Preloader'

// pages
import Home from "./views/Home";
import About from "./views/About";
import Project from "./views/Project";
import Contact from "./views/Contact";

// dependencies
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// css
import "./portfolio.css";
import useFireStoreToGetUserData from "./firebase/hooks/useFirestoreToGetUserData";

//class
const Portfolio = () => {
  const { doc, error } = useFireStoreToGetUserData(
    "dashboard",
    "abiodunadebambo44@gmail.com"
  );

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [errors, setErrors] = useState(null)
  const [loading, setLoading] = useState(true);
  const views = ["home", "about", "projects", "contact"];

  useEffect(() => {
    if (doc.name) {
      setErrors(error);
      setUserDetails(doc);
      setLoading(false);
    }
  }, [doc]);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Router>
      {loading && <Preloader />}
      {errors && !userDetails.name && !loading && <p>{errors}</p>}
      {userDetails.name && (
        <div className="portfolio">
          <Navs
            views={views}
            openDrawer={openDrawer}
            closeDrawer={closeDrawer}
            open={isDrawerOpen}
            contact={userDetails.contact}
          />
          <Switch>
            <Route
              path="/home"
              component={() => <Home userDetails={userDetails} />}
            />
            <Route path="/about" component={() => <About about={userDetails.about}/>} />
            <Route path="/projects" component={Project} />
            <Route path="/contact" component={Contact} />
            <Redirect to="/home" />
          </Switch>
        </div>
      )}
    </Router>
  );
};

export default Portfolio;
