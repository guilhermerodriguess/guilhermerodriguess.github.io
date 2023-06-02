/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import './projects.css';
import { v4 } from 'uuid';
import Carousel from 'nuka-carousel';
import CarouselComp from '../../components/carousel/carousel';
import Card from '../../components/card/card';
import projeto1 from '../../assets/images/PROJETO1.png';
// import projeto2 from '../../assets/images/projeto2.png';
// import projeto3 from '../../assets/images/projeto3.png';

function Projects() {
  const cards = [
    {
      key: v4(),
      content: (
        <Card
          projectName="APP DELIVERY"
          image={projeto1}
          alt="Projeto 1"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
        />
      ),
    },
    {
      key: v4(),
      content: (
        <Card
          projectName="APP JURUBEBA"
          image={projeto1}
          alt="Projeto 2"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
        />
      ),
    }, {
      key: v4(),
      content: (
        <Card
          projectName="APP SOLAVANCO"
          image={projeto1}
          alt="Projeto 3"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
        />
      ),
    },
  ];

  return (
    <main className="projects">
      <div className="project mobile">
        <Carousel>
          <div className="card-mobile">
            <section className="card-mobile-container">
              <img src={projeto1} alt="1" className="card-mobile-image" />
              <h1 className="card-mobile-title">
                APP DELIVERY
              </h1>
            </section>
            <div className="card-mobile-description">
              <p>
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."

              </p>
              <div className="card-buttons">
                <button type="button">
                  REPO
                </button>
                <button type="button">
                  SITE
                </button>
              </div>
            </div>
          </div>
          <div className="card-mobile">
            <section className="card-mobile-container">
              <img src={projeto1} alt="2" className="card-mobile-image" />
              <h1 className="card-mobile-title">
                APP ROCOCO
              </h1>
            </section>
            <div className="card-mobile-description">
              <p>
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."

              </p>
              <div className="card-buttons">
                <button type="button">
                  REPO
                </button>
                <button type="button">
                  SITE
                </button>
              </div>
            </div>
          </div>
          <div className="card-mobile">
            <section className="card-mobile-container">
              <img src={projeto1} alt="3" className="card-mobile-image" />
              <h1 className="card-mobile-title">
                APP XUMBREGA
              </h1>
            </section>
            <div className="card-mobile-description">
              <p>
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."

              </p>
              <div className="card-buttons">
                <button type="button">
                  REPO
                </button>
                <button type="button">
                  SITE
                </button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="project desktop">
        <CarouselComp
          cards={cards}
          height="100%"
          width="100%"
          margin="0 auto"
          offset={2}
          showArrows={false}
        />
      </div>
    </main>
  );
}

export default Projects;
