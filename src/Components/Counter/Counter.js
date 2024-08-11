import React, { Component } from "react";

export default class Counter extends Component {
   constructor(props) {
      super(props);
      this.state = {
         count: 0,
      };

      this.addHandler = this.addHandler.bind(this);

      this.minHandler = this.minHandler.bind(this);
   }

   addHandler() {
      this.setState((prevState) => {
         return { count: prevState.count + 1 };
      });
   }

   minHandler() {
      this.setState((prevState) => {
         return { count: prevState.count - 1 };
      });
   }
   render() {
      return (
         <div className="bg-purple-300 flex text-3xl flex-col h-screen font-mono justify-center items-center ">
            <div className="text-center border-black shadow-2xl p-20">
               <h1 className="font-semibold text-[3rem] text-purple-900">Counter</h1>

               <p className="my-10 ">{this.state.count}</p>

               <div className="btn-container gap-10 flex justify-center items-center">
                  <button onClick={this.addHandler} className="cursor-pointer border py-2 px-8 bg-fuchsia-400">
                     add
                  </button>
                  <button onClick={this.minHandler} className="cursor-pointer border py-2 px-8 bg-violet-600">
                     Min
                  </button>
               </div>
            </div>
         </div>
      );
   }
}
