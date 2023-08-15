import React from "react";
import User from "./user";

function AllUser(props){
    console.log(props.userList)
    return(
        <div className={'allUser'}>
            {
                props.userList.map((user, index)=>
                    <User
                        key={index}
                        id={user.id}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        state={user.state}
                        phone={user.phone}
                        sex={user.sex}
                        code={user.code}
                        email={user.email}
                        firstNameChange={(event)=>{props.firstNameChange(event, user.id)}}
                        lastNameChange={(event)=>{props.lastNameChange(event, user.id)}}
                        stateChange={(event)=>{props.stateChange(event, user.id)}}
                        phoneChange={(event)=>{props.phoneChange(event, user.id)}}
                        sexChange={(event)=>{props.sexChange(event, user.id)}}
                        codeChange={(event)=>{props.codeChange(event, user.id)}}
                        emailChange={(event)=>{props.emailChange(event, user.id)}}
                    />
                )
            }
        </div>
    )
}
export default React.memo(AllUser);