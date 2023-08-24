import React from "react";

function User(props) {
    return (
        <div className={'text-center'}>

            <table className="tbl table table-striped w-75 text-center m-auto mt-3">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">نام</th>
                    <th scope="col">نام خانوادگی</th>
                    <th scope="col">استان محل سکونت</th>
                    <th scope="col">تلفن</th>
                    <th scope="col">جنسیت</th>
                    <th scope="col">کد ملی</th>
                    <th scope="col">ایمیل</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>
                        {props.userList[0].firstName}
                    </td>
                    <td>
                        {props.userList[0].lastName}
                    </td>
                    <td>
                        {props.userList[0].state}
                    </td>
                    <td>
                        {props.userList[0].phone}
                    </td>
                    <td>
                        {props.userList[0].sex}
                    </td>
                    <td>
                        {props.userList[0].code}
                    </td>
                    <td>
                        {props.userList[0].email}
                    </td>


                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>
                        {props.userList[1].firstName}
                    </td>
                    <td>
                        {props.userList[1].lastName}
                    </td>
                    <td>
                        {props.userList[1].state}
                    </td>
                    <td>
                        {props.userList[1].phone}
                    </td>
                    <td>
                        {props.userList[1].sex}
                    </td>
                    <td>
                        {props.userList[1].code}
                    </td>
                    <td>
                        {props.userList[1].email}
                    </td>


                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>
                        {props.userList[2].firstName}
                    </td>
                    <td>
                        {props.userList[2].lastName}
                    </td>
                    <td>
                        {props.userList[2].state}
                    </td>
                    <td>
                        {props.userList[2].phone}
                    </td>
                    <td>
                        {props.userList[2].sex}
                    </td>
                    <td>
                        {props.userList[2].code}
                    </td>
                    <td>
                        {props.userList[2].email}
                    </td>


                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>
                        {props.userList[3].firstName}
                    </td>
                    <td>
                        {props.userList[3].lastName}
                    </td>
                    <td>
                        {props.userList[3].state}
                    </td>
                    <td>
                        {props.userList[3].phone}
                    </td>
                    <td>
                        {props.userList[3].sex}
                    </td>
                    <td>
                        {props.userList[3].code}
                    </td>
                    <td>
                        {props.userList[3].email}
                    </td>


                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>
                        {props.userList[4].firstName}
                    </td>
                    <td>
                        {props.userList[4].lastName}
                    </td>
                    <td>
                        {props.userList[4].state}
                    </td>
                    <td>
                        {props.userList[4].phone}
                    </td>
                    <td>
                        {props.userList[4].sex}
                    </td>
                    <td>
                        {props.userList[4].code}
                    </td>
                    <td>
                        {props.userList[4].email}
                    </td>


                </tr>
                </tbody>
            </table>
            <br/>
        </div>
    )
}

export default React.memo(User);