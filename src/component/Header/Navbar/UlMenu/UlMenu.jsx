import React from "react";
import LiMenu from "./LiMenu/LiMenu";
function UlMenu(props){
    return(
        <ul className={'ulMenu d-flex justify-content-between align-items-center'}>
            <LiMenu link={'/'}>
                صفحه اصلی
            </LiMenu>
            <LiMenu link={'/UserList'}>
                لیست کامل یوزرها
            </LiMenu>
            <LiMenu link={'/AddUser'}>
                اضافه کردن یوزر
            </LiMenu>
        </ul>
    )
}

export default React.memo(UlMenu);