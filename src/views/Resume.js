import React from "react";

export const Resume = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {/* <a href="/Resume.pdf" download>
        Download My Resume
      </a> */}
      <iframe
        src="/Resume.pdf"
        title="My Resume"
        style={{ width: "100%", height: "100%" }}
        frameBorder="0"
      ></iframe>
    </div>
  );
};
