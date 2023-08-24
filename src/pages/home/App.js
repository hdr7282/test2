import React from "react";
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import '../../assets/style.css';
import Header from "../../component/Header/Header";
import User from "../User";
import Page404 from "../Page404";
import UserList from "../UserList";
const LazyAddUser = React.lazy(()=> import('../AddUser'))

function App(){
    return(
        <div className={'w-100 vh-100'}>

            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={'/'} element={
                        <React.Suspense fallback={'loading...'}>
                            <LazyAddUser/>
                        </React.Suspense>
                    }/>
                    <Route path={'/UserList'} element={<UserList/>}/>
                    <Route path={'/AddUser'} element={
                        <React.Suspense fallback={'loading...'}>
                            <LazyAddUser/>
                        </React.Suspense>
                    }/>
                    <Route path={'/*'} element={<Page404/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default React.memo(App);