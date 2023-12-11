// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World From React"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading);
// root.render(heading);
// How to create this type of structure given below in react
{
  /* <div id="parent">
    <div id="child">
     <h1>i am h1 tag</h1>
    </div>
</div> */
}
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I  am h1 Tag")
  )
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
