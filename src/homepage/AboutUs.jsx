import React from "react";
import "./css/hero.css";
import "./css/nav.css";
import paper_bag from "../images/paper_bag.jpg";
import user_logo from "../images/user_logo.jpeg";
import data from "../images/team.json";

const AboutUs = () => {
  return (
    <div>
      <div className="body">
        <section id="hero" className="container">
          <h1>About Ecoyaan</h1>
          <p>
            At Ecoyaan, we are more than just a platform. Our goal is to build a
            community of eco-conscious people who share a common vision and
            passion for a more sustainable world. We recognize that
            sustainability is a journey (as the Sanskrit word “yaan” suggests).
            To keep you motivated on this journey, on our platform and our
            social media pages
          </p>
        </section>
      </div>
      <div className="values">
        <h1>Our Values</h1>
        <div className="d-flex flex-wrap justify-content-center align-items-start container p-4">
          <div class="card-deck">
            <div class="card shadow-lg p-3 mb-5 bg-white rounded">
              <img class="card-img-top image" src={paper_bag} alt="Card" />
              <div class="card-body">
                <h4 class="font-weight-bold">Trust</h4>
                <p class="card-text"></p>
              </div>
              <div class="card-footer">
                <small class="text-muted"></small>
              </div>
            </div>
            <div class="card shadow-lg p-3 mb-5 bg-white rounded">
              <img class="card-img-top image" src={paper_bag} alt="Card" />
              <div class="card-body">
                <h4 class="font-weight-bold">Authenticity</h4>
                <p class="card-text"></p>
              </div>
              <div class="card-footer">
                <small class="text-muted"></small>
              </div>
            </div>
            <div class="card shadow-lg p-3 mb-5 bg-white rounded">
              <img class="card-img-top image" src={paper_bag} alt="Card" />
              <div class="card-body">
                <h4 class="font-weight-bold">Impact</h4>
                <p class="card-text"></p>
              </div>
              <div class="card-footer">
                <small class="text-muted"></small>
              </div>
            </div>
            <div class="card shadow-lg p-3 mb-5 bg-white rounded">
              <img class="card-img-top image" src={paper_bag} alt="Card" />
              <div class="card-body">
                <h4 class="font-weight-bold">Fun & Engaging</h4>
                <p class="card-text"></p>
              </div>
              <div class="card-footer">
                <small class="text-muted"></small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>Our Story</h1>
        <div class="card-deck">
          <div class="card shadow-lg p-3 mb-5 bg-white rounded flex-row">
            <div className="d-flex flex-column">
              <img class="card-img-top image" src={user_logo} alt="Card" />
              <img class="card-img-top image" src={user_logo} alt="Card" />
            </div>
            <div class="card-body">
              <h5 class="">
                We started Ecoyaan after watching an episode of “Our Planet II”,
                where we saw the devastating impact of plastic pollution and
                climate change on the albatross birds. That moment ignited our
                mission.
              </h5>
              <h5>
                Our research suggests that many Indians understand global
                warming, yet access to sustainable practices and products
                remains limited. We also noticed that there is a lack of support
                for eco-friendly businesses.
              </h5>
              <h5>
                We created Ecoyaan to connect consumers, businesses, and
                sustainability experts. We want to make it easy and convenient
                for people to access eco-friendly products and services, learn
                and share best practices, and support sustainability
                initiatives.
              </h5>
              <h5>
                As founders, we are not perfect, but we are passionate. We
                believe that every small step matters. Join us and be a part of
                the Ecoyaan community — together, we’ll make a difference.
              </h5>
            </div>
            <div class="card-footer">
              <small class="text-muted"></small>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>Meet the Team</h1>
        <div className="d-flex flex-wrap justify-content-center align-items-center p-1">
          <div class="card-deck">
            {data.map((item, index) => {
              return (
                <div
                  class="card shadow-lg p-2 mb-5 bg-white rounded"
                  key={index}
                >
                  <img class="card-img-top image" src={user_logo} alt="Card" />
                  <div class="card-body">
                    <h4 class="font-weight-bold">{item.name}</h4>
                    <h5 class="card-text">{item.role}</h5>
                    <p class="card-text">{item.info}</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted"></small>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
