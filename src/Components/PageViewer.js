import React from "react";

export default function PageViewer({ selectedPage }) {
  return (
    <div className="page-viewer">
      <div className={selectedPage === "landing" ? "active" : ""}>
        <a
          href="#landing"
          style={{
            minHeight: "30px",
            minWidth: "30px",
            display: "inline-block",
          }}
        >
          {" "}
        </a>
      </div>
      <div className={selectedPage === "skills" ? "active" : ""}>
        <a
          href="#skills"
          style={{
            minHeight: "30px",
            minWidth: "30px",
            display: "inline-block",
          }}
        >
          {" "}
        </a>
      </div>
      <div className={selectedPage === "projects" ? "active" : ""}>
        <a
          href="#projects"
          style={{
            minHeight: "30px",
            minWidth: "30px",
            display: "inline-block",
          }}
        >
          {" "}
        </a>
      </div>
      <div className={selectedPage === "contact" ? "active" : ""}>
        <a
          href="#contact"
          style={{
            minHeight: "30px",
            minWidth: "30px",
            display: "inline-block",
          }}
        >
          {" "}
        </a>
      </div>
    </div>
  );
}
