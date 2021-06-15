import React from "react";
import "./HeroSection.css";
import bgImage from "../../img/hero-bg.jpg";

const HeroSection = () => {
  return (
    // <!-- ======= hero Section ======= -->
    <section id="hero">
      <div class="hero-container">
        <div
          id="heroCarousel"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <ol id="hero-carousel-indicators" class="carousel-indicators"></ol>

          <div class="carousel-inner" role="listbox">
            <div
              class="carousel-item active"
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              <div class="carousel-container">
                <div class="container">
                  <h2 class="animate__animated animate__fadeInDown">
                    Welcome To AJ&CO.
                  </h2>
                  <p class="animate__animated animate__fadeInUp">
                    We are assisting businesses to up-lift their brand
                    reputation by proving exemplary contact center services.
                  </p>
                  <a
                    href="#about"
                    class="btn-get-started scrollto animate__animated animate__fadeInUp"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            {/*       
                <div class="carousel-item" style="background-image: url(assets/img/hero-carousel/2.jpg)">
                  <div class="carousel-container">
                    <div class="container">
                      <h2 class="animate__animated animate__fadeInDown">Goal Oriented Services</h2>
                      <p class="animate__animated animate__fadeInUp">The company’s dedication to build trust, rise expectation.</p>
                      <a href="#about" class="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a>
                    </div>
                  </div>
                </div>
      
                <div class="carousel-item" style="background-image: url(assets/img/hero-carousel/3.jpg)">
                  <div class="carousel-container">
                    <div class="container">
                      <h2 class="animate__animated animate__fadeInDown">Goal Oriented Services</h2>
                      <p class="animate__animated animate__fadeInUp">The company’s dedication to imprinting a professional image is creating new success stories.</p>
                      <a href="#about" class="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a>
                    </div>
                  </div>
                </div> */}
          </div>

          <a
            class="carousel-control-prev"
            href="#heroCarousel"
            role="button"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon bi bi-chevron-left"
              aria-hidden="true"
            ></span>
          </a>

          <a
            class="carousel-control-next"
            href="#heroCarousel"
            role="button"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon bi bi-chevron-right"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      </div>
    </section>
    // <!-- End Hero Section -->
  );
};

export default HeroSection;
