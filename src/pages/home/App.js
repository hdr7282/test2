import React from "react";
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import AddUser from "../../component/add user";
import '../../assets/style.css';
import Header from "../../component/Header/header";
import UserList from "../../component/userList";
import User from "../../component/user";
import Page404 from "../../component/page 404";
const LazyAddUser = React.lazy(()=> import('../../component/add user'))

function App(){
    return(
        <div className={'w-100 vh-100'}>

            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={'/'} element={
                        <React.Suspense>
                            <AddUser/>
                        </React.Suspense>
                    }/>
                    <Route path={'/all-user'} element={<UserList/>}/>
                    <Route path={'/add-user'} element={<AddUser/>}/>
                    <Route path={'/*'} element={<Page404/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default React.memo(App);