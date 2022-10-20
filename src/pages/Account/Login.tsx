import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from 'src/redux/store';
import { useForm } from "react-hook-form";
import { createUser } from 'src/redux/features/userSlice';
import { FaRegUser } from "react-icons/fa";
import { AiOutlineLock } from "react-icons/ai";
import Swal from "sweetalert2";
import "./account.css"

const Login: React.FC = () => {
    const navigate = useNavigate();
    const { userName } = useSelector((state: RootState) => state.users.value);
    const dispatch = useDispatch<AppDispatch>();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleLogin = handleSubmit(async (data) => {
        const userCheck = process.env.REACT_APP_USER_NAME !== data.userName;
        const passCheck = process.env.REACT_APP_USER_PASS !== data.password;
        if (userCheck || passCheck) {
            return Swal.fire({
                icon: "warning",
                title: "Username or password is not correct.",
            })
        }
        dispatch(createUser({ userName: data.userName }))
        Swal.fire({
            icon: "success",
            title: "Successfully login.",
            timer: 1500,
            showConfirmButton: false
        })
        navigate("/")
    });
    return (
        <>
            {userName && <Navigate to="/" />}
            <div className='form_container'>
                <form onSubmit={handleLogin} className="login_form">
                    <h1 className='form_title'>Login</h1>
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
                    <p className='forgot'>Forgot Password?</p>
                    <button type='submit' className='account_btn '>Login</button>
                    <p className='signup_link'>Don't have account? <Link to="/signup">Sign Up</Link></p>
                </form>
            </div>
        </>
    );
};

export default Login;