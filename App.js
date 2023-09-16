import React from "react";
import ReactDOM from "react-dom/client";

/*
     const heading = React.createElement('h1',{id:'parent', className:'hello'}, "Welcome to Reactjs");
     const root = ReactDOM.createRoot(document.getElementById('root'));
     root.render(heading);

*/

let heading = (
  <h1 id="heading" className="headingData">
    Hello this first JSX 🧑‍🚀
  </h1>
);

/*
     ^ the above written HTML - JSX
     & babel - transpiles React.createElement --> ReactElement --> HTMLElement(render)

     * () - if we want to write jsx in multiple lines, use dobule round bracket
     */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
