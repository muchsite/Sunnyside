import React from "react";
import emily from "../../images/image-emily.jpg";
import jennie from "../../images/image-jennie.jpg";
import thomas from "../../images/image-thomas.jpg";
import "./testimonial.scss";
function Testimonial() {
  const clients = [
    {
      img: emily,
      desc: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      name: "Emily R.",
      prof: "Marketing Director",
    },
    {
      img: thomas,
      desc: "Sunnyside`s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
      name: "Thomas S.",
      prof: "Chief Operating Officer",
    },
    {
      img: jennie,
      desc: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      name: "Jennie F.",
      prof: "Business Owner",
    },
  ];
  return (
    <section className="client_section">
      <h2>CLIENT TESTIMONIAL</h2>
      <div className="client_cont">
        {clients.map((item, index) => {
          return (
            <div className="client" key={index}>
              <img src={item.img} alt="" />
              <div className="client_info">
                <p>{item.desc}</p>
                <h3>{item.name}</h3>
                <h4>{item.prof}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Testimonial;
