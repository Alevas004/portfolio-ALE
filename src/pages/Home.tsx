import "./Home.css";
import { BsChevronDown } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TextWelcome from "../components/TextWelcome/TextWelcome";
import { SplitText } from "gsap/all";

const Home = () => {
  const [touched, setTouched] = useState(false);

  const handleTouch = () => {
    setTouched((prev) => !prev);
  };

  gsap.registerPlugin(ScrollTrigger, SplitText);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
      },
    });

    tl.to("#home-picture", { duration: 1, scale: 1 })
      .to("#logo", { opacity: 0 }, "<")
      .to("#footer-logo", { opacity: 0 }, "<")
      .to("#logo-mask", { maskSize: "clamp(20vh, 25%, 30vh)" }, 0.15)
      .to("#content-outside", { opacity: 1, visibility: "visible" }, 0.5)
      
  tl.to("#text-ale", {
  visibility: "visible",
  opacity: 1,
  duration: 0.5,
  onStart: () => {
    // Ejecutamos la animación SIN meterla en el timeline
    requestAnimationFrame(() => {
      const split = new SplitText("#heading", { type: "chars" });
      gsap.from(split.chars, {
        y: 500,
        autoAlpha: 0,
        stagger: 0.07,
      });
    });
  },
});
  }, []);

  return (
    <>
      <div className="main-content__home">
        <div id="logo-mask" className="fixed top-0 w-full h-screen ">
          <section className="bg-red-500 h-screen ">
            <picture
              id="home-picture"
              className="h-screen inset-0 scale-125 block overflow-hidden fixed"
            >
              <img
                id="logo"
                src="/logo-w.png"
                alt="Logo ALE"
                className="absolute left-1/2 top-25 -translate-x-1/2 object-contain
                      max-w-[320px] sm:max-w-[400px] md:max-w-[550px]top-1"
              />
              <img
                id="bg"
                src="/bg.svg"
                alt="Fondo"
                className="w-full h-full object-cover"
              />
            </picture>
            <div className=" fixed flex flex-col items-center justify-between h-screen w-[calc(100%-5rem)] top-2 left-1/2 transform -translate-x-1/2 ">
              <header className="flex items-center group justify-between w-full ">
                <div className="relative w-20 h-20 ">
                  <img
                    src="/logo-peke1.png"
                    alt="Logo normal"
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                  />
                  <img
                    src="/logo-peke2.png"
                    alt="Logo hover"
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  />
                </div>
                <Link to="" className="text-white">
                  <button type="button">
                    <BsChevronDown
                      color="white"
                      fill="rgba(255, 0, 250, 0.5)"
                      size={15}
                      className="drop-shadow-[0_0_2px_rgba(255,0,250,0.5)] animate-bounce"
                    />
                  </button>
                </Link>
              </header>
            </div>

            <footer className="fixed w-full bottom-0">
              <div className="flex justify-center flex-col items-center">
                <div
                  id="footer-logo"
                  onClick={handleTouch}
                  className={`relative group w-[180px] h-[180px] flex items-center justify-center ${
                    touched ? "touched" : ""
                  }`}
                >
                  {/* Imagen por defecto (React) */}
                  <img
                    src="/react2.svg"
                    alt="Logo React"
                    className="absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0 touched:opacity-0 
    drop-shadow-[0_0_2px_rgba(255,255,250,0.5)] w-full h-full object-contain"
                  />

                  {/* Imagen al hacer hover (Node) */}
                  <img
                    src="/node.svg"
                    alt="Logo Node"
                    className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100 touched:opacity-100 
    drop-shadow-[0_0_2px_rgba(255,255,250,0.5)] w-full h-full object-contain"
                  />

                  {/* Texto centrado */}
                  <span className="absolute uppercase text-2xl text-[var(--color-texto)] pointer-events-none transition-opacity duration-300 opacity-100 group-hover:opacity-0 touched:opacity-0">
                    front-end developer
                  </span>
                  <span className="absolute uppercase text-2xl text-[var(--color-texto)] pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 touched:opacity-100">
                    back-end developer
                  </span>
                </div>
                <div className="flex flex-col items-center mt-4">
                  <BsChevronDown
                    color="white"
                    size={60}
                    className="drop-shadow-[0_0_2px_rgba(255,0,250,0.5)] animate-bounce"
                  />

                  <p className="text-gray-400 text-center mt-4 text-sm">
                    © 2025 ALE - All rights reserved
                  </p>
                </div>
              </div>
            </footer>
          </section>
        </div>
        {/* Contenido AFUERA */}
        <div
          id="content-outside"
          className="opacity-0 invisible transition-opacity duration-200"
        >
          <div className=" fixed flex flex-col items-center justify-between h-screen w-[calc(100%-5rem)] top-2 left-1/2 transform -translate-x-1/2 ">
            <header className=" flex items-center  justify-between w-full">
              <div className="relative w-20 h-20 group">
                <img
                  src="/logo-peke1.png"
                  alt="Logo normal"
                  className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                />
                <img
                  src="/logo-peke2.png"
                  alt="Logo hover2"
                  className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </div>
              <div className="relative group">
                <Link
                  to="/about"
                  className=" text-white right-[calc(10%)] top-0  group-hover:group-hover:opacity-100 transition-all duration-300 "
                >
                  <button type="button" className="btn-info">
                   + INFO
                  </button>
                  {/* Imagen preview */}
                  <div className="absolute top-0 right-0 mt-2 w-64 h-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 shadow-xl">
                    <img
                      src="/hover-info.jpg"
                      alt="Vista previa"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </Link>
              </div>
            </header>
          </div>
          <div
            id="text-ale"
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[100px] w-[350px] flex items-center justify-center text-black"
          >
            <TextWelcome />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
