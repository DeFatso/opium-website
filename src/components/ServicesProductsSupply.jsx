import React, { useState } from "react";
import "../styles/ServicesProductsSupply.css";

const products = [
  {
    title: "Sound Systems",
    image: "/produts/sound-system.jpg",
  },
  {
    title: "LED Lighting & Truss",
    image: "/produts/truss.jpg",
  },
  {
    title: "Staging & Risers",
    image: "/produts/risers.jpg",
  },
  {
    title: "Dance Floors",
    image: "/produts/stage.jpg",
  },
  {
    title: "Furniture & Lounge",
    image: "/produts/furniture.jpg",
  },
  {
    title: "Tents & Gazebos",
    image: "/produts/tents.jpg",
  },
  {
    title: "Projectors & Screens",
    image: "/produts/projectors.jpg",
  },
  {
    title: "Catering Equipment",
    image: "/produts/catering.jpg",
  },
  {
    title: "Decor & Linens",
    image: "/produts/decor.jpg",
  },
];

const ServicesProductsSupply = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? products : products.slice(0, 4);

  return (
    <section className="services-products">
      <div className="services-products-container">
        <div className="services-products-header">
          <p className="services-products-label">// Equipment Hire</p>

          <h2>
            Premium Event Equipment
            <br />
            <span>For Every Occasion</span>
          </h2>

          <p className="services-products-intro">
            We supply premium event equipment including sound systems, lighting, staging,
            furniture, and decor to bring your vision to life with professional quality
            and reliability.
          </p>
        </div>

        <div className="services-products-grid">
          {visibleProducts.map((product, index) => (
            <div className="services-product-card" key={index}>
              <div className="services-product-image">
                <img src={product.image} alt={product.title} />
              </div>

              <div className="services-product-content">
                <div className="services-product-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>{product.title}</h3>

                <div className="services-product-line"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="services-products-button-wrapper">
          <button
            className="services-products-button"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "View Less Equipment" : "View More Equipment"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesProductsSupply;