import React from "react";
import ReactDOM from "react-dom/client";

/*
  ^ Component is a javascript function which return's React Element
  & Component composition - component inside component
*/
let ele = "Hello";

let HeadingComponent = () => (
  <div id="container">
      <Title /> {2+2}
    <h1 id="heading" className="headingData">
    Hello this first JSX 🧑‍🚀 {ele}
    </h1>
  </div>
);

const Title = () => (
     <h1> This is title tag 👨</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
