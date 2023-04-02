import React from "react";
import CardComponent from "../Card/CardComponent";
import job_img1 from "../Assests/icons/cargurus.jpg";
import job_img2 from "../Assests/icons/akamai.jpg";
import job_img3 from "../Assests/icons/nok-nok.jpg";
import job_img4 from "../Assests/icons/nokia.jpg";
import job_img5 from "../Assests/icons/wayfair.jpg";
import "./About.css";

function About() {
  let data = [
    {
      title: "CarGurus",
      imageUrl: job_img1,
      body: "CarGurus is an online automotive marketplace for buying and selling new and used cars. The company was founded in 2006 and is based in Cambridge, Massachusetts. CarGurus uses proprietary algorithms to analyze and compare pricing and features of cars listed for sale. The website also provides tools for consumers to find local car dealerships and read dealer reviews. As of 2021, CarGurus operates in several countries including the United States, United Kingdom, and Canada.",
    },

    {
      title: "Akamai",
      imageUrl: job_img2,
      body: "Akamai is a content delivery network and cloud service provider headquartered in Cambridge, Massachusetts, USA. The company was founded in 1998 and has since become a leading provider of cloud services for delivering, optimizing, and securing online content and business applications. Akamai's services include web and mobile performance optimization, cloud security, and media delivery solutions. The company serves customers in a variety of industries, including e-commerce, financial services, media and entertainment, and healthcare. Akamai operates a highly distributed network of servers located in data centers around the world.",
    },
    {
      title: "Nok Nok Labs",
      imageUrl: job_img3,
      body: "Nok Nok Labs is a company that specializes in creating password-free authentication solutions for online platforms. The company was founded in 2012 and is headquartered in California, USA. Their technology enables customers to use biometric authentication methods like fingerprint and facial recognition to access online services. They provide software development kits (SDKs) and authentication servers for businesses to integrate into their websites and mobile applications. Nok Nok Labs has partnerships with major technology companies like Samsung, Fujitsu, and Lenovo.",
    },
    {
      title: "Nokia",
      imageUrl: job_img4,
      body: "Nokia is a Finnish multinational telecommunications company founded in 1865. They are known for their contributions to the development of the GSM mobile phone technology.Currently, Nokia focuses on providing network infrastructure and related services to communications service providers and businesses. Their portfolio includes 5G networks, IP and optical networks, fixed wireless access, and more. Nokia is headquartered in Espoo, Finland and operates in over 100 countries worldwide.",
    },
    {
      title: "Wayfair",
      imageUrl: job_img5,
      body: "Wayfair is an American e-commerce company that sells furniture and home goods. The company was founded in 2002 and is headquartered in Boston, Massachusetts. Wayfair operates globally, with operations in the United States, Canada, the United Kingdom, Germany, and Ireland. The company offers a wide range of products, including furniture, decor, lighting, kitchen appliances, bedding, and more. Wayfair is known for its extensive selection of products, competitive pricing, and customer-friendly policies.",
    },
  ];

  return (
    <div class="about_page">
      <div className="a_card">
        {data.map((elem) => (
          <CardComponent
            title={elem.title}
            imageUrl={elem.imageUrl}
            body={elem.body}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
