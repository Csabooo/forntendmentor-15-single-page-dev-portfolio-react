import React from "react";

function Main() {
  return (
    <div className="md:grid grid-cols-2 grid-rows-3 md:justify-items-start md:text-left xl:grid-cols-3 xl:grid-flow-rows-2 xl: pt-4">
      <div>
        <h2 className="technologies">HTML</h2>
        <p>4 Years Experience</p>
      </div>
      <div>
        <h2 className="technologies">CSS</h2>
        <p>4 Years Experience</p>
      </div>
      <div>
        <h2 className="technologies">Javascript</h2>
        <p>4 Years Experience</p>
      </div>
      <div>
        <h2 className="technologies">Accessibility</h2>
        <p>4 Years Experience</p>
      </div>
      <div>
        <h2 className="technologies">React</h2>
        <p>3 Years Experience</p>
      </div>
      <div>
        <h2 className="technologies">Sass</h2>
        <span className="pb-10">3 Years Experience</span>
      </div>
    </div>
  );
}

export default Main;
