'use client';

import { useEffect } from 'react';
import content from '../config/content.json';

export default function Home() {
  useEffect(() => {
    // 处理滚动事件
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('header-scrolled');
        } else {
          header.classList.remove('header-scrolled');
        }
      }
    };

    // 处理菜单点击
    const handleMenuClick = () => {
      const menu = document.querySelector('.menu');
      menu?.classList.toggle('active');
    };

    // 处理平滑滚动
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        const element = document.querySelector(href || '');
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // 添加事件监听器
    window.addEventListener('scroll', handleScroll);
    document.querySelector('.menu-toggle')?.addEventListener('click', handleMenuClick);
    document.querySelector('.menu')?.addEventListener('click', handleSmoothScroll);

    // 清理函数
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.querySelector('.menu-toggle')?.removeEventListener('click', handleMenuClick);
      document.querySelector('.menu')?.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <main>
      <header>
        <div className="navBar">
          <div className="name">
            <h1>{content.nav.name}</h1>
          </div>
          <div className="menu">
            <ul>
              {content.nav.menu.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="menu-toggle">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-container">
          <p className="up">{content.hero.greeting}</p>
          <h1 className="down">{content.hero.name}</h1>
          <p>{content.hero.title}</p>
          <p>{content.hero.description}</p>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-container">
          <div className="text">
            <h2>{content.about.title}</h2>
            <p className="p1">{content.about.description}</p>
            <button>{content.about.button}</button>
          </div>
        </div>
      </section>

      <section className="Skills" id="skills">
        <div className="container">
          <div className="heading">
            <h1>{content.skills.title}</h1>
          </div>
          <div className="mainSkill">
            {content.skills.categories.map((category, index) => (
              <div key={index} className={category.title.toLowerCase()}>
                <h2>{category.title}</h2>
                <div className={`${category.title.toLowerCase()}Skill`}>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="box">
                      <img src={skill.image} alt={skill.name} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="expirience" id="experience">
        <h1>{content.experience.title}</h1>
        <div className="container-ex">
          {content.experience.timeline.map((item, index) => (
            <div key={index} className={`timeline-block timeline-block-${index % 2 === 0 ? 'right' : 'left'}`}>
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <span>{item.company} | {item.period}</span>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="project" id="projects">
        <div className="main">
          <h1>{content.projects.title}</h1>
        </div>
        <div className="container">
          {content.projects.items.map((project, index) => (
            <div key={index} className="card">
              <div className="card-inner">
                <div className="box">
                  <div className="imgBox">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="icon">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <div className="iconBox">
                        <i className="fa fa-arrow-right"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <ul>
                <li className="github">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
              <div className="content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="main">
          <h1>{content.contact.title}</h1>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Email: {content.contact.info.email}</p>
            <p>Phone: {content.contact.info.phone}</p>
            <p>Location: {content.contact.info.location}</p>
            <div className="social-links">
              {content.contact.social.map((social, index) => (
                <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                  <img src={`/images/${social.icon}.png`} alt={social.name} />
                </a>
              ))}
            </div>
          </div>
          <div className="contact-form">
            <form>
              <label>
                {content.contact.form.name}
                <input type="text" required />
              </label>
              <label>
                {content.contact.form.email}
                <input type="email" required />
              </label>
              <label>
                {content.contact.form.message}
                <textarea required></textarea>
              </label>
              <button type="submit">{content.contact.form.submit}</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
} 