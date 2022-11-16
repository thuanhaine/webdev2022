import * as React from "react";
import * as ReactDOM from "react-dom";
import {Button} from "antd";


const pickButton = () => {
   alert('Alter!!!');
}

const element = (
  <Button style={{margin: "10px 10px ", height: '100px'}} type="primary"  onClick={pickButton}>Button</Button>
);
// const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.render(element, document.getElementById('root'))