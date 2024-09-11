import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import pool1 from "../assets/images/images_pools/pool-5055009.jpg";
import pool2 from "../assets/images/images_pools/pool-1318072.jpg";
import pool3 from "../assets/images/images_pools/swimming-pool-1737173.jpg";
import pool4 from "../assets/images/images_pools/swimming-pool-389267_1920.jpg";
import pool5 from "../assets/images/images_pools/water-3292794.jpg";

const Pools = () => {
  return (
    <section
      id="piscinas"
      className="bg-gray-100 xl:p-30 p-2 flex flex-col md:flex-row items-center justify-center "
    >
      <div className="md:col-span-3 flex flex-col items-center justify-center p-10 order-1 md:order-2">
        <h1 className="text-4xl md:text-7xl font-bold text-center text-indigo-950 leading-normal">
          Te Presentamos Algunas De Nuestras{" "}
          <span className="text-indigo-400">Piscinas</span>
        </h1>

        <p className="text-lg md:text-xl text-center text-gray-700 mt-4">
          Explora nuestra colección de impresionantes diseños de piscinas que
          combinan estética y funcionalidad. Cada proyecto refleja nuestro
          compromiso con la calidad y el diseño innovador.
        </p>

        <div
          id="carouselExampleControlsNoTouching"
          className="carousel slide md:col-span-4 ml-6 mr-6 mt-2 mb-2 order-2 md:order-1 w-60vh"
          data-bs-touch="false"
          data-bs-interval="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={pool1} className="d-block w-100" alt="Pool 1" />
            </div>
            <div className="carousel-item">
              <img src={pool2} className="d-block w-100" alt="Pool 2" />
            </div>
            <div className="carousel-item">
              <img src={pool3} className="d-block w-100" alt="Pool 3" />
            </div>
            <div className="carousel-item">
              <img src={pool4} className="d-block w-100" alt="Pool 4" />
            </div>
            <div className="carousel-item">
              <img src={pool5} className="d-block w-100" alt="Pool 5" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pools;