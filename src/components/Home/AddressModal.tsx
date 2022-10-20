import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from 'src/redux/features/userSlice';
import { AppDispatch, RootState } from 'src/redux/store';
import Swal from "sweetalert2";
import "./AddressModal.css"

const AddressModal: React.FC = () => {
    const [address, setAddress] = useState("");
    const user = useSelector((state: RootState) => state.users.value);
    const dispatch = useDispatch<AppDispatch>();
    const handleSaveAddress = () => {
        if (!address) {
            return Swal.fire({
                icon: "warning",
                title: "Please add your address"
            })
        }
        dispatch(createUser({
            ...user,
            address
        }))
        Swal.fire({
            icon: "success",
            title: "Successfully saved your address",
            timer: 1400,
            showConfirmButton: false
        })
    }
    return (
        <div className='modal_container'>
            <div className='addr_modal'>
                <h2>Few more steps!</h2>
                <div className='addr_input'>
                    <input
                        type="text"
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder='Your address'
                    />
                    <button onClick={handleSaveAddress} className='addr_btn'>Save</button>
                </div>
            </div>
        </div>
    );
};

export default AddressModal;