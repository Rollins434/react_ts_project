import ReactDom from "react-dom";

import "../src/styles/global.css"


const App = () => {
  return (
    <div>
       hi
    </div>
  );
};
ReactDom.render(<App />, document.querySelector("#root"));
