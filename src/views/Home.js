import React from 'react'
import SocialHandles from '../Components/socialHandles/SocialHandles'

import avatar from '../img/avatar.png';

const Home = () => {
  return (
    <section className="home">
      <div className="avatar-container">
        <img src={avatar} alt=""/>
      </div>
      <article className="intro-text">
        <p>Hi! I'm <span>KodingNYoung.</span></p>
        <p>A web developer</p>

        <a href="https://firebasestorage.googleapis.com/v0/b/portfolio-5cc31.appspot.com/o/ADEBAMBO%2C's%20Resume.pdf?alt=media&token=199fd2e0-8ef0-485a-a31f-c554f0f42d66" className="resume-link" target="_blank" rel="noreferrer">résumé</a>

      </article>
      <SocialHandles color="#446df6"/>
    </section>
  )
}

export default Home
