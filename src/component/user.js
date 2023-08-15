import React from "react";

function User(props){
    return(
        <div className={'user'}>
            <form className={'addUserForm'}>
                <label>نام</label>
                <input type="text" placeholder={'نام'} value={props.firstName} onChange={props.firstNameChange}/>
                <label>نام خانوادگی</label>
                <input type="text" placeholder={'نام خانوادگی'} value={props.lastName} onChange={props.lastNameChange}/>
                <label>استان محل سکونت</label>
                <input type="text" placeholder={'استان محل سکونت'} value={props.state} onChange={props.state}/>
                <label>شماره موبایل</label>
                <input type="number" placeholder={'شماره موبایل'} value={props.phone} onChange={props.phoneChange}/>
                <label>جنسیت</label>
                <input type="text" placeholder={'جنسیت'} value={props.sex} onChange={props.sexChange}/>
                <label>کد ملی</label>
                <input type="number" placeholder={'کد ملی'} value={props.code} onChange={props.codeChange}/>
                <label>ایمیل</label>
                <input type="email" placeholder={'ایمیل'} value={props.email} onChange={props.emailChange}/>
            </form>
        </div>
    )
}

export default React.memo(User);