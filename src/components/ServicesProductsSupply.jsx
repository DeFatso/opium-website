import React from "react";
import "../styles/ServicesProductsSupply.css";

const products = [
  "Filters & Breathers",
  "Lube Hydraulic Filters",
  "Mobile Hose & Fittings Crimping",
  "Hydraulic Hoses & Fittings",
  "Hydraulic Cylinders",
  "Control Solenoid Valves",
  "Servo & Proportional Valves",
  "Electro-Hydraulic Actuators",
  "Control & Amplifier Cards",
  "Hydraulic Pumps",
  "Hydraulic Motors",
  "Coolers",
  "Hydraulic Oils",
  "Seals, Gaskets & O-Rings",
];

const ServicesProductsSupply = () => {
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
          {products.map((product, index) => (
            <div className="services-product-card" key={index}>
              <div className="services-product-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{product}</h3>

              <div className="services-product-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesProductsSupply;