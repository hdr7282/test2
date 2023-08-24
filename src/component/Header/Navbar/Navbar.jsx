import React from "react";
import UlMenu from "./UlMenu/UlMenu";

function Navbar(){
    return(
        <nav className={'navbar navbar1 d-flex align-items-center justify-content-center'}>
            <UlMenu/>
        </nav>
    )
}
export default React.memo(Navbar);