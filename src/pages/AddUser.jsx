import React from "react";
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {string} from "yup";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';


let schema = yup.object().shape({
    firstName: string().max(40).min(4, 'نام باید بیشتر از 3 حرف باشد').required(),
    lastName: string().min(4, 'نام خانوادگی باید بیشتر از 3 حرف باشد').max(40).required(),
    state: string().required('استان نمیتواند خالی باشد'),
    phone: string().required('شماره تلفن نمیتواند خالی باشد'),
    code: string().min(10, 'کد ملی باید 10رقم باشد').max(10, 'کد ملی باید 10رقم باشد').required(),
    email: string().email().required('ایمیل نمیتواند خالی باشد')
})

function AddUser() {
    const notify = () => {
        toast.success('مشخصات شما به درستی ثبت شد', {position: "top-center"})

    }
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const submitForm = (data) => {
        console.log(data);
        notify();
    }
    return (
        <div className={'addUser'}>
            <ToastContainer></ToastContainer>

            <form className={'w-50 m-auto'} onSubmit={handleSubmit(submitForm)}>
                <div className="form-group">
                    <div className={'inputLabel'}><label dir={'rtl'} htmlFor="firstName">نام</label> <small
                        className="form-text text-muted me-5">{errors.firstName?.message}</small></div>
                    <input dir={'rtl'} type="text" className="form-control mt-1" id="firstName"
                           placeholder="نام" {...register('firstName')}/>
                </div>
                <div className="form-group mt-4">
                    <div className={'inputLabel'}><label dir={'rtl'} htmlFor="lastName">نام خانوادگی</label> <small
                        className="form-text text-muted me-5">{errors.lastName?.message}</small></div>
                    <input dir={'rtl'} type="text" className="form-control mt-1" id="lastName"
                           placeholder="نام خانوادگی" {...register('lastName')}/>

                </div>
                <div className="form-group mt-4">
                    <div className={'inputLabel'}><label dir={'rtl'} htmlFor="state">استان محل سکونت</label> <small
                        className="form-text text-muted me-5">{errors.state?.message}</small></div>
                    <input dir={'rtl'} type="text" className="form-control mt-1" id="state"
                           placeholder="استان محل سکونت" {...register('state')}/>

                </div>
                <div className="form-group mt-4">
                    <div className={'inputLabel'}><label dir={'rtl'} htmlFor="phone">شماره موبایل</label> <small
                        className="form-text text-muted me-5">{errors.phone?.message}</small></div>
                    <input dir={'rtl'} type="number" className="form-control mt-1" id="phone"
                           placeholder="شماره موبایل" {...register('phone')}/>

                </div>
                <div className="form-group mt-4">
                    <div className={'inputLabel'}><label dir={'rtl'} htmlFor="sex">جنسیت</label></div>
                    <select className="form-control" dir={'rtl'} id="sex">
                        <option value={'man'}>مرد</option>
                        <option value={'woman'}>زن</option>
                    </select>

                </div>
                <div className="form-group mt-4">
                    <div className={'inputLabel'}><label dir={'rtl'} htmlFor="code">کد ملی</label> <small
                        className="form-text text-muted me-5">{errors.code?.message}</small></div>
                    <input dir={'rtl'} type="number" className="form-control mt-1" id="code"
                           placeholder="کد ملی" {...register('code')}/>

                </div>
                <div className="form-group mt-4">
                    <div className={'inputLabel'}><label dir={'rtl'} htmlFor="ایمیل">ایمیل</label> <small
                        className="form-text text-muted me-5">{errors.email?.message}</small></div>
                    <input dir={'rtl'} type="email" className="form-control mt-1" id="ایمیل"
                           placeholder="ایمیل" {...register('email')}/>

                </div>

                <button className={'btn btn-primary d-block m-auto mt-3'} type={'submit'}>submit</button>
            </form>
        </div>
    )
}

export default React.memo(AddUser);

