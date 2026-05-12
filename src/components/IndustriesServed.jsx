import React from "react";
import "../styles/IndustriesServed.css";

const industries = [
  {
    title: "Corporate Events",
    description:
      "Professional conferences, product launches, and corporate galas with seamless execution and premium production.",
  },
  {
    title: "Weddings",
    description:
      "Intimate ceremonies and grand receptions tailored to your unique vision with meticulous attention to detail.",
  },
  {
    title: "Festivals",
    description:
      "Large-scale music and cultural festivals featuring stage production, sound systems, and crowd management.",
  },
  {
    title: "Private Parties",
    description:
      "Birthday celebrations, anniversaries, and private gatherings that create lasting memories for you and your guests.",
  },
  {
    title: "Equipment Hire",
    description:
      "Premium event equipment including lighting, sound systems, furniture, and staging for any occasion.",
  },
  {
    title: "Exhibitions",
    description:
      "Trade shows and exhibition setups with professional booth design, lighting, and audiovisual solutions.",
  },
];

const IndustriesServed = () => {
  return (
    <section className="industries-served" id="industries-served">
      <div className="industries-container">

        <div className="industries-header">
          <p className="industries-label">Events We Cover</p>

          <h2>
            Creating Magic For Every Occasion
          </h2>

          <p className="industries-description">
            Opium Events delivers exceptional event planning and equipment hire solutions
            across a diverse range of occasions. From intimate gatherings to large-scale
            productions, we bring professionalism and creativity to every event.
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