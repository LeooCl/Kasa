import React from "react";
import Banner from "../partials/Banner/banner";
import Collapse from "../partials/Collapse/Collapse";
import image from "@/assets/imgbannerabout.png";
import aboutArray from "../../../public/aboutArray.json";

const About = () => {
console.log(aboutArray);
  return (
    <>
      <main>
        <section>
          <div className="banner-style-in-about-page">
            <Banner image={image} />
          </div>
        </section>
        <section>
          {aboutArray.map((rule, id) => (
            <Collapse
              key={id}
              aboutTitle={rule.aboutTitle}
              aboutText={rule.aboutText}
              aboutStyle="about-style"
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default About;
