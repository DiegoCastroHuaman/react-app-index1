import "./Normalize.css";
import "./App.css";
import arrow from "./assets/icons/arrow.svg";
import close from "./assets/icons/close.svg";
import code from "./assets/icons/code.svg";
import computer from "./assets/icons/computer.jpg";
import css from "./assets/icons/css.jpg";
import face from "./assets/icons/face.jpg";
import face2 from "./assets/icons/face2.jpg";
import face3 from "./assets/icons/face3.jpg";
import face4 from "./assets/icons/face4.jpg";
import facebook from "./assets/icons/facebook.svg";
import favicon from "./assets/icons/favicon.png";
import leftarrow from "./assets/icons/leftarrow.svg";
import macbook from "./assets/icons/macbook.png";
import menu from "./assets/icons/menu.svg";
import paint from "./assets/icons/paint.svg";
import rightarrow from "./assets/icons/rightarrow.svg";
import shapes from "./assets/icons/shapes.svg";
import twitter from "./assets/icons/twitter.svg";
import youtube from "./assets/icons/youtube.svg";
//import menu from "./components/menu";
import questions from "./components/questions";
import slider from "./components/slider";

function App() {

  const menu = () => {
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');
  
    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });
  
    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });
  
  };
  

  return (
    <div className="container-body">
      <header className="hero">
        <nav className="nav container">
          <div className="nav__logo">
            <h2 className="nav__title">Curso CSS.</h2>
          </div>

          <ul className="nav__link nav__link--menu">
            <li className="nav__items">
              <a href="#" className="nav__links">
                Inicio
              </a>
            </li>
            <li className="nav__items">
              <a href="#" className="nav__links">
                Acerca de
              </a>
            </li>
            <li className="nav__items">
              <a href="#" className="nav__links">
                Contacto
              </a>
            </li>
            <li className="nav__items">
              <a href="#" className="nav__links">
                Blog
              </a>
            </li>

            <img src={close} className="nav__close" />
          </ul>

          <div className="nav__menu">
            <img src={menu} className="nav__img" />
          </div>
        </nav>

        <section className="hero__container container">
          <h1 className="hero__title">Aprende CSS3 desde CERO hasta dominarlo.</h1>
          <p className="hero__paragraph">
            Elige aprender CSS de una vez por todas, una vez que termines este
            curso serás capaz de crear cualquier layout con CSS y crear tus
            propias animaciones.
          </p>
          <a href="#" className="cta">
            Comienza ahora
          </a>
        </section>
      </header>

      <main>
        <section className="container about">
          <h2 className="subtitle">¿Qué aprenderás en este curso?</h2>
          <p className="about__paragraph">
            Todo lo necesario y obligatorio de CSS, (Flexbox, Grid, Custom
            properties, Position, Animaciones, Box Model y más)
          </p>

          <div className="about__main">
            <article className="about__icons">
              <img src={shapes} className="about__icon" />
              <h3 className="about__title">CSS Layouts</h3>
              <p className="about__paragrah">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
                tempore porro eius facilis?
              </p>
            </article>

            <article className="about__icons">
              <img src={paint} className="about__icon" />
              <h3 className="about__title">Animaciones</h3>
              <p className="about__paragrah">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
                tempore porro eius facilis?
              </p>
            </article>

            <article className="about__icons">
              <img src={code} className="about__icon" />
              <h3 className="about__title">Sass</h3>
              <p className="about__paragrah">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
                tempore porro eius facilis?
              </p>
            </article>
          </div>
        </section>

        <section className="knowledge">
          <div className="knowledge__container container">
            <div className="knowledege__texts">
              <h2 className="subtitle">
                Curso completo de CSS3. ¡Domina CSS de una vez por todas!
              </h2>
              <p className="knowledge__paragraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi, aliquam nemo in facere suscipit at delectus unde
                labore ad officia iste accusantium eaque aperiam laborum est
                voluptate totam? Modi, obcaecati?
              </p>
              <a href="#" className="cta">
                Entra al curso
              </a>
            </div>

            <figure className="knowledge__picture">
              <img src={macbook} className="knowledge__img" />
            </figure>
          </div>
        </section>

        <section className="price container">
          <h2 className="subtitle">Obten el plan perfecto para aprender</h2>

          <div className="price__table">
            <div className="price__element">
              <p className="price__name">Flexbox</p>
              <h3 className="price__price">Free</h3>

              <div className="price__items">
                <p className="price__features">Flexbox</p>
                <p className="price__features">Layouts</p>
                <p className="price__features">Responsive</p>
              </div>

              <a href="#" className="price__cta">
                Empieza ahora
              </a>
            </div>

            <div className="price__element price__element--best">
              <p className="price__name">Grid</p>
              <h3 className="price__price">$30/mes</h3>

              <div className="price__items">
                <p className="price__features">Grid</p>
                <p className="price__features">Implicit Grid</p>
                <p className="price__features">Responsive</p>
              </div>

              <a href="#" className="price__cta">
                Empieza ahora
              </a>
            </div>

            <div className="price__element">
              <p className="price__name">Animaciones</p>
              <h3 className="price__price">$40/mes</h3>

              <div className="price__items">
                <p className="price__features">Animation</p>
                <p className="price__features">Transition</p>
                <p className="price__features">Render Website</p>
              </div>

              <a href="#" className="price__cta">
                Empieza ahora
              </a>
            </div>
          </div>
        </section>

        <section className="testimony">
          <div className="testimony__container container">
            <img
              src={leftarrow}
              className="testimony__arrow"
              id="before"
            />

            <section className="testimony__body testimony__body--show" data-id="1">
              <div className="testimony__texts">
                <h2 className="subtitle">
                  Mi nombre es Jordan Alexander,{" "}
                  <span className="testimony__course">estudiante de CSS.</span>
                </h2>
                <p className="testimony__review">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                  est esse, asperiores eaque totam nulla repudiandae quasi,
                  deserunt culpa exercitationem blanditiis laborum veniam
                  laboriosam saepe reiciendis dolorem. Cum, ratione voluptatum!
                </p>
              </div>

              <figure className="testimony__picture">
                <img src={face} className="testimony__img" />
              </figure>
            </section>

            <section className="testimony__body" data-id="2">
              <div className="testimony__texts">
                <h2 className="subtitle">
                  Mi nombre es Alejandra Perez,{" "}
                  <span className="testimony__course">estudiante de CSS.</span>
                </h2>
                <p className="testimony__review">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                  est esse, asperiores eaque laborum veniam laboriosam saepe
                  reiciendis dolorem. Cum, ratione voluptatum!
                </p>
              </div>

              <figure className="testimony__picture">
                <img src={face2} className="testimony__img" />
              </figure>
            </section>

            <section className="testimony__body" data-id="3">
              <div className="testimony__texts">
                <h2 className="subtitle">
                  Mi nombre es Karen Arteaga,{" "}
                  <span className="testimony__course">estudiante de CSS.</span>
                </h2>
                <p className="testimony__review">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                  est esse, niam laboriosam saepe reiciendis dolorem. Cum,
                  ratione voluptatum!
                </p>
              </div>

              <figure className="testimony__picture">
                <img src={face3} className="testimony__img" />
              </figure>
            </section>

            <section className="testimony__body" data-id="4">
              <div className="testimony__texts">
                <h2 className="subtitle">
                  Mi nombre es Kevin Ramirez,{" "}
                  <span className="testimony__course">estudiante de CSS.</span>
                </h2>
                <p className="testimony__review">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                  est esse, niam laboriosam saepe reiciendis dolorem. Cum,
                  ratione voluptatum!
                </p>
              </div>

              <figure className="testimony__picture">
                <img src={face4} className="testimony__img" />
              </figure>
            </section>

            <img
              src={rightarrow}
              className="testimony__arrow"
              id="next"
            />
          </div>
        </section>

        <section className="questions container">
          <h2 className="subtitle">Preguntas frecuentes</h2>
          <p className="questions__paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, porro
            doloribus neque perspiciatis sapiente fuga.
          </p>

          <section className="questions__container">
            <article className="questions__padding">
              <div className="questions__answer">
                <h3 className="questions__title">
                  ¿Qué es CSS?
                  <span className="questions__arrow">
                    <img src={arrow} className="questions__img" />
                  </span>
                </h3>

                <p className="questions__show">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                  facere, quidem eum id excepturi assumenda explicabo nam
                  accusamus veritatis voluptates eveniet adipisci, dicta nihil
                  nemo modi possimus officiis quam atque? Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. Quos facere, quidem eum id
                  excepturi assumenda explicabo nam accusamus veritatis
                  voluptates eveniet adipisci, dicta nihil nemo modi possimus
                  officiis quam atque?
                </p>
              </div>
            </article>

            <article className="questions__padding">
              <div className="questions__answer">
                <h3 className="questions__title">
                  ¿Qué aprenderé en este curso?
                  <span className="questions__arrow">
                    <img src={arrow} className="questions__img" />
                  </span>
                </h3>

                <p className="questions__show">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                  facere, quidem eum id excepturi assumenda explicabo nam
                  accusamus veritatis voluptates eveniet adipisci, dicta nihil
                  nemo modi possimus officiis quam atque? Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. Quos facere, quidem eum id
                  excepturi assumenda explicabo nam accusamus veritatis
                  voluptates eveniet adipisci, dicta nihil nemo modi possimus
                  officiis quam atque?
                </p>
              </div>
            </article>

            <article className="questions__padding">
              <div className="questions__answer">
                <h3 className="questions__title">
                  ¿Qué es CSS GRID?
                  <span className="questions__arrow">
                    <img src={arrow} className="questions__img"/>
                  </span>
                </h3>

                <p className="questions__show">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                  facere, quidem eum id excepturi assumenda explicabo nam
                  accusamus veritatis voluptates eveniet adipisci, dicta nihil
                  nemo modi possimus officiis quam atque? Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. Quos facere, quidem eum id
                  excepturi assumenda explicabo nam accusamus veritatis
                  voluptates eveniet adipisci, dicta nihil nemo modi possimus
                  officiis quam atque?
                </p>
              </div>
            </article>
          </section>

          <section className="questions__offer">
            <h2 className="subtitle">¿Estas listo para aprender CSS?</h2>
            <p className="questions__copy">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              ratione architecto magnam, officiis ex porro vero est voluptates
              quaerat quibusdam illo veniam reprehenderit eius atque tempora
              iure ab non autem.
            </p>
            <a href="#" className="cta">
              Aprende ahora
            </a>
          </section>
        </section>
      </main>

      <footer className="footer">
        <section className="footer__container container">
          <nav className="nav nav--footer">
            <h2 className="footer__title">Curso CSS.</h2>

            <ul className="nav__link nav__link--footer">
              <li className="nav__items">
                <a href="#" className="nav__links">
                  Inicio
                </a>
              </li>
              <li className="nav__items">
                <a href="#" className="nav__links">
                  Acerca de
                </a>
              </li>
              <li className="nav__items">
                <a href="#" className="nav__links">
                  Contacto
                </a>
              </li>
              <li className="nav__items">
                <a href="#" className="nav__links">
                  Blog
                </a>
              </li>
            </ul>
          </nav>

          <form
            className="footer__form"
            action="https://formspree.io/f/mknkkrkj"
            method="POST"
          >
            <h2 className="footer__newsletter">Suscribete a la newsletter</h2>
            <div className="footer__inputs">
              <input
                type="email"
                placeholder="Email:"
                className="footer__input"
                name="_replyto"
              />
              <input type="submit" value="Registrate" className="footer__submit" />
            </div>
          </form>
        </section>

        <section className="footer__copy container">
          <div className="footer__social">
            <a href="#" className="footer__icons">
              <img src={facebook} className="footer__img"/>
            </a>
            <a href="#" className="footer__icons">
              <img src={twitter} className="footer__img"/>
            </a>
            <a href="#" className="footer__icons">
              <img src={youtube} className="footer__img"/>
            </a>
          </div>

          <h3 className="footer__copyright">
            Derechos reservados &copy; Diego Castro
          </h3>
        </section>
      </footer>

      <script src="./js/slider.js"></script>
      <script src="./js/questions.js"></script>
      <script src="./js/menu.js"></script>
    </div>
  );
}

export default App;
