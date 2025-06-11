'use client';

import { useEffect, useRef, useState } from 'react';
import content from '../config/content.json';
import emailjs from '@emailjs/browser';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      await emailjs.send(
        content.contact.emailjs.service_id,
        content.contact.emailjs.template_id,
        {
          from_name: formData.get('name'),
          from_email: formData.get('email'),
          message: formData.get('message'),
          to_email: content.contact.emailjs.to_email,
        },
        content.contact.emailjs.public_key
      );
      alert('Message sent successfully!');
      form.reset();
    } catch (error) {
      alert('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
    <>
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
      </head>
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Leckerli+One&family=Lilita+One&family=Patrick+Hand&family=Shadows+Into+Light&display=swap" rel="stylesheet" />
      <link href="/style.css" rel="stylesheet" />

      <header>
        <nav id="navBar" className="navBar">
          <div className="name" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <h1>{content.nav.name}</h1>
          </div>
          <div className="menu-toggle" id="menuToggle">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div className="menu" id="menu">
            <ul>
              {content.nav.menu.map((item, index) => (
                <li key={index}><a href={item.link}>{item.text}</a></li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      <section className="hero" id="home" style={{ backgroundImage: "url('/images/about.jpg')" }}>
        <div className="over"></div>
        <div className="hero-container">
          <h1>
            <p className="up">{content.hero.greeting}</p><br />
            {/* <p className="down">{content.hero.name}</p> */}
          </h1>
          <h1>I'm <span className="auto-type">{content.hero.name}</span></h1>
          <div className="botton">
            {content.contact.social.map((social, index) => (
              <a key={index} href={social.link} target="_blank">
                <img src={`/images/${social.icon}.svg`} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-container">
          <div className="imgeffect">
            <img src={content.about.image} alt="" />
          </div>
          <div className="text">
            <p className="p1">Who Am I?</p>
            <h2>{content.about.title}</h2>
            <p className="p2">{content.about.description}</p>
            <a href={content.hero.resume} target="_blank"><button>{content.about.button}</button></a>
          </div>
        </div>
      </section>

      <section className="Skills" id="skills">
        <div className="container">
          <div className="heading">
            <h1 className="skillh1">{content.skills.title}</h1>
          </div>
          <div className="mainSkill">
            <div className="front">
              <h2>Frontend</h2>
              <div className="box">
                {content.skills.categories[0].skills.map((skill, index) => (
                  <div key={index} className="frontSkill">
                    <img src={skill.image} alt="" />
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="back">
              <h2>Backend</h2>
              <div className="box">
                {content.skills.categories[1].skills.map((skill, index) => (
                  <div key={index} className="backSkill">
                    <img src={skill.image} alt="" />
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="datasci">
              <h2>Data Science</h2>
              <div className="box">
                {content.skills.categories[2].skills.map((skill, index) => (
                  <div key={index} className="datasciSkill">
                    <img src={skill.image} alt="" />
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="tools">
              <h2>Tools</h2>
              <div className="box">
                {content.skills.categories[3].skills.map((skill, index) => (
                  <div key={index} className="toolsSkill">
                    <img src={skill.image} alt="" />
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="expirience" id="experience">
        <h1 className="skillh1">{content.experience.title}</h1>
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
              <div className="card-inner" style={{ '--clr': '#fff' } as React.CSSProperties}>
                <div className="box">
                  <div className="imgBox">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="icon">
                    <a href={project.github} className="iconBox" target="_blank" rel="noopener noreferrer">
                      <img src="/images/arrow.svg" alt="arrow" className="arrow-icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <li className="github">github</li>
                  </a>
                  <a href={project.site} target="_blank" rel="noopener noreferrer">
                    <li className="site">visit site</li>
                  </a>
                </ul>
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
            <h2>Get In Touch</h2>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
            <div className="social-links">
              {content.contact.social.map((social, index) => (
                <a key={index} href={social.link} target="_blank">
                  <img src={`/images/${social.icon}.svg`} alt={social.name} />
                </a>
              ))}
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">{content.contact.form.name}</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="email">{content.contact.form.email}</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="message">{content.contact.form.message}</label>
              <textarea id="message" name="message" rows={5} required></textarea>
              <button type="submit">{content.contact.form.submit}</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
} 