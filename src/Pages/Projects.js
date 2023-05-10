import React from "react";
import "./Projects.css";
import LineGradient from "../Components/LineGradient";
import Aveyronici from "../Images/aveyronici.png";
import Ecommerce from "../Images/e-commerce.png";
import marketplace from "../Images/housemarketplace.png";
import memorygame from "../Images/memorygame.png";
import moneytracker from "../Images/moneytracker.png";

export default function Projects() {
  return (
    <div className="project-main" id="projects">
      <div className=" w-full flex align-middle justify-center mb-10">
        <p className="font-playfair font-semibold text-4xl mb-5">
          <span className="text-red">PRO</span>JECTS
          <LineGradient width="w-60 mt-0" />
        </p>
      </div>
      <div className="projects">
        <div className="image-container">
          <img src={Aveyronici} alt="Aveyronici" />
          <div className="text-overlay">
            <p className="project-heading">
              <b>Aveyron ICI</b>
            </p>
            <p>
              AVEYRON-ICI is a social platform that helps Aveyronnais to connect
              with each other. Here you can create outputs or participate in
              outings created by others.
            </p>
            <p>
              AVEYRON-ICI also offers to discover the best stores of quality
              which are selected according to their quality, their reputation
              and service.
            </p>
          </div>
        </div>
        <div className="image-container">
          <img src={Ecommerce} alt="Ecommerce" />
          <div className="text-overlay">
            <p className="project-heading">
              <b>Minimalistic Ecommerce</b>
            </p>
            <p>
              Developed this project using React for a dynamic and responsive
              online store, with an intuitive user interface and seamless
              navigation, it contains a wide range of products, including
              images, descriptions, and prices and customers can easily browse
              and add products to their cart.
            </p>
            <p>Technologies Used: HTML, CSS, React.Js, Localstorage.</p>
          </div>
        </div>
        <div className="image-container">
          <img src={marketplace} alt="marketplace" />
          <div className="text-overlay">
            <p className="project-heading">
              <b>House Listing Market Place</b>
            </p>
            <p>
              Build this for to provide an app-like experience. Customers can
              browse through house listings, with detailed information and
              images provided for each property. The addition of Google Maps
              makes it easy for customers to view each property's location and
              surrounding area.
            </p>
            <p>
              Technologies Used: HTML, CSS, React.Js, Firebase Storage and
              Authentication.
            </p>
          </div>
        </div>
        <div className="image-container">
          <img src={memorygame} alt="memorygame" />
          <div className="text-overlay">
            <p className="project-heading">
              <b>Memory Game</b>
            </p>
            <p>
              Ready for a fun mental challenges ? Here is a game with some
              hidden cards to unreveil. As a player your task is to match pairs
              of images that are randomly placed.
            </p>
            <p> Technologies Used: HTML, CSS, React.Js.</p>
          </div>
        </div>
        <div className="image-container">
          <img src={moneytracker} alt="moneytracker" />
          <div className="text-overlay">
            <p className="project-heading">
              <b>Money Tracker</b>
            </p>
            <p>
              A web app that helps users to keep track of their daily expenses.
              Create your account, add the transactions you made and delete them
              when you need to. The app will store the transactions for you, so
              you can come back whenever you wish. Just log back in and you'll
              find everything as you've left it!
            </p>
            <p>
              Technologies Used: HTML, CSS, React.Js, Firebase Storage and
              Authentication.
            </p>
          </div>
        </div>
        <div className="image-container">
          <div className="askformore bg-red flex ">
            <p>React Frameworks</p>
            <p>Mobile Responsive</p>
            <p>User Friendly</p>
          </div>
          {/* <div className="text-overlay">
            <p>More On Demand</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
