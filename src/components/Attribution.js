import React from "react";

function Attribution() {
  return (
    <div>
      <div className="my-8 text-center text-[14px]">
        <span>
          Challenge by
          <a
            className="pr-0 underline decoration-green decoration-1 underline-offset-[5px]"
            href="https://csabooo.github.io/forntendmentor-15-single-page-dev-portfolio-react/"
            target="_blank"
            rel="noreferrer">
            {" "}
            Frontend Mentor.{" "}
          </a>
          Coded by
          <a
            className="pr-0 underline decoration-green decoration-1 underline-offset-[5px]"
            href="https://www.frontendmentor.io/profile/Csabooo">
            {" "}
            Csaba Müller.
          </a>
        </span>
      </div>
    </div>
  );
}

export default Attribution;
