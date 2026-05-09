import React from "react";
import "../styles/IndustriesServed.css";

const industries = [
  {
    title: "Mining",
    description:
      "Hydraulic maintenance and engineering support for heavy-duty mining equipment and systems.",
  },
  {
    title: "Manufacturing",
    description:
      "Reliable hydraulic solutions that keep industrial production lines operating efficiently.",
  },
  {
    title: "Construction",
    description:
      "Support for hydraulic machinery, lifting equipment, and construction site systems.",
  },
  {
    title: "Agriculture",
    description:
      "Repair and servicing solutions for agricultural hydraulic machinery and equipment.",
  },
  {
    title: "Transport",
    description:
      "Hydraulic servicing and component supply for transport and fleet operations.",
  },
  {
    title: "Energy",
    description:
      "Engineering and hydraulic support for energy infrastructure and industrial operations.",
  },
];

const IndustriesServed = () => {
  return (
    <section className="industries-served" id="industries-served">
      <div className="industries-container">

        <div className="industries-header">
          <p className="industries-label">Industries We Serve</p>

          <h2>
            Trusted Across Multiple Industrial Sectors
          </h2>

          <p className="industries-description">
            Hyses provides hydraulic and engineering solutions to a wide
            range of industries, delivering reliable support, maintenance,
            and technical expertise where performance matters most.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div className="industry-card" key={index}>
              <div className="industry-number">
                0{index + 1}
              </div>

              <h3>{industry.title}</h3>

              <p>{industry.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IndustriesServed;