import React from "react";
import Navbar from "./Navbar/navbar";

function Header(){
    return(
        <div className={'header w-100 bg-info'}>
            <Navbar/>
        </div>
    )
}
export default React.memo(Header);