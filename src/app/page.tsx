'use client';

import { useEffect } from 'react';

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
    <>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="/style.css" />
      </head>
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Leckerli+One&family=Lilita+One&family=Patrick+Hand&family=Shadows+Into+Light&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
      
      {/* Navbar Html Code  */}
      <header>
        <nav id="navBar" className="navBar">
          <div className="name">
            <h1>Tomcom</h1>
          </div>
          <div className="menu-toggle" id="menuToggle">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div className="menu" id="menu">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#expirience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Section Html Code  */}
      <section className="hero" id="home" style={{ backgroundImage: "url('/images/about.jpg')" }}>
        <div className="over"></div>
        <div className="hero-container">
          <h1>
            <p className="up">HI!</p><br />
            <p className="down">I am Tomcom</p>
          </h1>
          <h1>I'm a <span className="auto-type">xxx,xxx,xxx</span></h1>
          <div className="botton">
            <a href="https://linkedin.com/in/yourusername" target="_blank"><img src="/images/linkedin.svg" alt="" /></a>
            <a href="https://github.com/yourusername" target="_blank"><img src="/images/github.svg" alt="" /></a>
            <a href="https://medium.com/yourusername" target="_blank"><img src="/images/medium.svg" alt="" /></a>
            <a href="https://instagram.com/yourusername" target="_blank"><img src="/images/instagram.svg" alt="" /></a>
          </div>
        </div>
      </section>

      {/* About Section Html Code */}
      <section className="about" id="about">
        <div className="about-container">
          <div className="imgeffect">
            <img src="/images/pic2.jpg" alt="" />
          </div>
          <div className="text">
            <p className="p1">Who Am I?</p>
            <h2>About Me</h2>
            <p className="p2">I am a passionate Full Stack Developer with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies, I create seamless user experiences and robust server-side solutions.</p>
            <a href="/images/My_Resume.pdf" target="_blank"><button>Download CV</button></a>
          </div>
        </div>
      </section>

      {/* Skills Section Html Code */}
      <section className="Skills" id="skills">
        <div className="container">
          <div className="heading">
            <h1 className="skillh1">My Skills</h1>
          </div>
          <div className="mainSkill">
            <div className="front">
              <h2>Frontend</h2>
              <div className="box">
                <div className="frontSkill">
                  <img src="/images/html.png" alt="" />
                  HTML
                </div>
                <div className="frontSkill">
                  <img src="/images/Css.png" alt="" />
                  CSS
                </div>
                <div className="frontSkill">
                  <img src="/images/js.png" alt="" />
                  JavaScript
                </div>
                <div className="frontSkill">
                  <img src="/images/react.png" alt="" />
                  ReactJs
                </div>
                <div className="frontSkill">
                  <img src="/images/bootstrap.jpg" alt="" />
                  Bootstrap
                </div>
              </div>
            </div>
            <div className="back">
              <h2>Backend</h2>
              <div className="box">
                <div className="backSkill">
                  <img src="/images/nodejs.png" alt="" />
                  NodeJs
                </div>
                <div className="backSkill">
                  <img src="/images/express-js.png" alt="" />
                  ExpressJs
                </div>
                <div className="backSkill">
                  <img src="/images/mongo.png" alt="" />
                  MongoDB
                </div>
                <div className="backSkill">
                  <img src="/images/mysql.png" alt="" />
                  SQL
                </div>
                <div className="backSkill">
                  <img src="/images/python.png" alt="" />
                  Python
                </div>
              </div>
            </div>
            <div className="datasci">
              <h2>Data Science</h2>
              <div className="box">
                <div className="datasciSkill">
                  <img src="/images/machine.png" alt="" />
                  Machine Learning
                </div>
                <div className="datasciSkill">
                  <img src="/images/deep.png" alt="" />
                  Deep Learning
                </div>
                <div className="datasciSkill">
                  <img src="/images/numpy.png" alt="" />
                  NumPy
                </div>
                <div className="datasciSkill">
                  <img src="/images/pandas.png" alt="" />
                  Pandas
                </div>
                <div className="datasciSkill">
                  <img src="/images/matplot.png" alt="" />
                  Matplotlib
                </div>
                <div className="datasciSkill">
                  <img src="/images/seaborn.png" alt="" />
                  Seaborn
                </div>
                <div className="datasciSkill">
                  <img src="/images/scikit.png" alt="" />
                  Scikit-Learn
                </div>
                <div className="datasciSkill">
                  <img src="/images/tensor.png" alt="" />
                  TensorFlow
                </div>
              </div>
            </div>
            <div className="tools">
              <h2>Tools</h2>
              <div className="box">
                <div className="toolsSkill">
                  <img src="/images/git.png" alt="" />
                  Git
                </div>
                <div className="toolsSkill">
                  <img src="/images/github.png" alt="" />
                  Github
                </div>
                <div className="toolsSkill">
                  <img src="/images/vscode.jpg" alt="" />
                  VS Code
                </div>
                <div className="toolsSkill">
                  <img src="/images/figma.png" alt="" />
                  Figma
                </div>
                <div className="toolsSkill">
                  <img src="/images/canva.jpg" alt="" />
                  Canva
                </div>
                <div className="toolsSkill">
                  <img src="/images/jupyter.png" alt="" />
                  Jupyter Notebook
                </div>
                <div className="toolsSkill">
                  <img src="/images/post.png" alt="" />
                  Postman
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section Html Code */}
      <section className="expirience" id="experience">
        <h1>My <span>Experience</span></h1>
        <div className="container-ex">
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>Senior Software Engineer</h3>
              <span>2020 - Present</span>
              <p>Leading development of enterprise applications using React and Node.js. Implemented CI/CD pipelines and microservices architecture.</p>
            </div>
          </div>

          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>Full Stack Developer</h3>
              <span>2018 - 2020</span>
              <p>Developed and maintained web applications using MERN stack. Collaborated with cross-functional teams to deliver high-quality solutions.</p>
            </div>
          </div>

          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>Frontend Developer</h3>
              <span>2016 - 2018</span>
              <p>Created responsive and interactive user interfaces using HTML, CSS, and JavaScript. Worked on improving website performance and accessibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section Html Code */}
      <section className="project" id="projects">
        <div className="main">
          <h1>Projects</h1>
          <div className="container">
            <div className="card">
              <div className="card-inner" style={{ '--clr': '#fff' } as React.CSSProperties}>
                <div className="box">
                  <div className="imgBox">
                    <img src="/images/project-2-cover.jpg" alt="Project 1" />
                  </div>
                  <div className="icon">
                    <a href="https://github.com/ArchitAgrawal25/Code-Blog" className="iconBox" target="_blank" rel="noopener noreferrer">
                      <span className="material-symbols-outlined">arrow_outward</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="content">
                <h3>CodeBlog</h3>
                <p>A platform for coders and programmers to share blogs on coding and software development.</p>
                <ul>
                  <a href="https://kdgehlot2003.github.io/Code-Blog/" target="_blank" rel="noopener noreferrer"><li className="site">visit site</li></a>
                  <a href="https://github.com/ArchitAgrawal25/Code-Blog" target="_blank" rel="noopener noreferrer"><li className="github">github</li></a>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="card-inner" style={{ '--clr': '#fff' } as React.CSSProperties}>
                <div className="box">
                  <div className="imgBox">
                    <img src="/images/project-3-cover.png" alt="Project 2" />
                  </div>
                  <div className="icon">
                    <a href="https://github.com/ArchitAgrawal25/Visionary" className="iconBox" target="_blank" rel="noopener noreferrer">
                      <span className="material-symbols-outlined">arrow_outward</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="content">
                <h3>Visionary</h3>
                <p>A website that predicts crop diseases and identifies soil types to support smarter farming.</p>
                <ul>
                  <a href="https://visinory.netlify.app/" target="_blank" rel="noopener noreferrer"><li className="site">Visit Site</li></a>
                  <a href="https://github.com/ArchitAgrawal25/Visionary" target="_blank" rel="noopener noreferrer"><li className="github">Github</li></a>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="card-inner" style={{ '--clr': '#fff' } as React.CSSProperties}>
                <div className="box">
                  <div className="imgBox">
                    <img src="/images/project-4-cover.jpg" alt="Project 3" />
                  </div>
                  <div className="icon">
                    <a href="https://github.com/ArchitAgrawal25/Tuberculosis-Detector-TBVIISION" className="iconBox" target="_blank" rel="noopener noreferrer">
                      <span className="material-symbols-outlined">arrow_outward</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="content">
                <h3>TBVision</h3>
                <p>A platform that predicts tuberculosis (TB) from chest X-rays for early and accurate diagnosis.</p>
                <ul>
                  <a href="https://tbvision.netlify.app/" target="_blank" rel="noopener noreferrer"><li className="site">visit site</li></a>
                  <a href="https://github.com/ArchitAgrawal25/Tuberculosis-Detector-TBVIISION" target="_blank" rel="noopener noreferrer"><li className="github">github</li></a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section Html Code */}
      <section className="contact" id="contact">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank">
                <img src="/images/github.png" alt="GitHub" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank">
                <img src="/images/linkedin.svg" alt="LinkedIn" />
              </a>
              <a href="https://medium.com/yourusername" target="_blank">
                <img src="/images/medium.svg" alt="Medium" />
              </a>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
} 