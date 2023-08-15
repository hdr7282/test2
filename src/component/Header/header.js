import React from "react";
import Navbar from "./Navbar/navbar";

function Header(){
    return(
        <div className={'header'}>
            <Navbar/>
        </div>
    )
}
export default React.memo(Header);