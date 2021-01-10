import React from "react";
import SocialHandles from "../Components/socialHandles/SocialHandles";

// import avatar from "../img/avatar.png";

const Home = ({ userDetails }) => {
  // console.log(userDetails);
  return (
    <section className="home">
      <div className="avatar-container">
        <img src={userDetails.avatar_link} alt="" />
      </div>
      <article className="intro-text">
        <p>
          Hi! I'm <span>{userDetails.name}</span>
        </p>
        <p>A {userDetails.job}</p>

        <a
          href={userDetails.resume_link}
          className="resume-link"
          target="_blank"
          rel="noreferrer"
        >
          résumé
        </a>
      </article>
      <SocialHandles color="#446df6" contact={userDetails.contact} />
    </section>
  );
};

export default Home;
