import React from "react";
import LiMenu from "./LiMenu/LiMenu";
function UlMenu(props){
    return(
        <ul className={'ulMenu d-flex justify-content-between align-items-center flex-row-reverse'}>
            <LiMenu link={'/'}>
                صفحه اصلی
            </LiMenu>
            <LiMenu link={'/all-user'}>
                لیست کامل یوزرها
            </LiMenu>
            <LiMenu link={'/add-user'}>
                اضافه کردن یوزر
            </LiMenu>
        </ul>
    )
}

export default React.memo(UlMenu);