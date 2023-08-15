import React from "react";
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {number, string} from "yup";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let schema = yup.object().shape({
    firstName: string().max(40, 'نام نباید بیشتر از 40 حرف باشد').min(4, 'نام باید بیشتر از 3 حرف باشد').required('نام کاربری نمیتواند خالی باشد'),
    lastName: string().min(4,'نام باید بیشتر از 3 حرف باشد').max(40,'نام نباید بیشتر از 40 حرف باشد').required('نام خانوادگی نمیتواند خالی باشد'),
    state: string().required('نام خانوادگی نمیتواند خالی باشد'),
    phone: number().positive('عدد باید بیشتر از صفر باشد').integer().required('شماره موبایل نمیتواند خالی باشد'),
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
            <form className={'addUserForm'} onSubmit={handleSubmit(submitForm)}>
                <h1>یوزر جدید</h1>
                <p>{errors.firstName?.message}</p>
                <input type="text" placeholder={'نام'} {...register('firstName')}/>
                <p>{errors.lastName?.message}</p>
                <input type="text" placeholder={'نام خانوادگی'} {...register('lastName')}/>
                <p>{errors.state?.message}</p>
                <input type="text" placeholder={'استان محل سکونت'} {...register('state')}/>
                <p>{errors.phone?.message}</p>
                <input type="number" placeholder={'شماره موبایل'} {...register('phone')}/>
                <p>{errors.sex?.message}</p>
                <div className={'sex'} {...register('sex')}>
                    <label>جنسیت : </label>
                    <select name={'sexSelect'}>
                        <option value={'مرد'}>مرد</option>
                        <option value={'زن'}>زن</option>
                    </select>
                </div>
                <p>{errors.cod?.message}</p>
                <input type="number" placeholder={'کد ملی'} {...register('cod')}/>
                <p>{errors.email?.message}</p>
                <input type="email" placeholder={'ایمیل'} {...register('email')}/>

                <input className={'submit btn btn-primary'} type={"submit"}/>
            </form>
        </div>
    )
}
export default React.memo(AddUser);