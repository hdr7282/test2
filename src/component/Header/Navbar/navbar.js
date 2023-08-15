import React from "react";
import UlMenu from "./UlMenu/UlMenu";

function Navbar(){
    return(
        <nav className={'navbar'}>
            <UlMenu/>
        </nav>
    )
}
export default React.memo(Navbar);