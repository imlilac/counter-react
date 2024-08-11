import React, { Component } from "react";
import "./Temperature.css";

export default class Temperature extends Component {
   constructor(props) {
      super(props);
      this.state = {
         temp: 10,
         tempClass: "cold",
      };

      this.addHandler = this.addHandler.bind(this);
      this.minHandler = this.minHandler.bind(this);
   }

   addHandler() {
      if (this.state.temp >= 30) {
         return false;
      }
      this.setState((prevState) => {
         return { temp: prevState.temp + 1 };
      });
      if (this.state.temp >= 15) {
         this.setState({ tempClass: "hot" });
      }
   }

   minHandler() {
      if (this.state.temp <= 0) {
         return false;
      }
      this.setState((prevState) => {
         return { temp: prevState.temp - 1 };
      });
      if (this.state.temp < 15) {
         this.setState({ tempClass: "cold" });
      }
   }

   render() {
      return (
         <div className="bg-cyan-900 flex text-3xl flex-col h-screen font-mono justify-center items-center ">
            <div className="text-center border-black shadow-2xl p-20 bg-cyan-700">
               <h1 className={`font-semibold text-[3rem] border-2 rounded-full py-24 px-5 text-white ${this.state.tempClass}`}>{this.state.temp}℃</h1>

               <div className="btn-container gap-20 flex justify-center items-center mt-14">
                  <button onClick={this.addHandler} className="cursor-pointer border-2 text-white py-5 rounded-full px-6 font-bold text-[3rem] bg-teal-500">
                     +
                  </button>
                  <button onClick={this.minHandler} className="cursor-pointer border-2 text-white py-5 rounded-full px-6 font-bold text-[3rem] bg-teal-700">
                     -
                  </button>
               </div>
            </div>
         </div>
      );
   }
}
