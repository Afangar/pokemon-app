import React from "react";
import "./carrusel.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

let Carrusel = () => {
  return (
    <Carousel showThumbs={false}>
      <div>
        <img src="/images/Fanart1.jpg" />
        <p className="legend">Illustrated by Moryapanima</p>
      </div>
      <div>
        <img src="/images/Fanart2.jpg" />
        <p className="legend">Illustrated by Sa-dui</p>
      </div>
      <div>
        <img src="/images/Fanart3.jpg" />
        <p className="legend">Illustrated by Tommospidey</p>
      </div>
      <div>
        <img src="/images/Fanart4.jpg" />
        <p className="legend">No author</p>
      </div>
      <div>
        <img src="/images/Fanart5.jpg" />
        <p className="legend">No author</p>
      </div>
      <div>
        <img src="/images/Fanart6.jpg" />
        <p className="legend">Illustrated by toywalkev</p>
      </div>
    </Carousel>
  );
};

export default Carrusel;
