import React from "react";


import Greet from "./zgreeting"; // Adjust the import path if needed

const Home = () => {
  return (
    <div>
      <Greet />
      <h1>Hi my first app</h1>
      <h1>Helloooo</h1>
    </div>
  );
};

export default Home;
  //not exact html .it is jxs javascript stension.allows html in js 

//bable.js if u type <h1>Hi my first app</h1>  React.create element("h1",null,"my first app") so everytime u hv to create like this .with the help of bable all the html is converted to js by bable . 