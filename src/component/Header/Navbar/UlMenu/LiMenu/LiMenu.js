import React from "react";
import {Link} from "react-router-dom";

function LiMenu(props){
    return(
        <li className={'liMenu'}>
            <Link className={'linkMenu'} to={props.link}>
                {props.children}
            </Link>
        </li>


    )
}
export default React.memo(LiMenu);