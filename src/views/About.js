import React from 'react';
import Heading from '../Components/Heading/Heading';

const About = () => {
  return (
    <main className="about">
      <Heading title="a little about me."/>
      <article>
        <p>
          I'm <span>Adebambo Abiodun Oluwasegun</span> but you can call me KodingNYoung. I'm a self-taught, frontend web developer.
        </p>
        <p>
          I started my coding journey in 2018 and since then have built different websites and web apps with my knowledge of HTML, CSS, Javascript and other frontend technologies like <span>Bootstrap</span>, <span>Material design</span> and <span>Reactjs</span>. 
        </p>
        <p>
          Working with different teams over the years has helped build my <span>teamwork</span> and improve my knowledge of <span>git and github workflow</span>.
          
        </p>
        <p>
          In my leisure time I play with Arduino, mentor younger devs, watch movies, listen to music, and watch my favourite football club.
        </p>
      </article>
    </main>
  )
}

export default About
