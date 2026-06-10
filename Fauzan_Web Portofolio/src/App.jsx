import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function App() {
  useEffect(() => {
    const swiperScript = document.createElement('script');
    swiperScript.src = './packages/js/swiper-bundle.min.js';
    swiperScript.async = false;
    document.body.appendChild(swiperScript);

    const mainScript = document.createElement('script');
    mainScript.src = './packages/js/main.js';
    mainScript.async = false;
    document.body.appendChild(mainScript);

    return () => {
      document.body.removeChild(swiperScript);
      document.body.removeChild(mainScript);
    };
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
      reset: true
    });

    sr.reveal(`.home__data, .about__img, .skills__content, .qualification__tabs`);
    sr.reveal(`.home__img, .about__data, .portfolio__container`, { delay: 600 });
    sr.reveal(`.qualification__sections, .contact__container`, { interval: 100 });
    sr.reveal(`.section__title, .section__subtitle`, { origin: 'left' });
  }, []);

  return (
    <>


      <header className="header" id="header">
        <nav className="nav container">
          <a className="nav__logo" href="#">Fauzan Azima</a>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list grid">
              <li className="nav__item">
                <a className="nav__link" href="#home">
                  <i className="uil uil-estate nav__icon"></i>Home
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#about">
                  <i className="uil uil-user nav__icon"></i>About
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#skills">
                  <i className="uil uil-file-alt nav__icon"></i>Skills
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#qualification">
                  <i className="uil uil-scenery nav__icon"></i>Qualification
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#portfolio">
                  <i className="uil uil-scenery nav__icon"></i>Portfolio
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#contact">
                  <i className="uil uil-message nav__icon"></i>Contact
                </a>
              </li>
            </ul>
            <i className="uil uil-times nav__close" id="nav-close"></i>
          </div>
          <div className="nav__btns">

            <i className="uil uil-moon change-theme" id="theme-button"></i>
            <div className="nav__toggle" id="nav-toggle">
              <i className="uil uil-apps"></i>
            </div>
          </div>
        </nav>
      </header>

      <main className="main">

        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__content grid">
              <div className="home__social">
                <a className="home__social-icon" href="https://www.linkedin.com/in/fauzan-azima-1708452a5/" target="_blank">
                  <i className="uil uil-linkedin-alt"></i>
                </a>
                <a className="home__social-icon" href="https://www.instagram.com/faoezan.a/?hl=en" target="_blank">
                  <i className="uil uil-instagram-alt"></i>
                </a>
                <a className="home__social-icon" href="https://github.com/AzimaF" target="_blank">
                  <i className="uil uil-github-alt"></i>
                </a>
              </div>
              <div className="home__img">
                <svg className="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <mask id="mask0" maskType="alpha">
                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                  </mask>
                  <g mask="url(#mask0)">
                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                    <image className="home__blob-img" x="" xlinkHref="./packages/images/FAUZAN_BEBAS.JPG" />
                  </g>
                </svg>
              </div>
              <div className="home__data">
                <h1 className="home__title">Hi, I'am Fauzan Azima</h1>
                <h3 className="home__subtitle">Web, Mobile Dev &amp; Ui/Ux Design</h3>
                <p className="home__description">Experience in web development, ui/ux design and mobile development.</p>
                <a className="button button--flex home__button" href="#contact">
                  Contact Me<i className="uil uil-message button__icon"></i>
                </a>
              </div>
            </div>
            <div className="home__scroll">
              <a className="home__scroll-button button--flex" href="#about">
                <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                <span className="home__scroll-name">Scroll Down</span>
                <i className="uil uil-arrow-down home__scroll-arrow"></i>
              </a>
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <h2 className="section__title">About Me</h2>
          <span className="section__subtitle">My Introduction</span>
          <div className="about__container container grid">
            <img alt="" className="about__img" src="./packages/images/Pass Foto Biru.png" />
            <div className="about__data">
              <p className="about__description">
                Ui/Ux Design, Web &amp; android Developer, with extensive knowledge and years of experience,
                Independent Study at Bangkit Academy and Laboratory assistant at informatics engineering UMJ.
              </p>
              <div className="about__info">
                <div>
                  <span className="about__info-title">02+</span>
                  <span className="about__info-name">Years <br /> experience</span>
                </div>
                <div>
                  <span className="about__info-title">05+</span>
                  <span className="about__info-name">Completed <br /> certifications</span>
                </div>
                <div>
                  <span className="about__info-title">01+</span>
                  <span className="about__info-name">companies<br />worked</span>
                </div>
              </div>
              <div className="about__buttons">
                <a className="button button--flex" download="" href="./packages/pdf/CV Fauzan .pdf">
                  Download CV<i className="uil uil-download-alt button__icon"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <h2 className="section__title">Skills</h2>
          <span className="section__subtitle">My technical level</span>
          <div className="skills__container container grid">
            <div>

              <div className="skills__content skills__open">
                <div className="skills__header">
                  <i className="uil uil-analytics skills__icon"></i>
                  <div>
                    <h1 className="skills__title">General Programming</h1>
                    <span className="skills__subtitle">More than 2 years</span>
                  </div>
                  <i className="uil uil-angle-down skills__arrow"></i>
                </div>
                <div className="skills__list grid">
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Data Structures &amp; Algorithm</h3>
                      <span className="skills__number">60%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__python"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Dynamic Programming</h3>
                      <span className="skills__number">70%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__tab"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Code Optimization</h3>
                      <span className="skills__number">50%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__sql"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Safe-written Code</h3>
                      <span className="skills__number">70%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__google"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>

              <div className="skills__content skills__close">
                <div className="skills__header">
                  <i className="uil uil-brackets-curly skills__icon"></i>
                  <div>
                    <h1 className="skills__title">Web &amp; Android Development</h1>
                    <span className="skills__subtitle">More than 2 years</span>
                  </div>
                  <i className="uil uil-angle-down skills__arrow"></i>
                </div>
                <div className="skills__list grid">
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">ReactJS</h3>
                      <span className="skills__number">60%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__html"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Java</h3>
                      <span className="skills__number">80%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__css"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Kotlin</h3>
                      <span className="skills__number">70%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__js"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Javascript</h3>
                      <span className="skills__number">60%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__wordpress"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skills__content skills__close">
              <div className="skills__header">
                <i className="uil uil-money-bill skills__icon"></i>
                <div>
                  <h1 className="skills__title">Ui/Ux Design</h1>
                  <span className="skills__subtitle">More than 2 years</span>
                </div>

              </div>

            </div>
          </div>
        </section>

        <section className="qualification__section" id="qualification">
          <h2 className="section__title">Qualification</h2>
          <span className="section__subtitle">My personal journey</span>
          <div className="qualification__container container">
            <div className="qualification__tabs">
              <div className="qualification__button button--flex qualification__active" data-target="#education">
                <i className="uil uil-graduation-cap qualification__icon"></i>
                Education
              </div>
              <div className="qualification__button button--flex" data-target="#work">
                <i className="uil uil-briefcase-alt qualification__icon"></i>
                Experience
              </div>
            </div>
            <div className="qualification__sections">

              <div className="qualification__content qualification__active" data-content="" id="education">

                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">High School Graduate</h3>
                    <span className="qualification__subtitle">Baitul Qur'an Islamic Boarding School High School</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2018 - 2021
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                  <div>
                    <h3 className="qualification__title">Independent study of mobile development</h3>
                    <span className="qualification__subtitle">Bangkit Academy Batch 2</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      September 2024 - Present
                    </div>
                  </div>
                </div>

                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Currently studying for a bachelor's degree in informatics engineering</h3>
                    <span className="qualification__subtitle">Muhammadiyah University of Jakarta</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2022 - Present
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>

                  </div>
                </div>




              </div>

              <div className="qualification__content" data-content="" id="work">

                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title"> Tahfidz Teacher of the Qur'an</h3>
                    <span className="qualification__subtitle"> House Of Qur'an Insan Mulia </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2022 - 2024
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                  <div>
                    <h3 className="qualification__title"> Futsal Coach </h3>
                    <span className="qualification__subtitle"> MI Al-Munawwarah</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2023 - 2024
                    </div>
                  </div>
                </div>

                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Laboratory Assistant</h3>
                    <span className="qualification__subtitle">Informatics Engineering UMJ</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2023 - Present
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                  <div>
                    <h3 className="qualification__title"> Mentor Tahsin &amp; Tahfidz AIK FT-UMJ </h3>
                    <span className="qualification__subtitle"> AIK Faculty of Engineering UMJ</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2023 - Present
                    </div>
                  </div>
                </div>

                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Head of the Science &amp; Technology Department</h3>
                    <span className="qualification__subtitle">HMIF BEM FT-UMJ</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      February 2024 - October 2024
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"></span>

                  </div>
                  <div>
                    <h3 className="qualification__title"> Deputy Chairman of the Association </h3>
                    <span className="qualification__subtitle"> HMIF BEM FT-UMJ</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2024 - Present
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div></section>

        <section className="portfolio section" id="portfolio">
          <h2 className="section__title">Portfolio</h2>
          <span className="section__subtitle">Most recent works</span>
          <div className="portfolio__container container swiper-container">
            <div className="swiper-wrapper">

              <div className="portfolio__content grid swiper-slide">
                <img alt="" className="portfolio__img" src="./packages/images/ajemTrip.png" />
                <div className="portfolio_">
                  <h3 className="portfolio__title">Ajem Trip Travel</h3>
                  <p className="portfolio__description">Ajem Trip travel application that supports users in booking
                    travel tickets and accommodation with a good responsive display.</p>
                  <a className="button button--flex button--small portfolio__button" href="#">
                    Demo
                    <i className="uil uil-arrow-right button__icon"></i>
                  </a>
                </div>
              </div>

              <div className="portfolio__content grid swiper-slide">
                <img alt="" className="portfolio__img" src="./packages/images/marvelapp.jpg" />
                <div className="portfolio_">
                  <h3 className="portfolio__title">MarvelApp Android</h3>
                  <p className="portfolio__description">The MarvelApp application displays 10 types of Marvel
                    films with a short description of each story and can also share the types of films.</p>
                  <a className="button button--flex button--small portfolio__button" href="#">
                    Demo
                    <i className="uil uil-arrow-right button__icon"></i>
                  </a>
                </div>
              </div>

              <div className="portfolio__content grid swiper-slide">
                <img alt="" className="portfolio__img" src="./packages/images/dicodingevent.jpg" />
                <div className="portfolio_">
                  <h3 className="portfolio__title">Dicoding Event Android</h3>
                  <p className="portfolio__description">Dicoding Event application that displays ongoing
                    and finished events with a description of the event, and can make some of these
                    events favorites.</p>
                  <a className="button button--flex button--small portfolio__button" href="#">
                    Demo
                    <i className="uil uil-arrow-right button__icon"></i>
                  </a>
                </div>
              </div>
              <div className="portfolio__content grid swiper-slide">
                <img alt="" className="portfolio__img" src="./packages/images/canalyze.jpg" />
                <div className="portfolio_">
                  <h3 className="portfolio__title">Cancer Analyze Android</h3>
                  <p className="portfolio__description">The cancer analysis application can take images
                    from the Android gallery and analyze the image to see whether it contains cancer
                    or not.</p>
                  <a className="button button--flex button--small portfolio__button" href="#">
                    Demo
                    <i className="uil uil-arrow-right button__icon"></i>
                  </a>
                </div>
              </div>
              <div className="portfolio__content grid swiper-slide">
                <img alt="" className="portfolio__img" src="./packages/images/dicodingstory.jpg" />
                <div className="portfolio_">
                  <h3 className="portfolio__title">Dicoding Story App Android</h3>
                  <p className="portfolio__description">The Dicoding Story App displays several stories
                    from other people's dicoding accounts and can create stories with each dicoding
                    account.</p>
                  <a className="button button--flex button--small portfolio__button" href="#">
                    Demo
                    <i className="uil uil-arrow-right button__icon"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="swiper-button-next">
              <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
            </div>
            <div className="swiper-button-prev">
              <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
            </div>

            <div className="swiper-pagination"></div>
          </div>
        </section>
        <div className="prt" style={{ marginTop: "50px" }}>
          <a className="button button--flex" download="" href="./packages/pdf/CV Fauzan .pdf">
            Download Portfolio<i className="uil uil-download-alt button__icon"></i>
          </a>
        </div>

        <section className="contact section" id="contact">
          <h2 className="section__title">Contact me</h2>
          <span className="section__subtitle">Get in touch</span>
          <div className="contact__container container grid">
            <div>
              <div className="contact__information">
                <i className="uil uil-phone-alt contact__icon"></i>
                <div>
                  <h3 className="contact__title">Call me</h3>
                  <a className="no_hp" href="https://wa.me/6289602693952">
                    <span className="contatc__subtitle">(+62) 89602693952</span>
                  </a>
                </div>
              </div>
              <div className="contact__information">
                <i className="uil uil-envelope contact__icon"></i>
                <div>
                  <h3 className="contact__title">E-mail</h3>
                  <a className="email" href="https://mail.google.com/mail/u/0/?view=cm&amp;tf=1&amp;fs=1&amp;to=azzamfauzan21@gmail.com">
                    <span className="contatc__subtitle">azzamfauzan21@gmail.com</span>
                  </a>
                </div>
              </div>
              <div className="contact__information">
                <i className="uil uil-map-marker contact__icon"></i>
                <div>
                  <h3 className="contact__title">Location</h3>
                  <span className="contatc__subtitle">Tangerang, Indonesia.</span>
                </div>
              </div>
            </div>
            <form action="" className="contact__form grid">
              <div className="contact__inputs grid">
                <div className="contact__content">
                  <label className="contact__label" htmlFor="">Name</label>
                  <input className="contact__input" type="text" />
                </div>
                <div className="contact__content">
                  <label className="contact__label" htmlFor="">E-mail</label>
                  <input className="contact__input" type="email" />
                </div>
              </div>
              <div className="contact__content">
                <label className="contact__label" htmlFor="">Subject</label>
                <input className="contact__input" type="text" />
              </div>
              <div className="contact__content">
                <label className="contact__label" htmlFor="">Description</label>
                <textarea className="contact__input" cols="0" id="" name="" rows="7"></textarea>
              </div>
              <div>
                <a className="button button--flex" href="#">
                  Send message
                  <i className="uil uil-message button__icon"></i>
                </a>
              </div>
            </form>
          </div>
        </section>
      </main>

      <a className="scrollup" href="#" id="scroll-up">
        <i className="uil uil-arrow-up scrollup__icon"></i>
      </a>





    </>
  );
}

export default App;
