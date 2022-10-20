import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import Swal from "sweetalert2";
import "./account.css"

const Register: React.FC = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const handleSignUp = handleSubmit(async (data) => {
        Swal.fire({
            icon: "success",
            title: "Successfully Registerd.",
            timer: 1400,
            showConfirmButton: false
        })
        reset();
    })
    return (
        <div className='form_container'>
            <form onSubmit={handleSignUp} className="login_form">
                <h1 className='form_title'>Sign Up</h1>
                <div className="login_input_container">
                    <label>Username</label>
                    <div className='login_input'>
                        <input type="text"
                            {...register("userName", { required: true })}
                            placeholder="Type your username"
                        />
                        <FaRegUser className='input_icon' />
                    </div>
                    {errors.userName && <p className='error_message'>User name is Required</p>}
                </div>
                <div className="login_input_container">
                    <label>Email</label>
                    <div className='login_input'>
                        <input type="email"
                            {...register("email", { required: true })}
                            placeholder="Type your email"
                        />
                        <AiOutlineMail className='input_icon' />
                    </div>
                    {errors.email && <p className='error_message'>Email is Required</p>}
                </div>
                <div className="login_input_container">
                    <label>Password</label>
                    <div className="login_input">
                        <input
                            type="password"
                            {...register("password", { required: true, minLength: 6 })}
                            placeholder="Type your password"
                        />
                        <AiOutlineLock className="input_icon" />
                    </div>
                    {errors.password && <p className='error_message'>Password must be a minimum 6 digit</p>}
                </div>
                <div className="login_input_container">
                    <label>Confirm Password</label>
                    <div className="login_input">
                        <input
                            type="password"
                            {...register("cPassword", {
                                required: true,
                                validate: (val: string) => {
                                    if (watch('password') !== val) {
                                        return false
                                    }
                                },

                            })}
                            placeholder="Confirm your password"
                        />
                        <AiOutlineLock className="input_icon" />
                    </div>
                    {errors.cPassword && <p className='error_message'>Please confirm your password</p>}
                </div>
                <button type='submit' className='account_btn '>Register</button>
                <p className='signup_link'>Already have account? <Link to="/login">Sign in</Link></p>
            </form>
        </div>
    );
};

export default Register;