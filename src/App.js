import React, { Component } from "react";
import Counter from "./Components/Counter/Counter";
import Temperature from "./Components/Temperature/Temperature";

export default class App extends Component {
   render() {
      return (
         <div>
            <Counter></Counter>
            <Temperature />
         </div>
      );
   }
}
