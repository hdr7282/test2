import React, {useState} from "react";
import User from "./User";

function UserList() {

    const [userList, setUserList] = useState([
        {
            id: 1,
            firstName: 'علی',
            lastName: 'پرهیزکار',
            state: 'مازندران',
            phone: '09111111',
            sex: 'مرد',
            code: '11111111',
            email: 'ali@gmail.com'
        },
        {
            id: 2,
            firstName: 'بهنام',
            lastName: 'نیازمند',
            state: 'تهران',
            phone: '09222222',
            sex: 'مرد',
            code: '22222222',
            email: 'behnam@gmail.com'
        },
        {
            id: 3,
            firstName: 'سهراب',
            lastName: 'احمدی',
            state: 'اصفهان',
            phone: '09333333',
            sex: 'مرد',
            code: '33333333',
            email: 'sohrab@gmail.com'
        },
        {
            id: 4,
            firstName: 'مهتاب',
            lastName: 'کرامتی',
            state: 'خراسان',
            phone: '09444444',
            sex: 'زن',
            code: '444444',
            email: 'mahtab@gmail.com'
        },
        {
            id: 5,
            firstName: 'ساناز',
            lastName: 'حسینی',
            state: 'گیلان',
            phone: '09555555',
            sex: 'مرد',
            code: '55555555',
            email: 'sanaz@gmail.com'
        }
    ])

    const firstNameChange = (event, id) => {
        const userIndex = userList.findIndex((item) => {
            return item.id === id;
        })
        const user = {...userList[userIndex]};
        user.firstName = event.target.value;
        const allData = [...userList];
        allData[userIndex] = user;
        setUserList(allData);
    }

    const lastNameChange = (event, id) => {
        const userIndex = userList.findIndex((item) => {
            return item.id === id;
        })
        const user = {...userList[userIndex]};
        user.lastName = event.target.value;
        const allData = [...userList]
        allData[userIndex] = user;
        setUserList(allData);
    }
    const stateChange = (event, id) => {
        const userIndex = userList.findIndex((item) => {
            return item.id === id;
        })
        const user = {...userList[userIndex]};
        user.state = event.target.value;
        const allData = [...userList]
        allData[userIndex] = user;
        setUserList(allData);
    }
    const phoneChange = (event, id) => {
        const userIndex = userList.findIndex((item) => {
            return item.id === id;
        })
        const user = {...userList[userIndex]};
        user.phone = event.target.value;
        const allData = [...userList]
        allData[userIndex] = user;
        setUserList(allData);
    }
    const sexChange = (event, id) => {
        const userIndex = userList.findIndex((item) => {
            return item.id === id;
        })
        const user = {...userList[userIndex]};
        user.sex = event.target.value;
        const allData = [...userList]
        allData[userIndex] = user;
        setUserList(allData);
    }
    const codeChange = (event, id) => {
        const userIndex = userList.findIndex((item) => {
            return item.id === id;
        })
        const user = {...userList[userIndex]};
        user.code = event.target.value;
        const allData = [...userList]
        allData[userIndex] = user;
        setUserList(allData);
    }
    const emailChange = (event, id) => {
        const userIndex = userList.findIndex((item) => {
            return item.id === id;
        })
        const user = {...userList[userIndex]};
        user.email = event.target.value;
        const allData = [...userList]
        allData[userIndex] = user;
        setUserList(allData);
    }
    return (
        <div>
            <h1 className={'allUserLabel'}>لیست تمام یوزرها</h1>
            <User
                userList={userList}
                firstNameChange={firstNameChange}
                lastNameChange={lastNameChange}
                stateChange={stateChange}
                phoneChange={phoneChange}
                sexChange={sexChange}
                codeChange={codeChange}
                emailChange={emailChange}
            />
        </div>
    )
}

export default React.memo(UserList);