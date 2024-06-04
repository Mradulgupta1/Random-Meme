                                  // ॥ श्री गणेशाय नमः ॥ 

import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
    <div className="flex flex-col w-full h-screen gap-y-6 background relative overflow-x-hidden items-center">
		<h1 className="bg-white rounded-lg w-11/12 text-center mt-[40px] text-4xl px-10 py-2 font-bold">RANDOM GIFS</h1>
		<div className="flex flex-col gap-y-6 w-full items-center">
			<Random/>
			<Tag/>
		</div>
    </div>
  );
}

export default App;
