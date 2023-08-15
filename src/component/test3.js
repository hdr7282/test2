import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {number, string} from "yup";

let schema = yup.object().shape({
    firstName: string().required('enter name'),
    lastName: string().required('enter last name'),
    email: string().email().required('enter email'),
    age: number().positive().integer().required('enter age'),
    password: string().min(4).max(12).required('enter password'),
    confirmPassword: string().oneOf([yup.ref('password'), null], 'password must be same').required()

});

function Test3(){
    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });
    const submitForm = (data)=>{
        console.log(data);
    }
    return(
        <div className={'addUser'}>
            <form className={'addUserForm'} onSubmit={handleSubmit(submitForm)}>
                <input type={"text"} placeholder={'first name'} {...register('firstName')}/>
                <p>{errors.firstName?.message}</p>

                <input type={"text"} placeholder={'last name'} {...register('lastName')}/>
                <p>{errors.lastName?.message}</p>

                <input type={"email"} placeholder={'email'} {...register('email')}/>
                <p>{errors.email?.message}</p>

                <input type={"number"} placeholder={'age'} {...register('age')}/>
                <p>{errors.age?.message}</p>

                <input type={"password"} name={'password'} placeholder={'password'} {...register('password')}/>
                <p>{errors.password?.message}</p>

                <input type={"password"} name={'confirmPassword'} placeholder={'password'} {...register('confirmPassword')}/>
                <p>{errors.confirmPassword?.message}</p>
                <input  className={'mt-5'} type={"submit"} id={'submit'}/>
            </form>
        </div>
    )
}
export default React.memo(Test3);