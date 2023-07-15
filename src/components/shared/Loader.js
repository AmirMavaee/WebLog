import React from "react";
// loader
import { TailSpin } from "react-loader-spinner";

function Loader() {
  return (
    <div style={{width:"100%" , height:"1000px" , display:"flex" , justifyContent:"center" , paddingTop:"20px"}}>
      <TailSpin
        height="100px"
        width="100px"
        color="gray"
        radius="9"
      />
    </div>
  );
}

export default Loader;
