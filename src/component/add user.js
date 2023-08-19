import React from "react";
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {number, string} from "yup";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'

let schema = yup.object().shape({
    firstName: string().max(40).min(4, 'نام باید بیشتر از 3 حرف باشد').required(),
    lastName: string().min(4, 'نام خانوادگی باید بیشتر از 3 حرف باشد').max(40).required(),
    state: string().required('استان نمیتواند خالی باشد'),
    phone: number().positive().integer().required(),
    sex: string().required('جنسیت را انتخاب کنید'),
    cod: number().positive('کد ملی باید بیشتر از 0 باشد').integer().min(10, 'کد ملی باید 10رقم باشد').required('کد ملی نمیتواند خالی باشد'),
    email: string().email().required('ایمیل نمیتواند خالی باشد')
})

function AddUser(){
    const notify = ()=>{
        toast.success('مشخصات شما به درستی ثبت شد', {position: "top-center"});

    }
    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
        });

    const submitForm = (data)=>{
        console.log(data);
        notify();
    }
    return(
        <div className={'addUser'}>
            <ToastContainer></ToastContainer>
            <form className={'addUserForm w-50 m-auto text-center'} onSubmit={handleSubmit(submitForm)}>
                <h1 className={'text-center'}>یوزر جدید</h1>

                <input className={'w-75 p-3 bg-dark'} type="text" placeholder={'نام'} {...register('firstName')}/>
                <p className={'text-center'}>{errors.firstName?.message}</p>

                <input className={'w-75 p-3 bg-dark'} type="text" placeholder={'نام خانوادگی'} {...register('lastName')}/>
                <p className={'text-center'}>{errors.lastName?.message}</p>

                <input className={'w-75 p-3 bg-dark'} type="text" placeholder={'استان محل سکونت'} {...register('state')}/>
                <p className={'text-center'}>{errors.state?.message}</p>

                <input className={'w-75 p-3 bg-dark'} type="number" placeholder={'شماره موبایل'} {...register('phone')}/>
                <p className={'text-center'}>{errors.phone?.message}</p>

                <div className={'sex d-flex border w-75 align-items-center m-auto'} {...register('sex')}>
                    <label>جنسیت </label>
                    <select name={'sexSelect'}>
                        <option className={'p-2'} value={'مرد'}>مرد</option>
                        <option value={'زن'}>زن</option>
                    </select>
                </div>
                <p className={'text-center'}>{errors.sex?.message}</p>

                <input className={'w-75 p-3 bg-dark'} type="number" placeholder={'کد ملی'} {...register('cod')}/>
                <p className={'text-center'}>{errors.cod?.message}</p>

                <input className={'w-75 p-3 bg-dark'} type="email" placeholder={'ایمیل'} {...register('email')}/>
                <p className={'text-center'}>{errors.email?.message}</p>

                <input className={'submit btn btn-primary d-block w-75 mt-4 mb-5 m-auto'} type={"submit"}/>
            </form>
        </div>
    )
}
export default React.memo(AddUser);