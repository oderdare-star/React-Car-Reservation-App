import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

import BgShape from "../images/hero/hero-bg.png";
import HeroCar from "../images/hero/main-car.png";

function Hero() {
  const [showScrollUp, setShowScrollUp] = useState(false);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToBooking = useCallback(() => {
    const section = document.querySelector("#booking-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowScrollUp(window.pageYOffset > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="hero-section" aria-label="Hero banner">
      <div className="container">
        <img
          className="bg-shape"
          src={BgShape}
          alt=""
          role="presentation"
        />

        <div className="hero-content">
          <div className="hero-content__text">
            <h4>🇲🇦 Welcome to Omar Car</h4>
            <h1>
              Explore <span>Morocco</span> with the best rental deals
            </h1>
            <p>
              From the vibrant souks of Marrakech to the blue alleys of 
              Chefchaouen, Omar Car offers reliable, affordable, and premium 
              vehicles for every journey. Drive across the Kingdom with 
              confidence and comfort.
            </p>

            <div className="hero-content__text__btns">
              <button
                className="hero-content__text__btns__book-ride"
                onClick={scrollToBooking}
                aria-label="Book a car in Morocco now"
              >
                Book Your Ride &nbsp;
                <i className="fa-solid fa-check" aria-hidden="true" />
              </button>

              <Link
                className="hero-content__text__btns__learn-more"
                to="/PickCar"
                aria-label="View our full fleet in Morocco"
              >
                View Our Fleet &nbsp;
                <i className="fa-solid fa-car" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <img
            src={HeroCar}
            alt="Luxury rental car available in Morocco"
            className="hero-content__car-img"
            loading="lazy"
          />
        </div>
      </div>

      <button
        className={`scroll-up ${showScrollUp ? "show-scroll" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        type="button"
      >
        <i className="fa-solid fa-angle-up" aria-hidden="true" />
      </button>
    </section>
  );
}

export default Hero;