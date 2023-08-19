import React from "react";
import {Link} from "react-router-dom";

function Page404(){
    return(
        <div className={'page404 text-center'}>
            <h1>
                404
            </h1>
            <h3 className={'text-center'}>
                !صفحه مورد نظر پیدا نشد
            </h3>
            <Link to={'/'}>صفحه اصلی</Link>
        </div>
    )
}
export default React.memo(Page404);