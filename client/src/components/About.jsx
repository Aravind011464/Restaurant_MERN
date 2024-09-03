import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to Sizzle & Spice, where passion for food meets a commitment to quality. Our journey began with a simple idea: to create a place where people can come together to enjoy great food, warm hospitality, and a sense of community. From the moment you walk through our doors, you become part of our story. We envision a space where friends, families, and neighbors can gather to celebrate life's moments, big and small. Whether you're here for a casual meal, a special occasion, or just to relax with a cup of coffee, we strive to make each visit memorable.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
