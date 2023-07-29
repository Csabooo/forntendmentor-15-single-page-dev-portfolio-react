import React from "react";

function Attribution() {
  return (
    <div>
      <div className="mt-24 text-center text-[14px]">
        <span>
          Challenge by
          <a
            className="pr-0 underline decoration-green decoration-1 underline-offset-[5px]"
            href="https://www.frontendmentor.io/challenges/singlepage-developer-portfolio-bBVj2ZPi-x"
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
