import React from "react";
import "./Projects.css";
import LineGradient from "../Components/LineGradient";

export default function Projects() {
  return (
    <div className="project-main h-screen">
      <div className=" w-full flex align-middle justify-center">
        <p className="font-playfair font-semibold text-4xl mb-5">
          <span className="text-red">PRO</span>JECTS
          <LineGradient width="w-60 mt-0" />
        </p>
      </div>
      <div className="projects">
        <div className="image-container">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aveyron-connect.appspot.com/o/rangreece.jpeg?alt=media&token=927b75f9-1601-4c99-9cac-b8ebd329974a"
            alt="project1"
          />
          <div className="text-overlay">
            <p>Your Text Here</p>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aveyron-connect.appspot.com/o/rangreece.jpeg?alt=media&token=927b75f9-1601-4c99-9cac-b8ebd329974a"
            alt="project1"
          />
          <div className="text-overlay">
            <p>Your Text Here</p>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aveyron-connect.appspot.com/o/rangreece.jpeg?alt=media&token=927b75f9-1601-4c99-9cac-b8ebd329974a"
            alt="project1"
          />
          <div className="text-overlay">
            <p>Your Text Here</p>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aveyron-connect.appspot.com/o/rangreece.jpeg?alt=media&token=927b75f9-1601-4c99-9cac-b8ebd329974a"
            alt="project1"
          />
          <div className="text-overlay">
            <p>Your Text Here</p>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aveyron-connect.appspot.com/o/rangreece.jpeg?alt=media&token=927b75f9-1601-4c99-9cac-b8ebd329974a"
            alt="project1"
          />
          <div className="text-overlay">
            <p>Your Text Here</p>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aveyron-connect.appspot.com/o/rangreece.jpeg?alt=media&token=927b75f9-1601-4c99-9cac-b8ebd329974a"
            alt="project1"
          />
          <div className="text-overlay">
            <p>Your Text Here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
