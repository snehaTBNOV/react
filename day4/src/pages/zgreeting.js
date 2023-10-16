

//u can create greeting js inside src--pages--
import React from "react";

const Greet = () => {
    let items=['abc😁','def','ghi','jui','KI','k💕']//windows .
    return (
      <div>
        <h1>hi</h1>
        <h1>hello</h1>
        <ol>
        {
            items.map(val=> <li>{val}</li>)//it is wrking on online react compiler
        }
        </ol>

      </div>
    );
  };
  
  export default Greet;
//cd "C:\Users\Sneha\Documents\FE\5.react\day4\first_app"
//jsx must hv one parent elemnt so include all h or whtever inside a div 
//app linked to index.js but greeting is not linked.anyway we should connect this to index.js
//u need to call greet like html tag <Greet/> once called link is connected b/w index.js and greeting