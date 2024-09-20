/**
 * Create a structure like this in React
 * 
 * 
 *     <div id="parent">
 *         <div id="child">
 *           <h1>This  is a h1 tag</h1>
 *           <h2>This is a h2 tag</h2>
 *         </div>
 *     </div>
 * 
 * 
 * ReactElement(Object) ==> converts into HTML what Browser Understands
 *  
 */


const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" },
    [React.createElement("h1", {}, "This is a nested h1 tag"), React.createElement("h2", {}, "This is a nested h2 tag")]
  ))



console.log(parent)

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World!"
)

const heading2 = React.createElement(
  "h2",
  { id: "heading2", mysql: "dbms" },
  "This is my second heading"
)

console.log(heading) // It's an object

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading);
root.render(heading2);

root.render(parent);