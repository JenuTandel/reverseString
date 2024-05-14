// const a = require("rs-string-123");
// const b = "Hello";
// console.log(a(b));

import {
  generateImageContainer,
  displayData,
} from "./node_modules/trial_product_preview/lib/index.js";
console.log("Hello");

const explanationsJS = [
  {
    label: "JavaScriptLogo",
    labelPosition: {
      bottom: "-70px",
      left: "25px",
    },
    arrowPosition: {
      height: "75px",
      left: "50px",
      bottom: "30px",
    },
  },
  {
    label: "JS Course Name",
    labelPosition: {
      bottom: "-60px",
      right: "0px",
    },
    arrowPosition: {
      height: "50px",
      left: "50px",
      bottom: "22px",
      transform: "rotate(-30deg)",
    },
  },
];

const imgPath = "assets/images/js.png";
debugger;
const imageContainerHTML1 = generateImageContainer(
  explanationsJS,
  imgPath,
  "js"
);
const imgcontainerElement = document.getElementById("container");
console.log(imgcontainerElement);

if (imgcontainerElement) {
  imgcontainerElement.innerHTML = imageContainerHTML1;
  const id1 = document.getElementById("js");
  if (id1) {
    displayData("click", "js");
  }
} else {
  console.error("Container element not found.");
}
