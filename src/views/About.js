import React from "react";
import Heading from "../Components/Heading/Heading";

const About = ({ about }) => {
  return (
    <main className="about">
      <Heading title="a little about me." />
      <article
        dangerouslySetInnerHTML={{
          __html: about,
        }}
      />
    </main>
  );
};

export default About;
