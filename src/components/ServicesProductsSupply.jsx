import React, { useState } from "react";
import "../styles/ServicesProductsSupply.css";

const products = [
  {
    title: "Filters & Breathers",
    image: "/produts/filter-breathers.png",
  },
  {
    title: "Lube Hydraulic Filters",
    image: "/produts/hydraulic-filter.jpg",
  },
  {
    title: "Hydraulic Hoses & Fittings",
    image: "/produts/still-tube-fittings.png",
  },
  {
    title: "Hydraulic Pumps",
    image: "/produts/hydraulic-pump.png",
  },
  {
    title: "Hydraulic Cylinders",
    image: "/produts/hydraulic-cylinder.jpg",
  },
  {
    title: "Control Solenoid Valves",
    image: "/produts/control-solenoid-valves.jpg",
  },
  {
    title: "Servo & Proportional Valves",
    image: "/produts/servo-proportional-valves.jpg",
  },
  {
    title: "Electro-Hydraulic Actuators",
    image: "/produts/electro-hydraulic-actuators.png",
  },
  {
    title: "Hydraulic Valves",
    image: "/produts/hydraulic-valve.png",
  },
];

const ServicesProductsSupply = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? products : products.slice(0, 4);

  return (
    <section className="services-products">
      <div className="services-products-container">
        <div className="services-products-header">
          <p className="services-products-label">// Product Supply</p>

          <h2>
            Our Range Of Spares
            <br />
            <span>And Products Supply</span>
          </h2>

          <p className="services-products-intro">
            We supply essential hydraulic spares, components and industrial
            products to support reliable maintenance, repairs and system
            performance.
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
            {showAll ? "View Less Products" : "View More Products"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesProductsSupply;